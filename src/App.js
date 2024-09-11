import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import RecipeDetailPage from './components/RecipeDetailPage';
import SearchRecipes from './components/SearchRecipes'; 
import NutritionPage from './components/NutritionPage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const apiKeyFirebase = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey:`${apiKeyFirebase}`,
  authDomain: "recipes-aleksandra.firebaseapp.com",
  projectId: "recipes-aleksandra",
  storageBucket: "recipes-aleksandra.appspot.com",
  messagingSenderId: "1013281782964",
  appId: "1:1013281782964:web:8c1f807938fe5c6a4b6be1",
  measurementId: "G-816807DE7R"
};

initializeApp(firebaseConfig);

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/recipe' element={<RecipeDetailPage />}></Route>
        <Route path='/searchRecipes' element={<SearchRecipes />}></Route>
        <Route path='/nutrition' element={<NutritionPage/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
