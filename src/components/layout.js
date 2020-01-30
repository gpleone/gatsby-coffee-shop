import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Navbar from './Globals/Navbar'


import "./layout.css"

const Layout = ({children}) => 
  <div>
    <Navbar />
    {children}
  </div>

export default Layout