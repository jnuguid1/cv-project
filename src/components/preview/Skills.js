import React, {Component} from 'react';

class Skills extends Component {
  render() {
    return (
      <div className='resume-section'>
        <h2>SKILLS</h2>
        <ul className='skill-list-display'>
          {this.props.skills.map((skill) => {
            return(
              <li key={skill.id}>{skill.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Skills;