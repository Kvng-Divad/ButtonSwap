import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Buttonalt = ({ text, link, onClick, type, ...props }) => {
  const navigate = useNavigate();
  return (
    <Btn
      type={type}
      onClick={event => {
        onClick && onClick(event);
        link && navigate({ pathname: link });
      }}
    >
      <button {...props} className="btns">
        {text}
      </button>
    </Btn>
  );
};

export default Buttonalt;

const Btn = styled.button`
  background: transparent;
  button {
    background: var(--bg-color-2);
    border: 1px solid var(--skin-color);
    color: var(--text-color-alt);
    font-family: var(--bdy-font-family);
    font-size: var(--font-size-sm);
    font-weight: 700;
    border-radius: 20px;
    padding: 0.5rem 4rem;
    text-transform: uppercase;
    justify-self:center;
  }
  button:hover {
    background: transparent;
    border: 1px solid var(--skin-color);
    color: var(--text-color);
  }
  button:disabled {
    opacity: 0.4;
  }
  @media (min-width: 780px) {
    button {
      padding: 0.5rem 4rem;
    }
  }
`;
