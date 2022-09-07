import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import './Breadcrumb.css'

const Breadcrumbs = () => {
  return (
    <div className='breadcrumb-container grid'>
      <div className='hero-section grid'>
        <div className='hero-icon flex'>
          <Link to='/'><ChevronLeftIcon className='heroicon'/></Link>
        </div>
        <h3 className='hero-title'>APPLICATION</h3>
      </div>
      <div className='breadcrumb flex'>

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