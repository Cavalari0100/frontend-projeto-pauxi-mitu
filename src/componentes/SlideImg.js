import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container, Row } from "reactstrap";
import axios from "axios";
function SlideImg() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem');
            setData(result.data);
        };

        GetData();

    }, []);
    const ultimo = data.length;
    const antepenltimo = data.length - 6;

    return (
        <div>
            <Container>
                <Row>
                    <Carousel infiniteLoop='true' interval='3000' width='100%' autoPlay='true' dynamicHeight='true'>
                        {data.slice(antepenltimo, ultimo).map((postagem, index) => {
                            return (
                                <div>
                                    <img src="assets/img-10.jpeg" />
                                    <p className="legend" key={postagem}>{postagem.titulo}</p>
                                </div>
                            )
                        })}
                    </Carousel>
                </Row>
            </Container>
        </div>
    )
}
export default SlideImg;