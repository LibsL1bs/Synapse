function SideChat() {
  return (
    <aside className="w-80 min-h-screen bg-slate-900 text-slate-100 flex flex-col border-l border-slate-700">
      <div className="px-4 py-4 border-b border-slate-700 font-semibold">
        Chat IA
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col gap-3 p-4">
       
      </div>

      <div className="flex gap-2 p-3 border-t border-slate-700">
        <input type="text" placeholder="Digite uma mensagem..." className="flex-1 bg-slate-800 text-slate-100 rounded-lg px-3 py-2 text-sm outline-none placeholder:text-slate-500"/>
        
        <button className="bg-cyan-500 text-slate-950 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition-colors">
          Enviar
        </button>
      </div>
    </aside>
  )
}

export default SideChat