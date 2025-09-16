import React, { useEffect } from 'react'

const Fetch_Data_Api = () => {

    useEffect(() => {
        const fetchDataAPI = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        }
    }, [])

    return (

        <div>

        </div>
    )
}

export default Fetch_Data_Api
