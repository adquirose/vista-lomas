import React from 'react'
import { Container, Grid , List, Item, Footer as FooterStyle } from '../../global/styles'

function Footer() {
  return (
    <FooterStyle>
      <Container>
        <Grid gridTemplateColumns="1fr 1fr" alignContent="center" padding="0" height="100%">
          <List color="white">
            <Item>Avenida la Dehesa 1201, oficina 709, Edificio Oriente. Santiago.</Item>
            <Item>vistalomas@tavacorp.cl</Item>
            <Item>+569 66780550</Item>
          </List>
        </Grid>
      </Container>
    </FooterStyle>
  )
}

export default Footer