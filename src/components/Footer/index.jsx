import { Container, Row, Col } from 'reactstrap'
import LogoTavacorp from '../../assets/images/tavacorp-logo.png'

function Footer() {
  return (
    <div id="footer" className='section'>
        <Container>
            <Row className='border'>
                <Col>
                    <div style={{paddingLeft:'20px'}}>
                        <h6>Avenida La Dehesa 1201, oficina 709, Edificio Oriente. Santiago.</h6> 
                        <h6>vistalomas@tavacorp.cl</h6>
                        <h6>+569 6678 0540</h6>
                        <h5>VISTALOMAS.CL</h5>
                    </div>
                </Col>
                <Col className='position-relative'>
                    <img src={LogoTavacorp} style={{width:'125px', position:'absolute', right:'20px'}} alt="logo-tavacorp"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer