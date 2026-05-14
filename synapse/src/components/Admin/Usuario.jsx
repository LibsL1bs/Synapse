import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modal from './Modal'

const USUARIO_PADRAO = {
  nome: 'Novo Usuário',
  role: 'USER',
  status: 'ativo'
}

const COLUNAS_TABELA = ['Nome', 'Role', 'Status', 'Ações']

function Usuario() {
  const [usuarios, setUsuarios] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [usuarioEditando, setUsuarioEditando] = useState(null)
  const [indexEditando, setIndexEditando] = useState(null)

  const handleCriarUsuario = () => {
    setUsuarios((usuariosAtuais) => [...usuariosAtuais, { ...USUARIO_PADRAO }])
  }

  const handleEditarUsuario = (index) => {
    setUsuarioEditando(usuarios[index])
    setIndexEditando(index)
    setModalAberto(true)
  }

  const handleSalvarEdicao = (dadosEditados) => {
    const novosUsuarios = [...usuarios]
    novosUsuarios[indexEditando] = dadosEditados
    setUsuarios(novosUsuarios)
  }

  const handleExcluirUsuario = (index) => {
    setUsuarios((usuariosAtuais) => usuariosAtuais.filter((_, i) => i !== index))
  }

  return (
    <section className="w-full min-h-screen bg-slate-950 p-3 text-slate-100 sm:p-4">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Administração</p>
            <h1 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">Usuários</h1>
            <p className="mt-2 text-sm text-slate-400">Perfis vinculados ao auth (nome, role e status)</p>
          </div>
          <button
            onClick={handleCriarUsuario}
            className="w-full rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 sm:w-auto"
          >
            Criar
          </button>
        </header>

        {usuarios.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 py-12 text-center">
            <p className="text-slate-400">Nenhum usuário cadastrado ainda.</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 md:hidden">
              {usuarios.map((usuario, index) => (
                <article key={index} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-white">{usuario.nome}</p>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-400">Role</span>
                      <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                        {usuario.role}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-400">Status</span>
                      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ${
                        usuario.status === 'ativo'
                          ? 'bg-emerald-500/10 text-emerald-200'
                          : 'bg-red-500/10 text-red-200'
                      }`}>
                        <span className={`h-2.5 w-2.5 rounded-full ${
                          usuario.status === 'ativo'
                            ? 'bg-emerald-400'
                            : 'bg-red-400'
                        }`} />
                        {usuario.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleEditarUsuario(index)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-300"
                      title="Editar"
                    >
                      <FaEdit size={14} />
                      Editar
                    </button>
                    <button
                      onClick={() => handleExcluirUsuario(index)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-500/30 px-3 py-2 text-red-300 transition hover:bg-red-600 hover:text-white"
                      title="Excluir"
                    >
                      <FaTrash size={14} />
                      Excluir
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 md:block">
              <table className="min-w-160 text-left text-sm text-slate-200">
              <thead className="border-b border-slate-800 bg-slate-800/60 text-slate-400">
                <tr>
                  {COLUNAS_TABELA.map((coluna) => (
                    <th
                      key={coluna}
                      className="px-4 py-4 text-xs font-medium uppercase tracking-widest lg:px-6"
                    >
                      {coluna}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {usuarios.map((usuario, index) => (
                  <tr key={index} className="transition hover:bg-slate-800/60">
                    <td className="px-4 py-5 text-white lg:px-6">{usuario.nome}</td>
                    <td className="px-4 py-5 lg:px-6">
                      <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                        {usuario.role}
                      </span>
                    </td>
                    <td className="px-4 py-5 lg:px-6">
                      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ${
                        usuario.status === 'ativo' 
                          ? 'bg-emerald-500/10 text-emerald-200' 
                          : 'bg-red-500/10 text-red-200'
                      }`}>
                        <span className={`h-2.5 w-2.5 rounded-full ${
                          usuario.status === 'ativo' 
                            ? 'bg-emerald-400' 
                            : 'bg-red-400'
                        }`} />
                        {usuario.status}
                      </span>
                    </td>
                    <td className="px-4 py-5 lg:px-6">
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
          </>
        )}
      </div>
      <Modal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        usuario={usuarioEditando}
        onSave={handleSalvarEdicao}
      />
    </section>
  )
}

export default Usuario;


