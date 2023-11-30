import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
        }
        getProducts()
    }, [])

    const dispatcher = useDispatch()

    const addToCart = product => {
        dispatcher(add(product))
    }

  return (
    <div className='productsWrapper'>
        {
            products.map(product => {
                return <div className='card'>
                    <img src={product.image} alt='product'/>
                    <h6>{product.title}</h6>
                    <h5>{product.price}</h5>

                    <button className='btn' onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            })
        }
    </div>
  )
}

export default Products