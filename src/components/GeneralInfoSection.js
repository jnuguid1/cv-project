import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import Input from './Input';

class GeneralInfoSection extends Component {
  render() {
    const { onChange } = this.props;
    return(
      <div className='info-section'>
        <SectionHeader name='General Information' />
        <div className="input-row">
          <Input onChange={onChange} label='First Name' name='firstName' />
          <Input onChange={onChange} label='Last Name' name='lastName' />
        </div>
        <Input onChange={onChange} label='Email Address' name='email' />
        <Input onChange={onChange} label='Phone' name='phone' />
      </div>
    );
  }
};

export default GeneralInfoSection;