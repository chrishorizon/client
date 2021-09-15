import React, {useState, useEffect} from 'react'
import axios from "axios"
import ProductList from '../components/ProductList'
import Create from '../components/Create';


const Dashboard = () => {

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [created, setCreated] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [created]);

    const newCreate = () => {
        setCreated(!created)
    }

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id != id))
    }

    return (
        <div>
            <Create newCreate={newCreate}/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} /> }
        </div>
    )
}

export default Dashboard