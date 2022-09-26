<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Dashbtn = ({ text, type, link, disabed }) => {
  return (
    <Btn>
      <Link to={link}>
        <button disabled={disabed} className="" type={type}>
          {text}
        </button>
      </Link>
    </Btn>
  );
};

export default Dashbtn;

const Btn = styled.button`
  background: transparent;
  button {
    background: var(--skin-color);
    border: 1px solid var(--skin-color);
    color: var(--text-color-alt);
    font-family: var(--bdy-font-family);
    font-size: var(--font-size-smlr);
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
  button:hover {
    background: transparent;
    border: 1px solid var(--skin-color);
    color: var(--text-color);
  }
  button:disabled {
    opacity: 0.4;
  }
`;
=======
import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Dashbtn = ({ text, type, link, disabed }) => {
  return (
    <Btn>
      <Link to={link}>
        <button disabled={disabed} className="" type={type}>
          {text}
        </button>
      </Link>
    </Btn>
  );
};

export default Dashbtn;

const Btn = styled.button`
  background: transparent;
  button {
    background: var(--skin-color);
    border: 1px solid var(--skin-color);
    color: var(--text-color-alt);
    font-family: var(--bdy-font-family);
    font-size: var(--font-size-smlr);
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
  button:hover {
    background: transparent;
    border: 1px solid var(--skin-color);
    color: var(--text-color);
  }
  button:disabled {
    opacity: 0.4;
  }
`;
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
