import React from 'react'
import './Offer.css'
import {Link} from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Select } from '@chakra-ui/react'
import icon1 from '../../Assets/svg1.png'
import icon2 from '../../Assets/svg2.png'
import icon3 from '../../Assets/svg3.png'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import {useQuery} from 'react-query';

const fetchProducts = async () =>{
  const res = await fetch('http://kezaafrica.herokuapp.com/v1/products/with-images?take=12&page=1');
    return res.json();
}

const Offer = () => {

  const {data, status} = useQuery('products', fetchProducts);
    console.log(data);
  
    const Data = [
    {
      logo: icon1,
      image:image1,
      name: "Iphone 13 Pro",
      price:'110,000',
      color:'#FFFEF1',
    },
    {
      logo: icon2,
      image:image2,
      name: "HUAWEI MATE X2",
      price:'72,500',
      color:'#F5FFF4',
    },
    {
      logo: icon3,
      image:image3,
      name: "GALAXY S22 Ultra",
      price:'76,000',
      color:'#FEF7FF',
    },
    {
      logo: icon2,
      image:image2,
      name: "HUAWEI MATE X2",
      price:'72,500',
      color:'#F5FFF4',
    },
    {
      logo: icon3,
      image:image3,
      name: "GALAXY S22 Ultra",
      price:'76,000',
      color:'#FEF7FF',
    },
    {
      logo: icon1,
      image:image1,
      name: "Iphone 13 Pro",
      price:'110,000',
      color:'#FFFEF1',
    },
  ]
  return (
    <div className='Container3 grid'>

      <div className='hero-icon flex'>
        <Link to='/'><ChevronLeftIcon className='heroicon'/></Link>
      </div>

      <div className='section-title'>
        <h3>Smartphone Offers</h3>
        <p>Select a smartphone</p>
      </div>

      <Select placeholder='All Brands' spacing={3} variant='filled' className='filter' size='lg'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>

      <div className='phone-cards grid'>

        {Data.map(({ logo, image, color, name, price}) => {
          return (
            <div className="phone-card grid">

              <div className='phone-logo grid'>
                <img src={logo} alt='icon'/>
              </div> 

              <div className="phone-img">
                <img src={image} alt='icon'/>
              </div>

              <div className='phone-color'></div>

              <h3 className="phone-name">{name}</h3>

              <p className="price">From <span>#{price}</span> per month </p>

              <Link to='/order'>
                <button className='butn'>
                    Select
                </button>
              </Link>
              
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Offer