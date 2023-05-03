import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefsSection = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-ph-server-shojol021.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        <div className='bg-dark py-3'></div>
            <h2 className='text-center bg-dark text-warning mb-0 py-3'>Our Chefs</h2>
            <div className='background-img background py-5 my-'>

                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </>
    );
};

export default ChefsSection;