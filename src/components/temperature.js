import React, {Component} from "react";
import { connect } from "react-redux";
import { updateTemperature } from "../actions/temperatureActions";
import Plot from 'react-plotly.js';

class TemperatureComponent extends Component{

  componentDidMount(){
    this.props.track();
  }

  render(){
    return (
      <div>
        <Plot
          data={[
            {
              x: this.props.temperature ? this.props.temperature[0] : [0],
              y: this.props.temperature ? this.props.temperature[1] : [0],
              type: 'graph',
              mode: 'lines+points',
              marker: {color: 'darkblue'},
            }
          ]}
          layout={{
            width: 800,
                  height: 'auto',
                  xaxis1: {
                    type: 'date',
                    tickFormat: '%H~%M~%S.%2f'
                  }
                }}
                />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    temperature: state.temperatureReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    track: () => {
      dispatch(updateTemperature());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemperatureComponent);
