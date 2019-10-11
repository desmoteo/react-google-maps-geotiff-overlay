import React, { Component } from 'react'

import GeoTIFFOverlay from 'react-google-maps-geotiff-overlay'


import { GoogleMap, LoadScript } from "@react-google-maps/api"

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { overlayData: null }

  }

  async componentDidMount() {

    const response = await fetch('prova-render.tif');
    const blob = await response.blob();
    const array = await blob.arrayBuffer();
    this.setState({ overlayData: array })

  }

  render() {
    return (
      <div className='map-wrapper'>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCuyAXoeoFxREFgyxfCP7v4kWkWTkdAPEU"
      >
        <GoogleMap
        onLoad={map => {
          this.mapRef = map
        }}
          id="circle-example"
          mapContainerStyle={{
            height: "768px",
            width: "1024px"
          }}
          zoom={4}
          center={{ lat: 30.397, lng: 10.644 }}
        >
          <GeoTIFFOverlay overlayData={this.state.overlayData} draw ></GeoTIFFOverlay>
        </GoogleMap>
      </LoadScript >
      </div>
    )
  }

}

export default App
