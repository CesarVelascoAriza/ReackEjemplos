import './App.css';
/**
 * importacion por default
 */
//import Testimonio from './coponents/Testimonio';
/**
 * importacion por nombrado
 */
import { Testimonio } from './coponents/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Comentarios de los participantes todos los aumnos de freecode colcapm</h1>
      <Testimonio 
          nombre='Ema bostion'
          pais='Suecia'
          imagen='logo512'
          cargo = 'Ingeniera de softwate'
          empresa= 'potify'
          testimonio ='sadasdfsadfasdashdhdhhdhhdhdhdhhhhhhhhhddddddddddddddddddddddddddddddddddddddddd'
       />
       <Testimonio 
          nombre='Ema bostion'
          pais='Suecia'
          imagen='logo512'
          cargo = 'Ingeniera de softwate'
          empresa= 'potify'
          testimonio ='sadasdfsadfasdashdhdhhdhhdhdhdhhhhhhhhhddddddddddddddddddddddddddddddddddddddddd'
       />
       <Testimonio 
          nombre='Ema bostion'
          pais='Suecia'
          imagen='logo512'
          cargo = 'Ingeniera de softwate'
          empresa= 'potify'
          testimonio ='sadasdfsadfasdashdhdhhdhhdhdhdhhhhhhhhhddddddddddddddddddddddddddddddddddddddddd'
       />
      </div>
      
      
    </div>
  );
}

export default App;
