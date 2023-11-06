import { useState, useRef, useEffect} from "react"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput('');
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch/>
        <input 
        value={input} 
        onChange={e => setInput(e.target.value)}  
        type="text" 
        ref={inputRef}
        />
    </FormStyle>
  )
}


const FormStyle = styled.form`
  margin:2rem auto;
  position: relative;
  width: 90%;
  max-width: 800px;
  
  input {
    border: none;
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.4rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    letter-spacing: 2px;
    border-radius: 1rem;
    outline: none; 
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 0;
    font-size: 1.2rem;
    translate: 80% -50%; 
    color: #fff;
  }
`;


export default Search
