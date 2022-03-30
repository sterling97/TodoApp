import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onclickButton = (msg) => {
        alert(msg)
    }

    return(
        <button className="CreateTodoButton"
        onClick={() => onclickButton('Aqui se deberia abrir el modal') }
        >
            +
        </button>
    );
};

export { CreateTodoButton }