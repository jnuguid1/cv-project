import React, { Component } from "react";
import Input from "./Input"

class SchoolEntry extends Component {
  render() {
    const { onChange, onDelete, id, values } = this.props;
    return (
      <div>
        <Input 
          value={values.school}
          onChange={onChange}
          id={id}
          label='School Name'
          name='school'
        />
        <Input 
          value={values.degree}
          onChange={onChange}
          id={id}
          label='Degree/Diploma'
          name='degree' 
        />
        <Input 
          value={values.study}
          onChange={onChange}
          id={id}
          label='Title of Study'
          name='study'
        />
        <div className="input-row">
          <Input 
            value={values.schoolStart}
            onChange={onChange}
            id={id}
            label='Start Date'
            name='schoolStart'
          />
          <Input
            value={values.schoolEnd}
            onChange={onChange}
            id={id}
            label='End Date'
            name='schoolEnd'
          />
        </div>
        <button id={id} className='delete-school-button' onClick={onDelete}>
          Delete Entry
        </button>
      </div>
    )
  }
}

export default SchoolEntry;