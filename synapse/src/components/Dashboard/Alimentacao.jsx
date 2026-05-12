import { useState, useEffect } from "react";

function Alimentacao({ proteinas = 0, carboidratos = 0, calorias = 0, onChange }) {
    const [valores, setValores] = useState({ proteinas, carboidratos, calorias });

    useEffect(() => {
        setValores({ proteinas, carboidratos, calorias });
    }, [proteinas, carboidratos, calorias]);

    function atualizar(campo, valor) {
        const novos = { ...valores, [campo]: Math.max(0, Number(valor) || 0) };
        setValores(novos);
        if (onChange) onChange(novos);
    }

    return (
        <div className="border-slate-800 bg-slate-900 p-5 rounded-lg text-slate-50 min-w-[320px]">
            <div className="flex items-center gap-3 mb-2">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-100">ALIMENTAÇÃO</div>
                <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            <div className="space-y-1">
                <div className="flex justify-between items-center text-sm py-0.5 border-b border-slate-700">
                    <span className="text-slate-300">Proteínas (g)</span>
                    <input
                        type="number"
                        min="0"
                        value={valores.proteinas}
                        onChange={e => atualizar("proteinas", e.target.value)}
                        className="w-20 bg-slate-800 text-slate-200 text-sm text-right rounded px-2 py-0.5 border border-slate-700 focus:outline-none focus:border-slate-500"
                    />
                </div>
                <div className="flex justify-between items-center text-sm py-0.5 border-b border-slate-700">
                    <span className="text-slate-300">Carboidratos (g)</span>
                    <input
                        type="number"
                        min="0"
                        value={valores.carboidratos}
                        onChange={e => atualizar("carboidratos", e.target.value)}
                        className="w-20 bg-slate-800 text-slate-200 text-sm text-right rounded px-2 py-0.5 border border-slate-700 focus:outline-none focus:border-slate-500"
                    />
                </div>
                <div className="flex justify-between items-center text-sm py-0.5">
                    <span className="text-slate-300">Calorias (kcal)</span>
                    <input
                        type="number"
                        min="0"
                        value={valores.calorias}
                        onChange={e => atualizar("calorias", e.target.value)}
                        className="w-20 bg-slate-800 text-slate-200 text-sm text-right rounded px-2 py-0.5 border border-slate-700 focus:outline-none focus:border-slate-500"
                    />
                </div>
            </div>
        </div>
    );
}

export default Alimentacao;
