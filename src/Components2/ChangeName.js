import React, {useState} from 'react'

function ChangeName() {
    const initialState = {firstname:"Frank", lastname:"Olson", age:"23"}
    const [name, setName] = useState(initialState)

    const handleSubmit = (event) => {
        setName([...name, {
            id: name.length
        }])
    }


    return (
        <form onSubmit>
            <input type="text" value={name.firstname} 
            onChange={event => setName({ ...name, firstname: event.target.value})}>
            </input>
            <input type="text" value={name.lastname} 
            onChange={event => setName({...name, lastname: event.target.value})}>
            </input>
            <input type="text" value={name.age} 
            onChange={event => setName({...name, age: event.target.value})}>
            </input>
            <textarea value={name.firstname + " " + name.lastname + " " + name.age}/>
        </form>
    )
}

export default ChangeName






            {/* <textarea value={name.firstname + " " + name.lastname + " " + name.age}/> */}

