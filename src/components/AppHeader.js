import React, {Component} from 'react';
import Pdf from 'react-to-pdf';

class AppHeader extends Component {
  render() {
    let shownButton;
    let downloadButton;
    if (this.props.showPreview) {
      shownButton = 
        <button
        type='button'
        className='regular-button'
        onClick={this.props.onEdit}
        >
          Edit
        </button>
      downloadButton = 
      <Pdf targetRef={this.props.refprop} filename='my-resume.pdf'>
        {({toPdf}) => (
          <button
            type='button'
            className='regular-button'
            onClick={toPdf}
          >
            Download
          </button>
        )}
      </Pdf>
    } else {
      shownButton =
        <button
        type='button'
        className='regular-button'
        onClick={this.props.onSubmit}
        >
          Preview
        </button>
      downloadButton = null;
    }

    return (
      <div className='app-header'>
        <h1>Resume Builder</h1>
        <div className="button-row">
          {shownButton}
          {downloadButton}
        </div>
        
      </div>
    )
  }
}

export default AppHeader;