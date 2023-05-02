import React from 'react';
import { Button } from 'react-bootstrap';
import './home.css'

const ChefCard = ({ chef }) => {
    const { id, chefName, yearsOfExperience, numRecipes, likes, profileImage, shortBio, recipes, } = chef
    return (
        <div className='py-3'>
            <div className="card w-75 mx-auto">
                <div className="row g-0 card-bg">
                    <div className="col-md-4">
                        <img src={profileImage} className="img-fluid rounded-start" alt="chef" />
                    </div>
                    <div className="col-md-8 my-auto">
                        <h4 className="card-title ms-3">{chefName}</h4>
                        <div className="card-body">
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col">
                                        <h6>Experience</h6>
                                        <p>{yearsOfExperience} Years</p>
                                    </div>
                                    <div class="col">
                                        <h6>Total Recipes</h6>
                                        <p>{numRecipes} Years</p>
                                    </div>
                                    <div class="col">
                                        <h6>Likes</h6>
                                        <p>{likes}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <Button variant='warning' className='w-50'>View Recipes</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;