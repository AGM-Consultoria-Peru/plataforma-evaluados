// https://ichi.pro/es/como-crear-un-temporizador-de-cuenta-atras-en-la-aplicacion-react-256843708654226
// Este enlace es lo del reloj contador

import { Link } from "react-router-dom";

export default function BarsitIntro() {
  return (
    <div>
      <h1 className="titulo">Bienvenido a la Prueba BARSIT</h1>
      <p>
        <b>LEA ESTO CON MUCHA ATENCIÓN:</b> Usted tendrá que ir resolviendo
        cuestiones parecidas a éstas. Deberá marcar la casilla que considera
        correcta. Para esta prueba,{" "}
        <b>
          <u>usted cuenta con 10 minutos para resolverlo</u>
        </b>
        . Pasado ese tiempo, la prueba se cerrará automáticamente y se enviará
        los resultados obtenidos. Disponga de un lugar con una señal de internet
        constante, segura y libre de distracciones. Las preguntas serán
        similares a las que se presenta lineas abajo, aumentando la dificultad
        conforme avance.
      </p>
      <p>Ejemplos:</p>
      <div className="ejemplo">
        <div className="container">
          <p className="pregunta">
            <b>1.</b> ¿Qué palabra nos dice lo que es una manzana?
          </p>
          <p className="pregunta">
            <b>Rpta 1:</b> En este caso la respuesta es <b> &nbsp;Fruto</b>
          </p>
          <div className="alternativas">
            <p className="pregunta">Libro</p>
            <p className="pregunta">Piedra</p>
            <p className="pregunta">Cosa</p>
            <p className="pregunta">Fruto</p>
            <p className="pregunta">Animal</p>
          </div>
        </div>
        <div className="container">
          <p className="pregunta">
            <b>2.</b> ¿qué palabra nos dice lo contrario de bueno?
          </p>
          <p className="pregunta">
            <b>Rpta 2:</b> En este caso la respuesta es <b>&nbsp;Malo</b>
          </p>
          <div className="alternativas">
            <p className="pregunta">Anterior</p>
            <p className="pregunta">Mejor</p>
            <p className="pregunta">Malo</p>
            <p className="pregunta">Simpático</p>
            <p className="pregunta">Deseable</p>
          </div>
        </div>
        <div className="container">
          <p className="pregunta">
            <b>3</b> De éstas 5 palabras, una pertenece a una clase diferente
          </p>
          <p className="pregunta">
            <b>Rpta 3:</b> En este caso la respuesta es <b>&nbsp;Zapato</b>
          </p>
          <div className="alternativas">
            <p className="pregunta">Gato</p>
            <p className="pregunta">Perro</p>
            <p className="pregunta">Zapato</p>
            <p className="pregunta">Caballo</p>
            <p className="pregunta">Vaca</p>
          </div>
        </div>
        <div className="container">
          <p className="pregunta">
            <b>4.</b> El agua es una bebida y el arroz es un:
          </p>
          <p className="pregunta">
            <b>Rpta 4:</b> En este caso la respuesta es <b>&nbsp;Alimento</b>
          </p>
          <div className="alternativas">
            <p className="pregunta">Objeto</p>
            <p className="pregunta">Alimento</p>
            <p className="pregunta">Juego</p>
            <p className="pregunta">Cosa</p>
            <p className="pregunta">Mineral</p>
          </div>
        </div>
        <div className="container">
          <p className="pregunta">
            <b>5.</b> Escriba los dos números que faltan a ésta serie
          </p>
          <p className="pregunta">
            <b>Rpta 5:</b> En este caso la respuesta es <b>&nbsp;12 y 16</b>
          </p>
          <div className="alternativas">
            <p className="pregunta">2</p>
            <p className="pregunta">4</p>
            <p className="pregunta">6</p>
            <p className="pregunta">8</p>
            <p className="pregunta">10</p>
            <p className="pregunta">...</p>
            <p className="pregunta">14</p>
            <p className="pregunta">...</p>
            <p className="pregunta">18</p>
            <p className="pregunta">20</p>
          </div>
        </div>
        <div className="container">
          <p className="pregunta">
            <b>6.</b> Los peces viven en :
          </p>
          <p className="pregunta">
            <b>Rpta 6:</b> En este caso la respuesta es <b>&nbsp;El Agua</b>
          </p>
          <div className="alternativas">
            <p className="pregunta">El Agua</p>
            <p className="pregunta">La Tierra</p>
            <p className="pregunta">El Aire</p>
            <p className="pregunta">El Monte</p>
            <p className="pregunta">El Subsuelo</p>
          </div>
        </div>
        <div className="container">
          <p className="pregunta">
            <b>7.</b>Lo contrario de nuevo es:
          </p>
          <p className="pregunta">
            <b>Rpta 7:</b> En este caso la respuesta es <b>&nbsp;Viejo</b>
          </p>
          <div className="alternativas">
            <p className="pregunta">Moderno</p>
            <p className="pregunta">Viejo</p>
            <p className="pregunta">Bello</p>
            <p className="pregunta">Elegante</p>
            <p className="pregunta">Caro</p>
          </div>
        </div>
      </div>
      <p>
        Presione <b>siguiente</b> para iniciar la prueba
      </p>
      <div className="boton">
        <Link to="/barsitprueba">
          <button className="btn btn-success">Siguiente</button>
        </Link>
      </div>
    </div>
  );
}
