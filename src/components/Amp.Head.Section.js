import React from 'react';

const ampHeadSectionStyle = {
	width: '80px',
	display: 'inline-block',
	padding: '5px',
	textAlign: 'center',
	verticalAlign: 'top'
}

class Section extends React.Component {
  render() {
    return (
      <div className="AmpHeadSection" style={ampHeadSectionStyle}>{this.props.children}</div>
    );
  }
}

export default Section;