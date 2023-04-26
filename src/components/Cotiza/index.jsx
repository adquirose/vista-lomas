import { useState } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Planta1 from '../../assets/images/planta1.jpg';
import Planta2 from '../../assets/images/planta2.jpg';

function Cotiza() {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);
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
                    <Col className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='image-container' onClick={toggle1}>
                            <img src={Planta1} alt="img-planta1"/>
                        </div>
                        <div className='pt-3'>
                            <button className='button'>COTIZAR</button>
                        </div>
                        
                    </Col>
                    <Col className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='image-container' onClick={toggle2}>
                            <img src={Planta2} alt="img-planta2"/>
                        </div>
                        
                        <div className='pt-3'>
                            <button className='button'>COTIZAR</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal isOpen={modal1} toggle={toggle1} >
                            <ModalHeader className='color-black' toggle={toggle1}>Planta 1</ModalHeader>
                            <ModalBody className='color-black'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={modal2} toggle={toggle2} >
                            <ModalHeader className='color-black' toggle={toggle2}>Planta 2</ModalHeader>
                            <ModalBody className='color-black'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                        </Modal>
        </div>
    )
}

export default Cotiza