import React from "react";

class Header extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onUpSubmit(this.state.searchTerm);
  };

  getSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="ui stackable container menu segment">
        <div className="left item">
          <i aria-hidden="true" className="sun icon"></i>
          <span>Weather App</span>
        </div>
        <div className="right menu">
          <form className="earch-bar ui " onSubmit={this.onFormSubmit}>
            <div className="ui action left icon input">
              <i className="building icon"></i>
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.getSearchTerm}
                placeholder={this.state.searhTerm}
              ></input>
              <button type="submit" className="ui button primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
