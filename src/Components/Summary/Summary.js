import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Buttonalt from "../Buttonalt/Buttonalt";
import { useRecoilState } from "recoil";
import { applicationState, singleProductState } from "../../data/state";
import { Circle, Flex } from "@chakra-ui/react";
import conveneNumber from "../../utils/convene-number";
import "./Summary.css";

const Summarys = () => {
  const [application] = useRecoilState(applicationState);
  const [product] = useRecoilState(singleProductState);
  const logo = product?.brand?.image;
  const model = product?.name;
  const image = product?.meta?.images?.find(
    (image) => image?.image?.length > 1
  )?.image;
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
    <div className="Container2 grid">
      <div className="section-head grid">
        <div
          className="hero-icon flex"
          onClick={() => {
            window.history.back();
          }}
        >
          <ChevronLeftIcon className="heroicon" />
        </div>

        <h3 className="hero-title">SUMMARY</h3>
      </div>

      <div className="order-container grid">
        <div className="order-left">
          <div className="order-logo">
            <img src={logo} alt="log" />
          </div>
          <div className="order-images">
            <img src={image} alt="log" />
          </div>
        </div>

        <div className="order-right">
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
              <Flex gap={3} alignItems="center">
                <Circle w="42.09px" h="42.09px" bg={color?.toLowerCase()} />
                <p>{color}</p>
              </Flex>
            </div>

            <div className="order-details">
              <h4>PAYMENT PLAN</h4>
              <p>{paymentPlan}</p>
              {application?.meta?.plan === 'once' ?(
                <p></p>
               ) : (
                <p>{paymentTerms}</p>
               )}
            </div>

            <div className="order-details">
              <h4>TOTAL</h4>
              {application?.meta?.plan === 'once' ?(
                <p>{conveneNumber(product?.meta?.price?.min)}</p>
               ) : (
                  <>
                      <p>Down Payment: {conveneNumber(down/ 100)}</p>
                      {[...Array(tenure).keys()].map((number) => {
                        const FinalDividend = Math.round(dividend );
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
                          } payment: ${conveneNumber(FinalDividend/ 100)}`}
                          </p>
                          );
                      })}
              </>
               )}
            </div>
          </div>

          

          <div className="Button grid">
          {application?.meta?.plan === 'once' ?(
                <Buttonalt text="Pay now" link="/Pay-now" />
               ) : (
                <Buttonalt text="Apply" link="/details" />
               )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summarys;
