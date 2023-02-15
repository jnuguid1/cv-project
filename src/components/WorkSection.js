import React, {Component} from "react";
import SectionHeader from "./SectionHeader";

class WorkSection extends Component {
  render() {
    const { onAddWork } = this.props;
    return (
      <div>
        <SectionHeader name='Work Experience' />
        { this.props.children }
        <button onClick={onAddWork}>Add</button>
      </div>
    )
  }
}

export default WorkSection;