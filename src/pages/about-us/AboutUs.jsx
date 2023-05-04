import { Container, Row, Col, Image } from 'react-bootstrap';
import team from '../../assets/team.png'

function AboutUs() {
  return (
    <Container className="my-3">
      <Row>
        <Col md={6}>
          <Image src={team} fluid />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>We are a team of passionate chefs dedicated to bringing the best recipes and cooking tips to your home. Our mission is to help you create delicious meals that your whole family will love.</p>
          <p>With years of experience in the culinary industry, we have honed our skills and knowledge to provide you with the most innovative and easy-to-follow recipes. From classic dishes to new and exciting creations, we have something for everyone.</p>
          <p>At Chef's Recipes, we believe that cooking should be fun and accessible to everyone. That's why we strive to make our recipes and cooking tips as simple and straightforward as possible, so that even beginner chefs can create restaurant-quality dishes in their own kitchens.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
