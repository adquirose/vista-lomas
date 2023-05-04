import { Container, Row, Col, Form, Label, FormGroup, Input, Button } from "reactstrap"

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
  return (
    <div id="contacto" className="section">
        <Container>
            <Row>
              <Col>
                <h2>CONTÁCTANOS</h2>
                <div className='subraya bg-white'/>  
              </Col>
            </Row>
            <Row>
                <Col sm="12" md="6">
                  <div className="pt-4 ps-3">
                    <h3>Horario de Atención</h3>
                    <p>Lun - Vie, 8:00-22:00</p>
                  </div>
                  <div className="pt-2 ps-3">
                    <h3>Correo</h3>
                    <a href="mailto:vistalomas@tavacorp.cl">vistalomas@tavacorp.cl</a>
                  </div>
                  <div className="pt-2 ps-3">
                    <h3>Telefono</h3>
                    <a href="tel:+56966780540">+56 9 6678 0540</a>
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