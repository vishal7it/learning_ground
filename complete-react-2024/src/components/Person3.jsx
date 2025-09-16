import React from 'react'

const Person3 = ({ name, age, panCard, price }) => {

    if (age > 18) {
        console.log("You can drive")
    } else {
        console.log("You can't drive")
    }
    return (
        <div>
            <h1>Name = {name}</h1>
            <h3>
                {age > 18 ? <h1>"You can drive"</h1> : <h1>"You can't drive"</h1>}
            </h3>
            <h1> {panCard ? "You can open bank account in our bank." : "You can not open bank account in our bank."}</h1>
            <h2>{panCard && <p>you can open account </p>}</h2>
            <div>{price == 100 && <h1>You can purchase iphone</h1>}</div>
        </div>
    )
}

export default Person3
