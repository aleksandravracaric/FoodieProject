import { useState } from 'react';
import Header from './Header'
import { searchNutrition } from '../services/Api';
import { Row, Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import NutritionCard from './NutritionCard';



export default function NutritionPage() {

    const [dishName, setDishName] = useState('');
    const [nutrition, setNutrition] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')


    const handleSearchChangeNutrition = (event) => {
        setDishName(event.target.value)
    }


    const handleSearchNutrition = async (event) => {
        event.preventDefault();
        if (dishName.trim() !== '') {
            setLoading(true);
            setNutrition(null)
            setError('')
            try {
                const response = await searchNutrition(dishName);
                if (response.data.calories || response.data.fat || response.data.protein || response.data.carbs) {
                    setNutrition(response.data);
                } else {
                    setError('No nutrition information found for this dish.');
                }
            } catch (error) {
                console.error('Error fetching nutrition:', error);
                setError(error.message);

            } finally {
                setLoading(false);
            }
        } else {
            setNutrition(null);
            setError('Please enter a dish name.');

        }
    };




    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
            </div>
            <Container>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-xl-6 col-lg-6 col-md-8 col-sm-10 mt-3 justify-content-center align-items-center'>
                        <Form onSubmit={handleSearchNutrition} className='d-flex'>
                            <Form.Control
                                className='inputRecipes '
                                type="text"
                                placeholder="Search for nutrition information..."
                                value={dishName}
                                onChange={handleSearchChangeNutrition}
                            />
                            <Button className="mt-4 d-flex justify-content-center align-items-center" variant="bg-light text-dark" type="submit">
                                <i className="bi bi-search"></i>
                            </Button>
                        </Form>
                    </div>
                </div>
                {error && (
                    <Row className="justify-content-center">
                        <Alert variant="danger" className="col-xl-6 col-lg-6 col-md-8 col-sm-10 mt-3 text-center">
                            {error}
                        </Alert>
                    </Row>
                )}
                <Row className='recipesSearchBox'>
                    {loading ? (
                        <div className="col-12 text-center p-5">
                            <div className="loading-indicator">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <div>
                                    Loading...
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='row'>
                            <div className="nutritionCard col-12">
                                {nutrition !== null ? <NutritionCard nutrition={nutrition} /> : <></>}
                            </div>

                        </div>

                    )}
                </Row>
            </Container>
        </div>
    )
}