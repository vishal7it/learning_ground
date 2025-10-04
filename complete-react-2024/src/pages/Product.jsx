import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const arr = [
        {
            id: "mern001",
            courseName: "MERN_Stack",
            price: 10000,
            duration: "5 months"
        },
        {
            id: "java001",
            courseName: "Java",
            price: 15000,
            duration: "5 months"
        },
        {
            id: "py001",
            courseName: "Python_Full_Stack",
            price: 5000,
            duration: "5 months"
        },
        {
            id: "react001",
            courseName: "REACT_js",
            price: 20000,
            duration: "5 months"
        }
    ]
    return (
        <div>
            <ul>
                {arr.map((data) => <div key={data.id}>
                    <li>
                        <Link to={`/courses/${data.id}`}>{data.courseName}</Link>{" "}
                    </li>
                </div>)}
            </ul>
        </div>
    )
}

export default Product