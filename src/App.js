import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
// import ConnectedIntlProvider from "./commons/intl/ConnectedIntlProvider";
import store from "./store/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <ConnectedIntlProvider> */}
          <Routes />
        {/* </ConnectedIntlProvider> */}
      </Provider>
    );
  }
  componentWillUpdate(nextProps) {
    console.log(window.navigator.onLine);
  }
}

export default App;
