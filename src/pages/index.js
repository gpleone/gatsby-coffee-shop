import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Coffe Shop" styleClass="default-background" />
    <Info />
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
}`