function Fadiga({valor = 0}) {
    const valor_normalizado = Math.min(Math.max(valor, 0), 100);

    return (
        <div className="w-full max-w-3xl  border-slate-800 bg-slate-900 p-5 rounded-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-2">Fadiga</div>
            <div className="flex-1 h-px bg-slate-600"></div>
            <div className="mb-3 text-3xl font-bold text-slate-50 sm:text-4xl">{valor_normalizado}%</div>
            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden mb-3">
                <div
                    className="h-full bg-orange-500 rounded-full transition-all duration-300"
                    style={{width: `${valor_normalizado}%`}}
                />
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">Estimativa do estado semanal atual.</div>
        </div>
    );
}

export default Fadiga;
