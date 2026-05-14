import {useNavigate} from "react-router-dom";

//! qualquer navigate que não seja de perfilconta, não existe realmente.

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
            <section className="flex flex-col items-center justify-center flex-1 gap-4 py-16 px-4 text-center sm:gap-6 sm:py-24 md:py-32">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">Synapse</h1>
                <p className="text-slate-400 text-base max-w-xl sm:text-lg md:text-xl">
                    Sua plataforma de powerlifting inteligente. Acompanhe sua evolução, analise seus dados e quebre
                    recordes.
                </p>
                <div className="flex flex-col gap-3 mt-4 w-full max-w-xs sm:flex-row sm:gap-4">
                    <button
                        onClick={() => navigate("/login")}
                        className="px-6 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm sm:text-base"
                    >
                        Entrar
                    </button>
                    <button
                        onClick={() => navigate("/cadastro")}
                        className="px-6 py-2 rounded-lg border border-slate-600 text-slate-100 font-semibold hover:bg-slate-800 transition-colors text-sm sm:text-base"
                    >
                        Cadastrar
                    </button>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-12 sm:gap-6 sm:px-6 sm:pb-20 md:px-12 md:pb-24">
                <div className="bg-slate-900 rounded-2xl p-4 flex flex-col gap-2 sm:p-6 sm:gap-3">
                    <h2 className="text-base font-semibold text-cyan-400 sm:text-lg">Métricas detalhadas</h2>
                    <p className="text-slate-400 text-xs sm:text-sm">
                        Visualize seu desempenho em agachamento, supino e levantamento terra com gráficos claros e
                        objetivos.
                    </p>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 flex flex-col gap-2 sm:p-6 sm:gap-3">
                    <h2 className="text-base font-semibold text-cyan-400 sm:text-lg">IA integrada</h2>
                    <p className="text-slate-400 text-xs sm:text-sm">
                        Converse com a IA para receber sugestões de treino, análise de carga e dicas de recuperação
                        personalizadas.
                    </p>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 flex flex-col gap-2 sm:p-6 sm:gap-3">
                    <h2 className="text-base font-semibold text-cyan-400 sm:text-lg">Acompanhamento contínuo</h2>
                    <p className="text-slate-400 text-xs sm:text-sm">
                        Registre cada treino e veja sua progressão ao longo do tempo de forma simples e visual.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-3 gap-3 py-12 border-t border-slate-800 px-4 sm:gap-8 sm:py-16 md:flex md:justify-center md:gap-16">
                <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-400 sm:text-3xl md:text-4xl">+500</p>
                    <p className="text-slate-400 text-xs mt-1 sm:text-sm">Atletas ativos</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-400 sm:text-3xl md:text-4xl">+12k</p>
                    <p className="text-slate-400 text-xs mt-1 sm:text-sm">Treinos registrados</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-400 sm:text-3xl md:text-4xl">98%</p>
                    <p className="text-slate-400 text-xs mt-1 sm:text-sm">Satisfação dos usuários</p>
                </div>
            </section>

            <section className="px-4 pb-12 flex flex-col items-center gap-6 sm:px-6 sm:pb-20 md:px-12 md:pb-24">
                <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">O que dizem nossos atletas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl sm:gap-6">
                    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6">
                        <p className="text-slate-300 text-xs sm:text-sm">
                            "O Synapse mudou completamente minha forma de treinar. Consigo ver exatamente onde estou
                            evoluindo."
                        </p>
                        <p className="text-cyan-400 text-xs font-semibold mt-3 sm:mt-4 sm:text-sm">— Carlos M., competidor regional</p>
                    </div>
                    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6">
                        <p className="text-slate-300 text-xs sm:text-sm">
                            "A IA me ajudou a ajustar meu volume de treino e evitar lesões. Recomendo demais."
                        </p>
                        <p className="text-cyan-400 text-xs font-semibold mt-3 sm:mt-4 sm:text-sm">— Ana P., atleta iniciante</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-3 py-12 border-t border-slate-800 px-4 text-center sm:gap-4 sm:py-16 md:py-20">
                <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Pronto para quebrar seus recordes?</h2>
                <p className="text-slate-400 text-sm sm:text-base">Crie sua conta gratuitamente e comece hoje.</p>
                <button
                    onClick={() => navigate("/cadastro")}
                    className="mt-2 px-6 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm sm:mt-4 sm:px-8 sm:py-3 sm:text-base md:text-lg"
                >
                    Começar agora
                </button>
            </section>

            <footer className="text-center text-slate-600 text-xs pb-4 sm:text-sm sm:pb-6">
                © 2026 Synapse. Todos os direitos reservados.
            </footer>
        </div>
    );
}

export default Home;
