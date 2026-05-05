import BotaoLogin from "../src/Components/Login/MeuButton/Button";
import Email from "../src/Components/Login/MeusInputs/Email";
import Senha from "../src/Components/Login/MeusInputs/Senha";
import Sessao from "../src/Components/Login/Text/IniciarSessao";
import LogoSynapse from "../src/Components/Login/Text/LogoSynapse";
import Subtitulo from "../src/Components/Login/Text/Subtitulo";

import { useState } from "react";


import { Link } from 'react-router-dom';



function App() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('teste');
    console.log(msg);

    function trocar() {
        email == '' || senha == ''
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
                nome: name,
                senha: senha
            })
        })

    }

    return (
        <>

            <main className="flex justify-center items-center min-h-screen bg-black">
                <div className="flex flex-col items-center">
                    <LogoSynapse />
                    <Sessao />
                    <Subtitulo />

                    <article className=" gap-10 flex flex-col w-full max-w-md">
                        <Email />

                        <label className="text-gray-300 text-sm">Senha</label>

                        <Senha 
                            placeholder="Coloque sua senha..."
                            className="bg-gray-900 text-white px-4 py-2 rounded-md 
        border border-gray-700 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition"
                        />


                        <BotaoLogin />
                    </article>

                    <p className="text-gray-400 text-sm mt-6">
                        Sem conta?
                        <span className="text-white cursor-pointer hover:underline">
                            CRIAR CONTA
                        </span>
                    </p>

                </div>
            </main>

        </>
    );

}
export default App;