import React from 'react';

const Erro = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="text-6xl font-black tracking-tight text-rose-400">404</span>
          <div>
            <h1 className="text-4xl font-semibold sm:text-5xl">Página não encontrada</h1>
            <p className="mt-3 text-slate-300 sm:text-lg">
              Desculpe, não conseguimos encontrar a página que você está procurando.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6 text-left shadow-xl shadow-slate-950/20 w-full sm:w-4/5">
            <p className="text-slate-300">O erro pode ter ocorrido por:</p>
            <ul className="mt-4 space-y-2 text-slate-200 list-disc list-inside">
              <li>URL incorreta</li>
              <li>Página removida ou movida</li>
              <li>Erro de navegação interno</li>
            </ul>
          </div>
          <a
            href="/"
            className="inline-flex rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-400"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </main>
  );
};

export default Erro;
