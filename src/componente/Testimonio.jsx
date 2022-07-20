import React from "react";
import '../css/Testimonio.css'

function Testimonio(props) {
    return (<div className='contenedor-testimonio'> 
        <img className='imagen-testimonio' src={require(`../img/testimonio-${props.imagen}.png`)} alst='foto de emma'/>
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>{props.nombre}   en {props.pais}</p>
            <p className='cargo-testimonio'><strong>{props.cargo}</strong> en {props.empresa}</p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
    </div>);
}
export default Testimonio;