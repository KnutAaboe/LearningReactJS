import React, { Component } from 'react'
import Input from "./Input"

class InputParent extends Component {
    constructor(props){
        super(props)
        this.ref = React.createRef();
    }

    clickHandler = () => {
        this.ref.current.focusInput()

    }

    render() {
        return (
            <>
                <Input ref={this.ref}/>
                <button onClick={this.clickHandler}>Click me to focus</button>
            </>
        )
    }
}

export default InputParent
