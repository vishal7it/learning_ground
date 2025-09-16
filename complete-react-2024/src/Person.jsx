import React from 'react'

const Person = () => {

    const person = {
        name: "Suman",
        age: 18,
        gmail: "'suman@gmail.com",
        pincode: 311001
    }

    const product = {
        title: "iphone",
        model: "iphone -15",
        price: 65000
    }
    return (
        <>
            <div>
                <h1>name= {person.name}</h1>
                <h2>age= {person.age}</h2>
                <h2>gmail= {person.gmail}</h2>
                <h2>pincode= {person.pincode}</h2>
            </div>
            <div>
                <h3>title = {product.title}</h3>
                <h3>model = {product.model}</h3>
                <h3>price = {product.price}</h3>
            </div>
        </>
    )
}

export default Person
