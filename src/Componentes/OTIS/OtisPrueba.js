import React from "react";
import Pregunta1a5 from "./Otispreguntas/Pregunta1a5";
import Pregunta31a35 from "./Otispreguntas/Pregunta31a35";
import Pregunta36a40 from "./Otispreguntas/Pregunta36a40";
import Pregunta6a10 from "./Otispreguntas/Pregunta6a10";
import Pregunta11a15 from "./Otispreguntas/Preguntas11a15";
import Pregunta16a20 from "./Otispreguntas/Preguntas16a20";
import Pregunta21a25 from "./Otispreguntas/Preguntas21a25";
import Pregunta26a30 from "./Otispreguntas/Preguntas26a30";
import CountDownTimer from "../Pruebas/Temporizador/CountDownTimer";
import { Link } from "react-router-dom";

export default function OtisPrueba() {
  const hoursMinSecs = { hours: 0, minutes: 15, seconds: 0 };
  return (
    <div className="contenido">
      <div className="row">
      <div className="col-xl-1 md-2"></div>

        <div className="col-xl-9 md-10">
        <h1 className="titulobarsit">Prueba OTIS</h1>
          <Pregunta1a5 />
          <Pregunta6a10 />
          <Pregunta11a15 />
          <Pregunta16a20 />
          <Pregunta21a25 />
          <Pregunta26a30 />
          <Pregunta31a35 />
          <Pregunta36a40 />
        </div>
        <div className="App-timer col-xl-2 md-2" >
          <CountDownTimer hoursMinSecs={hoursMinSecs} />
        </div>
        <Link to="/otisdespedida">
        <button className="btn btn-success">Finalizar</button>
        </Link>
      </div>
    </div>
  );
}
