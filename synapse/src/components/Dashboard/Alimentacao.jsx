function Alimentacao() {
    return (
        <div className="bg-slate-800 rounded-lg p-4 text-slate-50">
            <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg font-semibold">Alimentação</h2>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div className="flex-1 h-px bg-slate-600"></div>
            </div>

            <div className="text-center mb-6">
                <div className="text-4xl font-bold text-slate-50">0 kcal</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
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
