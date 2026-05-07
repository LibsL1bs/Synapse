function Tendencias({dados = []}) {
    const hasDados = Array.isArray(dados) && dados.length > 0; //coloquei as coisas em span para ser preenchidos com os dados reais dps

    return (
        <div className="w-full max-w-3xl p-4 bg-slate-800 rounded-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">TENDÊNCIA</div>
            <div className="flex-1 h-px bg-slate-600"></div>

            <div className="flex flex-col gap-1 text-xs text-slate-400 mb-4">
                <div className="flex justify-between">
                    <span>Squat</span>
                    <span>0 kg</span>
                </div>
                <div className="flex justify-between">
                    <span>Bench</span>
                    <span>0 kg</span>
                </div>
                <div className="flex justify-between">
                    <span>Deadlift</span>
                    <span>0 kg</span>
                </div>
            </div>

            {hasDados ? (
                <div className="space-y-3">
                    {dados.map((item, index) => (
                        <div key={index} className="flex justify-between gap-4 text-sm">
                            <span className="text-slate-100">{item.nome}</span>
                            <span className="text-slate-400">{item.valor} kg</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-slate-400 text-sm">-</div>
            )}
        </div>
    );
}

export default Tendencias;
