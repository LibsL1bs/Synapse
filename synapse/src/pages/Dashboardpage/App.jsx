import Readines from "../../components/Dashboard/Readines";
import Fadiga from "../../components/Dashboard/Fadiga";
import Tendencias from "../../components/Dashboard/Tendencias";
import Sono from "../../components/Dashboard/Sono";
import Alimentacao from "../../components/Dashboard/Alimentacao";

function Dashboard() {
    return (
        <div className="w-full h-full bg-slate-950 p-4">
            <header className="mb-6 flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 shadow-sm shadow-slate-950/20">
                <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">Painel</p>
                    <h1 className="text-2xl font-semibold text-slate-50">Estado Atual</h1>
                </div>
            </header>

            <div className="grid grid-cols-[1.6fr_1fr] gap-4">
                <div className="flex flex-col gap-4">
                    <Tendencias />
                    <Fadiga />
                    <Readines />
                </div>
                <div className="flex flex-col gap-4">
                    <Sono />
                    <Alimentacao />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
