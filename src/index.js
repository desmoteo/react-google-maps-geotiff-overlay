import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  OverlayView
} from '@react-google-maps/api'

const GeoTIFF = require('geotiff')
class GeoTIFFOverlay extends Component {
  static propTypes = {
    draw: PropTypes.bool,
    overlayData: PropTypes.object,
    opacity: PropTypes.number
  }

  static defaultprops = {
    draw: true,
    opacity: 0.5
  }

  constructor(props) {
    super(props)

    this.canvasRef = null
    this.raster = null

    this.canvasWidth = 0
    this.canvasHeight = 0

    this.state = {
      showOverlay: true,
      bounds: new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(0, 0),
        new window.google.maps.LatLng(0, 0)
      )
    }

    this.loadRaster(this.props).then()
  }

  setCanvasRef = element => {
    this.canvasRef = element
    this.setCanvas()
  }

  async loadRaster(p) {
    if (p.overlayData) {
      const gtiff = await GeoTIFF.fromArrayBuffer(p.overlayData)
      const image = await gtiff.getImage()
      this.canvasWidth = image.getWidth()
      this.canvasHeight = image.getHeight()
      const bbox = image.getBoundingBox()
      var bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(bbox[1], bbox[0]),
        new window.google.maps.LatLng(bbox[3], bbox[2])
      )
      this.raster = await image.readRGB({ enableAlpha: true })
      this.setState({ bounds: bounds })
    }
  }

  setCanvas() {
    if (this.props.draw && this.props.overlayData !== null) {
      var canvas = this.canvasRef
      canvas.width = this.canvasWidth
      canvas.height = this.canvasHeight

      var ctx = canvas.getContext('2d')
      var imageData = ctx.createImageData(canvas.width, canvas.height)

      var data = imageData.data
      var o = 0
      for (var i = 0; i < this.raster.length; i += 4) {
        data[o] = this.raster[i]
        data[o + 1] = this.raster[i + 1]
        data[o + 2] = this.raster[i + 2]
        data[o + 3] = this.raster[i + 3] // 255;//(raster[i] + raster[i + 1] + raster[i + 2]) / 3;
        o += 4
      }
      ctx.putImageData(imageData, 0, 0)
    } else {
      var canvas = this.canvasRef
      const context = canvas.getContext('2d')
      context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.overlayData !== this.props.overlayData) {
      this.loadRaster(nextProps)
      return false
    }
    return true
  }

  async componentDidUpdate(prevProps) {
    this.setCanvas()
  }

  async componentDidMount() {
  }

  drawCanvas() {
    return (<canvas style={{ position: 'absolute', height: '100%', width: '100%', opacity: this.props.opacity }} ref={this.setCanvasRef} />)
  }

  render() {
    return (
      <OverlayView
        /*
         * An alternative to specifying position is specifying bounds.
         * bounds can either be an instance of google.maps.LatLngBounds
         * or an object in the following format:
         * bounds={{
         *    ne: { lat: 62.400471, lng: -150.005608 },
         *    sw: { lat: 62.281819, lng: -150.287132 }
         * }}
         */
        bounds={this.state.bounds}
        /*
         * 1. Specify the pane the OverlayView will be rendered to. For
         *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
         *    Defaults to `OverlayView.OVERLAY_LAYER`.
         */
        mapPaneName={OverlayView.OVERLAY_LAYER}
      >
        <div style={{ position: 'absolute', height: '100%', width: '100%' }} >
          {this.drawCanvas()}
        </div>
      </OverlayView>
    )
  }
}

export default GeoTIFFOverlay
