import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import TemperatureComponent from './components/temperature';
import MarkerComponent from './components/marker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMarker: false
    }
  }

  toggleGraph(){
    this.setState({showMarker: !this.state.showMarker});
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <button class='toggle' onClick={this.toggleGraph.bind(this)}>{this.state.showMarker ? 'Show Position' : 'Show Temperature'}</button>
          {this.state.showMarker && <TemperatureComponent />}
          {!this.state.showMarker && <MarkerComponent />}
          <ToastContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
