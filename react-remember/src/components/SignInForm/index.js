import React from 'react';
import './SignInForm.css'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isEmailValid: false
        }
    }

    handleSubmit = (event) => {
        event.prevetDefault();
        console.dir(event.target)
    }

    handleInput = (event) => {

        const {name, value} = event.target
       
        if (name === 'email') {
            const verdict = this.validEmail(value)
            if (verdict) {
                this.setState({
                    isEmailValid: true
                });
            }
        }
         this.setState ({
            [name]: value
        })
    }

    validEmail = (emailValue) => {
        if(emailValue.length < 6) {
            return false;
        }
        return true
    }
    render () {
        const {isEmailValid} = this.state;
        return (
            <form className='form-container' onSubmit={this.handleSubmit}>
                <input className={isEmailValid}  type='email' name='email' value={this.state.email} onChange={this.handleInput}/>

                <input type='password' name='password' value={this.state.password} onChange={this.handleInput}/>
                
                <button type='submit'>Click me</button>
            </form>
        )
    }
}

export default SignInForm