import React, {Component} from 'react';
import SectionHeader from './SectionHeader';
import SkillList from './SkillList';

class SkillsSection extends Component {

  render() {
    return (
      <div className='info-section'> 
        <SectionHeader name='Skills' />
        <label htmlFor='skill'>Add Skill</label>
        <div className="input-skill-row">
          <input 
            autoComplete='off'  
            type='text'
            name='skill'
            onChange={this.props.onSkillChange}
          />
          <button
            className='add-skill-button'
            type='button'
            onClick={this.props.onAddSkill}
          >
            Add
          </button>
        </div>
        <SkillList 
          onDeleteSkill={this.props.onDeleteSkill}
          skills={this.props.skills}
        />
      </div>
    )
  }
}

export default SkillsSection;