import React, {Component} from "react";
import Input from "./Input";
import InputArea from "./InputArea";

class WorkEntry extends Component {
  render() {
    const { onChange, onDelete, id, values } = this.props;
    return (
      <div>
        <Input
          value={values.company}
          onChange={onChange}
          id={id}
          label='Company'
          name='company' />
        <Input
          value={values.position}
          onChange={onChange}
          id={id}
          label='Position Title'
          name='position'
        />
        <InputArea
          value={values.jobDescription}
          onChange={onChange}
          id={id}
          label='Job Description'
          name='jobDescription'
        />
        <div className="input-row">
          <Input
            value={values.jobStart}
            onChange={onChange}
            id={id}
            label='Start Date'
            name='jobStart'
          />
          <Input
            value={values.jobEnd}
            onChange={onChange}
            id={id}
            label='End Date'
            name='jobEnd'
          />
        </div>
        <button className='delete-work-button' id={id} onClick={onDelete}>Delete Entry</button>
      </div>
    )
  }
}

export default WorkEntry;