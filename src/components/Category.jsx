import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
  return (
    <List>
        <SNavLink to='/cuisine/Italian'>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SNavLink>
        <SNavLink to='/cuisine/American'>
            <FaHamburger />
            <h4>American</h4>
        </SNavLink>
        <SNavLink to='/cuisine/Thai'>
            <GiNoodles />
            <h4>Thai</h4>
        </SNavLink>
        <SNavLink to='/cuisine/Japanese'>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SNavLink>
      
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content:center;
    gap: 2rem;
    margin: 2rem 0;
`;

const SNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1rem;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-right: 2rem;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(30deg, #494949, #313131);
    transform: scale(.8);
  
    svg{
        font-size: 1.5rem;
        color: #ffffff;
 
    }
    
    h4{
        color: #fff;
        font-size: 0.8rem;

    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg, h4{
            color: #fff;
        }
    }
`


export default Category
