import "bootstrap/dist/css/bootstrap.min.css";

export default function DISC() {

  return (
    <div>
      <div className="disccontainer">
        <div className="container-disc1">
          <div>
            <p className="titulo">Titulo (+) (-)</p>
          </div>

          <label className="checkbox-inline">
            <p>Expresivo</p>
            <input className="form-check-input" type="radio" id="exampleRadios" value="option"  name="exampleRadios"  /> 
            <input className="form-check-input" type="radio" id="exampleRadios" value="option" name="exampleRadios" /> 
          </label>


          <label class="checkbox-inline">
            <p>Sumiso</p>
            <input className="form-check-input" type="radio" id="exampleRadios" value="option" name="exampleRadios2" /> 
            <input className="form-check-input " type="radio" id="exampleRadios" value="option" name="exampleRadios2"/> 
          </label>

          <label class="checkbox-inline">
            <p>Enérgico</p>
            <input className="form-check-input" type="radio" id="exampleRadios" value="option" name="exampleRadios" /> 
            <input className="form-check-input" type="radio" id="exampleRadios" value="option" name="exampleRadios"/> 
          </label>

          <label class="checkbox-inline">
            <p>Controlado</p>
            <input className="form-check-input" type="radio" id="exampleRadios" value="option" name="exampleRadios" /> 
            <input className="form-check-input" type="radio" id="exampleRadios" value="option" name="exampleRadios"/> 
          </label>

          
        </div>

        {/* <div class="dos">Dos</div>
        <div class="tres">Tres</div>
        <div class="cuatro">Cuatro</div>
        <div class="cinco">Cinco</div>
        <div class="seis">Seis</div>
        <div class="siete">Siete</div>
        <div class="ocho">Ocho</div>
        <div class="nueve">Nueve</div>
        <div class="diez">Diez</div>
        <div class="once">Once</div>
        <div class="doce">Doce</div> */}
      </div>
    </div>
  );
}
