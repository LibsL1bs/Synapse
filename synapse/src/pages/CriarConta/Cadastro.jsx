import BotaoCad from "../../components/CriarConta/Buttons/Cadastrar_btn";
import ConfirmPass from "../../components/CriarConta/Inputs/ConfirmPass";
import Email from "../../components/CriarConta/Inputs/Email";
import Name from "../../components/CriarConta/Inputs/Name";
import Senha from "../../components/CriarConta/Inputs/Password";
import CriarConta_Title from "../../components/CriarConta/Textos/CriarConta";
import Subtitulo_Cad from "../../components/CriarConta/Textos/Subtitle";


function CriarConta() {


  


    return (
        <>
            <main className="flex justify-center items-center min-h-screen bg-slate-950 text-slate-100">
                <div className="flex flex-col items-center w-full max-w-md px-6">


                    <CriarConta_Title />
                    <Subtitulo_Cad />


                    <div className="w-full mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
                        <article className="flex flex-col gap-5 w-full">


                            <Name />
                            <Email />
                            <Senha />
                            <ConfirmPass />


                            <BotaoCad />


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