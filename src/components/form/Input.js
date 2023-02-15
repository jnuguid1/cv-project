import React, {Component} from 'react';

class Input extends Component {
  render() {
    const { label, name, onChange, id } = this.props;

    return (
      <div className='input-container'>
        <label htmlFor={name}>{label}</label>
        <input autoComplete='off' id={id} onChange={onChange} type='text' name={name} />
      </div>
    )
    
  }
}
export default Input;