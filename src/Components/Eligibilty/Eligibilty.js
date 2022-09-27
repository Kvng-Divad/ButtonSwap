import React, { useCallback, useEffect, useState } from 'react'
import './Eligibilty.css'
import  { Btn } from '../Button/Button'
import { InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useUserContext } from '../../App'
import axios from 'axios'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import { PhoneIcon } from '@chakra-ui/icons'
import { createSearchParams, useNavigate } from 'react-router-dom'



const Eligibilty = () => {
  const {APP_URI} = useUserContext()
  const [products, setProducts] = useState([])
  const [selectedItems, setSelectedItems] = React.useState([]);

  const [storage, setPhoneStorage] = useState('')
  const [condition, setCondition] = useState('')
  const [color, setColor] = useState('')
  const [paymentPlan, setPaymentPlan] = useState('')
  const [terms, setTerms] = useState('')

  const navigate = useNavigate()

  const getPhones = useCallback(() => {
    axios.get(`https://kezaafrica.herokuapp.com/v1/products/without-images`)
      .then((res) => {
        if (res.data.ok) {
          setProducts(res.data.data);
        }
      })
      .catch(({ message }) => {
        setProducts([]);
      });
    axios.defaults.withCredentials = true;
  },[])

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems.length === 0 ? [] : [selectedItems[selectedItems.length - 1]]);
    }
  };

  useEffect(() => {
    getPhones()
  },[getPhones])

  const hanldeOnClick = () => {
    if(selectedItems.length === 0) return;

   
    navigate({
      pathname: `/products/${selectedItems[0].value}`,
      search: createSearchParams({
        color,
        condition,
        terms,
        paymentPlan,
        storage
      }).toString()
    })
  }
  return (
    <div className='eligibilty grid' id='calculator'>
      <div className="title grid">
        <h3>SMARTPHONE CALCULATOR</h3>
        <p>Find out what your phone plan looks like</p>
      </div>

      <div className='calculator-container grid'>


         <CUIAutoComplete
          placeholder="What phone would you like?"
          hideToggleButton
          disableCreateItem
          items={products.map(item => ({value: item.id, label: item.name}))}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
          renderCustomInput={(inputProps) => (<InputGroup>
          <InputLeftElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} />
          <Input {...inputProps} /></InputGroup>)}
        />
         

        <Select value={storage} onChange={e => setPhoneStorage(e.target.value)} placeholder='Phone storage' spacing={3}  className='filter' size='lg'>
          <option value='4GB'>4GB</option>
          <option value='8GB'>8GB</option>
          <option value='16GB'>16GB</option>
          <option value='32GB'>32GB</option>
          <option value='64GB'>64GB</option>
          <option value='128GB'>128GB</option>
          <option value='256GB'>256GB</option>
        </Select>

        <Select value={condition} onChange={e => setCondition(e.target.value)} placeholder='Phone condition' spacing={3}  className='filter' size='lg'>
          <option value='Pre Owned'>Pre Owned</option>
          <option value='Brand New'>Brand New</option>
        </Select>

        <Select value={color} onChange={e => setColor(e.target.value)} placeholder='Phone color' spacing={3}  className='filter' size='lg'>
          <option value='Starlight'>Starlight</option>
          <option value='Midnight'>Midnight</option>
          <option value='Red'>Red</option>
          <option value='Blue'>Blue</option>
          <option value='Pink'>Pink</option>
        </Select>

        <Select value={paymentPlan} onChange={e => setPaymentPlan(e.target.value)} placeholder='Payment plan' spacing={3}  className='filter' size='lg'>
          <option value='Pay monthly'>Pay monthly</option>
        </Select>

        <Select value={terms} onChange={e => setTerms(e.target.value)} placeholder='Payment terms' spacing={3}  className='filter' size='lg'>
          <option value='1 Month'>1 Month</option>
          <option value='2 Months'> 2 Months</option>
          <option value='3 Months'> 3 Months</option>
          <option value='4 Months'> 4 Months</option>
          <option value='5 Months'>5 Months</option>
          <option value='6 Months'>6 Months</option>
        </Select>

      </div>
      <Btn>
        <button onClick={hanldeOnClick} className=''>
            {'Apply Now'}
        </button>
      </Btn>
    </div>
  )
}

export default Eligibilty