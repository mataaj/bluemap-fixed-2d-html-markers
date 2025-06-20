# BlueMap fixed 2D html markers
BlueMap script that makes selected html markers scale and rotate with map, making it look like their position on map is fixed.

> [!WARNING]  
> This script works only in "2D" Orthographic / Flat view

https://github.com/user-attachments/assets/f5c725b9-d5ff-4acd-aa84-d279ea2a1fe5

## Installation
Download or copy [fixedHtml2dMarkers.js](https://github.com/mataaj/bluemap-fixed-2d-html-markers/blob/main/fixedHtml2dMarkers.js) and register it. If you don't know how to register a script, check out [this guide](https://bluemap.bluecolored.de/community/Customisation.html#custom-scripts-behaviour)

## Using the script
Nothing will happen right after installing the script. This is normal. To make a specific html marker scale and rotate with the map, you need to add the `fixed-on-map` class to it.

```
example-marker: {
  type: "html"
  position: { x: 100, y: 128, z: 100 }
  label: "example marker"
  html: "<img src='assets/example_marker.png ' alt='some marker)'>"
  classes: [
    "fixed-on-map" //this class makes the marker scale and rotate with map
  ]
}
```

> [!NOTE]  
> You wont be able to use the `scale()` CSS function on the html elements affected by this script, use `width` and `height` properties to change their size.

The script only works well in 2D Orthographic / Flat view. If you have Perspective and Free Flight views enabled on your map, it is strongly reccomended that you hide the selected html markers when either of those two views is active. You can do that using the `hide-on-3d-view` class.

```
...
classes: [
  "fixed-on-map" //this class makes the marker scale and rotate with map
  "hide-on-3d-view" //this class hides the marker when either Perspective or Free Flight view is active
]
```

## Config
The script has a simple config at the top of the file with only two options which you can see below.

```js
const config = {
  pixelToBlockRatio: 1,
  idealHeightTodistanceRatio: 0.651613,
};
```
- `pixelToBlockRatio` - The ratio of pixels of the html elements to blocks on the map. Default ratio of 1 means an element with the width of 500px will be 500 blocks wide on the map
- `idealHeightTodistanceRatio` - This is a rough number of an ideal window height to camera distance ratio when one pixel appears to be the same size as one block. This number has been tested to work well (i.e. nearly perfect allignment of pixels and blocks) with images measuring up to 20000 pixels but if you need even more precision, you can try to edit it.

## Limitations
- **2D only** - This script is truly only suitable for use with the Orthographic / Flat view only. Perspective view looks somewhat ok at large camera distanes but Free-Flight view makes the affected markers distorted beyond recognition.
- **Very Large images** - You may be tempted to use this script with very large raster large images for certain use cases. This isn't really a limitation of the script, but it should be noted that this is a bad idea and rendering such images will likely cause lag.

## Useful CSS styles
Here are some CSS styles which may be useful with this script:

- `image-rendering: pixelated;` - Makes individual pixels of an image more defined.
- `pointer-events: auto;` - Restores the ability of the html elements to capture pointer events (mouse clicks etc.). 

