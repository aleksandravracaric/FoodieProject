import { Card, ListGroup } from "react-bootstrap"
import { useLocation } from "react-router-dom";
import './style.css'
import Header from "./Header"


export default function RecipeDetailPage() {

    const location = useLocation()
    const recipe = location.state.recipe
    console.log(recipe)



    const getContentWithoutIngredients = () => {
        return (
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <br />
                    {/* <h5>Instructions</h5> */}
                    <div className="recipeInstruction " dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                </div>
            </div>
        )
    }


    const getContentWithIngredients = () => {
        return (
            <div className="row justify-content-center align-items-center">

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <br />
                    <h5 className="recipeInstructionTitle">Instructions</h5>
                    <div className="recipeInstruction " dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
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

        )
    }

    const getExtraDetailContent = () => {
        if (recipe.extendedIngredients === undefined) {
            return getContentWithoutIngredients()
        } else {
            return getContentWithIngredients()
        }
    }

    return (

        <div className="container">
            <Header />
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <Card style={{ width: '100%', maxWidth: '100vw' }} className="recipeDetailBox">
                        <div className="row">
                            <Card.Title className="recipeDetailTitle">{recipe.title}</Card.Title>
                            {recipe.readyInMinutes || recipe.servings ? (
                                <ListGroup className="list-group-flush">
                                    {recipe.readyInMinutes && (
                                        <ListGroup.Item className="recipeMinutesServesDetail">
                                            {recipe.readyInMinutes} MIN
                                        </ListGroup.Item>
                                    )}
                                    {recipe.servings && (
                                        <ListGroup.Item className="recipeMinutesServesDetail">
                                            {recipe.servings} SERVES
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                            ) : undefined}
                            <hr class="mt-1 mb-1" />
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <Card.Img src={recipe.image} className="recipeDetailPhoto" />
                            </div>
                            {getExtraDetailContent()}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}