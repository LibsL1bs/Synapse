import Imageperfil from "../../components/Imageperfil";

function Perfilconta() {
    return (
        <section className="min-h-screen w-full bg-slate-950 p-2 text-slate-100 sm:p-3 md:p-6">
            <div className="mx-auto w-full max-w-3xl space-y-3 sm:space-y-4 md:space-y-6">
                <header className="rounded-lg border border-slate-800 bg-slate-900 p-3 sm:p-4 md:rounded-xl md:p-6">
                    <h1 className="text-lg font-bold sm:text-xl md:text-2xl">Meu Perfil</h1>
                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">Gerencie suas informações pessoais e segurança</p>
                </header>

                {/* Seção de Foto */}
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-3 sm:p-4 md:rounded-xl md:p-6">
                    <h2 className="mb-3 text-sm font-semibold text-slate-200 sm:text-base md:mb-4">Foto de Perfil</h2>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                        <div className="h-28 w-28 overflow-hidden rounded-lg border-2 border-slate-700 bg-slate-800 sm:h-32 sm:w-32 md:h-36 md:w-36">
                            <Imageperfil
                                src=""
                                alt="Foto de perfil do usuario"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex w-full flex-col gap-2 sm:gap-3 md:flex-1">
                            <label className="text-xs font-medium text-slate-300 sm:text-sm">Selecione uma imagem</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="rounded-lg border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-slate-300 file:mr-2 file:cursor-pointer file:rounded file:border-0 file:bg-cyan-500 file:px-2 file:py-1 file:text-xs file:font-semibold file:text-slate-950 hover:border-slate-600 focus:border-cyan-500 focus:outline-none sm:px-3 sm:py-2 sm:text-sm sm:file:px-3 sm:file:py-1.5 sm:file:text-sm"
                            />
                            <button
                                type="button"
                                className="w-full rounded-lg bg-cyan-500 px-3 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 active:bg-cyan-600 sm:text-sm md:w-auto"
                            >
                                Confirmar imagem
                            </button>
                        </div>
                    </div>
                </div>

                {/* Seção de Dados Pessoais */}
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-3 sm:p-4 md:rounded-xl md:p-6">
                    <h2 className="mb-3 text-sm font-semibold text-slate-200 sm:text-base md:mb-4">Informações Pessoais</h2>
                    <div className="space-y-2 sm:space-y-3">
                        <div>
                            <label className="block text-xs font-medium text-slate-400 sm:text-sm">Nome Completo</label>
                            <input
                                type="text"
                                placeholder="Seu nome"
                                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-400 sm:text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="seu.email@exemplo.com"
                                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Seção de Segurança */}
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-3 sm:p-4 md:rounded-xl md:p-6">
                    <h2 className="mb-3 text-sm font-semibold text-slate-200 sm:text-base md:mb-4">Alterar Senha</h2>
                    <div className="space-y-2 sm:space-y-3">
                        <div>
                            <label className="block text-xs font-medium text-slate-400 sm:text-sm">Senha Atual</label>
                            <input
                                type="password"
                                placeholder="Digite sua senha atual"
                                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-400 sm:text-sm">Nova Senha</label>
                            <input
                                type="password"
                                placeholder="Digite uma nova senha"
                                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-400 sm:text-sm">Confirmar Senha</label>
                            <input
                                type="password"
                                placeholder="Confirme sua nova senha"
                                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3">
                    <button
                        type="button"
                        className="rounded-lg border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 transition-colors hover:bg-slate-800 active:bg-slate-700 sm:text-sm"
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 active:bg-cyan-600 sm:text-sm"
                    >
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Perfilconta;
