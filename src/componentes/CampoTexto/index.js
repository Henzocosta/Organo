// Lembrando que componentes reacts comecam com letra maiuscula
import './campoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}`
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder= {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto

// Dentro do JSX para indicarmos que queremos imprimir o valor da variavel, precisamos colocalas entre {}