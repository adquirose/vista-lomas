import React from 'react'
import Form from '../components/Form'
import { Grid, Container } from '../global/styles'

function Contacto() {
  return (
    <Container>
      <Grid gridTemplateColumns='1fr 1fr' justifyContent="center" justifyItems="center" alignContent="center">
          <Form/>
          <p>TExto</p>
      </Grid>
    </Container>
  )
}

export default Contacto