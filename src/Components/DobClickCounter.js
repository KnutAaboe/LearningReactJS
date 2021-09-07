import React, {Component} from "react";
import withCounter from "./withCounter";

class DobClickCounter extends Component {

    render() {
        const { count, incCount } = this.props
        return (
            <h1 onDoubleClick={incCount} >{this.props.name} click me is clicked {count} times</h1>
        )
    }

}

export default withCounter(DobClickCounter, 4)