import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import axios from "axios"
import ProductList from '../components/ProductList'


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
                        return <ProductList key={i} i={i} product={product} deleteHandler={deleteHandler}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default Dashboard