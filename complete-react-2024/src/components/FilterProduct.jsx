import React from 'react'

const FilterProduct = () => {
    const products = [
        { id: 1, title: "iphone 16", category: "mobiles", price: 90000 },
        { id: 2, title: "Hp probook", category: "laptops", price: 190000 },
        { id: 3, title: "Mi tab", category: "tablets", price: 20000 },
        { id: 4, title: "Sony Camera", category: "camera", price: 290000 }
    ];
    const filteredData = products.filter((data) => data.category == "mobiles")
    return (
        <div>
            {filteredData.map((data) => (
                <div key={data.id}>
                    <h1>Title = {data.title}</h1>
                    <h1>Price = {data.price}</h1>
                </div>
            ))}
        </div>
    )
}

export default FilterProduct
