import React from 'react'
import './laptop.css'

const Laptop = ({ brandName, model, price }) => {

    // const munnaBhaya = {
    //     backgroundColor: "blue",
    //     padding: "15px",
    //     margin: "15px",
    //     border: "2px solid gray",
    // }
    return (
        <div
            // style={{ backgroundColor: "gray", padding: '10px', margin: '20px', borderRadius: "10px", border: "2px solid yellow" }}
            // style={munnaBhaya}
            className="div"
        >
            <h3>BrandName= {brandName}</h3>
            <h3>Model= {model}</h3>
            <h3>Price= {price}</h3>
        </div>
    )
}

export default Laptop
