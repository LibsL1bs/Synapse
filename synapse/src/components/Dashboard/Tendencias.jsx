function Tendencias({squat = 0, bp = 0, dl = 0}) {
    return (
        <div className="w-full max-w-3xl  border-slate-800 bg-slate-900 p-5 rounded-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">TENDÊNCIA</div>
            <div className="flex-1 h-px bg-slate-600"></div>

            <div className="flex flex-col gap-1 text-xs text-slate-400 mb-4">
                <div className="flex justify-between">
                    <span>Squat</span>
                    <span>{squat} kg</span>
                </div>
                <div className="flex justify-between">
                    <span>Bench</span>
                    <span>{bp} kg</span>
                </div>
                <div className="flex justify-between">
                    <span>Deadlift</span>
                    <span>{dl} kg</span>
                </div>
            </div>
        </div>
    );
}

export default Tendencias;
