import { Link } from "react-router-dom"

function App() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-900 text-slate-100">
      <Link to="/">Home</Link>
      <h1 className="text-2xl font-bold">Synapse</h1>
      <h1>aaaaaaaaaaaa</h1>
      <Link to="/login">Login (pendente)</Link>
      <Link to="/cadastro">Cadastro (pendente)</Link>
    </nav>
  )
}

export default App