import React from "react";
import './ModalWindow.css';
import './ConfirmModalWindow';
import ConfirmModalWindow from "./ConfirmModalWindow";

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }


   responseFromChild = (value) => {
        console.log(value);
        this.setState({
            isOpen: !this.state.isOpen
        })
   }

    render() {
        const {isOpen} = this.state;
        if(isOpen) {
            return (
                <ConfirmModalWindow callToSendMessage={this.responseFromChild}/>
                 )
        } else {
            return null
        }

       
    }
}

export default ModalWindow