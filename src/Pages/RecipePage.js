import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import Card from 'react-bootstrap/Card';

export default function RecipePage({setRecipes, recipes}) {
    
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const { label } = useParams();

    useEffect(() => {
        setCurrentRecipe(recipes.find(recipe => recipe.recipe.label.toLowerCase().replace(/\s/g, '-') === label));
    }, []);

    if (!currentRecipe) {
        return <div>Chargement...</div>;
    }

    return (
        <Layout>
            <Card className="mx-auto my-auto" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={currentRecipe.recipe.image} />
                <Card.Body>
                    <Card.Title>{currentRecipe.recipe.label}</Card.Title>
                    <Card.Text>{currentRecipe.recipe.ingredients.map(ingredient => <div>{ingredient.text}</div>)}</Card.Text>
                </Card.Body>
            </Card>
        </Layout>
    )
}
