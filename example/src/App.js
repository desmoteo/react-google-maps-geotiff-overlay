import React, { Component } from 'react'

import ReactTimeout from 'react-timeout'

import GeoTIFFOverlay from 'react-google-maps-geotiff-overlay'

import { Input, Container, Segment, Button } from 'semantic-ui-react'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { overlayData: null, apiKey: null, apiKeyInput: null }
  }

  fetcher = async (path) => {
    const response = await fetch(path)
    const blob = await response.blob()
    const array = await blob.arrayBuffer()
    this.setState({ overlayData: array })
  }

  timer1 = async () => {
    await this.fetcher('prova-render.tif')
  }

  timer2 = async () => {
    await this.fetcher('welcome.tif')
  }

  async componentDidMount() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    const res = nextProps !== this.props || nextState.apiKey !== this.state.apiKey || nextState.overlayData !== this.state.overlayData
    return (res)
  }

  drawMap() {
    if (this.state.apiKey !== null) {
      return (
        <div>
          <Segment raised>
            <Container textAlign='center' style={{ padding: '30px' }} >
              <p>
                Example will load 1 GeoTiff after 10 seconds, and a second one after 20 seconds
              </p>
            </Container>
          </Segment>
          <LoadScript
            id='script-loader'
            googleMapsApiKey={this.state.apiKey}
          >
            <GoogleMap
              onLoad={map => {
                this.mapRef = map
              }}
              id='circle-example'
              mapContainerStyle={{
                height: '768px',
                width: '100%'
              }}
              zoom={4}
              center={{ lat: 30.397, lng: 10.644 }}
            >
              <GeoTIFFOverlay overlayData={this.state.overlayData} draw opacity={1} />
            </GoogleMap>
          </LoadScript >
        </div>
      )
    } else {
      return (
        <Segment raised>
          <Container textAlign='center' style={{ padding: '30px' }} >
            <Input placeholder='Google API Key ...' onChange={this.onChangeApiKey} /><Button onClick={this.onButtonClick}>Go!</Button>
          </Container>
        </Segment>
      )
    }
  }

  onChangeApiKey = (event, data) => {
    this.setState({ apiKeyInput: data.value })
  }

  onButtonClick = () => {
    this.props.setTimeout(this.timer1, 10000)
    this.props.setTimeout(this.timer2, 20000)
    this.setState({ apiKey: this.state.apiKeyInput })
  }

  render() {
    return (
      <div >
        <div className='map-wrapper'>
          {this.drawMap()}
        </div>
      </div>

    )
  }
}

export default ReactTimeout(App)
