import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Barsitintro from "./Componentes/Barsit/Prueba/BarsitIntro";
import Barsit from "./Componentes/Barsit/Prueba/Barsit";
import OtisIntro from "./Componentes/OTIS/OtisIntro";
import OtisPrueba from "./Componentes/OTIS/OtisPrueba";
import Home from "./Componentes/Home";
import {Routes, Route } from 'react-router-dom'
import DespedidaBarsit from "./Componentes/Barsit/Prueba/DespedidaBarsit";
import DespedidaOtis from "./Componentes/OTIS/DespedidaOtis";
import Fin from "./Componentes/Fin";

function App() {
  return (
    <div className="ventana">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/introbarsit' element={<Barsitintro/>}/>
        <Route path='/barsitprueba' element={<Barsit/>}/>
        <Route path='/barsitdespedida' element={<DespedidaBarsit/>}/>
        <Route path='/introotis' element={<OtisIntro/>}/>
        <Route path='/otisprueba' element={<OtisPrueba/>}/>
        <Route path='/otisdespedida' element={<DespedidaOtis/> }/>
        <Route path='/fin' element={<Fin/>}/>
      </Routes>
    </div>
  );
}
// import { Form } from "react-bootstrap";

export default App;
