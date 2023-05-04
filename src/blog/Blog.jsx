import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <ListGroup className="faq-container my-5">
                <h2 className='text-center mb-3'>Important Questions and Answers</h2>
                <ListGroup.Item className="">
                    <h4>What are the differences between uncontrolled and controlled components?</h4>
                    <p>Uncontrolled components are those where the form data is handled by the DOM itself, while controlled components are those where the form data is handled by the React component. In uncontrolled components, we use refs to get form values, while in controlled components, we set and update state with form values.</p>
                </ListGroup.Item>
                <ListGroup.Item className="">
                    <h4>How do you validate React props?</h4>
                    <p>One way to validate React props is to use PropTypes, which is a built-in feature of React. PropTypes lets us define the types and shapes of the props that a component expects to receive. This helps catch errors early and makes our code more robust.</p>
                </ListGroup.Item>
                <ListGroup.Item className="">
                    <h4>What is the difference between Node.js and Express.js?</h4>
                    <p>Node.js is a JavaScript runtime that allows us to run JavaScript code outside of the browser, while Express.js is a web application framework that allows us to build web applications on top of Node.js. Express.js provides us with a set of tools and features to create web applications more easily, such as routing, middleware, and templates.</p>
                </ListGroup.Item>
                <ListGroup.Item className="">
                    <h4>What is a custom hook, and why would you create one?</h4>
                    <p>A custom hook is a JavaScript function that uses one or more of the built-in React hooks to encapsulate reusable logic. Custom hooks allow us to extract common logic from components and reuse it across multiple components, making our code more modular and easier to maintain. We might create a custom hook if we find ourselves duplicating the same code across multiple components, or if we want to abstract away complex logic into a reusable function.</p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Blog;
