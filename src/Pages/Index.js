import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Layout from '../Components/Layout';

export default function Index({ setQuery, recipes, setRecipes }) {

    
    return (

        <Layout  setQuery={setQuery}>
            
        {recipes.map((item, index) => 
   
        <Card key={index} className="mx-auto my-auto"  style={{ width: '20rem' }}>
        <Card.Img  variant="top" src={item.recipe.image} />
        <Card.Body>
        <Card.Title>{item.recipe.label}</Card.Title>
        <Card.Text>
    
        </Card.Text>
        <Button variant="primary"><Link to={`/RecipePage/${item.recipe.label.toLowerCase().replace(/\s/g, '-')}`}>Lire les recettes</Link></Button>
        </Card.Body>
        </Card>
      
        )}   
        
        </Layout>
    )
}

