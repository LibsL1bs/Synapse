import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

function Perfilconta(){
    const navigate = useNavigate();

    return (
        <>
            <div>
                <header className="bg-gray-900 text-white text-lg w-full p-4 h-20"> PERFIL </header>
            </div>
        <div className="bg-gray-900 text-white text-lg w-full p-4 h-56 border border-gray-500">
            <h1 className="text-white text-lg">
                Informações do Atleta
            </h1>
            <div className="flex gap-4 flex flex-col items-center">
            <input className=" border" placeholder="Nome" />
            <input className="border" placeholder="Email" />
            </div>
        </div>
            <div className="bg-gray-900 text-white text-lg w-full p-4 h56 border border-gray-500">
        </>
    );

}

export default Perfilconta;
