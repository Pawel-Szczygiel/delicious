import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// const url = 'https://api.spoonacular.com/recipes/';


const Recipe = () => {
    const { id } = useParams();
    const [recipeInfo, setRecipeInfo] = useState({});
   
    const fetchDetails = async id => {
      try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        
        setRecipeInfo(data)
       
      } catch (error) {
          console.error(error)


      }
    }

    useEffect(() => {
      fetchDetails(id);
    }, [id]);

    return (
    <div>
      {recipeInfo.id}
    </div>
  )
}

export default Recipe
