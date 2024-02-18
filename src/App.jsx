import './App.css';
import { useState } from 'react';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Recipes from './Components/Recipes/Recipes';
import { RANDOMPOPULAR } from './data';

export default function App() {
    const [error, setError] = useState(null);
    const [getRandomRecipes, setGetRandomRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const res = await fetch(RANDOMPOPULAR);
            if (!res.ok) {
                setError('An error occured, please try again later');
                throw new Error(`ERROR:  ${res.status}`);
            }
            const data = await res.json();
            setGetRandomRecipes(data.recipes);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="app">
            <Header fetchRecipes={fetchRecipes} />
            <Home />
            <Recipes />
        </div>
    );
}
