import React, { Component } from 'react'

class Input extends Component {
    constructor(props){
        super(props)
        this.ref = React.createRef();
    }

    focusInput(){
        this.ref.current.focus()
    }
    
    // componentDidMount(){
    //     this.ref.current.focus()

    // }

    render() {
        return (
            <>
                <textarea ref={this.ref}></textarea>
            </>
        )
    }
}

export default Input
