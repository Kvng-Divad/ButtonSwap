import "./Orders.css";
import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Buttonalt from "../Buttonalt/Buttonalt";
import Battery from "../../Assets/Battery.svg";
import Camera from "../../Assets/Camera.svg";
import Fingerprint from "../../Assets/Fingerprint.svg";
import Phone from "../../Assets/phone.svg";
import { useRecoilState } from "recoil";
import RadioCard from "../radioCard";
import { applicationState, singleProductState } from "../../data/state";
import {
  FormControl,
  RadioGroup,
  HStack,
  Radio,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import conveneNumber from "../../utils/convene-number";
import noImage from "../../Assets/no-image.png";

const Orders = () => {
  const [product] = useRecoilState(singleProductState);
  const [application, setApplication] = useRecoilState(applicationState);

  const logo = product?.brand?.image;

  const image = product?.meta?.images?.find(
    image => image?.image?.length > 1
  )?.image;
  const name = product?.name;

  const price = product?.meta?.price?.min;

  const colors = product?.meta?.colors;
  const camera = product?.components?.camera?.join(" ");
  const display = product?.components?.display;
  const battery = `${product?.components?.battery?.name}${
    product?.components?.battery?.isRemovable ? "" : ", non-removable"
  }`;
  const chip = product?.components?.chip;

  const ram = product?.storage?.ram;
  const plans = [
    { name: "Pay Monthly", value: "recurring" },
    { name: "Pay Now", value: "once" },
  ];

  const oneTime = application.meta.plan === plans[1].value;

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

        <div className="section-title">
          <h3>Choose a Phone Plan</h3>
        </div>
      </div>

      <div className="order-container grid">
        <div className="order-left grid">
          <div className="order-left-images grid">
            <div className="order-logo">
              <img src={logo} alt="log" />
            </div>

            <div className="order-img">
              <img
                src={image || noImage}
                style={{ width: !image ? "100%" : "" }}
                alt="img"
              />
            </div>
          </div>

          <div className="order-detail grid">
            <h3>TOP DEVICE FEATURES</h3>

            <div className="phone-details grid">
              <div className="infos grid">
                <img src={Phone} alt="" />
                <span className="name">{display}</span>
              </div>

              <div className="infos grid">
                <img src={Camera} alt="" />
                <span className="name">{camera}</span>
              </div>

              <div className="infos grid">
                <img src={Battery} alt="" />
                <span className="name">{battery}</span>
              </div>

              <div className="infos grid">
                <img src={Fingerprint} alt="" />
                <span className="name">{chip}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-right">
          <div className="order-summary grid">
            <div className="order-details grid">
              <h4>MODEL</h4>
              <h3>{name}</h3>
              <p className="phone-price">
                From <span>{conveneNumber(price)}</span> per month
              </p>
            </div>

            <FormControl>
              <div className="order-details">
                <h4>CAPACITY</h4>
                <HStack>
                  {ram.map(value => {
                    return (
                      <RadioCard
                        onChange={() => {
                          setApplication({
                            ...application,
                            product: {
                              ...application.product,
                              capacity: value,
                            },
                          });
                        }}
                        checked={application.product.capacity === value}
                        key={value}
                      >
                        {value}
                      </RadioCard>
                    );
                  })}
                </HStack>
              </div>

              <div className="order-details">
                <h4>COLOR</h4>
                <RadioGroup defaultValue="" className="radios">
                  <HStack
                    flexWrap={"wrap"}
                    spacing="40px"
                    className="radio-color"
                  >
                    {colors?.map((color, index) => (
                      <Radio
                        checked={application.product.color === color}
                        onChange={() =>
                          setApplication({
                            ...application,
                            product: {
                              ...application.product,
                              color,
                            },
                          })
                        }
                        key={index}
                        colorScheme={
                          application.product.color === color ? "red" : ""
                        }
                        value={color}
                      >
                        {color}
                      </Radio>
                    ))}
                  </HStack>
                </RadioGroup>
              </div>

              <div className="order-details">
                <h4>PAYMENT PLAN</h4>
                <HStack className="radios-label flex">
                  {plans.map(plan => {
                    return (
                      <RadioCard
                        onChange={() =>
                          setApplication({
                            ...application,
                            meta: {
                              ...application.meta,
                              plan: plan.value,
                            },
                          })
                        }
                        key={plan.value}
                        checked={application.meta.plan === plan.value}
                        className="radio-box"
                      >
                        {plan.name}
                      </RadioCard>
                    );
                  })}
                </HStack>
              </div>

              <div className="order-details">
                <h4>PAYMENT TERMS</h4>
                <Flex>
                  <NumberInput
                    isDisabled={oneTime}
                    size="md"
                    mr="2"
                    maxW="100px"
                    max={6}
                    defaultValue={application.meta.terms.tenure}
                    onChange={value =>
                      setApplication({
                        ...application,
                        meta: {
                          ...application.meta,
                          terms: {
                            ...application.meta.terms,
                            tenure: Number(value),
                          },
                        },
                      })
                    }
                    min={1}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                  <Select
                    disabled={oneTime}
                    onChange={event =>
                      setApplication({
                        ...application,
                        meta: {
                          ...application.meta,
                          terms: {
                            ...application.meta.terms,
                            type: event.target.value,
                          },
                        },
                      })
                    }
                    placeholder="Select"
                    maxW="100px"
                  >
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                  </Select>
                </Flex>
              </div>

              <div className="payment1"></div>

              <div className="Button grid">
                <Buttonalt
                  onClick={() => {
                    const rate = 0.05;
                    const extra = 4000;
                    const down = price * 0.3 * 100;
                    const principal = price * 0.7;
                    const months = oneTime ? 1 : application.meta.terms.tenure;
                    const init = parseFloat(principal / months);
                    const increment = rate * init;
                    const amount = parseFloat((increment + init) * months);
                    const total = (amount + extra) * 100; // convert to kobo
                    const dividend = parseFloat(total / months);

                    setApplication({
                      ...application,
                      product: {
                        ...application.product,
                        id: product.id,
                        price,
                        condition: "new",
                      },
                      payment: {
                        total,
                        dividend,
                        down,
                      },
                    });
                  }}
                  text="Apply"
                  link="/summary"
                />
              </div>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
