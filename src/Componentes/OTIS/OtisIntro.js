import { Link } from "react-router-dom";

export default function OtisIntro() {
  return (
    <div className="contenido">
      <div className="row">
        <div className="col-xl-1 md-2"></div>
        <div className="col-xl-10 md-8">
          <div className="titulootis">
            <h1>TEST DE OTIS</h1>
            <p>
              <b>LEA ESTO CON MUCHA ATENCIÓN:</b>
            </p>
            <p>
              Usted irá resolviendo preguntas parecidas a estas. Marque la
              alternativa que considera es correcta como se le muestra en los
              ejemplos:
            </p>
          </div>

          <div>
            <p>
              <b>EJEMPLO 1:</b> ¿Cuál de estas cinco palabras nos indica mejor
              lo que es una manzana?
            </p>
            <div className="containerotis">
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault"
                  id=""
                />
                <b>A.</b> Flor
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault"
                  id=""
                />
                <b>B.</b> Árbol
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault"
                  id=""
                />
                <b>C.</b> Legumbre
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault"
                  id=""
                />
                <b>D.</b> Fruto
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault"
                  id=""
                />
                <b>E.</b> Animal
              </p>
            </div>
            <p>
              <b>*</b> La respuesta exacta es <b>“Fruto”</b>, con la letra “D”,
              por eso deberá marcar el recuadro con la letra <b>“D”.</b>
            </p>
          </div>

          <div>
            <p>
              <b>EJEMPLO 2:</b> ¿Cuál de estas cosas es redonda?
            </p>
            <div className="containerotis">
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault2"
                  id=""
                />
                <b>A.</b> Ladrillo
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault2"
                  id=""
                />
                <b>B.</b> Libro
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault2"
                  id=""
                />
                <b>C.</b> Pelota
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault2"
                  id=""
                />
                <b>D.</b> Casa
              </p>
              <p>
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault2"
                  id=""
                />
                <b>E.</b> Baúl
              </p>
            </div>
            <p>
              <b>*</b> La respuesta exacta es <b>“Pelota”</b>, con la letra “C”,
              por eso deberá marcar el recuadro con la letra <b>“C”.</b>
            </p>
          </div>

          <div>
            <p>
              <b>EJEMPLO 3:</b> ¿Cuál de estos números tiene todas sus cifras
              impares?
            </p>
            <div className="containerotis">
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault3"
                  id=""
                />
                <b>A.</b> 2.43
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault3"
                  id=""
                />{" "}
                <b>B.</b> 9.871
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault3"
                  id=""
                />
                <b>C.</b> 6.482
              </p>
              <p className="pregunta">
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault3"
                  id=""
                />{" "}
                <b>D.</b> 3.175
              </p>
              <p>
                <input
                  className="form-check-input otis"
                  type="radio"
                  name="flexRadioDefault3"
                  id=""
                />
                <b>E.</b> 19.783
              </p>
            </div>
            <p>
              <b>*</b> La respuesta exacta es <b>“3.175”</b>, con la letra “D”,
              por eso deberá marcar el recuadro con la letra <b>“D”.</b>
            </p>
          </div>

          <p>
            A continuación se encuentran 40 preguntas del mismo tipo.{" "}
            <b>Para hacer el ejercicio tiene 15 minutos</b>, debe aprovechar sin
            detenerse y haciendo la mayor cantidad de respuestas correctas. Si
            no sabe una respuesta pase a la siguiente pregunta.
          </p>
          <p>
            Presione en el Boton <b>INICIAR</b> para empezar con la prueba
          </p>
          <Link to="/otisprueba">
            <button className="btn btn-success">INICIAR</button>
          </Link>
        </div>
        <div className="col-xl-1 md-2"></div>
      </div>
    </div>
  );
}
