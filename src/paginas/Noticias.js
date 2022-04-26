import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
function Noticia(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem/625feef27c1ad2f03f02e7f1');
            setData(result.data);
        };

        GetData();

    }, []);
    
    return (

        <Container
            className="bg-light border"
            fluid
            style={{ padding: "6rem" }}
        >
            {console.log(data)}
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col><h1>{data.titulo}</h1></Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col><h2 >{data.conteudo}</h2></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col><h3>{data.auto}</h3></Col>
                            <Col></Col>
                        </Row>
                    </Container>
        </Container>
    )
}
export default Noticia;