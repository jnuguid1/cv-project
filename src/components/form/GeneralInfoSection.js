import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import Input from './Input';
import InputArea from './InputArea';

class GeneralInfoSection extends Component {
  render() {
    const { values, onChange } = this.props;
    return(
      <div className='info-section'>
        <SectionHeader name='General Information' />
        <div className="input-row">
          <Input
            value={values.firstName}
            onChange={onChange}
            label='First Name'
            name='firstName'
          />
          <Input 
            value={values.lastName}
            onChange={onChange}
            label='Last Name'
            name='lastName'
          />
        </div>
        <div className="input-row">
          <Input
            value={values.email}
            onChange={onChange}
            label='Email Address'
            name='email'
          />
          <Input
            value={values.phone}
            onChange={onChange}
            label='Phone'
            name='phone'
          />
        </div>
        <div className="input-row">
          <Input
            value={values.city}
            onChange={onChange}
            label='City'
            name='city'
            className='input-city'
          />
          <Input
            value={values.province}
            onChange={onChange}
            label='State/Province'
            name='province'
            className='input-province'
          />
          <Input 
            value={values.postal}
            onChange={onChange}
            label='Postal Code'
            name='postal'
            className='input-postal'
          />
        </div>
        <InputArea 
          value={values.summary}  
          onChange={onChange}
          label='Professional Summary'
          name='summary'
        />

      </div>
    );
  }
};

export default GeneralInfoSection;