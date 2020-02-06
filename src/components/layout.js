import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Navbar from './Globals/Navbar'
import Footer from './Globals/Footer'


import "./layout.css"

const Layout = ({children}) => 
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>

export default Layout