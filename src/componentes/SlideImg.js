import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button, Container, Row } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
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
    
    const attPage = (e) => {
        window.location.reload();
    }

    return (
        <div>
            <Container>
                <Row>
                    <Carousel infiniteLoop='true' interval='3000' width='100%' autoPlay='true' dynamicHeight='true'>
                        {data.slice(antepenltimo, ultimo).map((postagem, index) => {
                            return (
                                <div>
                                    <img src="assets/img-10.jpeg" />
                                    <Button onClick={attPage}><Link to={"/postagem/" + postagem._id}><p className="legend" key={postagem}>{postagem.titulo}</p></Link></Button>
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