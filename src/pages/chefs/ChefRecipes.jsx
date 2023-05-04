import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2'


function ChefRecipes({ chefData }) {
    const recipes = chefData.recipes
    console.log(recipes)

    const handleAlert = () => {
        Swal.fire(
            'Great!',
            'Recipe is added to your Favourite!',
            'success'
          )
    }
    return (
        <Container className='my-5'>
            <h3 className='text-center'>Check the recipes from <span className='fw-bold'>{chefData.chefName}</span></h3>
            <Row xs={1} md={2} className="g-4">
                {recipes.map((recipe, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-warning fw-bold'>{recipe.recipeName}</Card.Title>
                                <Card.Text>
                                <span className='fw-bold'>Cooking Method:</span> {recipe.cookingMethod}
                                </Card.Text>
                                <Card.Text>
                                    <div className='fw-bold'>Ingredients</div>
                                    <div className='d-flex flex-wrap'>
                                        {recipe.ingredients.map((ingredient, index) => <div className='me-4'>{index + 1}. {ingredient}</div>)}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <Rating
                                                style={{ maxWidth: 130 }}
                                                value={recipe.rating}
                                                readOnly
                                            />
                                            <span>({recipe.rating})</span>
                                        </div>
                                        <div><Button onClick={handleAlert} variant='dark'>Add to Favourite</Button></div>
                                    </div>
                                </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ChefRecipes;