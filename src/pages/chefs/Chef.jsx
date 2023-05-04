import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefRecipes from './ChefRecipes';

const Chef = () => {
    const chefData = useLoaderData()
    console.log(chefData)

    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src="https://i.postimg.cc/C5yryCpz/chef-banner.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Container className='d-flex'>
                        <img className='w-50 mx-auto d-block rounded' src={chefData.profileImage} alt="" />
                        <div className='ms-3 d-flex flex-column justify-content-between'>
                            <div>
                                <Card.Title className='text-center mt-4 text-warning'>{chefData.chefName}</Card.Title>
                                <Card.Text className='text-center'>
                                    <span className='fw-bold'>About this chef: </span>
                                    {chefData.shortBio}
                                </Card.Text>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <div>
                                    <h5>Likes</h5>
                                    <p>{chefData.likes}</p>
                                </div>
                                <div>
                                    <h5>Experience</h5>
                                    <p>{chefData.yearsOfExperience} Years</p>
                                </div>
                                <div>
                                    <h5>Total recipes</h5>
                                    <p>{chefData.numRecipes} Recipes</p>
                                </div>
                            </div>
                        </div>

                    </Container>
                </Card.ImgOverlay>
            </Card>
            <ChefRecipes chefData={chefData}></ChefRecipes>
        </>
    );
};

export default Chef;