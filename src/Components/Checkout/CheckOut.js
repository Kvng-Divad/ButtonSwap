import "./CheckOut.css";
import React from "react";
import Buttonalt from "../Buttonalt/Buttonalt";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import { useRecoilState } from "recoil";
import { applicationState, singleProductState } from "../../data/state";
import conveneNumber from "../../utils/convene-number";

const CheckOut = () => {
  const [application] = useRecoilState(applicationState);
  const [product] = useRecoilState(singleProductState);
  // const logo = product?.brand?.image;
  const model = product?.name;
  // const image = product?.meta?.images?.find(
  //   image => image?.image?.length > 1
  // )?.image;
  const capacity = application.product.capacity;
  const color = application.product.color;
  const paymentPlan =
    application.meta.plan === "recurring"
      ? `${
          application.meta.terms.type === "weeks" ? "Weekly" : "Monthly"
        } Payment`
      : "One-time Payment";
  const paymentTerms = `${
    application.meta.terms.tenure
  } ${application.meta.terms.type.substring(
    0,
    application.meta.terms.type.length -
      (application.meta.terms.tenure === 1 ? 1 : 0)
  )}`;

  const tenure = application.meta.terms.tenure;
  const down = application.payment.down;
  const dividend = application.payment.dividend;

  return (
    <div>
      <div className="grid">
        <div className="head">
          <Breadcrumbs current={6} />
        </div>
      </div>

      <div className="Container grid">
        <div className="section-title">
          <h3>Order Summary</h3>
          <p>Kindly confirm your order details</p>
        </div>

        <div className="form-container grid">
          <div className="order-summary grid">
            <div className="order-details grid">
              <h4>MODEL</h4>
              <p>{model}</p>
            </div>

            <div className="order-details">
              <h4>CAPACITY</h4>
              <p>{capacity}</p>
            </div>

            <div className="order-details">
              <h4>COLOR</h4>
              <p>{color}</p>
            </div>

            <div className="order-details">
              <h4>PAYMENT PLAN</h4>
              <p>{paymentPlan}</p>
              <p>{paymentTerms}</p>
            </div>
            <div className="order-details">
              <h4>TOTAL</h4>
              <p>Down Payment: {conveneNumber(down)}</p>
              {[...Array(tenure).keys()].map(number => {
                const cardinal = Number(String(number + 1).slice(-1));
                return (
                  <p key={number}>{`${number + 1}${
                    cardinal === 1
                      ? "st"
                      : cardinal === 2
                      ? "nd"
                      : cardinal === 3
                      ? "rd"
                      : "th"
                  } payment: ${conveneNumber(dividend / 100)}`}</p>
                );
              })}
            </div>
          </div>

          <div className="payment"></div>

          <Buttonalt text="Finish" link="/submit" />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
