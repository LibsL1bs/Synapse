import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../backend/api/api-config";

function Sidebar() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const userId = sessionStorage.getItem("user_id");
        if (!userId) return;

        api.get(`/users/${userId}/role`)
            .then(({ data }) => {
                if (data.role_user === 1) setIsAdmin(true);
            })
            .catch(() => {});
    }, []);

    return (
        <aside className="w-48 min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 gap-2">
            <header className="text-2xl font-bold mb-4">Synapse</header>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/dados">Dados</NavLink>
            <NavLink to="/perfilconta">Perfil</NavLink>
            <NavLink to="/metricas">Métricas</NavLink>
            <NavLink to="/educacional">Educacional</NavLink>
            {isAdmin && <NavLink to="/adm">Administração</NavLink>}
        </aside>
    );
}

export default Sidebar;
