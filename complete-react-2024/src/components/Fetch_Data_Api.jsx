import React, { useEffect, useState } from 'react'

const Fetch_Data_Api = () => {
    const [apiData, setApidata] = useState([])
    useEffect(() => {
        const fetchDataAPI = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json();
            setApidata(data)
            console.log(data);

        }
        fetchDataAPI()
    }, [])

    return (

        <div >
            {apiData.map((data) => <div key={data.id} style={{ backgroundColor: "rgb(9,5,63)", margin: "10px", border: "2px solid yellow", borderRadius: "10px" }}>
                <h3>Title:-{data.title}</h3>
            </div>)
            }
        </div >
    )
}

export default Fetch_Data_Api
