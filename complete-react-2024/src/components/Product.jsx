import React from 'react'

const Product = ({ title, brand, price, ram, rom, camera, fingerPrint }) => {

    return (
        <div>
            <h1>title = {title}</h1>
            <h2>brand = {brand}</h2>
            <h2>price = {price}</h2>
            <h3>ram = {ram}</h3>
            <h3>rom = {rom}</h3>
            <h3>camera = {camera}</h3>
            <h3>fingerPrint = {fingerPrint}</h3>
        </div>
    )
}

export default Product
