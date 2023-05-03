import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";

const Featured = () => {
    const [chefs, setChefs] = useState([])
    const [seeMore, setSeeMore] = useState(false)

    useEffect(() => {
        fetch('https://assignment-10-ph-server-shojol021.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    const featured = chefs.filter(chef => chef.featured)

    console.log(featured)
    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-5">Featured Recipes</h2>
                <Row>
                    {
                        featured.map(chef =>
                            <Col key={chef.id} lg={4} className="mb-4">
                                <CardGroup>
                                    <Card className="shadow">
                                        <Card.Img variant="top" src={chef.profileImage} />
                                        <Card.Body>
                                            <Card.Title>{chef.recipes.find(r => r.rating > 4.8).recipeName}</Card.Title>
                                            <Card.Text>
                                                {chef.recipes.find(r => r.rating > 4.8).cookingMethod}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                <FaRegClock className="me-2" />
                                                30 mins
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
