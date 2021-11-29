import React from 'react'
import { Link } from 'react-router-dom'

export default function DespedidaBarsit() {
    return (
        <div className="despedida">
            <h2>¡Culminaste la primera prueba!</h2>
            <p>Gracias por participar de nuestro Proceso de Selección. Los resultados se enviarán a los reclutadores. Dele click en CONTINUAR para pasar a la siguiente prueba.</p>
            <Link to="/introotis">
            <button className="btn btn-success">CONTINUAR</button>
            </Link>
        </div>
    )
}
