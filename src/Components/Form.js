import React, { Component } from "react"

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            names: "",
            opinion: "Good name"
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOpinionChange = (event) => {
        this.setState({
            opinion: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            names: this.state.names + this.state.name + " is a " + this.state.opinion
        })
        
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label>Names</label>
                    <textarea value={this.state.names}></textarea>
                </div>
                <div>
                    <label>Opinion on the name</label>
                    <select value={this.state.opinion} onChange={this.handleOpinionChange}>
                        <option value="Good name">Good</option>
                        <option value="Okey name">Okey</option>
                        <option value="Bad name">Bad</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

}

export default Form;