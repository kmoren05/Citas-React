import React from 'react'

const ListadoGastos = ({gastos}) => {

  return (
    <div className="listado-gasto">

        <h2> {gastos.length ? 'Gastos' : 'No hay Gastos aun '}</h2>

       
        
    </div>
  )
}

export default ListadoGastos