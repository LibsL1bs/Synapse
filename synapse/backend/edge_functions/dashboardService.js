import { supabase } from "../lib/supabaseClient";
import axios from "axios";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const API_URL = process.env.API_URL || 'http://127.0.0.1';
const PORT = process.env.PORT || 3000;





//====== DASHBOARD - GET DATA ================================================================

async function getDashboardData(autenticatedUserId) {
    const hoje = new Date(Date.now()).toISOString().split("T")[0];
    try {
        const response = await axios.get(`${API_URL}:${PORT}/user?ID=${autenticatedUserId}`);
        console.log(response.data); // Dados da resposta
    } catch (error) {
        console.error('[DASHBOARD] falha ao obter dados:', error); // Tratamento de erro
    }
    let memoria_estado = memoriaRes.data;       
    // Se não encontrou memoria_estado, cria uma zerada e a usa como retorno

    if (!memoria_estado) {
        const estadoInicial = {
            bp: null, squat: null, dl: null,
            sono_seg: null, sono_ter: null, sono_qua: null, sono_qui: null,
            sono_sex: null, sono_sab: null, sono_dom: null,
            proteinas: null, carboidratos: null, calorias: null,
            disposicao_relativa: null,
        };
        await createDashboardState(autenticatedUserId);
        memoria_estado = estadoInicial;
    }

    return {
        ...memoria_estado,
        sono: {
        seg: memoria_estado?.sono_seg,
        ter: memoria_estado?.sono_ter,
        qua: memoria_estado?.sono_qua,
        qui: memoria_estado?.sono_qui,
        sex: memoria_estado?.sono_sex,
        sab: memoria_estado?.sono_sab,
        dom: memoria_estado?.sono_dom,
        },
    };
}


//====== DASHBOARD - CREATE STATE =============================================================

async function createDashboardState(autenticatedUserId, estadoContent) {
  try {
    const resp = await axios.post(`${API_URL}:${PORT}/memorias/estadou/user?ID=${autenticatedUserId}`, {
        user_id: autenticatedUserId,
        ...estadoContent,
    });
    console.log("[DASHBOARD] memoria de estado criada:", resp.data);
  } catch (error) {
    console.error('[DASHBOARD] falha ao criar estado:', error);
    throw new Error(`[DASHBOARD] Falha ao criar estado semanal: ${error.message}`);
  }
}


//====== DASHBOARD - UPDATE STATE =============================================================

async function updateDashboardState(memoriaId, updatedContent) {
    try {
        const resp = await axios.put(`${API_URL}:${PORT}/memorias/estadou/${memoriaId}`, updatedContent);
        console.log("[DASHBOARD] estado atualizado:", resp.data);
    } catch (error) {
        console.error('[DASHBOARD] falha ao atualizar estado:', error);
        throw new Error(`[DASHBOARD] Falha ao atualizar estado semanal: ${error.message}`);
    }
}


//=============================================================================================

export { getDashboardData, createDashboardState, updateDashboardState };