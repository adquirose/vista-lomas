import { Container, Row } from 'reactstrap'
import Mapa from '../../assets/images/mapa.png'

function Ubicacion() {
    const handleOnClick = () => {
        window.open('https://goo.gl/maps/1tSVSfbJZAGpByd57','_blank')
    }
  return (
    <div id="ubicacion" className='section'>
        <Container>
            <Row className='d-flex align-items-center flex-column'>
                <img src={Mapa} style={{maxWidth:'740px', width:'100%', height:'auto'}} alt="img-mapa" />
                <div style={{width:'220px'}}>
                    <button onClick={handleOnClick} className='button mt-4'>VER EN GOOGLEMAPS</button>
                </div>
                
            </Row>
        </Container>
    </div>
  )
}

export default Ubicacion