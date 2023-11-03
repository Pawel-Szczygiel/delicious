import React, {useState, useEffect} from 'react'
import axios from 'axios';

import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


const url = 'https://api.spoonacular.com/recipes/complexSearch';

const Cuisine = () => {
    const { type } = useParams()

    const [data, setData] = useState([]);


    const getCuisine = async type => {
      const check = localStorage.getItem(`${type}`);
     
      if(check) return setData(JSON.parse(check));
        
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
      getCuisine(type);
    }, [type]);

    return (
    <Grid>
     {data.map(item => {
      const {id, image, title} = item;
      return (
        <Card key={id}>
          <img src={image} alt={title}/>
          <h4>{title}</h4>
        </Card>
      )
     })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  background-color:#fff;
  box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  border-radius: 2rem;
  transition: all .3s linear;
  cursor: pointer;

  &:hover{
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -5px;
  }

  img{
    width: 100%;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: .5rem;
  }
`;

export default Cuisine
