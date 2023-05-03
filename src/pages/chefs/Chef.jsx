import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const chefData = useLoaderData()
    console.log(chefData)

    return (
        <Card className="bg-dark text-white">
            <Card.Img src="https://i.postimg.cc/C5yryCpz/chef-banner.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Container>
                    <img className='w-50 mx-auto d-block rounded' src={chefData.profileImage} alt="" />
                    <Card.Title className='text-center mt-4 text-warning'>{chefData.chefName}</Card.Title>
                    <Card.Text className='text-center'>
                        <span className='fw-bold text-decoration-underline'>About this chef: </span>
                        {chefData.shortBio}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Container>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Chef;