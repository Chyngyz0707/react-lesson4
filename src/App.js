import React from "react";
// Неконтролируемый компонент
export default class Form extends React.Component {
  handleSubmitClick = () =>{
    const name = this._name.value;
  };
  render() {
    return {
      <div>
        <input type="text" ref={(input) => (this._name = input)} />
        <button onClick={this.handleSubmitClick}>Sign Up!!</button>
      
      </div>
        
    };
  }
} 