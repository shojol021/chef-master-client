import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { Button } from 'react-bootstrap';

const ChefsSection = () => {

    const [chefs, setChefs] = useState([])
    const [seeMore, setSeeMore] = useState(false)

    useEffect(() => {
        fetch('https://assignment-10-ph-server-shojol021.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    const handleSeeMore = () => {
        const toggle = !seeMore;
        setSeeMore(toggle)
    }

    return (
        <>
            <div className='bg-dark py-3'></div>
            <div className='background-img background py-5 my-'>
                <h2 className='fs-1 text-center text-white mb-0 py-5'>Our Chefs</h2>

                {
                    chefs.slice(0, seeMore? 8: 6).map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }

                <div className='text-center'>
                    <Button onClick={handleSeeMore} variant='warning'>{seeMore? 'See less': 'See more'}</Button>
                </div>
            </div>
        </>
    );
};

export default ChefsSection;