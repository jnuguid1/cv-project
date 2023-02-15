import React, {Component} from "react";

class InputArea extends Component {
  render() {
    const { label, name } = this.props;
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} />
      </div>
    )
  }

}

export default InputArea;