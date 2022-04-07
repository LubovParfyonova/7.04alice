import React from "react";


class CalculateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          number: '',
          result: '',
           direction: 'DIH'
        }
        this.coefficient = 29.45
    }


    handleInput = (event) => {
        const {name, value} = event.target;
                this.setState({
                    [name]: value,
                    valuta: name
                });
        }


    handleSubmit = (event) => {
        
       event.preventDefault();
       this.calculateMoney();
      
    }


    calculateMoney = () => {

        const {number, direction} = this.state;
        if (direction === 'HID') {
            const summaInDollars = number / this.coefficient
            this.setState({
                result: summaInDollars
            })
        }else if (direction === 'DIH') {
            const summaInHrivna = number * this.coefficient
            this.setState({
                result: summaInHrivna
            })
        }
    }

    render() {
        
        return(
            <form className="form-container" onSubmit={this.handleSubmit}> 
                <select value={this.state.direction} onChange={this.handleInput} name="direction">
                    <option value='DIH'> $ в грн</option>
                    <option value='HID'> грн в $</option>
                </select>
                <input type="text" value={this.state.number} name="number" onChange={this.handleInput} placeholder="Введите сумму для конвертации" />
                <input type="text" value={this.state.result} name="result"  onChange={this.handleInput} placeholder="Результат"/>

               
                <button type="submit" >Конвертировать</button>
               {/*  <button type="submit" >Reset</button> */}
            </form>
        )
    }
}

export default CalculateForm;