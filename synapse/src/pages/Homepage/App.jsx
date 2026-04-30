import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/cadastro" element={<h1>Cadastro</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App