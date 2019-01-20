import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  handleInput(e) {
    this.setState({inputVal: e.currentTarget.value});
  }

  selectName(e) {
    const name = e.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  render() {

    const results = this.matches().map((result,index) => {
      return (
        <li key={index} onClick={this.selectName}>{result}</li>
      );
    });

    return (
      <div>
        <h1>Autocomplete</h1>
        <div className="auto">
          <label>Search:
            <input placeholder='Search...' value={this.state.inputVal} onChange={this.handleInput}/>
          </label>
          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>  
    );
  }
};

export default Autocomplete;