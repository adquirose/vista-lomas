import { Container, Row, Col, Form, Label, FormGroup, Input, Button } from "reactstrap"
import { Email, LogoWhatsapp, PhoneCall } from '../Icons';
import LogoTavacorp from '../../assets/images/tavacorp.png';
import LogoVistaLomas from '../../assets/images/logo.png';

function Formulario(){
  return(
    <Form>
      <FormGroup>
        <Label>Nombre</Label>
        <Input placeholder="Tu Nombre"/>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input placeholder="Tu Email"/>
      </FormGroup>
      <FormGroup>
        <Label>Mensaje</Label>
        <Input placeholder="Tu Mensaje"/>
      </FormGroup>
      <Button>Enviar</Button>
    </Form>
  )
}
function Contacto() {
  const handleOnClick = () =>  window.open('https://api.whatsapp.com/send/?phone=56966780540')
  return (
    <div id="contacto" className="section bg-white">
        <Container>
            <Row>
              <Col>
                <h2 className="color-black">CONTÁCTANOS</h2>
                <div className='subraya bg-black'/>  
              </Col>
            </Row>
            <Row className="pt-3 pb-5">
                <Col sm="12" md="6">
                  <div className="d-flex ps-3">
                    <img src={LogoVistaLomas} style={{width:'70px', paddingRight:'10px'}} alt="logo-vistalomas"/>
                    <img src={LogoTavacorp} style={{width:'140px', objectFit:'contain'}} alt="logo-tavacorp"/>
                  </div>
                  <div className="pt-4 ps-3">
                    <h3>Información de Ventas</h3>
                    <div className="d-flex pb-3 pt-4"><PhoneCall/><a className="ps-3" href="tel:+56927022045">+56 9 2702 2045</a></div>
                    <div className="d-flex pb-3"><Email/> <a className="ps-3" href="mailto:vistalomas@tavacorp.cl">vistalomas@tavacorp.cl</a></div>
                    <div className="d-flex pb-3" onClick={ handleOnClick }><LogoWhatsapp width={36} height={36}/><a className="ps-3" href="https://api.whatsapp.com/send/?phone=56927022045">+56 9 2702 2045</a></div>
                  </div>
                </Col>
                <Col sm="12" md="6" className="pt-3 pt-md-0">
                  <Formulario/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contacto