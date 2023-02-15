import './styles/App.css';
import React, {Component} from 'react';
import EditForm from './components/form/EditForm';
import ResumePreview from './components/ResumePreview';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      schoolInputs: [],
      workInputs: [],
      showPreview: false,
    }
  }

  handleGeneralChange = (event) => {
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
    this.setState({
      showPreview: true,
    })
  }

  handleAddSchool = (currentId) => {
    this.setState({
      schoolInputs: this.state.schoolInputs.concat({
        school: '',
        degree: '',
        study: '',
        schoolStart: '',
        schoolEnd: '',
        id: currentId,
      }),
    })
  }

  handleDeleteSchool = (id) => {
    this.setState({
      schoolInputs: this.state.schoolInputs.filter(entry => {
        return entry.id !== id;
      }),
    })
  }

  handleWorkChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.getAttribute('id');
    this.setState({ 
      workInputs: this.state.workInputs.filter(entry => {
        if (entry.id === id) {
          entry[name] = value;
          return true;
        } else {
          return true;
        }
      })
    })
  }

  handleAddWork = (currentId) => {
    this.setState({
      workInputs: this.state.workInputs.concat({
        company: '',
        position: '',
        jobDescription: '',
        jobStart: '',
        jobEnd: '',
        id: currentId,
      }),
    })
  }

  handleDeleteWork = (id) => {
    this.setState({
      workInputs: this.state.workInputs.filter(entry => {
        return entry.id !== id;
      }),
    })
  }

  render() {
    const showPreview = this.state.showPreview;
    let content;
    if (showPreview) {
      content = <ResumePreview />;
    } else {
      content = 
        <EditForm 
          onSubmit={this.handleSubmit}
          onGeneralChange={this.handleGeneralChange}
          onAddSchool={this.handleAddSchool}
          onEducationChange={this.handleEducationChange}
          onDeleteSchool={this.handleDeleteSchool}
          onAddWork={this.handleAddWork}
          onWorkChange={this.handleWorkChange}
          onDeleteWork={this.handleDeleteWork}
        />;
    }

    return (
      <div className="app">
        {content}
      </div>
    );
  }
}

export default App;
