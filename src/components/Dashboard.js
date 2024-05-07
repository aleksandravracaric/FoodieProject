import { useEffect } from "react";
import { useState } from "react";
import { fetchRandomRecipes } from "../services/Api";
import RecipesCard from "./RecipesCard";

export default function Dashboard() {


    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRandomRecipes()
            .then(response => {
                setLoading(false)
                setRecipes(response.data.recipes)
                setError(null)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data.message)
                setLoading(false)
                setError(error)
            })
    }, [])


    const getErrorView = () => {
        return (
            <div className="error">
                Oh no!Something went wrong! {error.message}
            </div>
        )
    }

    const getGridView = () => {
        return (
            <div className="row">
                <div className="grid">
                    {recipes?.map((f => (
                        <div className="box" key={f.id}>
                            <RecipesCard recipe={f} />
                        </div>
                    )))}
                </div>
            </div>
        )
    }

    const getMainContent = () => {
        if (error === null) {
            return getGridView()
        } else {
            return getErrorView()
        }
    }

    if (loading) {
        return (
            <div className="container-fluid">
                <div className="row">

                </div>
                <div className="loadingFood">
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container-fluid">
                <div className="row">

                </div>
                {getMainContent()}
            </div>
        )
    }


}