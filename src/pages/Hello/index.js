import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
  state = {
    name: 'React',
  };
  index = 0;

  textArray = [
    'React',
    'Parcel',
    'Less',
    'yarn',
    'Node',
    'Git',
    'Babel',
  ];
  componentDidMount() {
    this.intervalId = setInterval(() => {
      const name = this.randomText();
      this.setState({ name });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  randomText() {
    this.index += 1;

    if (this.index >= this.textArray.length) {
      this.index = 0;
    }
    return this.textArray[this.index];
  }

  render() {
    return (
      <div className="container">
        <div className="content">Hello {this.state.name} ...</div>
      </div>);
  }
}

