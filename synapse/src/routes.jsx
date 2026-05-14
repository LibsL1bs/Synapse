import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import SideChat from "./components/Sideia"
import Home from "./pages/Homepage/Home"
import PerfilConta from "./pages/PerfilConta/Perfilconta"
import Dashboard from "./pages/Dashboardpage/App"
import AdminPage from "./pages/Admpage/App"
import Login from "./pages/LoginConta/App"
import Cadastro from "../src/pages/CriarConta/Cadastro"
<<<<<<< HEAD
import Educacional_pg from "./pages/Educacional_Sidebar/Education"
=======
import Erro from "./components/Erro/Erro"
>>>>>>> e5bda178418e1d6922cfcff1d9669a635fc2203a

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
      <SideChat />
    </div>
  )
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/adm" element={<DashboardLayout><AdminPage /></DashboardLayout>} />
        <Route path="/perfilconta" element={<DashboardLayout><PerfilConta /></DashboardLayout>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
<<<<<<< HEAD
        <Route path="/educacional" element={<Educacional_pg/>}/>

=======
        <Route path="/erro" element={<Erro />} />
        <Route path="*" element={<Erro />} />
>>>>>>> e5bda178418e1d6922cfcff1d9669a635fc2203a

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
