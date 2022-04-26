import React, { useState, useEffect } from "react";
import { CardGroup, Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from "reactstrap";
import axios from "axios";
function Cardgroups(props) {
    const [data, setData] = useState([]);
    const [id,setId] = useState([]);
    
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem');
            setData(result.data);
        };

        GetData();
        
    }, []);
    const ultimo = data.length;
    const antepenltimo = data.length - 3;
    console.log(data)
    return (
        <Row
            md="3"
            sm="2"
            xs="1">
            
            <br></br>
            {data.slice(antepenltimo, ultimo).map((postagem, index) => {
                const ultimo = data.length - 1;
                const antepenltimo = data.length - 3;
                return (
                    <CardGroup style={{ padding: '1em' }}>
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="assets/img-10.jpeg"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    <h1 key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.titulo}</h1>
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <h3 key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.autor}</h3>
                                </CardSubtitle>
                                <CardText>
                                    <p key={postagem} style={{ maxWidth: "50ch", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{postagem.conteudo}</p>
                                </CardText>
                                <Button >
                                    <p key={postagem}>Mais...</p>
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                )
            })}


        </Row>
    )
}
export default Cardgroups;