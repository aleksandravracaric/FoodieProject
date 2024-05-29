import { Card, ListGroup } from "react-bootstrap"
import { useLocation } from "react-router-dom";
import './style.css'
import Header from "./Header"


export default function RecipeDetailPage() {

    const location = useLocation()
    const recipe = location.state.recipe
    console.log(recipe)

    return (

        <div className="container">
            <Header />
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <Card style={{ width: '100%', maxWidth: '100vw' }} className="recipeDetailBox">
                        <div className="row">
                            <Card.Title className="recipeDetailTitle">{recipe.title}</Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className="recipeMinutesServesDetail">{recipe.readyInMinutes}MIN {recipe.servings} SERVES</ListGroup.Item>
                            </ListGroup>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <Card.Img variant="left" src={recipe.image} className="recipeDetailPhoto" />
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <br />
                                    <h5>Instructions</h5>
                                    <div className="recipeInstruction "dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <Card.Body className="ingBox">
                                        <h5 className="ingTitle">Ingredients</h5>
                                        <div className="recipeIng">
                                            {recipe.extendedIngredients?.map(ingredient => (
                                                <div key={ingredient.image + ingredient.id}>{ingredient.name}: {ingredient.amount} {ingredient.unit}</div>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}