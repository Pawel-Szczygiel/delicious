import Category from './components/Category';
import Pages from './pages/Pages';
import Search from './components/Search';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className='container'>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>
          Deliciousness
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: 'Lobster Two', cursive;
  transition: all .3s;

  &:hover {
    color: green;
  }

`;

const Nav = styled.nav`
  padding: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }

`


export default App;
