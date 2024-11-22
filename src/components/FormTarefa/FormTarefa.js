import React, { useState } from "react";
import "./style.css";

import ButtonProjeto from "../Button/Botao";
import Body from "../Body/Body";
export default function FormTarefa() {

    // eventos
    const [showPage, setShowPage] = useState(false);

    // Método para mostar o formulário de adicionar Terefa
    const handleButtonClick = () => {
        setShowPage(true);
    };

    return (
        <>
            {
                !showPage ? (
                    <div className="form_container">
                        <h1 className="title_form">Crie uma Tarefa</h1>
                        <form className="form_primario">
                            <label htmlFor="NomeTarefa">Nome para tarefa:</label>
                            <input type="text" placeholder="Digite o nome da Tarefa..." name="tarefa" className="inputTarefa" />
                            <label htmlFor="CustoTarefa">Digite o custo da tarefa:</label>
                            <input type="number" placeholder="Digite o custo da Tarefa..." name="custo" className="inputCustoTarefa" />
                            <label htmlFor="DataTarefa">Data Limite:</label>
                            <input type="date" name="data" className="inputDataTarefa" />
                        </form>
                        <ButtonProjeto titleBtnRed="Cancelar" titleBtnGreen="Salvar" cancelar={handleButtonClick}/>
                    </div>
                ) : (
                    <Body />
                )
            }
        </>
    )
}

