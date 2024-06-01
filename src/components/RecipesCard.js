import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './style.css'

export default function RecipesCard(props) {

    const navigate = useNavigate();

    const toDetailPage = (recipe) => {
        navigate('/recipe' , {state : {recipe}})
    }

    return (
        <Card style={{ width: '18rem' }} key={props.recipe.id} className="recipeCard" onClick={() => {toDetailPage(props.recipe)}} >
            <Card.Img variant="top" src={props.recipe.image} className="recipeImage" />
            <Card.Body>
                <Card.Title className="recipeTitle">{props.recipe.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="recipeMinutes">{props.recipe.readyInMinutes}MIN   {props.recipe.servings} SERVES</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}