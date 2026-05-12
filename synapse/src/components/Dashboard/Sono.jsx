import { useState, useEffect } from "react";

const SEMANA_PADRAO = [
    { dia: "Seg", horas: 0 },
    { dia: "Ter", horas: 0 },
    { dia: "Qua", horas: 0 },
    { dia: "Qui", horas: 0 },
    { dia: "Sex", horas: 0 },
    { dia: "Sab", horas: 0 },
    { dia: "Dom", horas: 0 },
];

function Sono({ dados = null, onChange }) {
    const [semana, setSemana] = useState(dados?.semana || SEMANA_PADRAO);

    useEffect(() => {
        if (dados?.semana) setSemana(dados.semana);
    }, [dados]);

    const totalHoras = semana.reduce((acc, d) => acc + d.horas, 0).toFixed(1);
    const diasPreenchidos = semana.filter(d => d.horas > 0).length;

    function atualizarHoras(index, valor) {
        const nova = [...semana];
        nova[index] = { ...nova[index], horas: Math.min(24, Math.max(0, Number(valor) || 0)) };
        setSemana(nova);
        if (onChange) onChange(nova);
    }

    return (
        <div className="border-slate-800 bg-slate-900 p-5 rounded-lg text-slate-50 min-w-[320px]">
            <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-100">Sono</h2>
                <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            <div className="mb-3">
                <div className="text-2xl font-bold text-slate-50 mb-1">{totalHoras} horas</div>
                <div className="flex justify-between text-xs text-slate-400">
                    <span>Dias preenchidos</span>
                    <span className="font-semibold text-slate-300">{diasPreenchidos}/7</span>
                </div>
            </div>

            <div className="space-y-1">
                {semana.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm py-0.5 border-b border-slate-700 last:border-b-0">
                        <span className="text-slate-300">{item.dia}</span>
                        <input
                            type="number"
                            min="0"
                            max="24"
                            value={item.horas}
                            onChange={e => atualizarHoras(i, e.target.value)}
                            className="w-16 bg-slate-800 text-slate-200 text-sm text-right rounded px-2 py-0.5 border border-slate-700 focus:outline-none focus:border-slate-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sono;
