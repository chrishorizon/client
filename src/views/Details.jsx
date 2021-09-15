import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Details = () => {

    const [productState, setProductState] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProductState(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                (productState) ?
                <>
                    <h1>Title: {productState.title}</h1>
                    <h1>Price: {productState.price}</h1>
                    <h1>Description: {productState.description}</h1>
                </> : <h2>Loading...</h2>
            }
        </div>
    )
}

export default Details
