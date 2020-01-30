import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Coffe Shop" styleClass="default-background" />
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