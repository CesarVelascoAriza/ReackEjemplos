import React from 'react';
import './../css/boton.css';

function Boton({texto,esBtnClic,manejarClick}){
    return(
        <button 
        className={esBtnClic ? 'btn-click' : 'btn-reiniciar' } 
        onClick={manejarClick} >{texto}</button>
    );
}

export default Boton;