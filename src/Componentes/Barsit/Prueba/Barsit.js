import Pregunta15a20 from "../BarsitPreguntas/Pregunta15a20";
import Pregunta31a35 from "../BarsitPreguntas/Pregunta31a35";
import Pregunta36a40 from "../BarsitPreguntas/Pregunta36a40";
import Pregunta46a50 from "../BarsitPreguntas/Pregunta46a50";
import Pregunta41a45 from "../BarsitPreguntas/Pregunta46a50";
import Pregunta51a55 from "../BarsitPreguntas/Pregunta51a55";
import Pregunta56a60 from "../BarsitPreguntas/Pregunta56a60";
import Pregunta21a25 from "../BarsitPreguntas/Preguntas21a25";
import CountDownTimer from "../../Pruebas/Temporizador/CountDownTimer";
import Pregunta1a5 from "../BarsitPreguntas/Pregunta1a5";
import Pregunta6a10 from "../BarsitPreguntas/Pregunta6a10";
import Pregunta11a14 from "../BarsitPreguntas/Pregunta11a14";
import Pregunta26a30 from "../BarsitPreguntas//Pregunta26a30";
import { Link } from "react-router-dom";

export default function Barsit() {
  const hoursMinSecs = { hours: 0, minutes: 10, seconds: 0 };
  return (
    <div className="contenido">
      <div>
        <div className="col-xl-7 md-10">
          <Pregunta1a5/>
          <Pregunta6a10/>
          <Pregunta11a14/>
          <Pregunta15a20 />
          <Pregunta21a25 />
          <Pregunta26a30/>
          <Pregunta31a35 />
          <Pregunta36a40 />
          <Pregunta41a45 />
          <Pregunta46a50 />
          <Pregunta51a55 />
          <Pregunta56a60 />
        </div>
      </div>
      <div className="App-timer col-xl-5 md-2">
        <CountDownTimer hoursMinSecs={hoursMinSecs} />
      </div>
      <Link to="/barsitdespedida">
      <button className="btn btn-danger">Finalizar</button>
      </Link>
    </div>
  );
}
