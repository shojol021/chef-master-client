import React from 'react';
import { Card } from 'react-bootstrap';

const FavouriteCard = ({ favourite }) => {
    return (
        <div className='my-3'>
            <Card>
                <Card.Body>
                    <Card.Title className='text-warning fw-bold'>{favourite.recipeName}</Card.Title>
                    <div>
                        <span className='fw-bold'>Cooking Method:</span> {favourite.cookingMethod}
                    </div>
                    <div>
                        <div className='fw-bold'>Ingredients</div>
                        <div className='d-flex flex-wrap'>
                            {favourite.ingredients.map((ingredient, index) => <div key={index} className='me-4'>{index + 1}. {ingredient}</div>)}
                        </div>
                    </div>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default FavouriteCard;