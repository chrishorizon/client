import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [dlt, setDlt] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [dlt])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => setDlt(!dlt))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ul>
                {
                    products.map((product, i) => {
                        return(
                            <>
                            <li key={i}>
                                <Link to={`/products/${product._id}`}>
                                    {product.title}
                                </Link>
                            </li>
                            <button onClick={() => deleteHandler(product._id)}>Delete</button>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Dashboard