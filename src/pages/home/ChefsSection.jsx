import React, { useEffect, useState, useRef } from 'react';
import ChefCard from './ChefCard';
import { Spinner } from 'react-bootstrap';

const ChefsSection = () => {

    const [loader, setLoader] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [chefs, setChefs] = useState([])
    const [seeMore, setSeeMore] = useState(false)
    const [visibleCards, setVisibleCards] = useState(3);

    const bottomRef = useRef();

    useEffect(() => {
        setLoader(true)
        fetch('https://assignment-10-ph-server-shojol021.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setLoader(false);
            })
            .catch(error => {
                console.log(error);
                setLoader(false);
            })
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = bottomRef.current.getBoundingClientRect().bottom <= window.innerHeight;
            if (isBottom && !loadingMore) {
                setLoadingMore(true);
                setTimeout(() => {
                    setVisibleCards(prevValue => prevValue + 1);
                    setLoadingMore(false);
                }, 500);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadingMore]);

    const visibleChefs = chefs.slice(0, seeMore ? chefs.length : visibleCards);

    return (
        <>
            {
                (loader || loadingMore) &&
                <div style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="border" variant="warning" />
                </div>
            }
            <div className='bg-dark py-3'></div>
            <div className='background-img background py-5 my-'>
                <h2 className='fs-1 text-center text-white mb-0 py-5'>Our Chefs</h2>

                {visibleChefs.map(chef => <ChefCard key={chef.id} chef={chef} setLoader={setLoader}></ChefCard>)}

                {visibleCards < chefs.length && <div ref={bottomRef}></div>}
            </div>
        </>
    );
};

export default ChefsSection;
