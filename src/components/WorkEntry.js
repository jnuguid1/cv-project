import React, {Component} from "react";
import Input from "./Input";
import InputArea from "./InputArea";

class WorkEntry extends Component {
  render() {
    const { onChange, onDelete, id } = this.props;
    return (
      <div>
        <Input onChange={onChange} id={id} label='Company' name='company' />
        <Input onChange={onChange} id={id} label='Position Title' name='position' />
        <InputArea onChange={onChange} id={id} label='Job Description' name='jobDescription' />
        <div className="input-row">
          <Input onChange={onChange} id={id} label='Start Date' name='jobStart' />
          <Input onChange={onChange} id={id} label='End Date' name='jobEnd' />
        </div>
        <button className='delete-work-button' id={id} onClick={onDelete}>Delete Entry</button>
      </div>
    )
  }
}

export default WorkEntry;