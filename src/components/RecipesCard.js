import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";


export default function RecipesCard({ recipe }) {
    return (
        <Card style={{ width: '18rem' }} key={recipe.id} className="foodCard" >
            <Card.Img variant="top" src={recipe.image} className="foodImage" />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{recipe.readyInMinutes}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}