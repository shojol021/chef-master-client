import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLocation, useRouteError } from 'react-router-dom';
import errorImg from '../assets/errorImage.jpg'

const ErrorPage = () => {
    const errorMsg = useRouteError()
    const loc = useLocation();
    const errorMsg2 = loc.state?.error || 'An error occurred.'

    return (
        <div className=''>
            <Card className="bg-dark text-white">
                <Card.Img className='h-full' src={errorImg} alt="Card image" />
                <Card.ImgOverlay className='text-center'>
                    <Card.Title className='mt-5'>Oops!</Card.Title>
                    <Card.Text>
                        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 mt-5">
                            <h1 className="text-5xl font-bold mb-4 text-gray-800 text-red-400"></h1>
                            <h1 className="text-5xl font-bold mb-4 text-gray-800">{errorMsg2}</h1>
                            <h2 className="text-2xl font-medium mb-4 text-gray-700">{errorMsg.data}</h2>
                        </div>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default ErrorPage;