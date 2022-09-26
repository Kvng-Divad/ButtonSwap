import React from "react";
import Buttonalt from "../Buttonalt/Buttonalt";
import "./Task2.css";

const Task2 = () => {
  return (
    <div className="wrapper">
      <h1>loan agreement and insurance</h1>
      <div className="mainBody">
        <div className="form">
          <h4>Loan Agreement</h4>
          <form>
            <p>Both rest of know draw fond post as. It agreement defective</p>
            <p>
              <input /> 20 <input /> is by and between: creditor: <input /> with
              a makng address of <input /> city of <input /> state of <input />{" "}
              zip <input /> ("creditor"). and <input /> Debtor.
              <input /> with a making address of <input /> city of <input />{" "}
              state of <input /> zip <input /> ("Debtor")
            </p>
            <p>
              HEREINAFTER, the Debtor and Creditor("parties") agree to the
              following:
            </p>
            <p>
              1. Both rest of know draw fond post as. It agreement defective{" "}
              <input />
              Debtors ($
              <input />) ("current balance") ("for check one")
            </p>
            <p>
              <input type="checkbox" /> - an outstanding balances
            </p>
            <p>
              <input type="checkbox" /> - Property described as <input />
            </p>
            <p>
              <input type="checkbox" /> - Service described as <input />
            </p>
            <p>
              <input type="checkbox" /> - Others <input />
            </p>
            <p>
              2. HEREINAFTER, the Debtor and Creditor agree to the following
              rest of know draw fond post as. It agreement defective ("parties")
            </p>
            <p>
              <input type="checkbox" /> - of know draw fond post as. It
              agreement defective ("parties")
            </p>
            <p>
              <input type="checkbox" /> - of know draw fond post as. It
              agreement defective of
            </p>
            <p>
              <input /> Debtors ($
              <input />) ("Amount owned") no twenty spring of in esteem spirit
              likely estate. Continue new you declared differed learning
              bringing honoured. At mean mind so upon they rent am walk. Shortly
              am waiting inhabit smiling he chiefly of in.{" "}
            </p>
          </form>
        </div>
      </div>
      <div className="buttons">
        <button>
          <Buttonalt text="Next" link="/details" />
        </button>
        <button>Skip</button>
      </div>
    </div>
  );
};

export default Task2;
