import React, {Component} from 'react';

class Education extends Component {
  render() {
    const {schoolList} = this.props;
    return (
      <div className='resume-section'>
        <h2>EDUCATION</h2>
        <ul className='section-content'>
          {schoolList.map(entry => {
            return (
              <li key={entry.id}>
                <p>
                  <span class="bold">{entry.school}</span>
                </p>
                <p>{entry.degree} {entry.study} {entry.schoolStart} to {entry.schoolEnd}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Education;