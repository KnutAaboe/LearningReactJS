import React, {Component} from "react";
// import withCounter from "./withCounter";

class DobClickCounter extends Component {

    render() {
        const { count, incCount } = this.props
        return (
            <h1 onDoubleClick={incCount} > Dobbel click me is clicked {count} times</h1>
        )
    }

}

export default DobClickCounter

//Higher Components
//withCounter(DobClickCounter, 2)