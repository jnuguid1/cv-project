import React, {Component} from 'react';

class Header extends Component {
  render() {
    const { 
      firstName,
      lastName,
      email,
      phone,
      city,
      postal,
      province
    } = this.props;
    return (
      <div className='header'>
        <h1>{`${firstName} ${lastName}`}</h1>
        <div class="row-gap-32">
          <p>{city}, {province} {postal}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    )
  }
}

export default Header