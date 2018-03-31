import React from 'react';

const ampLabelStyle = {
	textTransform: 'uppercase',
	fontSize: '9px',
	fontWeight: 'bold',
	letterSpacing: '1px',
	opacity: 0.8,
	padding: '12px 0',
	display: 'block',
	textShadow: '0px 0px 1px #e6bd6d'
}

class Label extends React.Component {
  render() {
    return (
      <label className="AmpLabel" style={ampLabelStyle}>{this.props.children}</label>
    );
  }
}

export default Label;