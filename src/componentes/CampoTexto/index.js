// Lembrando que componentes reacts comecam com letra maiuscula
import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}`

   

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value = {props.valor} onChange = {aoDigitar} required = {props.obrigatorio} placeholder= {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto

// Dentro do JSX para indicarmos que queremos imprimir o valor da variavel, precisamos colocalas entre {}