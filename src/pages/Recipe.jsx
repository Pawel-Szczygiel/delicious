import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [recipeInfo, setRecipeInfo] = useState({});
  const [activeBtn, setActiveBtn] = useState("Ingredients");

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
      <BoxOne>
        <h2>{recipeInfo.title}</h2>
        <img src={recipeInfo.image} alt={recipeInfo.title} />
      </BoxOne>
      <BoxTwo>
        <Button
          className={activeBtn === "Instructions" ? "active" : ""}
          onClick={() => setActiveBtn("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeBtn === "Ingredients" ? "active" : ""}
          onClick={() => setActiveBtn("Ingredients")}
        >
          Ingredients
        </Button>
        {activeBtn === "Instructions" && (
          <Info>
            <h3>Summary</h3>
            <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></p>
            <h3>Instructions</h3>
            <section
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></section>
          </Info>
        )}
        {activeBtn === "Ingredients" && (
          <>
            <h3>Extended Ingredients</h3>
            <ul>
              {recipeInfo?.extendedIngredients?.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          </>
        )}
      </BoxTwo>
    </RecipeInfoWrapper>
  );
};

const RecipeInfoWrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  min-width: 700px;
  max-width: 1200px;
  color: #313131;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);

  .active {
    border: 2px solid rgba(0, 0, 0, 0.7);
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: rgba(0, 0, 0, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1rem;
  margin: 1rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  cursor: pointer;
  transition: box-shadow 0.3s linear;

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 5px 15px -8px;
  }
`;

const BoxOne = styled.div`
  width: 500px;
  padding: 1rem;
  align-self: flex-start;

  @media (max-width: 1269px) {
    & {
      width: 90%;
    }
  }
  h2 {
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 2rem;
    transition: all 0.3s linear;
    user-select: none;
    box-shadow: rgb(38, 57, 77) 0 15px 10px -10px;
  }
  img:hover {
    box-shadow: rgb(38, 57, 77) 0 17px 14px -9px;
  }
`;

const BoxTwo = styled.div`
  width: 500px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 1269px) {
    & {
      width: 90%;
      margin-top: 1rem;
    }
  }

  h3 {
    margin-top: 1rem;
  }

  p {
    padding: 1rem 0;
    line-height: 1.5;
    font-size: 1.1rem
  }

  ul {
    margin-top: 2rem;
  }

  li {
    list-style-type: none;
    font-size: 1.1rem;
    line-height: 2.5rem;
  }
`;

const Info = styled.article`
  width: 100%;
  padding: 1rem;

  section {
    line-height: 1.5;
    font-size: 1.1rem;
    padding-bottom: 1rem;
  }
  ::selection {
    background-color: lightgreen;
  }
`;

export default Recipe;
