import React, {Component} from 'react';

class SectionHeader extends Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <hr />
      </div>
    )
  }
}

export default SectionHeader;