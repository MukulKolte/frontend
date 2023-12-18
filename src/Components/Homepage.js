import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import { Breadcrumbhome } from './Breadcrumbs'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Breadcrumbhome />
        <Body />
        <Footer />
    </div>
  )
}

export default Homepage
