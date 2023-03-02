import React from 'react'
import { Grid, Container, P } from '../../global/styles'
import Full1 from '../../assets/images/full1.jpg'
import Full2 from '../../assets/images/full2.jpg'

function AyD() {
  return (
    <Container>
        <Grid gridTemplateColumns="1fr 1fr">
            <div style={{display:'grid', gap:'15px'}}>
                <img style={{width:'100%'}} src={Full1} alt="img1"/>
                <img style={{width:'100%'}} src={Full2} alt="img2"/>
            </div>
            <div style={{display:'grid', alignContent:'center'}}>
                <div style={{display:'grid', width:'fit-content', position:'relative'}}>
                    <P textAlign="left" paddingLeft="35px" fontSize="35px" fontWeight="300">
                        ARQUITECTURA<br/>& DISEÑO<br/>
                    </P>
                    <div style={{width:'85px', marginTop:'10px',height:'8px', background:'gray', position:'absolute', bottom:30,right:-35,justifySelf:'end'}}/>
                </div>
                
                <P textAlign="left" paddingLeft="35px" paddingTop="60px" fontSize="16px"> 
                    El proyecto cuenta con una amplia área verde interior, sector de juegos para niños, 
                    estacionamientos para visita y seguridad 24/7.<br/><br/>
                    Su ubicación permite una rápida y expedita conectividad a todo tipo de servicios y centros 
                    comerciales, clubes de golf y espacios deportivos para práctica de pádel, tenis, 
                    mountain bike y espectaculares senderos para trote y trecking.
                </P>
            </div>
        </Grid>
    </Container>
  )
}

export default AyD