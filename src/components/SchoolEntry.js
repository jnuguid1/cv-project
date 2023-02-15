import React, { Component } from "react";
import Input from "./Input"

class SchoolEntry extends Component {
  render() {
    const { onChange, onDelete, id } = this.props;
    return (
      <div>
        <Input onChange={onChange} id={id} label='School Name' name='school' />
        <Input onChange={onChange} id={id} label='Degree/Diploma' name='degree' />
        <Input onChange={onChange} id={id} label='Title of Study' name='study' />
        <div className="input-row">
          <Input onChange={onChange} id={id} label='Start Date' name='schoolStart' />
          <Input onChange={onChange} id={id} label='End Date' name='schoolEnd' />
        </div>
        <button id={id} className='delete-school-button' onClick={onDelete}>
          Delete Entry
        </button>
      </div>
    )
  }
}

export default SchoolEntry;