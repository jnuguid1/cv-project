import React, {Component} from 'react';

class ProfessionalSummary extends Component {
    render() {
    return (
      <div className='resume-section'>
        <h2>PROFESSIONAL SUMMARY</h2>
        <p className='mb24'>{this.props.summary}</p>
      </div>
    )
  }
}

export default ProfessionalSummary;