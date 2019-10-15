# react-google-maps-geotiff-overlay

> Easily overlay geotiff images on top of react google maps 

[![NPM](https://img.shields.io/npm/v/react-google-maps-geotiff-overlay.svg)](https://www.npmjs.com/package/react-google-maps-geotiff-overlay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-google-maps-geotiff-overlay
```

## Usage

GeoTIFFOverlay only needs binary image data provided as a prop. 

```jsx
import React, { Component } from 'react'

import GeoTIFFOverlay from 'react-google-maps-geotiff-overlay'
import { GoogleMap, LoadScript } from '@react-google-maps/api'


class Example extends Component {
  render () {
    return (
          <LoadScript
            id='script-loader'
            googleMapsApiKey={...}
          >
            <GoogleMap
              onLoad={map => {
                this.mapRef = map
              }}
              id='example'
              mapContainerStyle={{
                height: '768px',
                width: '100%'
              }}
              zoom={4}
              center={{ lat: 30.397, lng: 10.644 }}
            >
              <GeoTIFFOverlay overlayData={...} />
            </GoogleMap>
          </LoadScript >
    )
  }
}
```

### opacity
Use opacity prop to control overlay transparence

```jsx
<GeoTIFFOverlay overlayData={...} opacity={0.5}/>
```

### draw
Use draw prop to contol overlay visibility (hide/show)

```jsx
<GeoTIFFOverlay overlayData={...} draw={false}/>
```

## License

MIT © [desmoteo](https://github.com/desmoteo)
=======
# react-google-maps-geotiff-overlay
