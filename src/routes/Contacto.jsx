import React from 'react'
import Form from '../components/Form'

const styles = {
  display:'grid',
  gridTemplateColumns:'1fr 1fr',
  left:0,
  right:0,
  margin:'0 auto',
  alignContent:'center'
}
function Contacto() {
  return (
    <div style={styles}>
        <Form/>
    </div>
  )
}

export default Contacto