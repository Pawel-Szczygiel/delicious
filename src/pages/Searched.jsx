import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


const url = 'https://api.spoonacular.com/recipes/complexSearch';

const Searched = () => {
    const  { search }  = useParams()
    const [data, setData] = useState([]);
  

    const getSearch = async type => {
        const check = localStorage.getItem(`${type}`);
        if(check) return setData(JSON.parse(check));
   
        try {
          const { data } = await axios
              .get(`${url}?apiKey=${process.env.REACT_APP_API_KEY}&query=${type}`);
          const { results } = data;

          if (results.length === 0) return;
        
          localStorage.setItem(`${type}`, JSON.stringify(results));
          setData(results);
       
        } catch (error) {
          console.warn(error);
        }
     
      }

      useEffect(() => {
        getSearch(search)
      },[search]);


  return (
    <>
    <h3>{search}</h3>
    <Grid>
    {data.map(item => {
     const {id, image, title} = item;
     return (
       <Card key={id}>
        <Link to={`/recipe/${id}`}>
         <img src={image} alt={title}/>
         <div>
          <h4>{title}</h4>
         </div>
        </Link>
       </Card>
     )
    })}
   </Grid>
    </>
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
    padding: .6rem;
    font-size: clamp(.9rem, 1vw, 1rem);
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
  }
`;


export default Searched
