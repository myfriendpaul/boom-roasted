import './ProductList.css'
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'
import Product from '../../components/Product/Product'



const ProductList = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])



  return (
    <>
      <Layout user={props.user}>
        <div className='products'>
          {products.map((product, index) => {
            return (
              <>
                <Product
                  id={product.id}
                  name={product.name}
                  imgURL={product.imgURL}
                  price={product.price}
                  key={index}

                />
                <button>I am button</button>
              </>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export default ProductList

