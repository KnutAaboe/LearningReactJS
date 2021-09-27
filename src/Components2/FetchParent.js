import React, { useReducer, useEffect } from 'react'
import axios from "axios"
import ShowChild from './ShowChild'


export const UserContext = React.createContext()

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS": 
            return {
                loading: false,
                post: action.payload,
                error: ""
            }

        case "FETCH_ ERROR": 
            return {
                loading: false,
                post: {},
                error: "Something went horribly wrong"
            }

        default:
            return state
    }
}

function FetchParent() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch(error => {
            dispatch({type: "FETCH_ERROR"})
            
        })
    }, [])


    return (
        <div>
            <UserContext.Provider value={state}>
                <ShowChild />
            </UserContext.Provider>
        </div>
    )
}

export default FetchParent;