import './styles/App.css';
import React, {Component} from 'react';
import GeneralInfoSection from './components/GeneralInfoSection';
import EducationSection from './components/EducationSection';
import WorkSection from './components/WorkSection';
import uniqid from 'uniqid';
import SchoolEntry from './components/SchoolEntry';
import WorkEntry from './components/WorkEntry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentId: uniqid(),
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      schoolInputs: [],
      schoolComponents: [],
      workInputs: [],
      workComponents: [],
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ ...this.state, [name]: value})
  }

  handleEducationChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.getAttribute('id');
    this.setState({ 
      schoolInputs: this.state.schoolInputs.filter(entry => {
        if (entry.id === id) {
          entry[name] = value;
          return true;
        } else {
          return true;
        }
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleAddSchool = () => {
    this.setState({
      schoolComponents: this.state.schoolComponents.concat(
        <SchoolEntry
         id={this.state.currentId}
         key={this.state.currentId}
         onChange={this.handleEducationChange}
         onDelete={this.handleDeleteSchool}
        />
      ),
      schoolInputs: this.state.schoolInputs.concat({
        school: '',
        degree: '',
        study: '',
        schoolStart: '',
        schoolEnd: '',
        id: this.state.currentId,
      }),
      currentId: uniqid(),
    })
  }

  handleDeleteSchool = (event) => {
    const id = event.target.getAttribute('id');
    this.setState({
      schoolInputs: this.state.schoolInputs.filter(entry => {
        return entry.id !== id;
      }),
      schoolComponents: this.state.schoolComponents.filter(component => {
        return component.props.id !== id
      })
    })
  }

  handleWorkChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.getAttribute('id');
    this.setState({ 
      workInputs: this.state.schoolInputs.filter(entry => {
        if (entry.id === id) {
          entry[name] = value;
          return true;
        } else {
          return true;
        }
      })
    })
  }

  handleAddWork = () => {
    this.setState({
      workComponents: this.state.workComponents.concat(
        <WorkEntry
         id={this.state.currentId}
         key={this.state.currentId}
         onChange={this.handleWorkChange}
         onDelete={this.handleDeleteWork}
        />
      ),
      workInputs: this.state.workInputs.concat({
        company: '',
        position: '',
        jobDescription: '',
        jobStart: '',
        jobEnd: '',
        id: this.state.currentId,
      }),
      currentId: uniqid(),
    })
  }

  handleDeleteWork = (event) => {
    const id = event.target.getAttribute('id');
    this.setState({
      workInputs: this.state.workInputs.filter(entry => {
        return entry.id !== id;
      }),
      workComponents: this.state.workComponents.filter(component => {
        return component.props.id !== id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <form id='edit-form' onSubmit={this.handleSubmit}>
          <GeneralInfoSection
            onChange={this.handleChange}
          />
          <EducationSection onAddSchool={this.handleAddSchool}> 
            {this.state.schoolComponents}
          </EducationSection>
          <WorkSection onAddWork={this.handleAddWork}>
            {this.state.workComponents}
          </WorkSection>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
