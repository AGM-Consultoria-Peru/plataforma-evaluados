import React from 'react'
import { Link } from 'react-router-dom'

export default function DespedidaBarsit() {
    return (
        <div className="despedida">
            <h2>¡Culminaste la prueba!</h2>
            <p>Gracias por participar de nuestro Proceso de Selección. Los resultados se enviarán a los reclutadores. Dele click en FINALIZAR para guardar tus resultados y concluir con el proceso.</p>
            
            <Link to="/fin">
            <button className="btn btn-danger">FINALIZAR</button>
            </Link>
        </div>
    )
}