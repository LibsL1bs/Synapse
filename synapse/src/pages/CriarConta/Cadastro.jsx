import BotaoCad from "../../components/CriarConta/Buttons/Cadastrar_btn";
import Email from "../../components/CriarConta/Inputs/Email";
import Name from "../../components/CriarConta/Inputs/Name";
import Senha from "../../components/CriarConta/Inputs/Password";
import CriarConta_Title from "../../components/CriarConta/Textos/CriarConta";
import Subtitulo_Cad from "../../components/CriarConta/Textos/Subtitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../../backend/api/api-config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(nome, email, senha) {
    if (!nome.trim()) return "O nome não pode estar vazio.";
    if (nome.trim().length < 2) return "O nome deve ter pelo menos 2 caracteres.";
    if (!email.trim()) return "O e-mail não pode estar vazio.";
    if (!EMAIL_REGEX.test(email)) return "Informe um e-mail válido.";
    if (!senha) return "A senha não pode estar vazia.";
    if (senha.length < 6) return "A senha deve ter pelo menos 6 caracteres.";
    return null;
}

function CriarConta() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [sucesso, setSucesso] = useState(false);

    function trocar() {
        const erro = validar(nome, email, senha);
        if (erro) {
            setSucesso(false);
            setMsg(erro);
            return;
        }
        cadastrar();
    }

    async function cadastrar() {
        try {
            await api.post("/users", { nome, email, senha });
            setSucesso(true);
            setMsg("Cadastro realizado! Redirecionando...");
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setSucesso(false);
            if (err.response) {
                setMsg(err.response.data?.message || err.response.data?.error || "Erro ao cadastrar.");
            } else {
                setMsg("Erro ao conectar com o servidor.");
            }
        }
    }

    return (
        <>
            <main className="flex justify-center items-center min-h-screen bg-slate-950 text-slate-100">
                <div className="flex flex-col items-center w-full max-w-md px-6">
                    <CriarConta_Title />
                    <Subtitulo_Cad />

                    <div className="w-full mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
                        <article className="flex flex-col gap-5 w-full">
                            <Name valor={nome} mudar={(e) => setNome(e.target.value)} />
                            <Email valor={email} mudar={(e) => setEmail(e.target.value)} />
                            <Senha valor={senha} mudar={(e) => setSenha(e.target.value)} />

                            {msg ? <p className={`text-sm text-center ${sucesso ? "text-green-400" : "text-red-400"}`}>{msg}</p> : null}

                            <BotaoCad onClick={() => trocar()} />
                        </article>
                    </div>

                    <p className="text-slate-400 text-sm mt-6">
                        Ja tem uma conta?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-cyan-400 cursor-pointer hover:text-cyan-300 font-semibold"
                        >
                            Faça login.
                        </span>
                    </p>
                </div>
            </main>
        </>
    );
}

export default CriarConta; 