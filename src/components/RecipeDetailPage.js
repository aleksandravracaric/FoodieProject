import { Card } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import './style.css'


export default function RecipeDetailPage() {

    const location = useLocation()

    return (

        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <Card style={{ width: '100%', maxWidth: '100vw' }} key={location.state.recipe.id} className="recipeDetailBox" >
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <Card.Img variant="left" src={location.state.recipe.image} className="recipeDetailPhoto" />

                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <Card.Body>
                                    <Card.Title className="recipeDetailTitle">{location.state.recipe.title}</Card.Title>
                                    <Card.Text></Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                        </Card>

                </div>

            </div>
        </div>
    )
}