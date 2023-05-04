import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FavouriteCard from './FavouriteCard';
import { Container } from 'react-bootstrap';

const Favourite = () => {

    const favourites = useLoaderData();


    return (
        < Container >
            <h2 className='text-center mt-5 mb-3'>Your Favourites</h2>
            <div className='my-3'>
                {
                    favourites.map((favourite, idx) => <FavouriteCard key={idx} favourite={favourite}></FavouriteCard>)
                }
            </div>
        </Container >
    );
};

export default Favourite;