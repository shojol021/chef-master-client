import React, { useContext, useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { Button, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';

const ChefsSection = () => {

    const {loading, setLoading} = useContext(AuthContext)

    const [chefs, setChefs] = useState([])
    const [seeMore, setSeeMore] = useState(false)

    useEffect(() => {
        fetch('https://assignment-10-ph-server-shojol021.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
        setLoading(false)
    }, [])

    const handleSeeMore = () => {
        const toggle = !seeMore;
        setSeeMore(toggle)
    }

    return (
        <>
            {
                loading &&
                <div style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="border" variant="warning" />
                </div>
            }
            <div className='bg-dark py-3'></div>
            <div className='background-img background py-5 my-'>
                <h2 className='fs-1 text-center text-white mb-0 py-5'>Our Chefs</h2>

                {
                    chefs.slice(0, seeMore ? 8 : 6).map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }

                <div className='text-center'>
                    <Button onClick={handleSeeMore} variant='warning'>{seeMore ? 'See less' : 'See more'}</Button>
                </div>
            </div>
        </>
    );
};

export default ChefsSection;