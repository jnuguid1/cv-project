import React, { Component } from "react";
import SectionHeader from "./SectionHeader";

class EducationSection extends Component {
  render() {
    const { onAddSchool } = this.props;
    return (
      <div>
        <SectionHeader name='Education' />
        {this.props.children}
        <button onClick={onAddSchool}>Add</button>
      </div>
    )
  }
}

export default EducationSection;