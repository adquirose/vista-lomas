import React from 'react'
import Logo from '../assets/logo.png'
import Barrio from '../components/Barrio'
import Full from '../components/Full'
import { PinDelete } from '../Icons'
import Bg from '../components/Bg'
import { P, H3, Container, Grid } from '../global/styles'

function Proyecto() {
    return (
        <div>
            <Bg width='100%' height='100%'>
                <Container>
                    <Grid gridTemplateColumns="1fr" >
                        <img style={{width:'80px', left:0, right:0, margin:'0 auto'}} src={Logo} alt="logo" />
                        <H3 color='white'><PinDelete width={24} height={24} color={'red'}/>LOS LITRES Nº 1800, LA DEHESA</H3>
                        <P fontSize="16px" marginLeft='100px' marginLeftSm='10px' marginRight='100px' marginRightSm='10px' color='white'>
                            Vista Lomas un proyecto exclusivo inserto en un entorno natural con vistas panoramicas
                            al valle de los trapenses, cerro Manquehue, lomajes precordilleranos.<br/><br/>
                            Solo 12 casas mediterráneas 250 m2 aproximados en terrenos de 652 m2 que combinan diseño elegancia 
                            y entorno.<br/><br/>
                            Vista Lomas es un condominio en donde podrás disfrutar de la tranquilidad y la ausencia de ruido
                            del sector.<br/><br/>
                            Con una distribución moderna y gran diseño arquitectónico privilegiamos la distribución 
                            interior, luminosidad y espacios.<br/><br/>
                            Las casas estan emplazadas en terrenos con pendientes controladas que permiten extender las vistas 
                            por todo el valle.
                        </P>
                    </Grid>
                </Container>
            </Bg>
            <Barrio/>
            <Full/>
        </div>        
    )
}
export default Proyecto
