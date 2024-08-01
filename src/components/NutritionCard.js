import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css';

export default function NutritionCard({ nutrition }) {

    return (
             <Card className="recipeNutritionCard ">
                <Card.Body>
                    <Card.Title className="recipeTitle">Nutrition Information</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <strong>Calories:</strong> {nutrition.calories.value} {nutrition.calories.unit}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Fat:</strong> {nutrition.fat.value} {nutrition.fat.unit}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Protein:</strong> {nutrition.protein.value} {nutrition.protein.unit}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Carbs:</strong> {nutrition.carbs.value} {nutrition.carbs.unit}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
       

    );
}
