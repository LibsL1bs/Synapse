import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SETE_DIAS_MS = 7 * 24 * 60 * 60 * 1000;


//====== DASHBOARD - CHECK STATE ==============================================================

const memoriaEstaAtualizada = (created_at) => {
    if (!created_at) return false;
    return (Date.now() - new Date(created_at).getTime()) < SETE_DIAS_MS;
};


//====== DASHBOARD - GET DATA ================================================================

async function getDashboardData(userId) {
    const { data } = await axios.get(`${API_BASE_URL}/memorias/estado?user_id=${userId}`);

    if (!data.id_memoria || !memoriaEstaAtualizada(data.created_at)) {
        const nova = await createDashboardState(userId);
        return { id_memoria: nova.id_memoria };
    }

    return data;
}


//====== DASHBOARD - CREATE STATE =============================================================

async function createDashboardState(userId) {
    try {
        const resp = await axios.post(`${API_BASE_URL}/memorias/estado?user_id=${userId}`);
        console.log("[DASHBOARD] memoria de estado criada:", resp.data);
        return resp.data;
    } catch (error) {
        console.error('[DASHBOARD] falha ao criar estado:', error);
        throw new Error(`[DASHBOARD] Falha ao criar estado semanal: ${error.message}`);
    }
}


//====== DASHBOARD - UPDATE STATE =============================================================

async function updateDashboardState(memoriaId, updatedContent) {
    try {
        const resp = await axios.put(`${API_BASE_URL}/memorias/estado/${memoriaId}`, updatedContent);
        console.log("[DASHBOARD] estado atualizado:", resp.data);
    } catch (error) {
        console.error('[DASHBOARD] falha ao atualizar estado:', error);
        throw new Error(`[DASHBOARD] Falha ao atualizar estado semanal: ${error.message}`);
    }
}


//=============================================================================================

export { getDashboardData, createDashboardState, updateDashboardState };