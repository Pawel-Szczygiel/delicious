import React, {useState, useEffect} from 'react'
import axios from 'axios';

import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


const url = 'https://api.spoonacular.com/recipes/complexSearch';

const Cuisine = () => {
    const { type } = useParams()


    const [data, setData] = useState([]);


    const getPopular = async type => {
      const check = localStorage.getItem(`${type}`);
     
      if(check) {
        setData(JSON.parse(check));
        return;
      } 
  
      try {
        const { data } = await axios
            .get(`${url}?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`);
        const { results } = data;
        localStorage.setItem(`${type}`, JSON.stringify(results));
        setData(results);
        console.log(data)
  
      } catch (error) {
        console.warn(error);
      }
    }
  
    
    useEffect(() => {
      console.log(type)
        getPopular(type);

    }, [type]);

    return (
    <div>
      cuisine 
        <h4>{type}</h4>
    </div>
  )
}

export default Cuisine
