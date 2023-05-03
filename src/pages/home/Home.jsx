import React from 'react';
import Banner from './Banner';
import ChefsSection from './ChefsSection';
import Featured from './Featured';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsSection></ChefsSection>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;