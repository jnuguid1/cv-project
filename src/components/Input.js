import React, {Component} from 'react';

class Input extends Component {
  render() {
    const { label, name, onChange, id } = this.props;
    if (id) {
      return (
        <div className='input-container'>
          <label htmlFor={name}>{label}</label>
          <input id={id} onChange={onChange} type='text' name={name} />
        </div>
      )
    } else {
      return(
        <div className='input-container'>
        <label htmlFor={name}>{label}</label>
        <input onChange={onChange} type='text' name={name} />
        </div>
      )
    }
  }
}
export default Input;