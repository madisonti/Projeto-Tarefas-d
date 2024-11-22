import React, {useState} from "react";
import "./style.css";

// componente 
import ButtonProjeto from "../Button/Botao";
import FormTarefa from "../FormTarefa/FormTarefa";

export default function Body () {

    // eventos
    const [showForm, setShowForm] = useState(false);

    // Método para mostar o formulário de adicionar Terefa
    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
         <div>
            {
                !showForm ? (
                    <>
                    <ButtonProjeto exibirForm={handleButtonClick}/>
                    <p>Você ainda não possui uma tarefa criada.</p>
                    </>
                ) : (
                    <FormTarefa/>
                )
            }
         </div>
    )
}