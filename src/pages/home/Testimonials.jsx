import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-4">What Our Customers Are Saying</h2>
            <hr className="mx-auto" />
          </Col>
        </Row>
        <Row className="gx-5">
          <Col md={4} className="mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <FaQuoteLeft className="mb-2" size={30} />
                <p className="card-text">
                  "The food here is simply amazing. I've been coming here for years and I've never had a bad meal. The service is top-notch too."
                </p>
                <FaQuoteRight className="mt-2" size={30} />
                <h5 className="card-title mt-3">John Smith</h5>
                <p className="card-subtitle mb-2 text-muted">Guadalajara, Jalisco</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <FaQuoteLeft className="mb-2" size={30} />
                <p className="card-text">
                  "I can't say enough good things about this place. The tacos are out of this world and the margaritas are the perfect complement. Can't wait to come back!"
                </p>
                <FaQuoteRight className="mt-2" size={30} />
                <h5 className="card-title mt-3">Samantha Johnson</h5>
                <p className="card-subtitle mb-2 text-muted">Ecatepec de Morelos	, México</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <FaQuoteLeft className="mb-2" size={30} />
                <p className="card-text">
                  "If you're looking for authentic Mexican cuisine, this is the place to go. The churros are to die for and the atmosphere is always lively and fun."
                </p>
                <FaQuoteRight className="mt-2" size={30} />
                <h5 className="card-title mt-3">Emily Rodriguez</h5>
                <p className="card-subtitle mb-2 text-muted">Juárez, Chihuahua</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
