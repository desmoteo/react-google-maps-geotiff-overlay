import React, { Component } from 'react'

import GeoTIFFOverlay from 'react-google-maps-geotiff-overlay'

import { Input, Container, Button } from 'semantic-ui-react'

import { GoogleMap, LoadScript } from "@react-google-maps/api"

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { overlayData: null, apiKey: null, apiKeyInput: null }

  }

  async componentDidMount() {

    const response = await fetch('prova-render.tif');
    const blob = await response.blob();
    const array = await blob.arrayBuffer();
    this.setState({ overlayData: array })

  }

  shouldComponentUpdate(nextProps, nextState)
  {
    const res = nextProps !== this.props || nextState.apiKey !== this.state.apiKey
    return (res)
  }

  drawMap() {
    if (this.state.apiKey !== null) {
      return (
        <LoadScript
          id="script-loader"
          googleMapsApiKey={this.state.apiKey}
        >
          <GoogleMap
            onLoad={map => {
              this.mapRef = map
            }}
            id="circle-example"
            mapContainerStyle={{
              height: "768px",
              width: "100%"
            }}
            zoom={4}
            center={{ lat: 30.397, lng: 10.644 }}
          >
            <GeoTIFFOverlay overlayData={this.state.overlayData} draw ></GeoTIFFOverlay>
          </GoogleMap>
        </LoadScript >)
    }
    else {
      return null
    }


  }

  onChangeApiKey = (event, data) => {
    this.setState({ apiKeyInput: data.value })
  }

  onButtonClick = () => {
    this.setState({ apiKey: this.state.apiKeyInput })
  }


  render() {
    return (
      <div >
        <Container textAlign='center' style={{ padding: "30px" }} >
          <Input placeholder='API Key ...' onChange={this.onChangeApiKey} /><Button onClick={this.onButtonClick}>Go!</Button>
        </Container>
        <div className='map-wrapper'>
          {this.drawMap()}
        </div>
      </div>

    )
  }

}

export default App
