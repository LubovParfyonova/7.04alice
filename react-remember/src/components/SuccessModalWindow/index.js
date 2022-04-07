import React from "react";
import './SuccessModalWindow.css';

class SuccessModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        }
    }


    closeModalWindow = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen} = this.state;

        if(isOpen) {
            return (
                <div className="backend">
                    <section className="modal-window">
                    <header className="modal-header">
                        <button className="close-button" onClick={this.closeModalWindow}>X</button>
                    </header>
                    <main className="modal-main">
                        <h3>Success Header</h3>
                        <p>Success Text</p>
                        <button className="okay-button" onClick={this.closeModalWindow}>Okay</button>
                    </main>
                    </section>
                </div>
            )
        } else {
            return null
        }
       
    }
}

export default SuccessModalWindow