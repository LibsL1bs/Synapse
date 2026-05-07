import Readines from "../../components/Dashboard/Readines"
import Fadiga from "../../components/Dashboard/Fadiga"

function Dashboard() {
  return (
    <div className="bg-slate-950 flex items-start justify-start gap-4 p-4">
      <Readines />
      <Fadiga />
    </div>
  )
}

export default Dashboard