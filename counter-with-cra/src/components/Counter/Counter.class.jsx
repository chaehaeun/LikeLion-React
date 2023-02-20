import { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    count: 1,
    max: 10,
    min: 1,
    step: 1,
  };

  state = {
    count: this.props.count,
  };

  render() {
    const { count } = this.state;

    return (
      <div data-component="Counter">
        <button
          onClick={this.handleInc}
          type="button"
          aria-label="카운트 1 증가"
        >
          +
        </button>
        <output>{count}</output>
        <button
          onClick={this.handleDec}
          type="button"
          aria-label="카운트 1 감소"
        >
          -
        </button>
      </div>
    );
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };

  handleDec = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
}

export default Counter;
