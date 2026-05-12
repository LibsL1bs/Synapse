import BotaoCad from "../../components/CriarConta/Buttons/Cadastrar_btn";
import ConfirmPass from "../../components/CriarConta/Inputs/ConfirmPass";
import Email from "../../components/CriarConta/Inputs/Email";
import Name from "../../components/CriarConta/Inputs/Name";
import Senha from "../../components/CriarConta/Inputs/Password";
import CriarConta_Title from "../../components/CriarConta/Textos/CriarConta";
import Subtitulo_Cad from "../../components/CriarConta/Textos/Subtitle";


import { useNavigate } from "react-router-dom";



import { useState } from "react";



function CriarConta() {

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');

    function trocar() {
        console.log(nome, email, senha)
        nome === '' || email === '' || senha === ''
            ? setMsg("Preencha todos os campos")
            : cadastrar()
    }
    async function cadastrar() {
        try {
            const resp = await fetch('http://192.168.1.33:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nome, email, senha })
            });

            if (resp.status==201) {
                setMsg("Cadastro realizado! Redirecionando...");
               return setTimeout(() => navigate("/login"), 2000);
            } else {
                const data = await resp.json();
               return setMsg(data.message || "Erro ao cadastrar");
            }
        } catch (error) {
            console.log(error)
            alert("Erro de conexão com o servidor. Verifique sua internet.");

           return setMsg("Erro de conexão com o servidor");

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

                            <BotaoCad onClick={()=>trocar()} />
                            {msg}



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
    )
}

export default CriarConta; 