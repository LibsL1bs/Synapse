import BotaoLogin from "../../components/Login/MeuButton/Button";
import Email from "../../components/Login/MeusInputs/Email";
import Senha from "../../components/Login/MeusInputs/Senha";
import Sessao from "../../components/Login/Text/IniciarSessao";
import LogoSynapse from "../../components/Login/Text/LogoSynapse";
import Subtitulo from "../../components/Login/Text/Subtitulo";

import { useState } from "react";

function App() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');

    function trocar() {
        email === '' || senha === ''
            ? setMsg("Preencha todos os campos")
            : cadastrar()
    }

    async function cadastrar() {
        fetch('http://192.168.1.41:3000/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        })
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
                        <span className="text-cyan-400 cursor-pointer hover:text-cyan-300 font-semibold">
                            CRIAR CONTA
                        </span>
                    </p>
                </div>
            </main>
        </>
    );

}
export default App;