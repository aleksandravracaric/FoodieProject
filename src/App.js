import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import RecipeDetailPage from './components/RecipeDetailPage';
import SearchRecipes from './components/SearchRecipes'; 

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/recipe' element={<RecipeDetailPage />}></Route>
        <Route path='/searchRecipes' element={<SearchRecipes />}></Route>
        <Route path='' ></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
