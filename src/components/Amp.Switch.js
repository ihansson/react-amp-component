import React from 'react';

const switchInsetStyle = {
  margin: '0 auto',
  width: '20px',
  padding: '3px 2px',
  border: '1px solid #c7ac84',
  borderRadius: '5px',
  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)',
  height: '48px',
  cursor: 'pointer'
}

const switchStyle = {
  height: '22px',
  border: '1px solid #e6bd6d',
  backgroundImage: "linear-gradient(to bottom, #93621d, #c59a3b)",
}

const switchActiveStyle = Object.assign({}, switchStyle,{
  height: '15px',
});

const upSwitchStyle = Object.assign({
}, switchStyle, {
  borderBottom: '1px solid #7f6120',
})
const upSwitchActiveStyle = Object.assign({
}, switchActiveStyle, {
  borderBottom: '1px solid #7f6120',
  marginTop: '7px',
  backgroundImage: "linear-gradient(to bottom, #e6bd6d, #93621d)",
})
const downSwitchStyle = Object.assign({
}, switchStyle, {
  borderTop: '1px solid #7f6120'
})
const downSwitchActiveStyle = Object.assign({
}, switchActiveStyle, {
  borderTop: '1px solid #7f6120',
  backgroundImage: "linear-gradient(to bottom, #93621d, #e6bd6d)",
})

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.onInteract = this.onInteract.bind(this);
    this.getValue = this.getValue.bind(this);
    this.changePosition = this.changePosition.bind(this);
    this.upValue = this.props.upValue || false;
    this.downValue = this.props.downValue  || true;
    this.position = this.props.defaultPosition || 'up'
  }
  onInteract(value) {
  	this.changePosition()
  	if(this.props.onChange){
  		this.props.onChange(this.getValue())
  	}
  }
  getValue() {
  	return this.position == 'up' ? this.upValue : this.downValue
  }
  changePosition() {
  	this.position = this.position == 'up' ? 'down' : 'up'
    this.forceUpdate()
  	return this.position
  }
  render() {
    return (
      <div onClick={this.onInteract}>
        <div className="SwitchInset" style={switchInsetStyle}>
          <div className="SwitchUp" style={this.position == 'up' ? upSwitchActiveStyle : upSwitchStyle} />
          <div className="SwitchDown" style={this.position == 'down' ? downSwitchActiveStyle : downSwitchStyle} />
        </div>
      </div>
    );
  }
}

export default Switch;