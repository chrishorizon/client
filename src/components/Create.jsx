import React, {useState} from 'react'
import axios from 'axios'

const Create = (props) => {

    const [validState, setValidState] = useState({});
    
    const [formState, setFormState] = useState({
        title: (""),
        price: (""),
        description: ("")
    });

    const { newCreate } = props;

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formState)
            .then(res => {
                setFormState({
                    title: (""),
                    price: (""),
                    description: ("")
                })
                newCreate()
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
                    <input type="text" name="title" id="" onChange={changeHandler} value={formState.title} />
                    {(validState.title) ? <p style={{color: "red"}} >{validState.title}</p> : null }
                </p>
                <p>
                    Price:
                    <input type="number" name="price" id="" onChange={changeHandler} value={formState.price} />
                    {(validState.price) ? <p style={{color: "red"}} >{validState.price}</p> : null }
                </p>
                <p>
                    Description:
                    <input type="text" name="description" id="" onChange={changeHandler} value={formState.description} />
                    {(validState.description) ? <p style={{color: "red"}} >{validState.description}</p> : null }
                </p>
                <button type="submit" >Create</button>
            </form>
        </div>
    )
}

export default Create
