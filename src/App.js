import './styles/App.css';
import React, {Component} from 'react';
import EditForm from './components/form/EditForm';
import ResumePreview from './components/preview/ResumePreview';
import WorkEntry from './components/form/WorkEntry';
import SchoolEntry from './components/form/SchoolEntry';
import AppHeader from './components/AppHeader';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Jared',
      lastName: 'Nuguid',
      email: 'jarednuguid@gmail.com',
      phone: '6478364717',
      city: 'Woodbridge',
      province: 'ON',
      postal: 'L4H 0C7',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      infoComponent: [],
      schoolInputs: [{
        school: 'York U',
        degree: 'BSc',
        study: 'Computer Science',
        schoolStart: 'Sept 2018',
        schoolEnd: 'Sept 2019',
        id: '1411',
        },
        {
          school: 'York High',
          degree: 'Diploma',
          study: '',
          schoolStart: 'Sept 2018',
          schoolEnd: 'Sept 2019',
          id: '1412',
        }    
      ],
      workInputs: [{
        company: 'Andie',
        position: 'Full Stack Dev',
        jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        jobStart: 'May 2020',
        jobEnd: 'Aug 2020',
        id: '1',
        },
        {
          company: 'Andie',
          position: 'Full Stack Dev',
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          jobStart: 'May 2020',
          jobEnd: 'Aug 2020',
          id: '2',
        },
        {
          company: 'Andie',
          position: 'Full Stack Dev',
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          jobStart: 'May 2020',
          jobEnd: 'Aug 2020',
          id: '3',
        },
      ],
      schoolComponents: [],
      workComponents: [],
      skills: [
        { name: 'CSS', id: '1'},
        { name: 'Java', id: '2'},
        { name: 'HTML', id: '3'},
        { name: 'React', id: '4'},
        { name: 'Django', id: '5'},
        { name: 'Python', id: '6'}
      ],
      currentId: uniqid(),
      showPreview: false,
    }

    // this.state = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   city: '',
    //   province: '',
    //   postal: '',
    //   summary: '',
    //   skillInput: '',
    //   skills: [],
    //   infoComponent: [],
    //   schoolInputs: [],
    //   workInputs: [],
    //   schoolComponents: [],
    //   workComponents: [],
    //   currentId: uniqid(),
    //   showPreview: false,
    // }
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
    this.setState({
      showPreview: true,
    })
  }

  handleAddSchool = () => {
    const entry = {
      school: '',
      degree: '',
      study: '',
      schoolStart: '',
      schoolEnd: '',
      id: this.state.currentId,
    }
    this.setState({
      schoolInputs: this.state.schoolInputs.concat(entry),
      schoolComponents: this.state.schoolComponents.concat(
        <SchoolEntry
          id={this.state.currentId}
          key={this.state.currentId}
          onChange={this.handleEducationChange}
          onDelete={this.handleDeleteSchool}
          values={entry}
        />
      ),
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

  handleAddWork = () => {
    const entry = {
      company: '',
      position: '',
      jobDescription: '',
      jobStart: '',
      jobEnd: '',
      id: this.state.currentId,
    }
    this.setState({
      workInputs: this.state.workInputs.concat(entry),
      workComponents: this.state.workComponents.concat(
        <WorkEntry
          id={this.state.currentId}
          key={this.state.currentId}
          onChange={this.handleWorkChange}
          onDelete={this.handleDeleteWork}
          values={entry}
        />
      ),
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
      }),
    })
  }

  handleSkillChange = (event) => {
    this.setState({
      skillInput: event.target.value
    })
  }

  handleAddSkill = () => {
    this.setState({
      skills: this.state.skills.concat({
        name: this.state.skillInput,
        id: this.state.currentId,
      }),
      skill: '',
      currentId: uniqid(),
    })
    document.querySelector('input[name=\'skill\']').value = '';
  }

  handleDeleteSkill = (event) => {
    this.setState({
      skills: this.state.skills.filter(skill => {
        return skill.id !== event.target.id;
      })
    })
  }

  handleEdit = () => {
    this.setState({
      showPreview: false,
    })
  }

  render() {
    const showPreview = this.state.showPreview;
    let content;

    if (showPreview) {
      content = 
        <ResumePreview 
          inputs={{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            city: this.state.city,
            postal: this.state.postal,
            province: this.state.province,
            summary: this.state.summary,
            schoolInputs: this.state.schoolInputs,
            workInputs: this.state.workInputs,
            skills: this.state.skills,
          }}
          onEdit={this.handleEdit}
        />;
    } else {
      content = 
        <EditForm 
          onSubmit={this.handleSubmit}
          onGeneralChange={this.handleGeneralChange}
          onSkillChange={this.handleSkillChange}
          onAddSchool={this.handleAddSchool}
          onAddWork={this.handleAddWork}
          onAddSkill={this.handleAddSkill}
          onDeleteSkill={this.handleDeleteSkill}
          schoolComponents={this.state.schoolComponents}
          workComponents={this.state.workComponents}
          skills={this.state.skills}
          generalDefaults={{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            postal: this.state.postal,
            province: this.state.province,
            city: this.state.city,
            summary: this.state.summary,
            skills: this.state.skills,
          }}
        />;
    }

    return (
      <div className="app">
        <AppHeader 
          onSubmit={this.handleSubmit} 
          onEdit={this.handleEdit}
          showPreview={this.state.showPreview}
        />
        {content}
      </div>
    );
  }
}

export default App;
