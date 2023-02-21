import React, {Component} from "react";

class InputArea extends Component {
  render() {
    const { label, name, onChange, id, value } = this.props;
    return (
      <div className='input-container'>
        <label htmlFor={name}>{label}</label>
        <textarea
          id={id}
          onChange={onChange}
          name={name}
          defaultValue={value}
          rows='5'
        />
      </div>
    )
  }

}

export default InputArea;