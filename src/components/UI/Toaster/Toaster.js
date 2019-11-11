import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toaster.css";

//configure
toast.configure();

class Toaster extends React.Component {
  state = {
    show: false
  };
  checkAndNotify = () => {
    this.checkOfflineOrNot();
    console.log("this.props", this.props, this.state);
  };
  checkOfflineOrNot = () => {
    if (this.props.condition === "offline") {
      this.setState({ show: true });
      toast.warning("offline mode!", {
        position: toast.POSITION.TOP_CENTER,
        className: "",
        autoClose: 2000
      });
    } else {
      this.setState({ show: false });
      toast.success("online mode!", {
        position: toast.POSITION.TOP_CENTER,
        className: "",
        autoClose: 2000
      });
    }
  };
  render() {
    return null;
  }
  componentWillMount() {
    // (() => {
    //   toast.success("online!", {
    //     position: toast.POSITION.TOP_CENTER,
    //     className: ""
    //   });
    // })();
    this.checkAndNotify();
  }
}

export default Toaster;
