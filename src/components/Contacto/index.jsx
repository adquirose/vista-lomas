import { useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Label, FormGroup, Input, Button } from "reactstrap"
import { Email, LogoWhatsapp, PhoneCall } from '../Icons';
import LogoTavacorp from '../../assets/images/tavacorp.png';
import LogoVistaLomas from '../../assets/images/logo.png';

const INITIAL_STATE = {
  nombre:'',
  email:'',
  mensaje:''
}
function Formulario(){
  const [data, setData] = useState(INITIAL_STATE)
  const [isLoading, setIsLoading] = useState(false)
  const handleOnChange = event => {
    event.preventDefault()
    setData({...data, [event.target.name]: event.target.value})
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
		const { nombre, email, mensaje } = data 
		const message = `
			Nombre: ${nombre} 
			Email: ${email} 
			Mensaje: ${mensaje}
    `
    const info = {
      to:'vistalomas@tavacorp.cl',
      replyTo: email,
      subject:'Formulario Contacto',
      text: message
    }

		setIsLoading(true)
		axios.post('https://us-central1-firemailer.cloudfunctions.net/submitContactoFZ',info)
			.then(res => {
				console.log(`mensaje enviado: ${res.data.isEmailSend}`)
				setIsLoading(false)
			})
			.catch(error => console.log(`ha ocurrido un error ${error}`))
		setData(INITIAL_STATE)
	};
  const { nombre, email, mensaje } = data
  const isDisabled = nombre === '' || email === '' 
  return(
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label>Nombre</Label>
        <Input
          name="nombre"
          placeholder="Tu Nombre"
          value={nombre}
          onChange={handleOnChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          name="email"
          placeholder="Tu Email"
          value={email}
          onChange={handleOnChange}
          />
      </FormGroup>
      <FormGroup>
        <Label>Mensaje</Label>
        <Input
          name="mensaje"
          value={mensaje}
          onChange={handleOnChange}
          placeholder="Tu Mensaje"
        />
      </FormGroup>
        {isLoading ? 
          <span style={{fontSize:'16px', color:'black'}}>Enviando...</span> :
          <Button
            type="submit"
            disabled={isDisabled}
          >
            Enviar
          </Button>
        }   
    </Form>
  )
}
function Contacto() {
  const handleOnClick = () =>  window.open('https://api.whatsapp.com/send/?phone=56927022045')
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
                    <div className="d-flex pb-3 pt-4"><PhoneCall/><a className="ps-3" href="tel:+56927022045">+56927022045</a></div>
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