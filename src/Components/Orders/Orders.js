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
import { singleProductState } from "../../data/state";
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
} from '@chakra-ui/react'
import { Select, useRadioGroup } from '@chakra-ui/react'

const conveneNumber = Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "NGN",
}).format;

const Orders = () => {
  const [product] = useRecoilState(singleProductState);
  // eslint-disable-next-line
  const logo = product?.brand?.image;
  // eslint-disable-next-line
  const image = product?.meta?.images?.find( 
    image => image?.image?.length > 1
  )?.image;
  const name = product?.name;
 
  const price = product?.meta?.price?.min;
 // eslint-disable-next-line
  const color = product?.meta?.color;
  const camera = product?.components?.camera?.join(" ");
  const display = product?.components?.display;
  const battery = `${product?.components?.battery?.name}${
    product?.components?.battery?.isRemovable ? "" : ", non-removable"
  }`;
  const chip = product?.components?.chip;

  const ram = ['64GB', '128GB', '256GB']
  const plan = ['Pay Monthly', 'Pay Now']
  // eslint-disable-next-line
  const Color = ['64GB', '128GB', '256GB']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })
  const group = getRootProps()

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
            <img src={image} alt="img" />
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
              <p className='phone-price'>
                From <span>{conveneNumber(price)}</span> per month
              </p>
            </div>

            < FormControl>

              <div className="order-details">
                <h4>CAPACITY</h4>
                <HStack {...group}>
                  {ram.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    )
                  })}
                </HStack>
              </div>

              <div className="order-details">
                <h4>COLOR</h4>
                <RadioGroup defaultValue='' className="radios"> 
                  <HStack spacing='24px' className="radio-color">
                    <Radio colorScheme={color} value={color}>{color}</Radio>
                    <Radio colorScheme={color} value={color}>{color}</Radio>
                    <Radio colorScheme={color}value={color}>{color}</Radio>
                  </HStack>
                </RadioGroup>

                
              </div>

              <div className="order-details">
                <h4>PAYMENT PLAN</h4>
                <HStack {...group} className="radios-label flex">
                  {plan.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                      <RadioCard key={value} {...radio} className="radio-box">
                        {value}
                      </RadioCard>
                    )
                  })}
                </HStack>
              </div>

              <div className="order-details">
                <h4>PAYMENT TERMS</h4>
                <Flex>
                <NumberInput size='md' mr='2' maxW='100px' max={6} defaultValue={3} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <Select placeholder='Select' maxW='100px'>
                  <option value='month'>Month</option>
                  <option value='months'>Months</option>
                </Select>
              </Flex>
              </div>

              <div className="payment"></div>

              <div className="Button grid">
                <Buttonalt text="Apply" link="/summary" />
              </div>

            </ FormControl>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Orders;
