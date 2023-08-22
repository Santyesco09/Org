import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  /* 
  Ternario --> condicion ? seMuestra : noSeMuestra
  {mostrarFormulario === true ? <Formulario /> : <div></div>}
  {mostrarFormulario ? <Formulario /> : <></>}
  */

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;