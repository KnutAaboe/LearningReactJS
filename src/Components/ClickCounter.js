import React, {Component} from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {

    render() {
        const { count, incCount } = this.props
        return (
            <h1 onClick={incCount} > Click me {this.props.name} is clicked {count} times</h1>
        )
    }

}

export default withCounter(ClickCounter, 2)