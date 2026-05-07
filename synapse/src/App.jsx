import Sidebar from "./components/Sidebar"
import SideChat from "./components/Sideia"
import Readines from "./components/Dashboard/Readines"
import Fadiga from "./components/Dashboard/Fadiga"

function App() {
  return (

       <div className="flex min-h-screen">
        <Sidebar />
          <main className="flex-1 bg-slate-950 flex items-start justify-start gap-4 p-4">
            <Readines />
            <Fadiga />
          </main>
        <SideChat />
      </div>
  
  )
}

export default App