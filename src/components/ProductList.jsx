import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    
    return (
        <>
        <li>
            <Link to={`/products/${props.product._id}`}>
                {props.product.title}
            </Link>
        </li>
        <button onClick={() => props.deleteHandler(props.product._id)}>Delete</button>
        </>
    );
}

export default ProductList;