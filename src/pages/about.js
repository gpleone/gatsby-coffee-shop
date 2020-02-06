import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="About Us" styleClass="default-background" />
    <p>vedi video 16 per css e html</p>
    <Info />
  </Layout>
)

export default AboutPage

export const query = graphql`{
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`