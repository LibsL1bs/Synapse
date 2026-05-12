import { useState, useEffect } from 'react'

function Modal({ isOpen, onClose, usuario, onSave }) {
  const [formData, setFormData] = useState({
    nome: '',
    role: 'USER',
    status: 'ativo'
  })

  useEffect(() => {
    if (usuario) {
      setFormData({
        nome: usuario.nome,
        role: usuario.role,
        status: usuario.status
      })
    }
  }, [usuario])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1220] p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]">
        <h2 className="mb-4 text-xl font-semibold text-white">Editar Usuário</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-slate-400">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="mt-1 w-full rounded-2xl border border-white/10 bg-[#020617] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-slate-400">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 w-full rounded-2xl border border-white/10 bg-[#020617] px-4 py-3 text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-slate-400">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 w-full rounded-2xl border border-white/10 bg-[#020617] px-4 py-3 text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
            >
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl border border-white/10 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 rounded-2xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
