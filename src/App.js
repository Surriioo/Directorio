import React,{useState, useEffect} from 'react'
import Mostrar from './components/Mostrar';
import "bootstrap/dist/css/bootstrap.min.css"

/* Para obtener los valores del local storage */

const getDatafromLS=()=>{
  const data = localStorage.getItem('contactos');
  if (data) {
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [contactos, setContactos] = useState(getDatafromLS());

  const [Nombre, setNombre] = useState('');
  const [Email, setEmail] = useState('');
  const [Numero, setNumero] = useState('');

  const handleAddContacto = (e) => {
    e.preventDefault();
  
    /* Para crear el objeto */
    
    let Contacto={
      Nombre,
      Email,
      Numero
    }

    setContactos([...contactos,Contacto]);

    setNombre('');
    setEmail('');
    setNumero('');
  }

  /* Para borrar */
  const deleteContacto=(Numero)=>{
    const filterContactos = contactos.filter((element,index)=>{
      return element.Numero !== Numero
    })
    setContactos(filterContactos);
  }

  /* Para guardar los datos en el storage*/
  useEffect(()=>{
    localStorage.setItem('contactos',JSON.stringify(contactos));
  },[contactos])

  return (
    <div className='wrapper'>
      <h1>Directorio de Contactos</h1>

      <div class="mx-5">
      <form>
        <input type="text" placeholder="Buscar"></input>
        <button type="submit" class="btn btn-primary mx-2">Buscar</button>
      </form>
      </div>

      <div className='main'>

        {/* Container derecha */}
        <div className='form-container'>
          <form autoComplete='off' className='form-group' onSubmit={handleAddContacto}> 

          {/* Contenido para añadir */}
          <label>Nombre</label>
          <input type='text' placeholder='Kakashi' className='form-control' required onChange={(e)=>setNombre(e.target.value)} value={Nombre}></input>
          <br></br>
          <label>Email</label>
          <input type='email' placeholder='Kakashi@gmail.com' className='form-control' required onChange={(e)=>setEmail(e.target.value)} value={Email}></input>
          <br></br>
          <label>Numero</label>
          <input type='text' placeholder='912345678' className='form-control' required onChange={(e)=>setNumero(e.target.value)} value={Numero}></input>
          <br></br>
          <button type='primary' className='btn btn-primary'> Añadir </button>
          </form>
        </div>

        {/*  */}

        {/* Container izquierda */}
        <div className='view-container'>
          {contactos.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Número</th>
                    <th>Borrar</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  <Mostrar contactos={contactos} deleteContacto={deleteContacto}/>
                </tbody>
              </table>
            </div>
          </>}
          {contactos.length < 1 && <div>No hay contactos añadidos</div>}
        </div>

      </div>

    </div>
  )
}

export default App
