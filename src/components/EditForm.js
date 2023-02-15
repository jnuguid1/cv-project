import React, {Component} from 'react';
import uniqid from 'uniqid';
import GeneralInfoSection from './GeneralInfoSection';
import EducationSection from './EducationSection';
import WorkSection from './WorkSection';
import SchoolEntry from './SchoolEntry';
import WorkEntry from './WorkEntry';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: uniqid(),
      schoolComponents: [],
      workComponents: [],
    }
  }

  handleAddSchool = () => {
    this.props.onAddSchool(this.state.currentId);
    this.setState({
      schoolComponents: this.state.schoolComponents.concat(
        <SchoolEntry
          id={this.state.currentId}
          key={this.state.currentId}
          onChange={this.props.onEducationChange}
          onDelete={this.handleDeleteSchool}
        />
      ),
      currentId: uniqid(),
    });
  }

  handleDeleteSchool = (event) => {
    const id = event.target.getAttribute('id');
    this.props.onDeleteSchool(id);
    this.setState({
      schoolComponents: this.state.schoolComponents.filter(component => {
        return component.props.id !== id
      })
    })
  }

  handleAddWork = () => {
    this.props.onAddWork(this.state.currentId);
    this.setState({
      workComponents: this.state.workComponents.concat(
        <WorkEntry
          id={this.state.currentId}
          key={this.state.currentId}
          onChange={this.props.onWorkChange}
          onDelete={this.handleDeleteWork}
        />
      ),
      currentId: uniqid(),
    })
  }

  handleDeleteWork = (event) => {
    const id = event.target.getAttribute('id');
    this.props.onDeleteWork(id);
    this.setState({
      workComponents: this.state.workComponents.filter(component => {
        return component.props.id !== id
      })
    })
  }

  render() {
    const { onSubmit, onGeneralChange, } = this.props;

    return (
    <form id='edit-form' onSubmit={onSubmit}>
      <h1>Resume Builder</h1>
      <GeneralInfoSection
        onChange={onGeneralChange}
      />
      <EducationSection onAddSchool={this.handleAddSchool}> 
        {this.state.schoolComponents}
      </EducationSection>
      <WorkSection onAddWork={this.handleAddWork}>
        {this.state.workComponents}
      </WorkSection>
      <button id='preview-button' type='submit'>Preview Resume</button>
    </form>
    )
  }
}

export default EditForm;