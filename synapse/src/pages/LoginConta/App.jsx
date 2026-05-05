import BotaoLogin from "../../components/Login/MeuButton/Button";
import Email from "../../components/Login/MeusInputs/Email";
import Senha from "../../components/Login/MeusInputs/Senha";
import Sessao from "../../components/Login/Text/IniciarSessao";
import LogoSynapse from "../../components/Login/Text/LogoSynapse";
import Subtitulo from "../../components/Login/Text/Subtitulo";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    function trocar() {
        email === '' || senha === ''
            ? setMsg("Preencha todos os campos")
            : login()
    }

    async function login() {
        try {
            await axios.post('http://192.168.1.33:3001/auth/login', {
                email: email,
                password: senha
            });
            alert("Login bem-sucedido!");
        } catch (err) {
            if (err.response) {
                setMsg("Email ou senha incorretos");
            } else {
                setMsg("Erro ao conectar com o servidor");
            }
        }
    }

    return (
        <>
            <main className="flex justify-center items-center min-h-screen bg-slate-950 text-slate-100">
                <div className="flex flex-col items-center w-full max-w-md px-6">
                    <LogoSynapse />
                    <Sessao />
                    <Subtitulo />

                    <div className="w-full mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
                        <article className="flex flex-col gap-5 w-full">
                            <Email value={email} onChange={(e) => setEmail(e.target.value)} />

                            <Senha value={senha} onChange={(e) => setSenha(e.target.value)} />

                            {msg ? <p className="text-red-400 text-sm text-center">{msg}</p> : null}

                            <BotaoLogin onClick={trocar} />
                        </article>
                    </div>

                    <p className="text-slate-400 text-sm mt-6">
                        Sem conta?{" "}
                        <span
                            onClick={() => navigate('/cadastro')}
                            className="text-cyan-400 cursor-pointer hover:text-cyan-300 font-semibold"
                        >
                            CRIAR CONTA
                        </span>
                    </p>
                </div>
            </main>
        </>
    );

}
export default App;