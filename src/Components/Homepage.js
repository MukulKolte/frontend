import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import { Breadcrumbhome } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Breadcrumbhome />
        <Body />
        <Joiningoptions />
        <Footer />
    </div>
  )
}

export default Homepage
