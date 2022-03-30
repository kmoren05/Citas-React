import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto}) {
    
  return (
      <header> <h1>Planificador de gastos</h1>

      {isValidPresupuesto ?(

        <ControlPresupuesto
        presupuesto ={presupuesto}
        
        />
      ):(
      <NuevoPresupuesto
         
        presupuesto ={presupuesto}
        setPresupuesto={setPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
   
     />)}
      
           
      </header>
  )
}

export default Header