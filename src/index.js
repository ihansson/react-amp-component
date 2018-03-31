import React from 'react'
import Head from './components/Amp.Head'
import Section from './components/Amp.Head.Section'
import Label from './components/Amp.Label'
import Switch from './components/Amp.Switch'
import Knob from './components/Amp.Knob'
import Cabinet from './components/Amp.Cabinet'

const ampStyle = {
	background: '#333',
	backgroundImage: "linear-gradient(to bottom, #222, #444)",
	padding: '6px',
	display: 'inline-block',
	borderRadius: '5px',
	border: '1px solid #222',
	boxShadow: '2px 5px 15px 3px rgba(0,0,0,0.2)'
};

const ampLiningStyle = {
	borderRadius: '5px',
	padding: '1.5px',
	backgroundImage: "linear-gradient(to bottom, #fff, #ddd)"
}

class Amp extends React.Component {
  render() {
    return (
      <div className="Amp" style={ampStyle}>
      	<div className="AmpLining" style={ampLiningStyle}>
      		{this.props.children}
      	</div>
      </div>
    );
  }
}

Amp.Head = Head
Amp.Head.Section = Section
Amp.Label = Label
Amp.Switch = Switch
Amp.Knob = Knob
Amp.Cabinet = Cabinet

export default Amp;