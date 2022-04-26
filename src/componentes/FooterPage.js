import React from "react";
import { Container, Row, Col } from "reactstrap";
function FooterPage() {
    return (
        <div style={{ backgroundColor: '#229954', padding: '6rem',paddingBottom:'6rem', width: 'auto',height:'auto' }}>
            <Container>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                >
                    <Col><img src="assets/logo-pauxi-mitu.png" width='100%'></img></Col>
                    <Col style={{ fontSize: '20px' }}></Col>
                    <Col><img src="assets/logo-pauxi-mitu.png" width='100%'></img></Col>
                </Row>
                <hr></hr>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                >
                    <Col>
                        <Row
                            md="1"
                            sm="1"
                            xs="1"
                        >
                            <Col><h2>Categorias</h2></Col>
                            <Col>Noticias</Col>
                            <Col>Historia</Col>
                            <Col>Destaques</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row
                            md="1"
                            sm="1"
                            xs="1"
                        >
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row
                            md="1"
                            sm="1"
                            xs="1"
                        >
                            <Col><h2>Contatos</h2></Col>
                            <Col>Facebook</Col>
                            <Col>Instagram</Col>
                            <Col>Twitter</Col>
                            <Col>Tel: (18) 99999-9999</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default FooterPage;