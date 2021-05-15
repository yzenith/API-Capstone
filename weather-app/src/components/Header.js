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
      <div className="ui stackable container menu">
        <div className="left item">
          <i aria-hidden="true" className="sun icon"></i>
          <span>Weather App</span>
        </div>
        <div className="right menu">
          <form className="earch-bar ui segment " onSubmit={this.onFormSubmit}>
            <div className="ui action left icon input">
              <i className="search icon"></i>
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.getSearchTerm}
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
