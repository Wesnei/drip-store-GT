import { useState } from "react"

export default function InfoPersonPurchase () {
    const [infoPessoais , setInfoPessoais] = useState({
        name : "Wesnei Paiva",
        cpf : "123323957-33",
        email : "wesneipaiva@gmail.com",
        cel : "(88) 98815-5616"
    });

    return (
        <section className="flex flex-col space-y-2 py-3">
            <h2 className="tracking-wide font-semibold text-slate-700 text-lg">Informações Pessoais</h2>
            <div className="flex flex-col items-start space-y-3">
                <p><span className="text-slate-400">Nome: </span> {infoPessoais.name}</p>
                <p><span className="text-slate-400">CPF: </span> {infoPessoais.cpf}</p>
                <p><span className="text-slate-400">Email: </span> {infoPessoais.email}</p>
                <p><span className="text-slate-400">Celular: </span> {infoPessoais.cel}</p>
            </div>
        </section>
    )
}
