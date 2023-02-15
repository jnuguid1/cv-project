import React, {Component} from "react";
import SectionHeader from "./SectionHeader";

class WorkSection extends Component {
  render() {
    const { onAddWork } = this.props;
    return (
      <div className="info-section">
        <SectionHeader name='Work Experience' />
        { this.props.children }
        <button type='button' id='add-work-button' onClick={onAddWork}>
          + Add Work
        </button>
      </div>
    )
  }
}

export default WorkSection;