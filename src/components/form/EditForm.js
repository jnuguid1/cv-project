import React, {Component} from 'react';
import GeneralInfoSection from './GeneralInfoSection';
import EducationSection from './EducationSection';
import WorkSection from './WorkSection';
import '../../styles/EditForm.css';
import SkillsSection from './SkillsSection';

class EditForm extends Component {
  render() {
    const { 
      onSubmit,
      onGeneralChange,
      onSkillChange,
      generalDefaults,
      onAddSchool,
      onAddWork,
      schoolComponents,
      workComponents,
      onAddSkill,
      onDeleteSkill,
      skills,
    } = this.props;

    return (
    <form id='edit-form' onSubmit={onSubmit}>
      <h1>Resume Builder</h1>
      <GeneralInfoSection
        onChange={onGeneralChange}
        values={generalDefaults}
      />
      <EducationSection onAddSchool={onAddSchool}> 
        {schoolComponents}
      </EducationSection>
      <WorkSection onAddWork={onAddWork}>
        {workComponents}
      </WorkSection>
      <SkillsSection 
        onAddSkill={onAddSkill}
        onDeleteSkill={onDeleteSkill}
        onSkillChange={onSkillChange}
        skills={skills}
      />
      <button id='preview-button' type='submit'>Preview Resume</button>
    </form>
    )
  }
}

export default EditForm;