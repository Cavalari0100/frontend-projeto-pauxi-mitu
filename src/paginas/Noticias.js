import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
function Noticia(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem/' + props.match.params.id);
            setData(result.data);
        };

        GetData();

    }, []);
    console.log(props.match.params.id)
    let noticia = {
        titulo : data.titulo
    }
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
                            <Col sm='12'><h1>{data.titulo}</h1></Col>
                            <Col></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Container>
                            <Col><h3 style={{textAlign:'justify'}} >{data.conteudo}</h3></Col>
                            </Container>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Container>
                            <Col><h4 style={{color:'gray'}} >{data.autor}</h4></Col>
                            <Col></Col>
                            <Col></Col>
                            </Container>
                        </Row>
                    </Container>
        </Container>
    )
}
export default Noticia;