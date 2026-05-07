import Sidebar from "./components/Sidebar"
import SideChat from "./components/Sideia"
import Readines from "./components/Dashboard/Readines"
import Fadiga from "./components/Dashboard/Fadiga"

function App() {
  return (

       <div className="flex min-h-screen">
        <Sidebar />
          <main className="flex-1 bg-slate-950 flex items-center justify-center p-4">
            <div className="grid gap-6 w-full max-w-6xl">
              <Readines />
              <div className="flex justify-center">
                <Fadiga valor={72} />
              </div>
            </div>
          </main>
        <SideChat />
      </div>
  
  )
}

export default App

 