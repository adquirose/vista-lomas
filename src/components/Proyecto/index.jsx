import { Container, Row, Col } from 'reactstrap'
import ImgProyecto from '../../assets/images/proyecto1.jpg';
import ImgCondominio from '../../assets/images/proyecto2.jpg';

function ElCondominio(){
    return(
        <div id="condominio" className='section'>
            <Container>
                <Row>
                    <Col sm="12" md="6">
                        <img src={ImgCondominio} className="image-proyecto" alt="img-condominio"/>
                    </Col>
                    <Col sm="12" md="6" className='pt-3 pt-md-0'>
                        <div className='pt-sm-4 pt-0'>
                            <h2>EL CONDOMINIO</h2>
                            <div className='subraya bg-white'/>
                        </div>
                        <p>
                            El condominio cuenta con amplias áreas verdes interiores, 
                            estacionamientos para visitas, estacionamientos para bicicletas y seguridad 24/7.<br/>
                            Su ubicación permite una rápida y expedita conectividad a 
                            todo tipo de servicios y centros comerciales, clubes de golf y espacios deportivos para práctica 
                            de pádel, tenis, mountain bike y espectaculares 
                            senderos para trote y trecking.<br/>
                        </p>
                        <ul>
                            <li>Acceso por calle privada con ingreso controlado 24/7.</li>
                            <li>10 estacionamientos de visitas</li> 
                            <li>Estacionamientos para bicicletas</li>
                            <li>Amplias áreas verdes con proyecto de paisajismo.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
function ElProyecto() {
  return (
    <div id="proyecto" className='section'>
        <Container>
            <Row className='mt-3'>
                <Col sm="12" md="6">
                    <div>
                        <h2>EL PROYECTO</h2>
                        <div className='subraya bg-white'/>
                    </div>
                    <p>
                        Vista Lomas un proyecto exclusivo inserto en un entorno natural con vistas 
                        panorámicas al Valle de Los Trapenses y cerro Manquehue.<br/>
                        Sólo 12 casas mediterráneas de 322 m2 totales construidos en terrenos de hasta 
                        764 m2 que combinan diseño, elegancia y entorno.<br/>
                        Vista Lomas es un condominio donde podrás disfrutar de la tranquilidad 
                        y ausencia de ruido del sector.<br/>
                        Con una distribución moderna y gran diseño arquitectónico, 
                        privilegiamos la distribución interior, luminosidad y espacios.<br/>
                        Las casas están emplazadas en terrenos con pendientes controladas que 
                        permiten extender las vistas por todo el valle.
                    </p>
                </Col>
                <Col sm="12" md="6" className='d-none d-md-block'>
                    <img src={ImgProyecto} className="image-proyecto" alt="img-proyecto"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
function Proyecto(){
    return(
        <div id="proyecto-container">
            <ElProyecto/>
            <ElCondominio/>
            <div className='d-flex justify-content-center'>
                <button className='button'>VER BROCHURE DIGITAL</button>
            </div>
        </div>
    )
}
export default Proyecto

