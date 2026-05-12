import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const USUARIO_PADRAO = {
  nome: 'Novo Usuário',
  role: 'USER',
  status: 'ativo'
}

const COLUNAS_TABELA = ['Nome', 'Role', 'Status', 'Ações']

function Usuario() {
  const [usuarios, setUsuarios] = useState([])

  const handleCriarUsuario = () => {
    setUsuarios((usuariosAtuais) => [...usuariosAtuais, { ...USUARIO_PADRAO }])
  }

  const handleEditarUsuario = (index) => {
    setUsuarios((usuariosAtuais) =>
      usuariosAtuais.map((usuario, i) =>
        i === index ? { ...usuario, nome: 'Editado' } : usuario
      )
    )
  }

  const handleExcluirUsuario = (index) => {
    setUsuarios((usuariosAtuais) => usuariosAtuais.filter((_, i) => i !== index))
  }

  return (
    <section className="w-full h-full bg-slate-950 p-4 text-slate-100">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Administração</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-50">Usuários</h1>
            <p className="mt-2 text-sm text-slate-400">Perfis vinculados ao auth (nome, role e status)</p>
          </div>
          <button
            onClick={handleCriarUsuario}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Criar
          </button>
        </header>

        {usuarios.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 py-12 text-center">
            <p className="text-slate-400">Nenhum usuário cadastrado ainda.</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="border-b border-slate-800 bg-slate-800/60 text-slate-400">
                <tr>
                  {COLUNAS_TABELA.map((coluna) => (
                    <th
                      key={coluna}
                      className="px-6 py-4 text-xs font-medium uppercase tracking-widest"
                    >
                      {coluna}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {usuarios.map((usuario, index) => (
                  <tr key={index} className="transition hover:bg-slate-800/60">
                    <td className="px-6 py-5 text-white">{usuario.nome}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                        {usuario.role}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        {usuario.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <button
                        onClick={() => handleEditarUsuario(index)}
                        className="rounded p-1 text-slate-400 transition hover:bg-slate-700 hover:text-cyan-300"
                        title="Editar"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleExcluirUsuario(index)}
                        className="ml-2 rounded p-1 text-slate-400 transition hover:bg-red-600 hover:text-white"
                        title="Excluir"
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default Usuario;

