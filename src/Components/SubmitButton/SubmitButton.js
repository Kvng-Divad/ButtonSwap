import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const SubmitButton = ({text, link }) => {
  return (
    <Btn>
      <Link to={link}>
        <button type='submit' className='btns'>
            {text}
        </button>
      </Link>
        
    </Btn>
   
  )
}

export default SubmitButton;

const Btn = styled.button`
    background:transparent;
    button{
      background: var(--bg-color-2);
      border: 1px solid var(--skin-color);
      color: var(--text-color-alt);
      font-family: var(--bdy-font-family);
      font-size: var(--font-size-sm);
      font-weight: 600;
      border-radius: 25px;
      padding: .65rem 4rem;
      text-transform: uppercase;
   }
   button:hover{
      background: transparent;
      border: 1px solid var(--skin-color);
      color: var(--text-color);
   }
   @media (min-width:780px){
    button{
      padding: .65rem 5rem;
   }
   }

`;