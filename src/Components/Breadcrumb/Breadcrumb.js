import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import './Breadcrumb.css'

const Breadcrumbs = () => {
  return (
    <div className='Breadcrumb-container grid'>

      <div className='hero-Section grid'>
      <div
          className="Hero-icon flex"
          onClick={() => {
            window.history.back();
          }}
        >
          <ChevronLeftIcon className="heroicon" />
        </div>
        <h3 className='hero-title'>APPLICATION</h3>
      </div>
      
      <div className='Breadcrumb flex'>

        <div className='breadcrumbItem flex isCurrentPage'>
          <Link to='' className='breadcrumbLink '>1</Link>
        </div>
        <div className='seperator isCurrentPage'></div>
        <div className='breadcrumbItem flex'>
          <Link to='' className='breadcrumbLink'>2</Link>
        </div>
        <div className='seperator'></div>
        <div isCurrentPage className='breadcrumbItem flex'>
          <Link to='' className='breadcrumbLink'>3</Link>
        </div>
        <div className='seperator'></div>
        <div className='breadcrumbItem flex'>
          <Link to='' className='breadcrumbLink'>4</Link>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs