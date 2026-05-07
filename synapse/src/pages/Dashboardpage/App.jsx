import Readines from "../../components/Dashboard/Readines";
import Fadiga from "../../components/Dashboard/Fadiga";
import Tendencias from "../../components/Dashboard/Tendencias";
import Sono from "../../components/Dashboard/Sono";
import Alimentacao from "../../components/Dashboard/Alimentacao";

function Dashboard() {
    return (
        <div className="bg-slate-950 flex items-start justify-start gap-4 p-4 w-full h-full">
            <Readines />
            <Fadiga />
            <Tendencias />
            <Sono />
            <Alimentacao />
        </div>
    );
}

export default Dashboard;
