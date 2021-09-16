import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default props => {

    const {id} = useParams();
    const { productId, successCallback } = props;

    const deleteProduct = e => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => {
                successCallback();
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}