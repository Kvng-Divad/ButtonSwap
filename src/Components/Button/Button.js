import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'


const Button = ({text , btn = 'btn' }) => {
  return (
    <Btn>
      <Link to='/offers'>
      <button className=''>
            {text}
        </button>
      </Link>
        
    </Btn>
   
  )
}

export default Button;

const Btn = styled.button`
    background:transparent;
    button{
      background: var(--skin-color);
      border: 1px solid var(--skin-color);
      color: var(--text-color-alt);
      font-family: var(--bdy-font-family);
      font-size: var(--font-size-sm);
      font-weight: 500;
      padding: .5rem .75rem;
      text-transform: uppercase;
   }
   button:hover{
      background: transparent;
      border: 1px solid var(--skin-color);
      color: var(--text-color);
   }
   
`;