import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Offer from '../Components/Offer/Offer'
import Footer from '../Components/Footer/Footer'
import { QueryClient, QueryClientProvider} from 'react-query'
 
 const queryClient = new QueryClient()

const Offers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='Offers'>
        <Navbar/>
        <Offer/>
        <Footer/>  
      </div>
     </QueryClientProvider>
  )
}

export default Offers