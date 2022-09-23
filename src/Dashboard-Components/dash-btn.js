import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'


const Dashbtn = ({text, type , link}) => {
  return (
    <Btn>
      <Link to={link}>
      <button className='' type={type}>
            {text}
        </button>
      </Link>
        
    </Btn>
   
  )
}

export default Dashbtn;

const Btn = styled.button`
    background:transparent;
    button{
      background: var(--skin-color);
      border: 1px solid var(--skin-color);
      color: var(--text-color-alt);
      font-family: var(--bdy-font-family);
      font-size: var(--font-size-smlr);
      font-weight: 700;
      padding: .25rem .5rem;
      text-transform: uppercase;
   }
   button:hover{
      background: transparent;
      border: 1px solid var(--skin-color);
      color: var(--text-color);
   }
   
`;