import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import SideChat from "./components/Sideia"
import Home from "./pages/Homepage/Home"
import PerfilConta from "./pages/PerfilConta/Perfilconta"
import Dashboard from "./pages/Dashboardpage/App"
import Login from "./pages/LoginConta/App"
import Usuario from "./components/Admin/Usuario"

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
        <Route path="/usuario" element={<DashboardLayout><Usuario /></DashboardLayout>} />
        <Route path="/perfilconta" element={<DashboardLayout><PerfilConta /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
