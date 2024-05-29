import { useState } from 'react';
import Header from './Header'
import { Nutrition } from '../services/Api';


export default function NutritionPage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSearchChangeNutrition = (event) => {
        setSearchQuery(event.target.value)
    }

    
    const handleSearch = async (event) => {
        event.preventDefault();
        if (searchQuery.trim() !== '') {
            setLoading(true);
            setRecipes([])
            try {
                const response = await Nutrition(searchQuery);
                setRecipes(response.data.results);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            } finally {
                setLoading(false);
            }
        } else {
            setRecipes([]);
        }
    };




    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
            </div>
        </div>
    )
}