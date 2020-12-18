import React, {useState, useEffect}  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Index from './Pages/Index';
import RecipePage from './Pages/RecipePage';


export default function App() {

  const APP_ID = "acb4bcb4";
  const APP_KEY = "f288db167df33f3fdc56c33dabf59f89";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('Bananes');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
  };

  useEffect( () => {
    getRecipes();
  }, [query]);

  return (
      <Router>
        <Route exact path="/" component={() => <Index setRecipes={setRecipes}  setQuery={setQuery}recipes={recipes} />} />
        <Route exact path="/RecipePage/:label" component={() => <RecipePage  setRecipes={setRecipes} recipes={recipes}  />} />
      </Router>
  );

 
}

 
