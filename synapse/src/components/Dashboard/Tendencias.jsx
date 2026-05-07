import React from "react";

const Tendencias = ({ dados = [] }) => {
  const hasDados = Array.isArray(dados) && dados.length > 0;

  return (
    <div className="bg-zinc-900 text-white rounded-lg p-4">
      <h2 className="text-sm font-semibold tracking-[0.12em] uppercase text-white/90 mb-4">
        TENDÊNCIA
      </h2>

      {hasDados ? (
        <div className="space-y-3">
          {dados.map((item, index) => (
            <div key={index} className="flex justify-between gap-4 text-sm">
              <span className="text-white/90">{item.nome}</span>
              <span className="text-zinc-400">{item.valor} kg</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-zinc-400 text-sm">-</div>
      )}
    </div>
  );
};

export default Tendencias;
