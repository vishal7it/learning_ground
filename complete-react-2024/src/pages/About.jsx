import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/home")
    }
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={goToHome}>Go to home</button>
            <button onClick={goBack}>Go Back</button>

        </div>
    )
}

export default About