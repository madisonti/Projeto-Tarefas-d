import React from "react";
import "./style.css";



function ButtonProjeto(props) {

    const { titleBtnRed, titleBtnGreen, exibirForm, cancelar } = props;

    return (

        <div className="container_btn">
            <button className="btn_primario" onClick={() => {
                if (exibirForm) { exibirForm(); } else { cancelar(); }
            }}>{props.titleBtnRed ? props.titleBtnRed : "Crie uma tarefa"}</button>
            <button className="btn_secundario">{props.titleBtnGreen ? props.titleBtnGreen : "Listar Tarefas"}</button>
        </div>
    )

}

export default ButtonProjeto;