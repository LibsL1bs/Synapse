import { Link } from "react-router-dom"

function App() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-900 text-slate-100">
      <Link to="/">Home</Link>
      <Link to="/login">Login (pendente)</Link>
      <Link to="/cadastro">Cadastro (pendente)</Link>
    </nav>
  )
}

export default App