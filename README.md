# React Amp
A react component to render an Amp model with knobs and switches.

```javascript
import React, { Component } from 'react';
import Amp from 'react-amp-component';

class App extends Component {
  handlePowerSwitch = value => {
    console.log('Power set to: ' + value);
  }
  handleVolumeChange = value => {
    console.log('Volume changed to: ' + value );
  }
  render() {
    return (
      <Amp>
        <Amp.Head>
          <Amp.Head.Section>
            <Amp.Label>On</Amp.Label>
            <Amp.Switch onChange={this.handlePowerSwitch} upValue="On" downValue="Off" defaultPosition="up" />
            <Amp.Label>Off</Amp.Label>
          </Amp.Head.Section>
          <Amp.Head.Section>
            <Amp.Label>Volume</Amp.Label>
            <Amp.Knob onChange={this.handleVolumeChange} defaultValue="4" />
          </Amp.Head.Section>
        </Amp.Head>
        <Amp.Cabinet>
        </Amp.Cabinet>
      </Amp>
    );
  }
}

export default App;

```