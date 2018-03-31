import React from 'react';

class Amp extends React.Component {
  render() {
    return (
      <div className="Amp">{this.props.children}</div>
    );
  }
}

Amp.Head = class Head extends React.Component {
  render() {
    return (
      <div className="AmpHead">{this.props.children}</div>
    );
  }
}

Amp.Head.Section = class Section extends React.Component {
  render() {
    return (
      <div className="AmpHeadSection">{this.props.children}</div>
    );
  }
}

Amp.Label = class Label extends React.Component {
  render() {
    return (
      <label className="AmpLabel">{this.props.children}</label>
    );
  }
}

Amp.Switch = class Switch extends React.Component {
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
  	return this.position
  }
  render() {
    return (
      <div onClick={this.onInteract}>Switch</div>
    );
  }
}

Amp.Knob = class Knob extends React.Component {
  constructor(props) {
    super(props);
    this.onInteract = this.onInteract.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.value = parseInt(this.props.defaultValue || 5)
  }
  onInteract(value) {
  	this.setValue(this.value+1)
  	if(this.props.onChange){
  		this.props.onChange(this.getValue())
  	}
  }
  getValue() {
  	return this.value
  }
  setValue(value) {
  	this.value = value
  	return value
  }
  render() {
    return (
      <div onClick={this.onInteract}>Knob</div>
    );
  }
}

Amp.Cabinet = class Knob extends React.Component {
  render() {
    return (
      <div className="AmpCabinet">{this.props.children}</div>
    );
  }
}

export default Amp;