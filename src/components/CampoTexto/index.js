import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            valor={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto