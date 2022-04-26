import React, { useState, useEffect } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
function TabelaDePassaro() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/passaro');
            setData(result.data);
        };

        GetData();
    }, []);
    return (
        <Container
            className="bg-light border"
            fluid
            style={{ padding: "6rem" }}>
            <Table>
                <thead>
                    <tr>
                        <th scope="row">Especie</th>
                        <th scope="row">Nome</th>
                        <th scope="row">Caracteristica</th>
                        <th scope="row">Historia</th>
                    </tr>
                </thead>
            </Table>
            {data.map((passaro, idx) => {
                return (
                    <Table
                        bordered='true'
                        hover='true'
                        responsive
                        size="sm"
                        striped
                    >
                        <tr>
                            <td>{passaro._id}</td>
                            <td>{passaro.especie}</td>
                            <td>{passaro.nome}</td>
                            <td>{passaro.caracteristica}</td>
                            <td>{passaro.historia}</td>
                        </tr>
                    </Table>
                )
            })}

        </Container>
    )
}
export default TabelaDePassaro;