// components/PowerliftingModal.jsx
function PowerliftingModal({ module, onClose }) {
    if (!module) return null;

    const getCategoryColor = (category) => {
        switch(category) {
            case "FUNDAMENTOS": return "emerald";
            case "TÉCNICA": return "blue";
            case "RECUPERAÇÃO": return "purple";
            default: return "gray";
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl relative w-full max-w-2xl mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className={`h-2 bg-gradient-to-r from-${getCategoryColor(module.category)}-500 to-${getCategoryColor(module.category)}-600`}></div>
                
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"
                >
                    ✕
                </button>
                
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 bg-${getCategoryColor(module.category)}-500/20 rounded-xl flex items-center justify-center`}>
                            <svg className={`w-6 h-6 text-${getCategoryColor(module.category)}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <span className={`text-xs font-semibold text-${getCategoryColor(module.category)}-400 uppercase tracking-wider`}>
                                {module.category}
                            </span>
                            <h2 className="text-2xl font-bold text-white">{module.title}</h2>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            {module.description}
                        </p>
                        
                        {module.content && (
                            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                <h4 className="font-semibold text-white mb-2">📚 Conteúdo Detalhado</h4>
                                <div className="text-gray-400 text-sm space-y-2">
                                    {module.content}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <button 
                        onClick={onClose}
                        className={`mt-8 w-full bg-${getCategoryColor(module.category)}-600 hover:bg-${getCategoryColor(module.category)}-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors`}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PowerliftingModal;