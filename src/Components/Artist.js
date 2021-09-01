import React, { Component } from "react"


//State
class Artist extends Component{
    
    constructor(){
        super()

        this.state = {
            buttonText: "Click to change to artist's name",
        }
        // this.changeText = this.changeText.bind(this);
    }
    
    

    changeText = () =>{
        this.setState({
            buttonText: "Knut"
        }, alert("Artit's name should apear now"))
    }

    render () {
    return (
        <>
            <button onClick={this.changeText}>{this.state.buttonText}</button>
            {/* <button onClick={() => changeText()}>{this.state.buttonText}</button> */}
        </>
            
        )}
    }


//Props solution
// export default function Artist(props){
//     const name = "Adam"
//     return (
//         <>
//             <button onClick= {() => props.greetArtist(name)}>Greet Artist</button>
//         </>
            
//         )
//     }

export default Artist;