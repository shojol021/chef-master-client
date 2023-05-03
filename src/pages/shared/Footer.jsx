import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer className="bg-dark py-4">
            <Container>
                <Row>
                    <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <h5 className="text-warning mb-3">Subscribe to Our Newsletter</h5>
                        <form>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    aria-label="Email address for newsletter subscription"
                                />
                                <button
                                    className="btn btn-warning"
                                    type="submit"
                                    aria-label="Subscribe to newsletter button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </Col>
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        <h5 className="text-warning mb-3">Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to Instagram"
                            >
                                <TiSocialInstagram
                                    className="text-white me-3"
                                    size="2em"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to Facebook"
                            >
                                <TiSocialFacebook
                                    className="text-white me-3"
                                    size="2em"
                                />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to Twitter"
                            >
                                <TiSocialTwitter
                                    className="text-white me-3"
                                    size="2em"
                                />
                            </a>
                        </div>
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        <h5 className="text-warning mb-3">Contact Us</h5>
                        <p className="text-white mb-0">
                            Email: contact@sabormexicano.com
                        </p>
                        <p className="text-white mb-0">Phone: +1 (555) 555-5555</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-white mt-4">
                        © 2023 Sabor Mexicano. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;