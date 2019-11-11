import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { handleCategory } from "../../store/intro/action";

class Intro extends Component {
  handleCatAndRoute = e => {
    this.props.handleCategory(e.target.id);
    this.props.history.push("/home");
  };
  routeToHome = () => {
    var timer = setTimeout(() => {
      this.props.history.push("/home");
    }, 3000);
  };

  render() {
    // console.log("props", this.props);
    return (
      <div className="introWrapper">
        <div className="paragraph">
          {/* <p>which one you like?</p> */}
          Dog Life
        </div>
        {/* <div className="categoryWrapper">
          <div onClick={this.handleCatAndRoute} id="dog" className="dog">
            <p>Dog</p>
          </div>
          <div onClick={this.handleCatAndRoute} id="cat" className="cat">
            <p>Cat</p>
          </div>
        </div> */}
      </div>
    );
  }
  componentDidMount() {
    this.routeToHome();
  }
}
const mapDisatchToProps = dispatch => {
  return {
    handleCategory: data => dispatch(handleCategory(data))
  };
};

export default connect(
  null,
  mapDisatchToProps
)(Intro);
