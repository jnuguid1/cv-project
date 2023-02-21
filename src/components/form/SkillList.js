import React, {Component} from 'react';
import SkillItem from './SkillItem';

class SkillList extends Component {
  render() {
    return (
      <ul className='skill-list'>
        {this.props.skills.map(skill => {
          return (
            <SkillItem 
              key={skill.id}
              name={skill.name}
              id={skill.id}
              onDeleteSkill={this.props.onDeleteSkill}
            />
          )
        })}
      </ul>
    )
  }
}

export default SkillList;