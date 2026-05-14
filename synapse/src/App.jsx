import Sidebar from "./components/Sidebar";
import SideChat from "./components/Sideia";
import Readines from "./components/Dashboard/Readines";
import Tendencias from "./components/Dashboard/Tendencias";
import Fadiga from "./components/Dashboard/Fadiga";

function App() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 bg-slate-950 flex items-start justify-center p-4">
                <div className="grid gap-6 w-full max-w-6xl">
                    <Readines />
                    <div className="grid gap-6 md:grid-cols-2"> {/* essa estilização é responsiva pois em telas menores que md (768px) ela se torna uma coluna única, e em telas maiores ela se divide em duas colunas */}
                        <div className="flex justify-center">
                            <Fadiga valor={72} />
                        </div>
                        <Tendencias dados={dadosTendencias} />
                    </div>
                </div>
            </main>
            <SideChat />
        </div>
    );
}

export default App;
