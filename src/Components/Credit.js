import React, { Component } from "react"
import Artist from "./Artist.js"
import painter from "../mySignature.png";

//State
class Credit extends Component{
    constructor(){
        super()
    

    this.state = {
        artist: "Knut Aaboe",
        img: painter,
        alt: "Knut Aaboe Signature",
        class: "AppCredit"
    }

}



    render() {
        return (
            <>
                <img className={this.state.class} src={this.state.img} alt={this.state.alt}/>
                <Artist />
            </>
            
        )
    }

}

export default Credit;



//Props solution
// class Credit extends Component{
// constructor(props){
//     super(props)


// this.state = {
//     artist: "Knut Aaboe"
// }

// this.greetArtist = this.greetArtist.bind(this);

// }

// greetArtist(admirer) {
//     console.log(`Hello ${this.state.artist}, I love your work. Best regards ${admirer}`)
// }



// render() {
//     return (
//         <>
//             <img className={"AppCredit"} src={this.props.src} alt="Creator of the paintings"/>
//             <Artist greetArtist={this.greetArtist}/>
//         </>
        
//     )
// }

// }

// export default Credit;