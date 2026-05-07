import Sidebar from "./components/Sidebar"
import SideChat from "./components/Sideia"
import Readines from "./components/Dashboard/Readines"

function App() {
  return (

       <div className="flex min-h-screen">
        <Sidebar />
          <main className="flex-1 bg-slate-950 flex items-center justify-center p-4">
            <Readines />
          </main>
        <SideChat />
      </div>
  
  )
}

export default App

 