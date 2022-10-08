import "./Agreement.css";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Buttonalt from "../../Components/Buttonalt/Buttonalt";
import { useFormik } from "formik";
import numToWords from "num-words";
import { useUserContext } from "../../App";
import { useCreateAgreement } from "../../operations/agreement.operation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  day: new Date().getDate(),
  month: new Date().toLocaleDateString("en-US", { month: "long" }),
  borrower: "",
  delivery_address: "",
  amount: 0,
  asset_value: 0,
  delivery_fee: 4000,
  dividend: 0,
  months: 0,
  by: "",
  date: Date.now(),
  user: "",
  application: "",
};

const Task2 = () => {
  const navigate = useNavigate();
  const [signed, setSigned] = useState(null);
  const { product, application, user } = useUserContext();
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { createAgreement, createAgreementResult } = useCreateAgreement();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: values => {
      const formElement = document.querySelector("form");
      const form = new FormData(formElement);
      form.append("signed", signed);
      form.append("user", user?.id);
      form.append("application", application?.id);
      form.append("date", Date.now());
      form.append("months", application?.meta?.terms?.tenure);
      form.append("asset_value", product?.meta?.price?.min);
      form.append("dividend", application?.payment?.dividend);

      createAgreement(form)
        .then(res => {
          if (res.data?.ok) {
            toast(res.data?.message, { type: "success" });
            navigate("/paymentdetail");
          }
        })
        .catch(error => {
          const message = error?.response?.data
            ? error?.response?.data?.message
            : error?.message;
          toast(message, { type: "error" });
        });
    },
  });

  useEffect(() => {
    if (product && application && user) {
      setInitialValues(initialValues => ({
        ...initialValues,
        borrower: user?.full_name,
        delivery_address: user?.delivery_address,
        amount: product?.meta?.price?.min * 0.7,
        asset_value: product?.meta?.price?.min,
        dividend: application?.payment?.dividend / 100,
        months: application?.meta?.terms?.tenure,
        by: user?.full_name,
        user: user?.id,
        application: application?.id,
      }));
    }
  }, [product, application, user]);

  return (
    <div className="wrapper">
      <div className="section-head grid">
        <div
          className="hero-icon flex"
          onClick={() => {
            window.history.back();
          }}
        >
          <ChevronLeftIcon className="heroicon" />
        </div>

        <h3 className="hero-title">Loan Agreement and Insurance</h3>
      </div>

      <div className="Holder">
        <div className="forHolder">
          <div className="smallTxt">Loan Agreement</div>
          <br />
          <form>
            <p>This Loan Agreement (the “Agreement”) is entered into on the</p>
            <p>
              <input
                name="day"
                type="text"
                value={values.day}
                onChange={handleChange}
              />{" "}
              day of{" "}
              <input
                name="month"
                type="text"
                value={values.month}
                onChange={handleChange}
              />{" "}
              2022 (the “Effective Date”), by and between Keza Technologies
              Limited, with an address of 4, Prince Ladejebi Close, Lagos (the
              “Lender”) and{" "}
              <input
                name="borrower"
                type="text"
                value={values.borrower}
                onChange={handleChange}
              />{" "}
              with an address of Delivery to{" "}
              <input
                name="delivery_address"
                type="text"
                value={values.delivery_address}
                onChange={handleChange}
              />{" "}
              (the “Borrower”), collectively “the Parties.”
            </p>
            <br />
            <p>
              WHEREAS, Borrower desires to borrow a fixed amount of money
              towards purchasing a smartphone; and
            </p>
            <br />
            <p>WHEREAS, Lender agrees to lend Borrower the requested amount;</p>
            <br />
            <p>
              IN CONSIDERATION of the mutual promises, covenants, and conditions
              contained herein, the Parties agree as follows:
            </p>
            <br />
            <p>
              1. Loan Amount. The Parties agree that the Lender will loan the
              Borrower NGN
              <input
                name="amount"
                type="number"
                value={values.amount}
                onChange={handleChange}
              />{" "}
              (
              <input readOnly value={numToWords(values.amount)} /> only), (the
              “Loan”).
            </p>
            <br />
            <p>
              2. Interest Rate. The Parties agree that the Interest Rate for
              this loan shall be 5% interest per month
            </p>
            <br />
            <p>
              3. Commencement and Loan Term. This Loan Agreement shall commence
              on the date hereof and shall continue for a period of 6 months
              from the date of commencement.
            </p>
            <br />
            <p>
              4. Loan Purpose. The loan is granted to purchase a smartphone (the
              Asset). The details of the phone is as follows:
            </p>
            <p> Make: {product?.name}</p>
            <br />
            <p> Capacity: {application?.product?.capacity}</p>
            <br />
            <p> Condition: {application?.product?.condition}</p>
            <br />
            <p>
              5. Collateral and Asset Value. The asset shall serve as collateral
              for this loan. The Total value of the asset is NGN
              <input value={product?.meta?.price?.min} readOnly /> (
              <input
                value={numToWords(product?.meta?.price?.min || 0)}
                readOnly
              />{" "}
              only).
            </p>
            <br />
            <p>
              6. Loan Purpose. The purpose of the loan is to finance the
              purchase of the asset.
            </p>
            <br />
            <p>
              7. Equity Contribution. The borrower shall pay an equity
              contribution in the amount of NGN
              <input
                value={values.delivery_fee}
                type="number"
                name="delivery_fee"
                onChange={handleChange}
              />{" "}
              (
              <input
                value={numToWords(values.delivery_fee)}
                type="number"
                readOnly
              />{" "}
              only)before the phone is delivered
            </p>
            <br />
            <p>
              8. Repayment. The Parties agree that the Borrower shall pay Lender
              NGN
              <input value={values.dividend} type="number" readOnly /> (
              <input type="number" readOnly /> only)every 30 days for a period
              of <input value={values.months} type="number" readOnly /> months
              as the loan installment.
            </p>
            <br />
            <p>
              9. Late Payments. Payment shall be considered late if received by
              Lender seven (7) days after its due date. Lender will charge a
              late fee of 1% on the loan balance.
            </p>
            <br />
            <p>
              10. Default. If Borrower defaults on payments and fails to cure
              said default within Ten (10) days, Lender will have the option to
              declare the entire remaining amount of Principal and any accrued
              Interest immediately due and payable. The asset shall be blocked,
              repossessed and auctioned to recover the balance of the loan and
              such repossession costs shall be borne by the Borrower.
            </p>
            <br />
            <p>
              11. Direct Debit Mandate. To ensure that payments are made duly
              and timely, the Borrower hereby authorizes a monthly direct debit
              of the loan amount from the Borrowers account monthly until
              payment is completed.
            </p>
            <br />
            <p>
              12. Terms and Conditions- The Borrower agrees to be bound by the
              terms and conditions outlined in Schedule A.
            </p>
            <br />
            <p>
              13. Representations and Warranties. Both Parties represent that
              they are fully authorized to enter into this Agreement. The
              performance and obligations of either Party will not violate or
              infringe upon the rights of any third-party or violate any other
              agreement between the Parties, individually, and any other person,
              organization, or business or any law or governmental regulation.
            </p>
            <br />
            <p>
              14. Severability. In the event any provision of this Agreement is
              deemed invalid or unenforceable, in whole or in part, that part
              shall be severed from the remainder of the Agreement and all other
              provisions should continue in full force and effect as valid and
              enforceable.
            </p>
            <br />
            <p>
              15. Waiver. The failure by either party to exercise any right,
              power or privilege under the terms of this Agreement will not be
              construed as a waiver of any subsequent or further exercise of
              that right, power or privilege or the exercise of any other right,
              power or privilege.
            </p>
            <br />
            <p>
              16. Legal Fees. In the event of a dispute resulting in legal
              action, the successful party will be entitled to its legal fees,
              including, but not limited to its attorneys’ fees, collection fees
              and the like.
            </p>
            <br />
            <p>
              17. Legal and Binding Agreement. This Agreement is legal and
              binding between the Parties as stated above. The Parties each
              represent that they have the authority to enter into this
              Agreement.
            </p>
            <br />
            <p>
              18. Governing Law and Jurisdiction. The Parties agree that this
              Agreement shall be governed by the Laws of the Federal Republic of
              Nigeria.
            </p>
            <br />
            <p>
              19. Entire Agreement. The Parties acknowledge and agree that this
              Agreement represents the entire agreement between the Parties. In
              the event that the Parties desire to change, add, or otherwise
              modify any terms, they shall do so in writing to be signed by both
              parties.
            </p>
            <br />
            <p>
              The Parties agree to the terms and conditions set forth above as
              demonstrated by their signatures as follows:
            </p>
            <br />
            <br />
            <p>“BORROWER”</p>
            <p>
              Signed:{" "}
              <input
                type={"file"}
                onChange={event => setSigned(event.target.files[0])}
              />
            </p>
            <p>Please upload a picture of your signature</p>
            <br />
            <p>
              By:{" "}
              <input
                value={values.by}
                type="text"
                name="by"
                onChange={handleChange}
              />
            </p>
            <p>
              Date:{" "}
              <input readOnly value={new Date(values.date).toDateString()} />
            </p>
            <br />
            <br />
            <br />
            <p>For “LENDER”</p>
            <p>Signed: Tolu Arowojolu</p>
            <p>By: Tolu Arowojolu (FOR: Keza Africa)</p>
          </form>
        </div>
      </div>
      <div className="buttons">
        <button>
          <Buttonalt
            onClick={handleSubmit}
            text={createAgreementResult.isLoading ? "Submitting..." : "Next"}
            link=""
          />
        </button>
      </div>
    </div>
  );
};

export default Task2;
