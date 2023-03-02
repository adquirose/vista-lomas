import React from 'react'
import { Form as FormStyle, Input, Button } from '../../global/styles'

function Form() {
  return (
    <FormStyle style={{display:'grid', gridAutoFlow:'row'}}>
      <Input type="text" placeholder='Nombre'/>
      <Input type="email" placeholder='Email'/>
      <Input type="text" placeholder='Asunto' />
      <Input type="textarea" placeholder='Mensaje'/>
      <Button>Enviar</Button>
    </FormStyle>
  )
}

export default Form