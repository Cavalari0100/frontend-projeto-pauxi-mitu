import React, { useState, useEffect } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
function TabelaDeNoticias() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem');
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
                        <th scope="row">Titulo</th>
                        <th scope="row">Conteudo</th>
                        <th scope="row">Autor</th>
                    </tr>
                </thead>
            </Table>

            {data.map((noticia, idx) => {
                return (
                    <Table
                        bordered='true'
                        hover='true'
                        responsive
                        size="sm"
                        striped
                    >

                        <tr>
                            <td>{noticia._id}</td>
                            <td>{noticia.titulo}</td>
                            <td>{noticia.conteudo}</td>
                            <td>{noticia.autor}</td>
                        </tr>
                    </Table>
                )
            })}

        </Container>
    )
}
export default TabelaDeNoticias;