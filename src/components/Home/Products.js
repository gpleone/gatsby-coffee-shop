import React from 'react';
import Title from '../Globals/Title'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Product = ({product}) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card">
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body">

        <h5>{product.title}</h5>
        <h5>${product.price}</h5>
        <button className="btn">add to cart</button>
        <button class="snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-url="https://gatsby-coffe-shop.netlify.com/"
          data-item-image={product.image.fluid.src}
          data-item-name={product.title}
        >
          Add to cart
        </button>
        </div>
      </div>
    </div>
  )
}

const getProducts = graphql`{
  products: allContentfulCoffeeProduct {
    edges {
      node {
        id
        title
        price
        image {
          fluid(maxHeight: 426){
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        } 
      }
    }
  }
}`;

const Products = () => {
  return (
    <StaticQuery 
      query={getProducts} 
      render={data => {
        return (
          <section>
            <div>
              <Title title="Our Products" />
              <div>
                {data.products.edges.map(({node: product}) => <Product key={product.id} product={product} />)}
              </div>
            </div>
          </section>
        )
      }} 
    />
  )
}

export default Products