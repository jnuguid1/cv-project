import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

class SkillItem extends Component {
  render() {
    return(
      <li className='skill-item'>
        {this.props.name}
        <i
          className='fa-solid fa-x fa-sm'
          id={this.props.id}
          onClick={this.props.onDeleteSkill}
        />

      </li>
    )
  }
}

export default SkillItem;