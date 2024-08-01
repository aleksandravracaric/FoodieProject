import axios from "axios";

const baseURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes'

const apiKey1 = process.env.REACT_APP_RAPIDAPI_API_KEY;

const headers = {
  'X-RapidAPI-Key': apiKey1,
  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
}


export function fetchRandomRecipes() {
  const params = {
    number: '12'
  }
  return axios.get(`${baseURL}/random`, { headers: headers, params: params })
};

export function searchRecipes(searchQuery) {
  const params = {
    query: searchQuery,
    number: '12',
  }
  return axios.get(`${baseURL}/complexSearch`, { headers: headers, params: params })
}

export function searchNutrition(dishName) {
  const params = {
    title: dishName,

  }
  return axios.get(`${baseURL}/guessNutrition`, { headers: headers, params: params })
}


export function similarRecipes(id) {
  return axios.get(`${baseURL}/${id}/similar`, { headers: headers })
}


