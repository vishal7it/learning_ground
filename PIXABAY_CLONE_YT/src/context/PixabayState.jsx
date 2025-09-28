import React, { useState } from 'react'
import PixabayContext from './PixabayContext'
import { useEffect } from 'react'
const PixabayState = (props) => {
    const [imageData, setImageData] = useState([])
    const [query, setQuery] = useState('london')
    const api_key = "52490567-16cd53880c11f3227d7963d36"
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=20`)
            const data = await api.json()
            setImageData(data.hits)
            console.log(data.hits)
        };
        fetchData()

    }, [query])

    const fetchImageByCategory = async (cat) => {
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=20`)
        const data = await api.json()
        setImageData(data.hits)
        console.log(data.hits)
    }

    return (
        <PixabayContext.Provider value={{
            imageData, fetchImageByCategory, setQuery
        }}>{props.children}</PixabayContext.Provider>
    )
}

export default PixabayState