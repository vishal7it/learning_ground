import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

const CourseDetail = () => {
    // console.log(useParams)
    // console.log(useLocation)
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
    const { id } = useParams()
    const CourseDetails = arr.filter((data) => data.id == id)
    const location = useLocation();
    console.log(CourseDetails)
    return (
        <>
            <div>
                <h1>Course ID = {id}</h1>
                <h1>Course Name = {CourseDetails[0].courseName}</h1>
                {location.pathname != "/courses/py001" && (
                    <>
                        <h1>Course Price = {CourseDetails[0].price}</h1>
                        <h1>Course Duration = {CourseDetails[0].duration}</h1>
                    </>
                )}
            </div>
            <button><Link to={"/courses"} style={{ textDecoration: "none", color: "black" }}>All Courses</Link></button>
        </>
    )
}

export default CourseDetail