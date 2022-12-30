import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import logo from './logo.svg';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    console.log('click');
    setNumClics ( numClics + 1);
    
  }
  const reiniciarContador = () => {
    console.log('reiniciar')
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contendor'>
        <img
          className="freeCodeCamp-logo"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="contenedor-pricipal" >
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBtnClic={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='Reinciar'
          esBtnClic={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
