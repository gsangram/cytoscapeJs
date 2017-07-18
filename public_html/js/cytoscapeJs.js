$(document).ready(function(){  
//var cy = cytoscape({
//  container: document.getElementById('cy') // container to render in
//});
var cy = cytoscape({
  container: $('#cy'),

// list of graph elements for plotting
elements: [ 
    { // node a
      data: { id: 'a' }
    },
    { // node b
      data: { id: 'b' }
    },
    { // node c
      data: { id: 'c' }
    },
    { // node d
      data: { id: 'd' }
    },
    { // node e
      data: { id: 'e' }
    },
    { // node f
      data: { id: 'f' }
    },
    
    { // edge ab
      data: { id: 'ab', source: 'a', target: 'b' }
    },
     { // edge ac
      data: { id: 'ac', source: 'a', target: 'c' }
    },
    { // edge ab
      data: { id: 'ad', source: 'a', target: 'd' }
    },
    { // edge bc
      data: { id: 'bc', source: 'b', target: 'c' }
    },
    { // edge bd
      data: { id: 'bd', source: 'b', target: 'd' }
    },
    { // edge cd
      data: { id: 'cd', source: 'c', target: 'd' }
  },
  { // edge de
      data: { id: 'de', source: 'd', target: 'e' }
  },
  { // edge cd
      data: { id: 'fd', source: 'f', target: 'd' }
  }
    
  ],
  
style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'border-width': 2,
        'border-color': '#000000',
        'background-color': '#31a354',
        'label': 'data(id)',
        'content': 'data(id)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': '#000000',
        'color': '#756bb1'
      })
    
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.666,
        'width': 2,
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': '#f03b21',
        'source-arrow-color': '#000000',
        'target-arrow-color': '#000000'
        
      })
      .selector(':selected')
      .css({
        'border-width': 10,
        'border-color': '#c51b8a',
        'content': 'data(id)',
        'content-font-size': 1,
        'text-valign': 'center',
        'text-outline-width': 0.5,
        'text-outline-color': 'blue'
      }),
  
  layout: {
    name: 'cose',
    padding: 10
  },
  
  // default attributes or initial view port state
  zoom: 1,
  pan: { x: 0, y: 0 },
  
  //setting up of interactions or interaction options: 
  minZoom: 1e-50,
  maxZoom: 1e50,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: true,
  userPanningEnabled: true,
  boxSelectionEnabled: false,
  selectionType: 'single',
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false,

// rendering options:
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  hideLabelsOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 1,
  pixelRatio: 'auto'
  
});

//cy.animate({
////  pan: { x: 10, y: 10},
//  zoom: 2
//}, {
//  duration: 1000
//});

var j = cy.$('#node');

cy.animate({
  fit: {
    eles: j,
    padding: 50
  }
}, {
  duration: 100
});

var jaAni = cy.$('#c').animation({
  style: {
    'background-color': '#FFFF00',
    'width': 75
  },
//  duration: 500
});
jaAni.progress(0.5).play();

var jAni = cy.$('#ab').animation({
  style: {
    'background-color': 'red',
    'width': 30
  },
  duration: 1000
});
//jAni.progress(0.5).play();
jAni
  .play() // start
  .promise('completed').then(function(){ // on next completed
    jAni
      .reverse() // switch animation direction
      .rewind() // optional but makes intent clear
      .play() // start again
    ;
  });
 

});