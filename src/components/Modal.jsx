import {useState} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from "../img/cerrar.svg"

const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto}) => {


  const [mensaje, setMensaje]=useState('')
  const [nombre,setNombre]= useState('')
  const [cantidad,setCantidad] = useState('')
  const [categoria,setCategoria]=useState('')

  const handleSubmit =(e)=>{

    e.preventDefault();

    if([nombre,cantidad,categoria].includes('')){

    setMensaje('Todos los campos son obligatorios');

              setTimeout(()=>{

               setModal('')
                  
                },500)
               return


      }
      guardarGasto({nombre,cantidad,categoria})
  }

    const ocultarModal=()=>{

       
        setAnimarModal(false)

        setTimeout(()=>{

          setModal(false)
        },500)
    }
  return (
    <div className="modal">
        
        <div className="cerrar-modal">
            <img
             src={CerrarBtn}
             alt="Cerrar Modal"
             onClick={ocultarModal}
            
            />
            </div>
        <form
          onSubmit={handleSubmit}
         className={`formulario ${animarModal ? "animar":'cerrar' }`}>

            <legend> Nuevo Gasto</legend>
             
             {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <div className="campo"> 
               <label htmlFor="nombre"> Nombre Gasto</label>
                   <input
                      id="nombre" 
                      type="text"
                       placeholder="Añade el nombre del gasto"
                       value={nombre}
                       onChange={e =>setNombre(e.target.value)}
            
                        />

            </div>

            <div className="campo"> 
               <label htmlFor="cantidad"> Cantidad</label>
                   <input
                      id="cantidad" 
                      type="number"
                       placeholder="Añade la cantidad"
                       value={cantidad}
                       onChange={e =>setCantidad(Number(e.target.value))}
                      
            
                        />

            </div>

            <div className="campo"> 

               <label htmlFor="categoria"> Categoria</label>

                   <select id="categoria"
                     value={categoria}
                     onChange={e =>setCategoria(e.target.value)}
                    
                   >
                      <option value="">--Seleccione--</option>
                      <option value="ahorro">Ahorro</option>
                      <option value="comida">Comida</option>
                      <option value="casa">Casa</option>
                      <option value="gastos">Gastos Varios</option>
                      <option value="ocio">Ocio</option>
                      <option value="salud">Salud</option>
                      <option value="supcripciones">Subcripciones</option>
                   </select>
                   

            </div>
            <input
                     
                      type="submit"
                       value="Añadir Gastos"
            
                        />

         </form>
            
        </div>
  )
}

export default Modal