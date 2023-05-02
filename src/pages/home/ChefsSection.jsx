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
        <div className='background-img background py-5 my-5'>
            {
                chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
        </div>
    );
};

export default ChefsSection;