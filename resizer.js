// Simple script to resize objects per layer.
// Does not currently work w/ a selection. Loops through entire
// layer list and resizes the top most object or group to a specified px dimention

// Globals
var doc = app.activeDocument;
var allLayers = doc.layers.length;
var activeAB = doc.artboards[doc.artboards.getActiveArtboardIndex()];
var padding = 25
var docTop = activeAB.artboardRect[1]; 
var docLeft = activeAB.artboardRect[0];

// Resize dimentions
var max_w = 512
var max_h = 512

// Main loop - process all layers
for (i = 0; i < 1; i++) {
  // select current layer item
  doc.layers[i].pageItems[0].selected = true;  
  // Get ref to selected icon
  selection = doc.selection;  
  // Process icon
  resizeIcon(selection)
  positionIcon(selection)
}

function resizeIcon(selection) {
  // Get icon dimentions
  var icon_h = selection[0].height
  var icon_w = selection[0].width
  // Calc resize values
  var ratio = Math.min( max_w / icon_w, max_h / icon_h );
  var width = ratio * icon_w;
  var height = ratio * icon_h;
  // Set new icon dimentions 
  selection[0].width = width;
  selection[0].height = height;  
}

function positionIcon(selection) {
  // Move icon to top left w/ little padding 
  // to ensure it's within the curren artboard, ready for export
  selection[0].top = docTop - padding;
  selection[0].left = docLeft + padding;  
}
