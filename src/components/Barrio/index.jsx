import React from 'react'
import { P, Grid, List, Item, Container } from '../../global/styles'
import Galeria from '../Galeria'

function Barrio() {
  return ( 
    <Container>
        <Grid gridTemplateColumns='2fr 360px' gridTemplateColumnsLg="1fr">
            <div style={{width:'100%', height:'fit-content',display:'grid', gap:'15px'}}>
                <div style={{display:'grid', width:'fit-content', position:'relative'}}>
                    <P textAlign="left" fontSize="35px" marginLeftSm="10px" fontWeight="300">
                        SECTOR CONSOLIDADO <br/>CON VIDA DE BARRIO<br/>
                    </P>
                    <div style={{width:'85px', marginTop:'10px', height:'8px', background:'gray', position:'absolute', left:0,bottom:-10,justifySelf:'start'}}/>
                </div>
                <Galeria/>
            </div>
            <Grid alignSelf="start" padding="0" gridTemplateColumnsLg="1fr 1fr 1fr" gridAutoFlowLg="column">
                <List>
                    <Item textAlign="left" fontSize="16Lix" marginBottom="15Lix" fontWeight="700">Colegios</Item>
                    <Item textAlign="left">Craighouse</Item>
                    <Item textAlign="left">Monte Tabor y Nazaret</Item>  
                    <Item textAlign="left">Everest</Item>
                    <Item textAlign="left">Santiago College</Item>
                    <Item textAlign="left">Newland </Item>
                    <Item textAlign="left">Los Alerces</Item>
                    <Item textAlign="left">Huinganal</Item>
                    <Item textAlign="left">The Mayflower School</Item>
                    <Item textAlign="left"> Nido de Águilas</Item>
                </List>
                <List>
                    <Item textAlign="left" fontSize="16px" marginBottom="15px" marginTop="15px" fontWeight="700">Clinicas</Item>
                    <Item textAlign="left"> Meds </Item>
                    <Item textAlign="left">Alemana</Item> 
                    <Item textAlign="left">Santa María</Item> 
                </List>
                <List>
                    <Item textAlign="left" fontSize="16px" marginBottom="15px" marginTop="15px" fontWeight="700">Malls</Item>
                    <Item textAlign="left">Paseo Los Trapenses</Item>
                    <Item textAlign="left">VIVO Los Trapenses</Item>
                    <Item textAlign="left">Puerta Los Trapenses</Item>
                    <Item textAlign="left">Espacio Urbano</Item>
                    <Item textAlign="left">Portal La Dehesa</Item>
                    <Item textAlign="left">Futuro Mall Megacentro</Item>
                </List>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Barrio