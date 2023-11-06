import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [recipeInfo, setRecipeInfo] = useState({});

  const fetchDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );

      setRecipeInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  return (
    <RecipeInfoWrapper>
      <div>
        <h2>{recipeInfo.title}</h2>
        <img src={recipeInfo.image} alt={recipeInfo.title} />
      </div>
      <Info>
        <Button>Instructions</Button>
        <Button>Ingredients</Button>
    
      </Info>
    </RecipeInfoWrapper>
  );
};

const RecipeInfoWrapper = styled.div`
  margin: 4rem 0 4rem 0;
  padding: 5rem 0;
  display: flex;
  justify-content: space-evenly;

  background: rgba(255, 255, 255, 0.1);  
  box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  @media (max-width: 1440px) {
    & {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 4rem;
    }
  }

  h2 {
    margin-bottom: 2rem;
    letter-spacing: 0.1rem;
  }
  img {
    min-width: 50%;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: rgba(0, 0, 0, .01);
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1rem;
  margin: 1rem;
  letter-spacing: .2rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow .3s linear;

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 5px 15px -8px;
  }
`;

const Info = styled.div`
  min-width: 50%;
  text-align: left;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 1440px) {
    & button {
      text-align: center;
    }
  }
`;

export default Recipe;
