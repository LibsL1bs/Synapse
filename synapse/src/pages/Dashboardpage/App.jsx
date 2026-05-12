import { useState, useEffect } from "react";
import axios from "axios";
import Readines from "../../components/Dashboard/Readines";
import Fadiga from "../../components/Dashboard/Fadiga";
import Tendencias from "../../components/Dashboard/Tendencias";
import Sono from "../../components/Dashboard/Sono";
import Alimentacao from "../../components/Dashboard/Alimentacao";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3000";

export default function Dashboard() {
  const [dados, setDados] = useState(null);
  const [idMemoria, setIdMemoria] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setErro("Usuário não identificado");
      setCarregando(false);
      return;
    }

    axios
      .get(`${API_BASE_URL}/memorias/estado?user_id=${userId}`)
      .then(response => {
        const data = response.data;
        const semana = [
          { dia: "Seg", horas: data?.sono_seg || 0 },
          { dia: "Ter", horas: data?.sono_ter || 0 },
          { dia: "Qua", horas: data?.sono_qua || 0 },
          { dia: "Qui", horas: data?.sono_qui || 0 },
          { dia: "Sex", horas: data?.sono_sex || 0 },
          { dia: "Sab", horas: data?.sono_sab || 0 },
          { dia: "Dom", horas: data?.sono_dom || 0 },
        ];

        const horasTotal = semana.reduce((acc, dia) => acc + dia.horas, 0);
        const diasPreenchidos = semana.filter(dia => dia.horas > 0).length;

        setIdMemoria(data?.id_memoria || null);
        setDados({
          disposicao_relativa: data?.disposicao_relativa || 0,
          levantamentos: {
            squat: data?.squat || 0,
            bp: data?.bp || 0,
            dl: data?.dl || 0,
          },
          sono: {
            totalHoras: horasTotal.toFixed(1),
            diasPreenchidos,
            totalDias: 7,
            semana,
          },
          alimentacao: {
            proteinas: data?.proteinas || 0,
            carboidratos: data?.carboidratos || 0,
            calorias: data?.calorias || 0,
          },
        });
      })
      .catch(err => {
        console.error(err);
        setErro("Erro ao carregar dados");
      })
      .finally(() => setCarregando(false));
  }, []);

  async function salvarSono(novaSemana) {
    if (!idMemoria || !dados) return;

    const content = {
      bp: dados.levantamentos.bp,
      squat: dados.levantamentos.squat,
      dl: dados.levantamentos.dl,
      sono_seg: novaSemana[0].horas,
      sono_ter: novaSemana[1].horas,
      sono_qua: novaSemana[2].horas,
      sono_qui: novaSemana[3].horas,
      sono_sex: novaSemana[4].horas,
      sono_sab: novaSemana[5].horas,
      sono_dom: novaSemana[6].horas,
      proteinas: dados.alimentacao.proteinas,
      carboidratos: dados.alimentacao.carboidratos,
      calorias: dados.alimentacao.calorias,
    };

    await axios.put(`${API_BASE_URL}/memorias/estado/${idMemoria}`, { content });

    const totalHoras = novaSemana.reduce((acc, d) => acc + d.horas, 0).toFixed(1);
    const diasPreenchidos = novaSemana.filter(d => d.horas > 0).length;

    setDados(prev => ({
      ...prev,
      sono: { ...prev.sono, semana: novaSemana, totalHoras, diasPreenchidos },
    }));
  }

  return (
    <div className="w-full h-full bg-slate-950 p-4">
      <header className="mb-6 flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 shadow-sm shadow-slate-950/20">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">Painel</p>
          <h1 className="text-2xl font-semibold text-slate-50">Estado Atual</h1>
        </div>
      </header>

      {carregando && <div className="text-slate-400">Carregando dados...</div>}
      {erro && <div className="text-red-500">{erro}</div>}

      {dados && (
        <div className="grid grid-cols-[1.6fr_1fr] gap-4">
          <div className="flex flex-col gap-4">
            <Tendencias squat={dados.levantamentos.squat} bp={dados.levantamentos.bp} dl={dados.levantamentos.dl} />
            <Fadiga valor={100 - dados.disposicao_relativa} />
            <Readines valor={dados.disposicao_relativa} />
          </div>
          <div className="flex flex-col gap-4">
            <Sono dados={dados.sono} onSalvar={salvarSono} />
            <Alimentacao proteinas={dados.alimentacao.proteinas} carboidratos={dados.alimentacao.carboidratos} calorias={dados.alimentacao.calorias} />
          </div>
        </div>
      )}
    </div>
  );
}



