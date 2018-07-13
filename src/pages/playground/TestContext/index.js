import React from 'react';
import PropTypes from 'prop-types';


class Child1 extends React.PureComponent {
  state = {
    value: '',
  }
  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps !== this.props)
  //   return nextProps !== this.props;
  // }
  handleChange = (e) => {
    this.setState ({
      value: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <h2>Child1</h2>
        <p>12312312313123</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <div>name: {this.props.name}</div>
        <div>color: {this.context.color}</div>
      </div>
    );
  }
}

Child1.propTypes = {
  name: PropTypes.string,
}

Child1.contextTypes = {
  color: PropTypes.string,
}

export default class Index extends React.Component {
  state = {
    name: '',
    color: 'default',
    product: '',
  };
  getChildContext() {
    return {
      color: this.state.color,
    }
  }

  handleChange = (e) => {
    this.setState ({
      name: e.target.value,
    })
  }

  handleColorChange = (e) => {
    this.setState({
      color: e.target.value,
    })
  }

  handleProductChange = (e) => {
    this.setState({
      product: e.target.value,
    })
  }
  render() {
    return (<div>
      <h1>Context Test Page</h1>
      <div>
        <div>Child List</div>
        product: <input type="text" value={this.state.product} onChange={this.handleProductChange}/>
        name: <input type="text" value={this.state.name} onChange={this.handleChange}/>
        <Child1 name={this.state.name} />
        <select name="color" id="color" value={this.state.color} onChange={this.handleColorChange} >
          <option value="default">默认</option>
          <option value="gray">灰色</option>
          <option value="white">白色</option>
          <option value="black">黑色</option>
        </select>
      </div>
    </div>);
  }
}
Index.childContextTypes = {
  color: PropTypes.string,
}


