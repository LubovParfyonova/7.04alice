import React from "react"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: ""
        }
    }

somethingChange = (event) => {
this.setState({
    inputName: event.target.value
});
this.sendRequestToServer();
}


sendRequestToServer = () => {
    console.log(this.state.inputName)
}


render() {
    return (
        <form>
            <input type="text" value={this.state.inputName} onChange={this.somethingChange}/>
        </form>
    )
}
}

export default Form