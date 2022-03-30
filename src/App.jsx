import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from "./components/Modal"
import { generarId } from './helpers'
import ListadoGastos from './components/ListadoGastos'



function App() {
  
 const [presupuesto,setPresupuesto]= useState(0)
 const [isValidPresupuesto, setisValidPresupuesto] = useState(false)

 const[modal, setModal]=useState(false)
 const[animarModal, setAnimarModal]=useState(false)

 const [gastos,setGastos]=useState([])

     const handleNuevoGasto =()=>{

      setModal(true)

      setTimeout(() =>{

      setAnimarModal(true)

              },1000)

                       }

        const guardarGasto =(gasto)=>{
        
               gasto.id = generarId()
              setGastos([...gastos,gasto])

              setAnimarModal(false)

              setTimeout(() =>{

                setModal(false)
          
                        },1000)

        }

  
  return (
    <div>
     <Header
     
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     isValidPresupuesto={isValidPresupuesto}
     setisValidPresupuesto={setisValidPresupuesto}
     />
     
       {isValidPresupuesto && (
   <>
      <main>
         <ListadoGastos
          gastos={gastos}
         />
      </main>
     <div className="nuevo-gasto">
         <img 
            src={IconoNuevoGasto}
            alt= "icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
      </div>
   </>
       )}

       {modal && <Modal
       
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}


       />}
       
     
     </div>
  )
}

export default App
