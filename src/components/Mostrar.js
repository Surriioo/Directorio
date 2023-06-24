import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {pencil} from 'react-icons-kit/icomoon/pencil'

export const Mostrar = ({contactos, deleteContacto}) => {
  
  return contactos.map(Contacto =>(

    <tr key={Contacto.Numero}>
      <td>{Contacto.Nombre}</td>
      <td>{Contacto.Email}</td>
      <td>{Contacto.Numero}</td>

      <td className='borrar-btn' onClick={() => deleteContacto(Contacto.Numero)}>
        <Icon icon={trash}/>
      </td>
      <td className='editar-btn' onClick={() => deleteContacto(Contacto.Numero)}>
        <Icon icon={pencil}/>
      </td>

    </tr>

  ) )
}

export default Mostrar
