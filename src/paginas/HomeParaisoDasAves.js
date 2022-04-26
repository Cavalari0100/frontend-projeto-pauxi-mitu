import React from "react";
import { Container , Row , Col} from "reactstrap";

function HomeParaisoDasAves() {
    console.log("aaa")
    return (
        <Container
            className="bg-light border"
            fluid
            style={{padding:"6rem"}}>
            <Row>
                <Col><h1>Criadouro Paraiso das Aves</h1></Col>
            </Row>
            <Row>
                <Col><h2>Loren Upsolen</h2></Col>
            </Row>
        </Container>
    )
}
export default HomeParaisoDasAves;