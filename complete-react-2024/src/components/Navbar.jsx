import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const login = () => {
        setIsLoggedIn(true);
        navigate('/dashboard');
    }
    const logout = () => {
        setIsLoggedIn(false);
        navigate('/');
    }


    return (
        <div className='nav_bar'>
            <Link className="items left" to={'/'} >Learning Playground</Link>
            <div className="right">
                {isLoggedIn && (<>


                    <Link className="items" to={"/meal"}>Meals</Link>
                    <Link className="items" to={"/courses"}>Courses</Link>
                    <Link className="items" to={"/dashboard"}>Dashboard</Link>
                    <Link className="items" to={"/profile"}>Profile</Link>
                    <button className="items" style={{ fontWeight: "bold", backgroundColor: "gray" }} onClick={logout} >Logout</button>
                </>)}
                {!isLoggedIn && (<>


                    <Link className="items" to={"/about"}>About</Link>
                    <Link className="items" to={"/team"}>Team</Link>
                    <button className="items" style={{ fontWeight: "bold", backgroundColor: "gray" }} onClick={login}>Login</button>
                    <Link className="items" to={"/contact"}>Contact</Link>

                </>)}
            </div>
        </div >
    )
}

export default Navbar