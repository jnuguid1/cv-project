import React, {Component} from 'react';

class WorkExperience extends Component {
  render() {
    const {workList} = this.props;
    return (
      <div className='resume-section'>
        <h2>WORK HISTORY</h2>
        <ul className='section-content'>
          {workList.map(entry => {
            return(
              <li key={entry.id} className='work-entry'>
                <p>
                  <span className='bold'>{entry.position.toUpperCase()} </span> 
                  {entry.jobStart} to {entry.jobEnd}
                </p>
                <p>
                  <span className='bold'>{entry.company}</span>
                </p>
                <p className='job-desc'>{entry.jobDescription}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default WorkExperience;