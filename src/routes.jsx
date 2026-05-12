import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import SideChat from "./components/Sideia"
import Home from "./pages/Homepage/Home"
import PerfilConta from "./pages/PerfilConta/Perfilconta"
import App from "./App"
import Login from "./pages/LoginConta/App"
import Cadastro from "./pages/CriarConta/Cadastro"

function DashboardLayout({ children }) { // isso é um layout que vai ser usado nas páginas do dashboard, pra ter a sidebar e o chat sempre presentes
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
      <SideChat />
    </div>
  )
}

function AppRoutes() { // isso daqui serve paradefinir as rotas da aplicação, as rotas que vão aparecer são as paginas home, dashboard e perfilconta, a home é a página de login, o dashboard é a página principal do usuário logado e o perfilconta é a página de configuração da conta do usuário, todas as páginas do dashboard vão usar o layout do dashboard, que tem a sidebar e o chat sempre presentes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/perfilconta" element={<DashboardLayout><PerfilConta /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
