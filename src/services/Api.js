import axios from "axios";

const baseURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes'

const apiKey1 = '879a9ec3a7mshb698cb1339df89dp19bec7jsnead75be058fb';

const headers = {
  'X-RapidAPI-Key': '879a9ec3a7mshb698cb1339df89dp19bec7jsnead75be058fb',
  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
}


export function fetchRandomRecipes() {
  const params = {
    tags: 'vegetarian,dessert',
    number: '12'
  }
  return axios.get(`${baseURL}/random`, { headers: headers  , params: params})
};

const ingredientsById = async () => {

  const params = {
    ingredients: 'apples,flour,sugar',
    number: '5',
    ignorePantry: 'true',
    ranking: '1'
  }

  const headers = {
    'X-RapidAPI-Key': '879a9ec3a7mshb698cb1339df89dp19bec7jsnead75be058fb',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'

  };

  const response = await axios.get(`${baseURL}/{id}/ingredientWidget.json`, { headers: headers });

  console.log('Server Response:', response);
  return response.data;
};

export { ingredientsById }


