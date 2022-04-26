import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Col, FormText, Input, Button } from "reactstrap";
import axios from "axios";
function CadastroPassaro() {

    const [newPassaro, setNewPassaro] = useState({ especie: '', nome: '', caracteristica: '', historia: '' });
    const url = 'http://localhost:3001/novopassaro';

    const InsertNewPostagem = (e) => {
        e.preventDefault();
        //debugger;
        const data = { especie: newPassaro.especie, nome: newPassaro.nome, caracteristica: newPassaro.caracteristica, historia: newPassaro.historia }
        axios.post(url, data);
    };

    const onChange = (e) => {
        e.persist();
        //debugger;
        setNewPassaro({ ...newPassaro, [e.target.name]: e.target.value });
    }

    const attPage = (e) => {
        window.location.reload();
    }
    return (
        <Container
            className="bg-light border"
            fluid
            style={{ padding: "6rem" }}>
            <Form onSubmit={InsertNewPostagem}>
                <FormGroup row>
                    <Label
                        for="nome"
                        sm={2}
                    >
                        Nome do passaro:
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="nome"
                            name="nome"
                            placeholder="Digite o nome da ave"
                            type="text"
                            value={newPassaro.nome} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="especie"
                        sm={2}
                    >
                        Especie:
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="especie"
                            name="especie"
                            placeholder="Digite a especie da ave"
                            type="text"
                            value={newPassaro.especie} onChange={onChange}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label
                        for="caracteristica"
                        sm={2}
                    >
                        Caracteristica:
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="caracteristica"
                            name="caracteristica"
                            placeholder="Digite as caracteristicas da ave"
                            type="text"
                            value={newPassaro.caracteristica} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="historia"
                        sm={2}
                    >
                        Historia:
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="historia"
                            name="historia"
                            placeholder="Digite a historia da ave"
                            type="textarea"
                            value={newPassaro.historia} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                        sm={{
                            offset: 2,
                            size: 10
                        }}
                    >
                        <Button style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" onClick={attPage}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    )
}
export default CadastroPassaro;