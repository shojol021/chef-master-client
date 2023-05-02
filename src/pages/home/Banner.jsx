import Carousel from 'react-bootstrap/Carousel';
import './banner.css'

function Banner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit"
          src="https://i.postimg.cc/Jz0TFwkD/cr2.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='bg-color px-3'>
          <h3>Discover Authentic Mexican Cuisine</h3>
          <p>Embark on a culinary journey and discover the rich and vibrant flavors of Mexico with our collection of delicious and authentic recipes from top-rated Mexican chefs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit"
          src="https://i.postimg.cc/ZYPDBxmR/cr1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='bg-color px-3'>
          <h3>Experience the Taste of Mexico</h3>
          <p>From spicy salsas to mouth-watering tacos, our recipes will take your taste buds on a flavorful adventure. Experience the true taste of Mexico like never before.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit"
          src="https://i.postimg.cc/kXf1wMBP/cr3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='bg-color px-3'>
          <h3 className='bg-warning-subtle'>Cook Like a Pro</h3>
          <p>
          Our recipes are carefully curated and crafted by professional Mexican chefs, so you can confidently cook like a pro in your own kitchen. Impress your friends and family with your newfound culinary skills.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;