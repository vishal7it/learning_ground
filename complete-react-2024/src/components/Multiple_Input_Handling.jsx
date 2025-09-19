import React, { useState } from 'react'
import Movies from './MovieZone/Movies'
import Form from './components/Form'

const Multiple_Input_Handling = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: ""
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        alert("Form has been submitted");
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            password: "",
            age: "",
            phone: ""
        })
    }
    return (
        <>

            <form onSubmit={submitHandler} >
                <div>
                    Name :- <input value={formData.name} onChange={onChangeHandler} name='name' type="text" />
                </div>
                <div>
                    Email :- <input value={formData.email} onChange={onChangeHandler} name='email' type="email" />
                </div>
                <div>
                    Password :- <input value={formData.password} onChange={onChangeHandler} name='password' type="password" />
                </div>
                <div>
                    Age :- <input value={formData.age} onChange={onChangeHandler} name='age' type="number" />
                </div>
                <div>
                    Phone Number :- <input value={formData.phone} onChange={onChangeHandler} name='phone' type="number" />
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>

        </>
    )
}

export default Multiple_Input_Handling
