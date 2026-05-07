function Alimentacao() {
    return (
        <div className="bg-slate-800 rounded-lg p-3 text-slate-50 min-w-[320px]">
            <div className="flex items-center gap-3 mb-3">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-100">ALIMENTAÇÃO</div>
                <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            <div className="text-center mb-4">
                <div className="text-3xl font-bold text-slate-50">0 kcal</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                    <div className="text-sm text-slate-400">Proteínas</div>
                    <div className="text-lg font-semibold text-slate-50">0 g</div>
                </div>
                <div className="text-center">
                    <div className="text-sm text-slate-400">Carboidratos</div>
                    <div className="text-lg font-semibold text-slate-50">0 g</div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-300">Proteínas (g)</span>
                    <span className="text-slate-50 font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-300">Carboidratos (g)</span>
                    <span className="text-slate-50 font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300">Calorias (kcal)</span>
                    <span className="text-slate-50 font-semibold">0</span>
                </div>
            </div>
        </div>
    );
}

export default Alimentacao;
