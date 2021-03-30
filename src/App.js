import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Recipes from './Recipes';
import Axios from 'axios';


function App() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "1327c30a";
  const APP_KEY = " 0c820e68d137514d72feae632e5a83c4	";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(` https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits);
  };


  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default App;