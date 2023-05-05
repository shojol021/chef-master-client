import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";

const Featured = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-ph-server-shojol021.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    const featured = chefs.filter(chef => chef.featured)

    return (
        <section className="py-5">
            <Container>
                <h2 className="row-cols-1 row-cols-md-3 g-4 align-items-stretch">Featured Recipes</h2>
                <Row>
                    {
                        featured.map(chef =>
                            <Col key={chef.id} lg={4} className="mb-1">
                                <CardGroup className="h-100">
                                    <Card className="shadow -h-100">
                                        <Card.Img variant="top" src={chef.profileImage} />
                                        <Card.Body>
                                            <Card.Title>{chef.recipes.find(r => r.rating > 4.8).recipeName}</Card.Title>
                                            <Card.Text>
                                                {chef.recipes.find(r => r.rating > 4.8).cookingMethod}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted d-flex">
                                                <Rating
                                                    style={{ maxWidth: 130 }}
                                                    value={`4.${chef.id+5}`}
                                                    readOnly
                                                />
                                                (4.{chef.id+5})
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Featured;
