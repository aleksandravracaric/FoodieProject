import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import RecipeDetailPage from './components/RecipeDetailPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/recipe' element={<RecipeDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
