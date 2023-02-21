import React, {Component} from 'react';

class AppHeader extends Component {
  render() {
    let editButtonClass;
    let previewButtonClass;
    if (this.props.showPreview) {
      editButtonClass = 'regular-button button-enabled';
      previewButtonClass = 'regular-button button-disabled';
    } else {
      editButtonClass = 'regular-button button-disabled';
      previewButtonClass = 'regular-button button-enabled';
    }

    return (
      <div className='app-header'>
        <h1>Resume Builder</h1>
        <div class="button-row">
          <button
            type='button'
            className={editButtonClass}
            onClick={this.props.onEdit}
          >
            Edit
          </button>
          <button
            type='button'
            className={previewButtonClass}
            onClick={this.props.onSubmit}
          >
            Preview
          </button>
        </div>
        
      </div>
    )
  }
}

export default AppHeader;