import { useNavigate } from "react-router-dom"

//! qualquer navigate que não seja de perfilconta, não existe realmente.

function Home() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

            <section className="flex flex-col items-center justify-center flex-1 gap-6 py-32 px-6 text-center">
                <h1 className="text-6xl font-bold tracking-tight">Synapse</h1>
                <p className="text-slate-400 text-xl max-w-xl">
                    Sua plataforma de powerlifting inteligente. Acompanhe sua evolução, analise seus dados e quebre recordes.
                </p>
                //! navigate de login e cadastro que fica no meio da tela (nn funciona pq ainda nn existe)
                <div className="flex gap-4 mt-4">
                    <button onClick={() => navigate("/login")} className="px-6 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors">
                        Entrar
                    </button>
                    <button onClick={() => navigate("/cadastro")} className="px-6 py-2 rounded-lg border border-slate-600 text-slate-100 font-semibold hover:bg-slate-800 transition-colors">
                        Cadastrar
                    </button>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12 pb-24">
                <div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-3">
                    <h2 className="text-lg font-semibold text-cyan-400">Métricas detalhadas</h2>
                    <p className="text-slate-400 text-sm">Visualize seu desempenho em agachamento, supino e levantamento terra com gráficos claros e objetivos.</p>
                </div>
                <div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-3">
                    <h2 className="text-lg font-semibold text-cyan-400">IA integrada</h2>
                    <p className="text-slate-400 text-sm">Converse com a IA para receber sugestões de treino, análise de carga e dicas de recuperação personalizadas.</p>
                </div>
                <div className="bg-slate-900 rounded-2xl p-6 flex flex-col gap-3">
                    <h2 className="text-lg font-semibold text-cyan-400">Acompanhamento contínuo</h2>
                    <p className="text-slate-400 text-sm">Registre cada treino e veja sua progressão ao longo do tempo de forma simples e visual.</p>
                </div>
            </section>

            <section className="flex justify-center gap-16 py-16 border-t border-slate-800 px-6">
                <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-400">+500</p>
                    <p className="text-slate-400 text-sm mt-1">Atletas ativos</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-400">+12k</p>
                    <p className="text-slate-400 text-sm mt-1">Treinos registrados</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-400">98%</p>
                    <p className="text-slate-400 text-sm mt-1">Satisfação dos usuários</p>
                </div>
            </section>

            <section className="px-12 pb-24 flex flex-col items-center gap-8">
                <h2 className="text-2xl font-bold">O que dizem nossos atletas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <div className="bg-slate-900 rounded-2xl p-6">
                        <p className="text-slate-300 text-sm">"O Synapse mudou completamente minha forma de treinar. Consigo ver exatamente onde estou evoluindo."</p>
                        <p className="text-cyan-400 text-sm font-semibold mt-4">— Carlos M., competidor regional</p>
                    </div>
                    <div className="bg-slate-900 rounded-2xl p-6">
                        <p className="text-slate-300 text-sm">"A IA me ajudou a ajustar meu volume de treino e evitar lesões. Recomendo demais."</p>
                        <p className="text-cyan-400 text-sm font-semibold mt-4">— Ana P., atleta iniciante</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-4 py-20 border-t border-slate-800 px-6 text-center">
                <h2 className="text-3xl font-bold">Pronto para quebrar seus recordes?</h2>
                <p className="text-slate-400">Crie sua conta gratuitamente e comece hoje.</p>
                //! navigate de cadastro mais abaixo (nn funciona pq ainda nn existe)
                <button onClick={() => navigate("/cadastro")} className="mt-4 px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-lg">
                    Começar agora
                </button>
            </section>

            <footer className="text-center text-slate-600 text-sm pb-6">
                © 2026 Synapse. Todos os direitos reservados.
            </footer>

        </div>
    )
}

export default Home
