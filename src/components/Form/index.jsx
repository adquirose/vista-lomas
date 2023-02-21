import React from 'react'
import './styles.css'
function Form() {
  return (
    <div>
        <form style={{display:'grid', gridAutoFlow:'row', width:'360px'}}>
            <input type="text" placeholder='Nombre'/>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Asunto' />
            <input type="textarea" placeholder='Mensaje'/>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form