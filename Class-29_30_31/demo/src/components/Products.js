import React from 'react'

const Products = () => {
    // const products = ['Laptop', 'Headphone', 'Smart Watch', 'Headphone']
    const products = [
        {
            "id": 1,
            "name": "Laptop"
        },
        {
            "id": 2,
            "name": "Headphone"
        },
        {
            "id": 3,
            "name": "Smart Watch"
        },
        {
            "id": 4,
            "name": "Headphone"
        }
    ]
    let a = 10
    return (   
        <div>
            {
                products.map(product => {
                    return <li key={product.id}>{product.name}</li>
                })
            }         
        </div>
    )
}

export default Products