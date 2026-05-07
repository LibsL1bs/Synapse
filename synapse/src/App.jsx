function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-slate-950 flex items-start justify-center p-4">
        <div className="grid gap-6 w-full max-w-6xl">
          <Readines />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <Fadiga valor={72} />
            </div>
            <Tendencias dados={dadosTendencias} />
          </div>
        </div>
      </main>
      <SideChat />
    </div>
  )
}

export default App