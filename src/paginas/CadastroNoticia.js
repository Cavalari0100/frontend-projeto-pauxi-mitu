import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Col, FormText, Input, Button } from "reactstrap";
import axios from "axios";
function CadastroNoticia() {

    const [newPostagem, setNewPostagem] = useState({ titulo: '', conteudo: '', autor: '',imagempostagem:'' });
    const url = 'http://localhost:3001/novapostagem';

    const InsertNewPostagem = (e) => {
        e.preventDefault();
        //debugger;
        const data = { titulo: newPostagem.titulo, conteudo: newPostagem.conteudo, autor: newPostagem.autor,imagempostagem: newPostagem.imagempostagem }
        axios.post(url, data);
    };

    const onChange = (e) => {
        e.persist();
        //debugger;
        setNewPostagem({ ...newPostagem, [e.target.name]: e.target.value });
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
                        for="titulo"
                        sm={2}
                    >
                        Titulo
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="titulo"
                            name="titulo"
                            placeholder="Digite o titulo de sua materia"
                            type="text"
                            value={newPostagem.titulo} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="conteudo"
                        sm={2}
                    >
                        Conteudo
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="conteudo"
                            name="conteudo"
                            placeholder="Digite o conteudo de sua materia"
                            type="textarea"
                            value={newPostagem.conteudo} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                {/* <FormGroup>
                    <Label for="exampleFile">
                        Imagem da Noticia: 
                    </Label>
                    <Input
                        id="imagempostagem"
                        name="imagempostagem"
                        type="file"
                    />
                    <FormText>
                        Coloque a imagem que acompanha a noticia
                    </FormText>
                </FormGroup> */}
                <FormGroup row>
                    <Label
                        for="autor"
                        sm={2}
                    >
                        Autor
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="autor"
                            name="autor"
                            placeholder="Digite o nome do autor desta materia"
                            type="text"
                            value={newPostagem.autor} onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                {/* <FormGroup row>
                    <Label
                        for="exampleFile"
                        sm={2}
                    >
                        File
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                        />
                        <FormText>
                            This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup> */}
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
export default CadastroNoticia;