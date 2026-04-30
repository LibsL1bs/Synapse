import { Link } from "react-router-dom"

function App() {
  return (
    <div className="flex min-h-screen">
            <Sidebar />
              <main className="flex-1">
               <nav className="flex gap-4 p-4 bg-slate-900 text-slate-100">
                  <Link to="/dados">Dados</Link>
                  <Link to="/perfilconta">Perfil</Link>
                  <Link to="/metricas">Métricas</Link>
                  <Link to="/educacional">Educacional</Link>
                </nav>
              </main>
            <SideChat />
          </div>
  )
}

export default App