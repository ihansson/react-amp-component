import React from 'react';

const knobWrapperStyle = {
  textAlign: 'center'
}

const knobInsetStyle = {
  display: 'inline-block',
  margin: '0',
  border: '1px solid #c7ac84',
  borderRadius: '5px',
  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)',
  borderRadius: '50%',
  padding: '4px'
}

const knobStyle = {
  borderRadius: '50%',
  border: '1px solid #e6bd6d',
  backgroundImage: "linear-gradient(to bottom, #93621d, #c59a3b)",
  padding: '5px',
}

const knobAngleStyle = {
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  backgroundImage: "linear-gradient(to bottom, #93621d, #e6bd6d)",
  position: 'relative'
}

const getKnobIndicatorStyle = function(value){
  return {
    position: 'absolute',
    top: '50%',
    marginTop: '-2px',
    height: '3px',
    width: '100%',
    borderRadius: '2px',
    backgroundImage: "linear-gradient(to bottom, #93621d, #e6bd6d)",
    transform: 'rotate('+(parseInt(value) * 36)+'deg)'
  }
}

class Knob extends React.Component {
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
    this.forceUpdate()
  	return value
  }
  render() {
    return (
      <div className="KnobWrapper" style={knobWrapperStyle}>
        <div className="KnobInset" style={knobInsetStyle} onClick={this.onInteract}>
          <div className="Knob" style={knobStyle}>
            <div className="KnobAngle" style={knobAngleStyle}>
              <div className="KnobIndicator" style={getKnobIndicatorStyle(this.getValue())} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Knob;