import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function Usuario() {
  const [usuarios, setUsuarios] = useState([])

  const handleCriarUsuario = () => {
    const novoUsuario = {
      nome: 'Novo Usuário',
      role: 'USER',
      status: 'ativo'
    }
    setUsuarios([...usuarios, novoUsuario])
  }

  const handleEditarUsuario = (index) => {
    const novosUsuarios = [...usuarios]
    novosUsuarios[index].nome = 'Editado'
    setUsuarios(novosUsuarios)
  }

  const handleExcluirUsuario = (index) => {
    setUsuarios(usuarios.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-[#020617] px-4 py-6 text-white">
      <div className="mx-auto w-full max-w-4xl space-y-6 rounded-2xl border border-white/10 bg-[#0b1220] p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">USUÁRIOS</h1>
            <p className="text-sm text-slate-400">PERFIS VINCULADOS AO AUTH (NOME/ROLE/STATUS)</p>
          </div>
          <button
            onClick={handleCriarUsuario}
            className="rounded-2xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Criar
          </button>
        </div>

        <div className="w-full">
          <label htmlFor="search-user" className="sr-only">Buscar usuário</label>
          <input
            id="search-user"
            type="search"
            placeholder="Buscar..."
            className="w-full rounded-2xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
          />
        </div>

        {usuarios.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400">Nenhum usuário cadastrado ainda.</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="border-b border-white/10 bg-white/5 text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-medium uppercase tracking-[0.2em]">Nome</th>
                  <th className="px-6 py-4 font-medium uppercase tracking-[0.2em]">Role</th>
                  <th className="px-6 py-4 font-medium uppercase tracking-[0.2em]">Status</th>
                  <th className="px-6 py-4 font-medium uppercase tracking-[0.2em]">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {usuarios.map((usuario, index) => (
                  <tr key={index} className="transition hover:bg-white/5">
                    <td className="px-6 py-5 text-white">{usuario.nome}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex rounded-full bg-orange-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
                        {usuario.role}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-200">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        {usuario.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditarUsuario(index)}
                          className="rounded p-1 text-slate-400 transition hover:bg-slate-700 hover:text-white"
                          title="Editar"
                        >
                          <FaEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleExcluirUsuario(index)}
                          className="rounded p-1 text-slate-400 transition hover:bg-red-600 hover:text-white"
                          title="Excluir"
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default Usuario;

