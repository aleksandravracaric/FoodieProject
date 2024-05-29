import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './style.css'

export default function RecipesCard({ recipe }) {

    const navigate = useNavigate();

    const toDetailPage = () => {
        navigate('/recipe' , {state : {recipe}})
    }

    return (
        <Card style={{ width: '18rem' }} key={recipe.id} className="recipeCard" onClick={() => {toDetailPage()}} >
            <Card.Img variant="top" src={recipe.image} className="recipeImage" />
            <Card.Body>
                <Card.Title className="recipeTitle">{recipe.title}</Card.Title>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                <ListGroup.Item className="recipeLikes">{recipe.likes} </ListGroup.Item>

            </ListGroup> */}
        </Card>
    )
}