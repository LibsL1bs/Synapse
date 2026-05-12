import BotaoCad from "../../components/Cadastro/Botao/Cadastrar";
import InputConfirm_Pass from "../../components/Cadastro/Inputs/ConfirmPass";
import InputEmail from "../../components/Cadastro/Inputs/Email";
import InputNomeComp from "../../components/Cadastro/Inputs/NomeComp";
import InputPassword from "../../components/Cadastro/Inputs/Password";
import Subtitulo_Cad from "../../components/Cadastro/Textos/Subtitulo";
import CriarConta_Titulo from "../../components/Cadastro/Textos/Titulo";


import { useNavigate } from "react-router-dom";

const navigate = useNavigate();



function Cadastro() {




    return (
        <>
            <main className="flex justify-center items-center min-h-screen bg-slate-950 text-slate-100">
                <div className="flex flex-col items-center w-full max-w-md px-6">




                    <CriarConta_Titulo />
                    <Subtitulo_Cad />


                    <div className="w-full mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
                        <article className="flex flex-col gap-5 w-full">




                            <InputEmail />
                            <InputNomeComp />
                            <InputPassword />
                            <InputConfirm_Pass />



                            <BotaoCad />

                        </article>
                    </div>
                    <p className="text-slate-400 text-sm mt-6">
                        Já tem conta?{" "}
                        <span
                            onClick={() => navigate('/login')}
                            className="text-cyan-400 cursor-pointer hover:text-cyan-300 font-semibold"
                        >
                            Faça login
                        </span>
                    </p>


                </div>
            </main>
        </>
    )
}

export default Cadastro;