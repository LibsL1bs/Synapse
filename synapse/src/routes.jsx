import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import SideChat from "./components/Sideia"
import Home from "./pages/Homepage/Home"
import PerfilConta from "./pages/PerfilConta/Perfilconta"
import App from "./App"

function DashboardLayout({ children }) { // isso é um layout que vai ser usado nas páginas do dashboard, pra ter a sidebar e o chat sempre presentes
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
        <Route path="/dashboard" element={<App />} />
        <Route path="/perfilconta" element={<DashboardLayout><PerfilConta /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
