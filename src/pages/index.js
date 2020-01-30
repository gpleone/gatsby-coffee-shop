import React from "react"
import { Link } from "gatsby"
import {FaGulp} from 'react-icons/fa'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
    <FaGulp />
  </Layout>
)

export default IndexPage
