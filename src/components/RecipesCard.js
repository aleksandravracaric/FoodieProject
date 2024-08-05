import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css'
import placeholderImage from '../components/neptune-placeholder-48.jpg'

export default function RecipesCard(props) {

    const navigate = useNavigate();

    const imageSrc = props.recipe.image || placeholderImage;

    const toDetailPage = (recipe) => {
        navigate('/recipe', { state: { recipe } })
    }

    return (
        <Card style={{ width: '18rem' }} key={props.recipe.id} className="recipeCard" onClick={() => { toDetailPage(props.recipe) }} >
            <Card.Img variant="top" src={imageSrc} className="recipeImage" />
            <Card.Body>
                <Card.Title className="recipeTitle">{props.recipe.title}</Card.Title>
            </Card.Body>
            <hr />
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="recipeMinutes">{props.recipe.readyInMinutes}MIN   {props.recipe.servings} SERVES</ListGroup.Item>
            </ListGroup>
        </Card>

    )
}