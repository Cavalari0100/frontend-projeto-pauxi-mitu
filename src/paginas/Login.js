import React , {useState} from "react";
import { Container, Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import axios from "axios";
function LoginPage() {

    const [newLogin, setLogin] = useState({ email: '', password: '' });
    const url = 'http://localhost:3001/loginfuncionario'

    const onChange = (e) => {
        e.persist();
        setLogin({ ...newLogin, [e.target.name]: e.target.value });
    }

    const Login = async (e) => {
        e.preventDefault();
        const result = await axios.post(url, newLogin).then(res => {
            return res.data;
        }).catch(err => {
            return false;
        })
        console.log(result);
        if (result.token) {
            localStorage.setItem("token", result.token);
            window.location = "/cadastronoticia"
        } else {
            alert("Você esta com problema de BIOs (bixo ignorante operando o sistema) ERRO!!!!!!")
        }

    }
    return (
        <Container
            className="bg-light border"
            fluid
            style={{ padding: "6rem" }}>
            <Form>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={2}
                    >
                        Email
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Digite seu email de login"
                            type="email"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}
                    >
                        Password
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Digite sua senha "
                            type="password"
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
                        <Button style={{ background: "#3399ff" }} type="submit"  className="btn btn-secondary mb-1" onClick={() => Login()}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    )
}
export default LoginPage;