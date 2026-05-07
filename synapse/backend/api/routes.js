import express from "express";
import bcrypt from "bcrypt";
import sql from "./database.js";
import requireAdminAuth from "./middlewares/requireAdminAuth.js";


const routes = express.Router();
const BCRYPT_ROUNDS = 10;

const isPasswordHash = (value) => typeof value === "string" && /^\$2[aby]\$\d{2}\$/.test(value);

const hashPassword = async (password) => bcrypt.hash(password, BCRYPT_ROUNDS);

const comparePassword = async (password, storedPassword) => {
  if (typeof storedPassword !== "string" || !storedPassword) return false;

  if (isPasswordHash(storedPassword)) {
    return bcrypt.compare(password, storedPassword);
  }

  return password === storedPassword;
};

//===================================================================================================
//------------------------------------ USUARIOS - ADMIN ---------------------------------------------
//===================================================================================================

routes.get("/users", requireAdminAuth, async (req, res) => {
  try {
    const rows = await sql`SELECT id_user, nome, email, role_user, ativo FROM users ORDER BY id_user ASC`;
    const users = rows.map((row) => {
      return res.status(200).json()({
        id_user: Number(row.id_user),
        nome: row.nome,
        email: row.email,
        role_user: row.role_user,
        role_id: row.role_user,
        ativo: Boolean(row.ativo),
      });
    }
    );
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});


//---------------------------------------------------------------------------------------------------

routes.get("/users/:id", requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await sql`SELECT id_user, nome, email, role_user, ativo FROM users WHERE id_user = ${id}`;
    if (rows.length === 0) return res.status(404).json({ error: "Usuário não encontrado" });
    const user = rows[0];
    return res.status(200).json()
  }
  catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});


//---------------------------------------------------------------------------------------------------

routes.post("/users", requireAdminAuth, async (req, res) => {
  try {
    const nome = String(req.body?.nome ?? "").trim();
    const email = String(req.body?.email ?? "").trim().toLowerCase();
    const senha = String(req.body?.senha ?? "").trim();
    const roleUser = Number(req.body?.role_user) === 1 ? 1 : 0;
    const ativo = req.body?.ativo !== undefined ? Boolean(req.body.ativo) : true;

    if (!nome || !email || !senha) return res.status(400).json({ error: "Nome, email e senha são obrigatórios." });

    const senhaHash = await hashPassword(senha);

    const res = await sql`
      INSERT INTO users (nome, senha, email, role_user, ativo)
      VALUES (${nome}, ${senhaHash}, ${email}, ${roleUser}, ${ativo})
      RETURNING id_user, nome, email, role_user, ativo
    `;
    return res.status(201).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}); 


//---------------------------------------------------------------------------------------------------

routes.put("/users/:id", requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const nome = String(req.body?.nome ?? "").trim();
    const email = String(req.body?.email ?? "").trim().toLowerCase();
    const senha = String(req.body?.senha ?? "").trim();
    const roleUser = Number(req.body?.role_user) === 1 ? 1 : 0;
    const ativo = req.body?.ativo !== undefined ? Boolean(req.body.ativo) : true;

    let rows;
    if (senha) {
      const senhaHash = await hashPassword(senha);

      rows = await sql`
        UPDATE users SET nome = ${nome}, senha = ${senhaHash}, email = ${email}, role_user = ${roleUser}, ativo = ${ativo}
        WHERE id_user = ${id}
        RETURNING id_user, nome, email, role_user, ativo
      `;
    } else {
      rows = await sql`
        UPDATE users SET nome = ${nome}, email = ${email}, role_user = ${roleUser}, ativo = ${ativo}
        WHERE id_user = ${id}
        RETURNING id_user, nome, email, role_user, ativo
      `;
    }
    if (!rows[0]) return res.status(404).json({ error: "Usuário não encontrado" });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});


//---------------------------------------------------------------------------------------------------

routes.delete("/users/:id", requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await sql`DELETE FROM users WHERE id_user = ${id} RETURNING id_user`;

    if (rows.length === 0) return res.status(404).json({ error: "Usuário não encontrado" });
    return res.status(200).json({ deleted: true, id_user: Number(rows[0].id_user) });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});



//===================================================================================================
//------------------------------------ USUARIOS - PUBLIC -------------------------------------------
//===================================================================================================

routes.post("/auth/login", async (req, res) => {
  try {
    const email = String(req.body?.email ?? "").trim().toLowerCase();
    const password = String(req.body?.password ?? "").trim();

    if (!email || !password) {
      console.warn(`campos obrigatórios ausentes`);
      return res.status(400).json({ error: "Email e senha são obrigatórios." });
    }

    const rows = await sql`
      SELECT senha
      FROM users
      WHERE LOWER(TRIM(email)) = ${email}
      ORDER BY id_user DESC
      LIMIT 1
    `;

    const user = rows[0];
    const passwordMatches = user ? await comparePassword(password, user.senha) : false;

    if (!user || !passwordMatches) {
      console.warn(`[AUTH][LOGIN][401] credenciais inválidas found=${rows.length}`);
      return res.status(401).json({ error: "Credenciais inválidas." });
    }

    console.log(`[AUTH][LOGIN][200] login bem-sucedido for email=${email}`);
    return res.status(200).json({ message: "Login bem-sucedido!" });

  } catch (error) {
    console.error("[AUTH][LOGIN][500] erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

    
//---------------------------------------------------------------------------------------------------

routes.post("/auth/register", requireAdminAuth, async (req, res) => {
  try {
    const nome = String(req.body?.nome ?? "").trim();
    const email = String(req.body?.email ?? "").trim().toLowerCase();
    const senha = String(req.body?.senha ?? "").trim();

    if (!nome || !email || !senha) {
      console.warn("[AUTH][REGISTER][400] campos obrigatórios ausentes");
      return res.status(400).json({ error: "Nome, email e senha são obrigatórios." });
    }

    const res = await sql`
      INSERT INTO users (nome, email, senha, role_user, ativo)
      VALUES (${nome}, ${email}, ${senha})
      RETURNING id_user
    `;
  } catch (error) {
    console.error("[AUTH][REGISTER][500] erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});



//===================================================================================================
//------------------------------------ MEMORIAS - PUBLIC -------------------------------------------
//===================================================================================================

routes.get("/memorias/estado", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: "Parâmetro user_id é obrigatório." });

    const rows = await sql`
      SELECT id_memoria, nome
      FROM memorias
      WHERE usuario_id = ${user_id}
      ORDER BY created_at DESC
      LIMIT 1
    `;
    const memoria = rows[0];
    if (!memoria) return res.status(404).json({ error: "Memória não encontrada para o usuário." });

    return res.status(200).json({ id_memoria: Number(memoria.id_memoria), nome: memoria.nome });
  } catch (error) {
    console.error("[MEMORIAS][ESTADO][500] erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});



export default routes;
