import React, { Component } from "react"
import badfood from "../bad_food.png";

//State
class Frame extends Component{
    constructor(props){
        super(props)

        this.state = {
            img: badfood,
            alt: badfood,
            class: "Images "
        }

    }

    markClickedImg(){
        if (!this.state.class.includes("clickedImage")){
            this.setState({class: this.state.class + " clickedImage"})
        } else {
            this.setState({class: "Images "})

        }
    }

    render() {
        return (
            <img id={this.props.id} onClick={() => this.markClickedImg()} className={this.state.class} src={this.state.img} alt={this.state.alt}/>
        )
    }

}

export default Frame;

//Props solution
// class Frame extends Component{

//     render() {
//         return (
//             <img className={"Images"} src={this.props.src} alt={this.props.alt}/>
//         )
//     }

// }

// export default Frame;