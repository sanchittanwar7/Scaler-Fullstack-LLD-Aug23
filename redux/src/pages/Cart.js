import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const items = useSelector(state => state.cart)
  const dispatcher = useDispatch()

  const removeFromCart = itemId => {
    dispatcher(remove(itemId))
  }
  return (
    <div className='cartWrapper'>
      {
        items.map(item => {
          return <div className='cartCard'>
            <img src={item.image} alt='product'/>
            <h5>{item.title}</h5>
            <h5>Price: ${item.price}</h5>

            <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        })
      }
    </div>
  )
}

export default Cart