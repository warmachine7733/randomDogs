import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { getRandomPics, handleLoading } from "../../store/home/action";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Home extends Component {
  state = {
    displayData: "none"
  };
  generateImg = () => {
    // console.log("clicked");
    this.setState({ displayData: "none" });
    this.props.getRandomPics();
  };
  imgLoaded = () => {
    // console.log("loaded");
    this.props.handleLoading(false);
    this.setState({ displayData: "block" });
  };
  render() {
    // console.log("home renders");

    return (
      <>
        {this.state.displayData === "none" ? (
          <div className="loaderPosition">
            <Loader
              type="Triangle"
              color="#00BFFF"
              height={100}
              width={100}
              //3 secs
            />
          </div>
        ) : (
          ""
        )}
        <div
          className="homeWrapper"
          // className={`${this.state.displayData}` === "none" ? "Loader" : ""}
          style={{
            opacity: `${this.state.displayData}` === "none" ? ".5" : ""
          }}
        >
          <div
            className="contentWrapper"
            style={{ display: this.state.displayData }}
          >
            <div className="breedName">
              <p>{this.props.breedName}</p>
            </div>
            <div className="imageWrapper">
              <img
                onLoad={this.imgLoaded}
                src={this.props.loadedImage}
                alt="data"
              />
            </div>
          </div>
          <div className="generateButton">
            {/* <button
              style={{ position: "absolute", top: "90%", left: "20%" }}
              onClick={this.generateImg}
            > */}
            <button
              type="button"
              className="btn btn-success"
              onClick={this.generateImg}
              style={{
                pointerEvents:
                  `${this.state.displayData}` === "none" ? "none" : ""
              }}
            >
              generate
            </button>
            {/* generate
            </button> */}
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.getRandomPics();
  }
}
const mapStateToProps = state => {
  return {
    breedName: state.home.breedName,
    loadedImage: state.home.loadedImage,
    loading: state.home.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRandomPics: () => dispatch(getRandomPics()),
    handleLoading: data => dispatch(handleLoading(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
