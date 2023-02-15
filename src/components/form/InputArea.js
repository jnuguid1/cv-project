import React, {Component} from "react";

class InputArea extends Component {
  render() {
    const { label, name, onChange, id } = this.props;
    return (
      <div className='input-container'>
        <label htmlFor={name}>{label}</label>
        <textarea id={id} onChange={onChange} name={name} />
      </div>
    )
  }

}

export default InputArea;