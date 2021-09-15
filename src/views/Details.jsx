import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'

const Details = () => {

    const [productState, setProductState] = useState({});
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProductState(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                (productState) ?
                <>
                    <h1>Title: {productState.title}</h1>
                    <h1>Price: {productState.price}</h1>
                    <h1>Description: {productState.description}</h1>
                    <Link to={`/products/${productState._id}/edit`}>Edit</Link>
                    <button onClick={deleteHandler}>Delete</button>
                    <button onClick={() => history.push("/")}>Home</button>
                </> : <h2>Loading...</h2>
            }
        </div>
    )
}

export default Details
