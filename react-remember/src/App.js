import React from "react";
import './App.css';
import Switcher from './components/Switcher';
import sad from './components/sad.png';
import smile from './components/smile.png';
import SuccessModalWindow from './components/SuccessModalWindow';
import Timer from './components/Timer';
import ModalWindow from "./components/ModalWindow";
import Form from './components/Form';
import SignInForm from './components/SignInForm'
import CalculateForm from "./components/CalculateForm";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: true,
      moodText: 'smile',

      timerMount: true
    }
  }

changeBgc = () => {
this.setState({
  moodText: this.state.moodText === 'smile' ? 'sad' : 'smile',
  mood: !this.state.mood
})
}
/*
  <div className={moodText}>
       <Switcher bgColor={moodText} changeParentBackground={this.changeBgc} moodText={moodText} moodPic={moodPic}/> 
       <SuccessModalWindow />
    </div> */

render() {
  const {moodText, mood} = this.state;
  const moodPic = mood ? smile : sad;


  if (this.state.timerMount) {
    return   (<>
    {/* <button onClick={()=>{this.setState({timerMount: !this.state.timerMount})}}> Mount Timer </button> */}
    {/* <Timer /> */}
    {/* <ModalWindow /> */}
    {/* <Form /> */}
   {/*  <SignInForm /> */}
   <CalculateForm />
    </>
    )
  } else {
    return <button onClick={()=>{this.setState({timerMount: !this.state.timerMount})}}> Mount Timer </button>
  }
}
}

export default App;


/*
Hometask: Создать еще одну компоненту, которая отобразит кружочек с зеленой границей и будет менять содержимое в зависимости от того, что отображает компонента Switcher

*/