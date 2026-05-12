import express from "express";
import bcrypt from "bcrypt";
import sql from "./database.js";


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
//------------------------------------ USUARIOS - PUBLIC -------------------------------------------
//===================================================================================================

routes.get("/users/:id/role", async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await sql`SELECT role_user FROM users WHERE id_user = ${id}`;
    if (rows.length === 0) return res.status(404).json({ error: "Usuário não encontrado" });
    return res.status(200).json({ role_user: Number(rows[0].role_user) });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

//===================================================================================================
//------------------------------------ USUARIOS - ADMIN ---------------------------------------------
//===================================================================================================

routes.get("/users", async (req, res) => {
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

routes.get("/users/:id", async (req, res) => {
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

routes.post("/users", async (req, res) => {
  try {
    const nome = String(req.body?.nome ?? "").trim();
    const email = String(req.body?.email ?? "").trim().toLowerCase();
    const senha = String(req.body?.senha ?? "").trim();
    const roleUser = Number(req.body?.role_user) === 1 ? 1 : 0;
    const ativo = req.body?.ativo !== undefined ? Boolean(req.body.ativo) : true;

    if (!nome || !email || !senha) return res.status(400).json({ error: "Nome, email e senha são obrigatórios." });

    const senhaHash = await hashPassword(senha);

    const res = await sql`
      INSERT INTO users (id_user, nome, senha, email, role_user, ativo)
      VALUES (gen_random_uuid(),${nome}, ${senhaHash}, ${email}, ${roleUser}, ${ativo})
      RETURNING id_user, nome, email, role_user, ativo
    `;
    return res.status(201).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}); 


//---------------------------------------------------------------------------------------------------

routes.put("/users/:id", async (req, res) => {
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

routes.delete("/users/:id", async (req, res) => {
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
      SELECT id_user, senha
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
    return res.status(200).json({ message: "Login bem-sucedido!", id_user: user.id_user });

  } catch (error) {
    console.error("[AUTH][LOGIN][500] erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

    
//---------------------------------------------------------------------------------------------------

routes.post("/auth/register", async (req, res) => {
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
      VALUES (${nome}, ${email}, ${senha}, '0', true)
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
      SELECT m.id_memoria, m.nome, m.created_at,
             e.bp, e.squat, e.dl,
             e.sono_seg, e.sono_ter, e.sono_qua, e.sono_qui,
             e.sono_sex, e.sono_sab, e.sono_dom,
             e.proteinas, e.carboidratos, e.calorias
      FROM memorias m
      LEFT JOIN memorias_estado e ON e.id_memoria = m.id_memoria
      WHERE m.usuario_id = ${user_id}
      ORDER BY m.created_at DESC
      LIMIT 1
    `;
    const memoria = rows[0];
    if (!memoria) return res.status(200).json({
      id_memoria: null,
      nome: null,
      created_at: null,
      sono_seg: null, sono_ter: null, sono_qua: null, sono_qui: null,
      sono_sex: null, sono_sab: null, sono_dom: null,
      bp: null, squat: null, dl: null,
      proteinas: null, carboidratos: null, calorias: null,
      disposicao_relativa: null,
    });

    return res.status(200).json(memoria);
  } catch (error) {
    console.error("[MEMORIAS][ESTADO][500] erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

//---------------------------------------------------------------------------------------------------

routes.post("/memorias/estado", async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: "Parâmetro user_id é obrigatório." });

    const data = Date.now();
    const nome = `estado_${data}`;

    const rows = await sql`
      INSERT INTO memorias (id_memoria, usuario_id, nome, tipo, subtipo, created_at)
      VALUES (gen_random_uuid(), ${user_id}, ${nome}, 'estado', 'estado', NOW())
      RETURNING id_memoria
    `;
    const id_memoria = rows[0].id_memoria;

    await sql`
      INSERT INTO memorias_estado (id_memoria)
      VALUES (${id_memoria})
    `;

    return res.status(201).json({ id_memoria });
  } catch (error) {
    console.error("[MEMORIAS][POST][500] erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

//---------------------------------------------------------------------------------------------------

routes.put("/memorias/estado/:id_memoria", async (req, res) => {
  try {
    const { id_memoria } = req.params;
    const content = req.body?.content;

    if (!content) return res.status(400).json({ error: "Campo content é obrigatório." });

    const rows = await sql`
      UPDATE memorias_estado
      SET bp = ${content.bp},
          squat = ${content.squat},
          dl = ${content.dl},
          sono_seg = ${content.sono_seg},
          sono_ter = ${content.sono_ter},
          sono_qua = ${content.sono_qua},
          sono_qui = ${content.sono_qui},
          sono_sex = ${content.sono_sex},
          sono_sab = ${content.sono_sab},
          sono_dom = ${content.sono_dom},
          proteinas = ${content.proteinas},
          carboidratos = ${content.carboidratos},
          calorias = ${content.calorias}
      WHERE id_memoria = ${id_memoria}
      RETURNING id_memoria
    `;
    if (rows.length === 0) return res.status(404).json({ error: "Memória não encontrada." });

    return res.status(200).json({ id_memoria: Number(rows[0].id_memoria) });
  } catch (error) {
    console.error("[MEMORIAS][PUT][500] erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  } 
});



export default routes;
