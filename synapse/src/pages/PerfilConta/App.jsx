import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import SideChat from "../../components/Sideia"
import PerfilConta from "./Perfilconta"

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/dados" element={<h1>Dados</h1>} />
            <Route path="/perfilconta" element={<PerfilConta />} />
            <Route path="/metricas" element={<h1>Métricas</h1>} />
          </Routes>
        </main>
        <SideChat />
      </div>
    </BrowserRouter>
  )
}

export default App