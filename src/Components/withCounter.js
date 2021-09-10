import React, {Component} from 'react'

    class WithCounter extends Component {
        constructor(props){
            super(props)

            this.state = {
                count: 0
            }
        }

        incCount = () => {
            this.setState(prev => {
                return { count : prev.count + 1}
            })
        }


        render(){
            const {count} = this.state
            return (
                <div>
                    {this.props.children(count, this.incCount)}

                </div>
            )
        }
    }

export default WithCounter


// Higher Component 
// const withCounter = (WrappedComponent, times) => {
//     class withCounter extends Component {
//         constructor(props){
//             super(props)

//             this.state = {
//                 count: 0
//             }
//         }

//         incCount = () => {
//             this.setState(prev => {
//                 return { count : prev.count + times}
//             })
//         }
// render(){
//     return <WrappedComponent count={this.state.count} incCount={this.incCount} {... this.props}/>
// }
// }

// return withCounter
// }
// export default withCounter
