import React, {Component} from "react";
import { connect } from "react-redux";
import { updateMarker } from "../actions/markerActions";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MarkerComponent extends Component{

  componentDidMount(){
    this.props.track();
  }

  render(){
      let position = [27.384661488660733, -90.9698452919986];

    return (
      <div>
        <Map center={position} zoom={5} style={{height: '900px'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={this.props.marker || position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    marker: state.markerReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    track: () => {
      dispatch(updateMarker());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerComponent);
