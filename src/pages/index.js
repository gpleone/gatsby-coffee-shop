import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'
import Contacts from '../components/Home/Contacts'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Coffe Shop" styleClass="default-background" />
    <Info />
    <Menu items={data.menu}/>
    <Products />
    <Contacts />
  </Layout>
)

export default IndexPage

export const query = graphql`{
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu: allContentfulCoffeeItem{
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed(width: 50, height: 50){
            ...GatsbyContentfulFixed_tracedSVG
          } 
        }
      }
    }
  }
}`