import React from 'react';

const ampHeadStyle = {
	backgroundImage: "linear-gradient(to bottom, #c9b89e, #b3966c)",
	borderTopLeftRadius: '4px',
	borderTopRightRadius: '4px',
	boxShadow: 'inset 2px 5px 15px rgba(0,0,0,0.5)',
	padding: '0px 15px'
}

class Head extends React.Component {
  render() {
    return (
      <div className="AmpHead" style={ampHeadStyle}>{this.props.children}</div>
    );
  }
}

export default Head;