import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const ProductList = (props) => {

    const { removeFromDom } = props;

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <>
        <ul>
            {
                props.products.map((products, i) => {
                    return <li key={i}>
                        <Link to={`/products/${products._id}`}>
                            {products.title}
                        </Link>
                        <button onClick={() => deleteHandler(products._id)}>Delete</button>
                    </li>
                })
            }
        </ul>
        </>
    );
}

export default ProductList;