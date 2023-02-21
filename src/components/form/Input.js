import React, {Component} from 'react';

class Input extends Component {
  render() {
    const { label, name, onChange, id, value, className } = this.props;

    const classes = className ? 
      `input-container ${className}` : 
      'input-container';
    return (
      <div className={classes}>
        <label htmlFor={name}>{label}</label>
        <input 
          autoComplete='off'
          id={id}
          onChange={onChange}
          type='text'
          name={name} 
          defaultValue={value}
        />
      </div>
    )
    
  }
}
export default Input;