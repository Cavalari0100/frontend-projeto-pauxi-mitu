import React from "react";
import { Container , Row , Col} from "reactstrap";
import Cardgroups from "../componentes/CardGrops";
import FooterPage from "../componentes/FooterPage";
import SlideImg from "../componentes/SlideImg";

function Home() {
    console.log("aaa")
    return (
        <Container
            className="bg-light border"
            fluid
            style={{padding:"6rem"}}>
            <SlideImg/>
            <hr></hr>
            <h1>Destaques</h1>
            <Row>
                <Col><Cardgroups/></Col>
            </Row>
            <hr></hr>
            <FooterPage/>
        </Container>
    )
}
export default Home;