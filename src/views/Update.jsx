import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    
    const [validState, setValidState] = useState({});
    const history = useHistory();
    const [formState, setFormState] = useState({})

    const {id} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setFormState(res.data))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, formState)
            .then(res => {
                history.push(`/products/${id}`)
            })
            .catch(err => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={changeHandler} value={formState.title} />
                    {(validState.title) ? <p style={{color: "red"}} >{validState.title}</p> : null }
                </p>
                <p>
                    Price:
                    <input type="number" name="price" onChange={changeHandler} value={formState.price}/>
                    {(validState.price) ? <p style={{color: "red"}} >{validState.price}</p> : null }
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange={changeHandler} value={formState.description} />
                    {(validState.description) ? <p style={{color: "red"}} >{validState.description}</p> : null }
                </p>
                <button type="submit" >Update</button>
                <button onClick={() => history.push("/")}>Home</button>
            </form>
        </div>
    )
}

export default Update
