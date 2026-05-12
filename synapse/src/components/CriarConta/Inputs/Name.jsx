export default function Name({ value, onChange }) {
    return (
        <>

            <label className="text-slate-300 text-sm">Nome Completo</label>

            <input
                type="text"
                placeholder="Coloque seu nome"
                value={value}
                onChange={onChange}
                className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100
        outline-none placeholder:text-slate-500
        focus:ring-2 focus:ring-cyan-500 transition"
            />
        </>
    );
}
