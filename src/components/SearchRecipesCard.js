import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css'
import placeholderImage from '../components/neptune-placeholder-48.jpg'


export default function RecipesCard(props) {

    const navigate = useNavigate();

    const imageSrc = props.recipe.image || placeholderImage;


    const toDetailPage = (recipe) => {
        navigate('/recipe', { state: { recipe } })
    }

    console.log(props.recipe)
    return (
        <Card style={{ width: '18rem' }} key={props.recipe.id} className="recipeCard" onClick={() => { toDetailPage(props.recipe) }} >
            <Card.Img variant="top" src={imageSrc} className="recipeImage" />
            <Card.Body>
                <Card.Title className="recipeTitle">{props.recipe.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}