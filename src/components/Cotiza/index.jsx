
import { Container, Row, Col } from 'reactstrap';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const MyGallery = () => (
    <Gallery>
      <div className='gallery-container'>
      <Item
        original="./src/assets/images/cotiza/1.jpg"
        thumbnail="./src/assets/images/cotiza/thumb/1.jpg"
        width="4000"
        height="3692"
      >
        {({ ref, open }) => (
            <div>
                <img className="image-gallery" ref={ref} onClick={open} src="./src/assets/images/cotiza/thumb/1.jpg" />
                <div className='d-flex justify-content-center pt-3'><button className='button'>COTIZA</button></div>
            </div>
        )}
      </Item>
      <Item
        original="./src/assets/images/cotiza/2.jpg"
        thumbnail="./src/assets/images/cotiza/thumb/2.jpg"
        width="4000"
        height="2995"
      >
        {({ ref, open }) => (
            <div>
                <img className="image-gallery" ref={ref} onClick={open} src="./src/assets/images/cotiza/thumb/2.jpg" />
                <div className='d-flex justify-content-center pt-3'><button className='button'>COTIZA</button></div>
            </div>
        )}
      </Item>
      </div>
    </Gallery>
  )
function Cotiza() {
    return (
        <div id="cotiza" className='section'>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm="auto">
                        <h2>COTIZA TU PRÓXIMA CASA ACA</h2>
                        <div className='subraya bg-white'/>
                    </Col>
                </Row>
                <Row>
                    <MyGallery/>
                </Row>
            </Container>
        </div>
    )
}

export default Cotiza