function Sono({dados = null}) {
    const dadosStd = dados || {
        totalHoras: 0,
        diasPreenchidos: 0,
        totalDias: 0,
        semana: [
            {dia: "Seg", horas: 0},
            {dia: "Ter", horas: 0},
            {dia: "Qua", horas: 0},
            {dia: "Qui", horas: 0},
            {dia: "Sex", horas: 0},
            {dia: "Sab", horas: 0},
            {dia: "Dom", horas: 0},
        ],
    };

    return (
        <div className="bg-slate-800 rounded-lg p-3 text-slate-50 min-w-[320px]">
            <div className="flex items-center gap-3 mb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-100">Sono</h2>
                <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            <div className="mb-3">
                <div className="text-2xl font-bold text-slate-50 mb-1">{dadosStd.totalHoras} horas</div>
                <div className="flex justify-between text-xs text-slate-400">
                    <span>Dias preenchidos</span>
                    <span className="font-semibold text-slate-300">
                        {dadosStd.diasPreenchidos}/{dadosStd.totalDias}
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                {dadosStd.semana.map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-between text-sm py-1 border-b border-slate-700 last:border-b-0"
                    >
                        <span className="text-slate-300">{item.dia}</span>
                        <span className="text-slate-400">{item.horas} h</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sono;
