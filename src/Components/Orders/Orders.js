import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import './Orders.css'
import Buttonalt from '../Buttonalt/Buttonalt'
import Battery from '../../Assets/Battery.svg'
import Camera from '../../Assets/Camera.svg'
import Faceid from '../../Assets/Faceid.svg'
import Fingerprint from '../../Assets/Fingerprint.svg'
import Network from '../../Assets/Network.svg'
import Phone from '../../Assets/phone.svg'
import { useQuery } from "react-query";





const fetchProduct = async (id) => {
  const res = await fetch(
    `http://kezaafrica.herokuapp.com/v1/products/with-images/${id}`
  );
  return res.json();
};


const Orders = () => {
  
  const {id} = useParams()
  // eslint-disable-next-line 
  const {product, setProduct} = useState()
  // eslint-disable-next-line
  const { data, status, refetch } = useQuery("product", () =>
  fetchProduct(id)
  );
  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [id]);

  
  return (
    <div className='Container2 grid'>

      <div className='hero-icon flex'>
          <Link to='/'><ChevronLeftIcon className='heroicon'/></Link>
      </div>

      <div className='section-title'>
        <h3>Choose a Phone Plan</h3>
      </div>
      
      <div className='order-container grid'>
        
        <div className='order-left'>

            <div className='order-logo'>

            </div>
            <div className='order-images'>

            </div>

            <div className='order-details grid'>

               <h3>TOP DEVICE FEATURES</h3>

               <div className='phone-details grid'>

                  <div className='infos grid'>
                    <img src={Phone} alt=''/>
                    <span className='name'>6.7″ All-screen OLED disspanlay with ProMotion</span>
                  </div>

                  <div className='infos grid'>
                    <img src={Camera} alt=''/>
                    <span className='name'>Pro camera system</span>
                  </div>

                  <div className='infos grid'>
                    <img src={Battery} alt=''/>
                    <span className='name'>Up to 28 hours battery life</span>
                  </div>

                  <div className='infos grid'>
                    <img src={Fingerprint} alt=''/>
                    <span className='name'>Fingerprint</span>
                  </div>

                  <div className='infos grid'>
                    <img src={Faceid} alt=''/>
                    <span className='name'>Face ID</span>
                  </div>

                  <div className='infos grid'>
                    <img src={Network} alt=''/>
                    <span className='name'>Superfast 5G Cellular</span>
                  </div>
               </div>
            </div>
        </div>

        <div className='order-right'>

        <div className='order-summary grid'>
          <div className='order-details grid'>
            <h4>MODEL</h4>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>CAPACITY</h4>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>COLOR</h4>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>PAYMENT PLAN</h4>
            <p>{}</p>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>PAYMENT TERMS</h4>
            
          </div>

        </div>
        
        <div className='payment'>

        </div>
        
        <div className='Button grid'>
          <Buttonalt text='Apply' link='/summary'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Orders