import { useEffect, useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const url = 'https://api.spoonacular.com/recipes/random';

const Popular = () => {
  const [data, setData] = useState([]);


  const getPopular = async () => {
    try {
      const { data } = await axios
          .get(`${url}?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const { recipes } = data;
      setData(recipes);
      console.log(data)

    } catch (error) {
      console.warn(error);
    }
  }

  
  useEffect(() => {
    // getPopular();
  }, []);

  return (
    <div>
        <Wrapper >
            <h3>Popular Picks</h3>
            <Splide 
              options={{
                perPage:4,
                arrows: false, 
                pagination:false, 
                drag: 'free', 
                gap: '5rem'
              }}
              >
              {data.map(recipe => (
                <SplideSlide key={recipe.id}>
                  <Card  > 
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 1rem;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    bottom:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    text-align: center;
    letter-spacing: 2px;
    color: #ffffff;
    height: 25%;
    font-size: clamp(0.9rem, 1vw, 1.2rem);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: rgba(0,0,0, 0.01);
    border-bottom: 1px solid rgba(255,255,255, 0.2);
    border-top: 1px solid rgba(255,255,255, 0.2);
    backdrop-filter: blur(10px);
  }
`;

const Gradient= styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`;


export default Popular