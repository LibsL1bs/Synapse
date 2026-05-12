import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-48 min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 gap-2">
        <header className="text-2xl font-bold mb-4">Synapse</header>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/dados">Dados</NavLink>
      <NavLink to="/perfilconta">Perfil</NavLink>
      <NavLink to="/metricas">Métricas</NavLink>
      <NavLink to="/educacional">Educacional</NavLink>
    </aside>
  )
}



export default Sidebar
