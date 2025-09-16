import React from 'react'

const showProduct = () => {
    let products = [{ id: 1, title: "iPhone 15", price: 100000 }, { id: 2, title: "iPhone 16", price: 110000 }, { id: 3, title: "iPhone 17", price: 120000 }, { id: 4, title: "iPhone 18", price: 130000 }]
    return (
        <div>
            <h1>Products</h1>
            {products.map((data) => (<div key={data.id}>
                <h1>Title = {data.title}</h1>
                <h1>Price = {data.price}</h1>
            </div>))}
        </div>
    )
}

export default showProduct
