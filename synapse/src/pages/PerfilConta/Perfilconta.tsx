import Imageperfil from "../../components/Imageperfil"

function Perfilconta() {
        return (
                <section className="min-h-screen bg-slate-950 p-6 text-slate-100">
                        <div className="mx-auto w-full max-w-4xl space-y-6">
                                <header className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                                        <h1 className="text-2xl font-bold">Perfil</h1>
                                </header>

                                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                                <div className="h-36 w-full max-w-xs overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
                                                        <Imageperfil src="" alt="Foto de perfil do usuario" className="h-full w-full object-cover" />
                                                </div>

                                                <div className="flex w-full max-w-md flex-col gap-3">
                                                        <input type="file" accept="image/*" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-cyan-500 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-slate-950" />
                                                        <button type="button" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
                                                                Adicionar/Trocar imagem
                                                        </button>
                                                </div>
                                        </div>
                                </div>

                                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                                        <h2 className="mb-3 text-lg font-semibold">Dados do usuario</h2>
                                        <div className="grid gap-3 md:grid-cols-2">
                                                <input type="text" defaultValue="Rodrigo Souza" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none placeholder:text-slate-500" />
                                                <input type="email" defaultValue="rodrigo@email.com" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none placeholder:text-slate-500" />
                                        </div>
                                </div>

                                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                                        <h2 className="mb-3 text-lg font-semibold">Alterar senha</h2>
                                        <div className="grid gap-3">
                                                <input type="password" placeholder="Senha atual" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none placeholder:text-slate-500" />
                                                <input type="password" placeholder="Nova senha" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none placeholder:text-slate-500" />
                                                <input type="password" placeholder="Confirmar senha" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none placeholder:text-slate-500" />
                                        </div>
                                </div>

                                <div className="flex justify-end">
                                        <button type="button" className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
                                                Salvar alteracoes
                                        </button>
                                </div>
                        </div>
                </section>
        )
}

export default Perfilconta
