import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  OverlayView
} from '@react-google-maps/api'

const GeoTIFF = require('geotiff');


export default class GeoTIFFOverlay extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.canvasRef = null;

    this.state = { showOverlay: true, canvasRef: false };

    this.setCanvasRef = element => {
      this.setState()
      this.canvasRef = element;
      this.setState({ canvasRef: false });
    };
  }




  

  setupListener () {

  }


async setCanvas() {

  var canvas = this.canvasRef;
  if (canvas) {
    if (this.state.showOverlay) {
      if (this.props.overlayData) {

        const gtiff = await GeoTIFF.fromArrayBuffer(this.props.overlayData);
        const image = await gtiff.getImage();
        const raster = await image.readRGB({ enableAlpha: true });
        if (this.state.showOverlay) {
          canvas.width = image.getWidth();
          canvas.height = image.getHeight();
          var ctx = canvas.getContext("2d");
          var imageData = ctx.createImageData(canvas.width, canvas.height);

          var data = imageData.data;
          var o = 0;
          for (var i = 0; i < raster.length; i += 4) {
            data[o] = raster[i];
            data[o + 1] = raster[i + 1];
            data[o + 2] = raster[i + 2];
            data[o + 3] = raster[i + 3]; //255;//(raster[i] + raster[i + 1] + raster[i + 2]) / 3;
            o += 4;
          }
          ctx.putImageData(imageData, 0, 0);
        }
        else {
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    }
  }

}


async componentDidUpdate(prevProps) {
  if (this.props.draw) { }
  await this.setCanvas();
}

async componentDidMount() {
  await this.setCanvas();
}


drawCanvas() {
  if (this.props.draw) {
    return (<canvas style={{ position: 'absolute', height: "100%", width: "100%" }} ref={this.setCanvasRef} ></canvas>)
  }
  else {
    return (null)
  }
}

render() {
  const {
    text
  } = this.props

  return (
    <OverlayView
      //position={{ lat: -34.397, lng: 150.644 }}
      /*
       * An alternative to specifying position is specifying bounds.
       * bounds can either be an instance of google.maps.LatLngBounds
       * or an object in the following format:
       * bounds={{
       *    ne: { lat: 62.400471, lng: -150.005608 },
       *    sw: { lat: 62.281819, lng: -150.287132 }
       * }}
       */
      bounds={new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(36.576281573, 13.968033468),
        new window.google.maps.LatLng(38.42004747, 15.706401162)
      )}
      /*
       * 1. Specify the pane the OverlayView will be rendered to. For
       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
       *    Defaults to `OverlayView.OVERLAY_LAYER`.
       */
      mapPaneName={OverlayView.OVERLAY_LAYER}
    /*
     * 2. Tweak the OverlayView's pixel position. In this case, we're
     *    centering the content.
     */
    //getPixelPositionOffset={this.getPixelPositionOffset}
    /*
     * 3. Create OverlayView content using standard React components.
     */
    >
      <div style={{ position: 'absolute', height: "100%", width: "100%" }}>
        {this.drawCanvas()}
      </div>
    </OverlayView>
  )
}

}
