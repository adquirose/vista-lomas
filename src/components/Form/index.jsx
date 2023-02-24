import React from 'react'
import './styles.css'
function Form() {
  return (
        <form style={{display:'grid', gridAutoFlow:'row'}}>
            <input type="text" placeholder='Nombre'/>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Asunto' />
            <input type="textarea" placeholder='Mensaje'/>
            <button>Enviar</button>
        </form>
    
  )
}

export default Form