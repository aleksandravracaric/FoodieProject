import React, { useState } from 'react';
import { Card, Container, Row, Col, Form, ListGroup, Button, Spinner, Alert } from 'react-bootstrap';
import { searchRecipes } from '../services/Api';
import Header from "./Header";
import './style.css';
import { useNavigate } from 'react-router-dom';
import SearchRecipesCard from './SearchRecipesCard';

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    // const navigate = useNavigate();

    // const toDetailPage = (selectedRecipe) => {
    //     navigate('/recipe', { state: { recipe: selectedRecipe } });
    // };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        if (searchQuery.trim() !== '') {
            setLoading(true);
            setRecipes([])
            setError('')
            try {
                const response = await searchRecipes(searchQuery);
                if (response.data.results && response.data.results.length > 0) {
                    setRecipes(response.data.results);
                } else {
                    setError('No results found.');
                }
            } catch (error) {
                console.error('Error fetching recipes:', error);
            } finally {
                setLoading(false);
            }
        } else {
            setRecipes([]);
            setError('Please enter a dish name. ')
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
                        <Form onSubmit={handleSearch} className='d-flex'>
                            <Form.Control
                                className='inputRecipes '
                                type="text"
                                placeholder="Search for recipes..."
                                value={searchQuery}
                                onChange={handleSearchChange}
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
                        <div className="col-12 text-center  p-5">
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
                        <div className="row">
                            <div className="grid">
                                {recipes?.map((recipe => (
                                    <div className="box" key={recipe.id}>
                                        <SearchRecipesCard recipe={recipe} />
                                    </div>
                                )))}
                            </div>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
}
