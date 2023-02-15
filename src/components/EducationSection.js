import React, { Component } from "react";
import SectionHeader from "./SectionHeader";

class EducationSection extends Component {
  render() {
    const { onAddSchool } = this.props;
    return (
      <div className="info-section">
        <SectionHeader name='Education' />
        {this.props.children}
        <button type='button' id='add-school-button' onClick={onAddSchool}>
          + Add Education
        </button>
      </div>
    )
  }
}

export default EducationSection;