import React, {Component} from "react";
import Education from './Education';
import Header from './Header';
import ProfessionalSummary from './ProfessionalSummary';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import '../../styles/ResumePreview.css';

class ResumePreview extends Component {
  render() {
    const {inputs, onEdit} = this.props;
    return(
      <div className='preview-container'>
        <button 
          type='button'
          className='regular-button edit-resume-button'
          onClick={onEdit}
        >
          Edit Resume
        </button>
        <div class="resume-container">
          <Header
            firstName={inputs.firstName}
            lastName={inputs.lastName}
            email={inputs.email}
            phone={inputs.phone}
            city={inputs.city}
            postal={inputs.postal}
            province={inputs.province}
          />
          <div class="resume-body">
            <ProfessionalSummary summary={inputs.summary} />
            <hr/>
            <WorkExperience workList={inputs.workInputs} />
            <hr/>
            <Skills skills={inputs.skills} />
            <hr/>
            <Education schoolList={inputs.schoolInputs} />
          </div>
        </div>
      </div>
    )
  }
}

export default ResumePreview;