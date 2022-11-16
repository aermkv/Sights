//tokenData.hash = '0x00e248526bed1b9915207df0ad528364152385987b7b183b7127052f0b7dbf94'
//tokenData.hash = '0xcb4d60494e7ea04be21c7b4b4a94a286c96fe28c0cf614a3257514d743b71bb0'
//tokenData.hash = 'x0xfc665cfaafdf55af400bca877fd06ae5d56efff123c96140d590420a11f562dc'
//tokenData.hash = '0xc0849dc589e972fd125692fb572dce86171b16234687eef226d88a73f6546d47'
//tokenData.hash = '0x5c4ece7b0ed9688e8cb9f5bf1dfef1fd6e024322610ac85cb1264387161fb697' good san gm with cypresses
//tokenData.hash = '0x2609078d4895eac1571df0d2b9636e88f436d01740a77482fe4022f16203e7fb' // good san gm with cypresses & vineyards
//tokenData.hash = '0xb6ce7562a177df1f13886995dfad3ce6d8ce09c88bb2d0e94fd2a589bd4ed887'
//tokenData.hash = '0x5d5d56e4ac0b9f6e39671e84f30b48bcbffa3d191de3f81bee3296484e4e9945'
//tokenData.hash = '0xfec6aef536191b6699f252a1c848e43d73375e28448ced9484f050e157c49795'
//0xd023a3ef9ee82e53004f66e1ac95372c2e97b5af1f3d7cfe6b733a66041d9fd2
//tokenData.hash = '0x1f4427de32ff9603a842cfb73e6ea575af6e7025f968821d860d4907aebaef4a'

const hashPairs = [];
for (let j = 0; j < 32; j++) {
  hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}
const decPairs = hashPairs.map(x => {
  return parseInt(x, 16);
});

S=Uint32Array.from([0,1,s=t=2,3].map(i=>parseInt(tokenData.hash.substr(i*8+2,8),16)));R=_=>(t=S[3],S[3]=S[2],S[2]=S[1],S[1]=s=S[0],t^=t<<11,S[0]^=(t^t>>>8)^(s>>>19),S[0]/2**32);

const seed = parseInt(tokenData.hash.slice(2,16), 16);

let callCount = 0

function rnd(min, max) {
  const rand = R();
  if (typeof min === 'undefined') {
    return rand;
  } else if (typeof max === 'undefined') {
    if (min instanceof Array) {
      return min[floor(rand * min.length)];
    } else {
      return rand * min;
    }
  } else {
    if (min > max) {
      const tmp = min;
      min = max;
      max = tmp;
    }
    callCount += 1;
    return rand * (max - min) + min;
  }
}

function w(val) {if (val == null) return width;return width * val;}
function h(val) {if (val == null) return height;return height * val;}



//////////////////////////////////////////////////////////
///////////////////// declarations ///////////////////////

const palettes = {
  cinqtr: {
    bld: {
      c1: [211,48,38],
      c2: [137,56,74],
      c3: [223,156,72],
      c4: [221,93,58],
      c5: [134,136,111],
      c6: [229,193,145]
    },
    drk: {
      c1: [56,42,26],
      c2: [156,136,110],
      c3: [15,13,14],
      c4: [61,47,39],
      c5: [114,41,18],
      c6: [116,103,81]
    },
    sky: {
      c1: [249,199,189],
      c2: [107,156,178],
      c3: [133,249,249],
      c4: [232,244,252],
      c5: [29,167,221],
      c6: [54,54,102]
    },
    wtr: {
      c1: [33,107,163],
      c2: [232,208,160],
      c3: [2,58,104],
      c4: [2,2,51],
      c5: [167,63,42],
      c6: [34,34,32]
    },
    veg: {
      c1: [127,183,126],
      c2: [177,215,180],
      c3: [247,246,221],
      c4: [255,192,144],
      c5: [144,200,172],
      c6: [115,169,173]
    },
    str: {
      c1: [223,165,127],
      c2: [10,10,10],
      c3: [250,250,250]
    }
  },
  amsterdam: {
    bld: {
      c1: [223,54,44],
      c2: [247,178,82],
      c3: [236,165,135],
      c4: [161,78,78],
      c5: [237,120,72],
      c6: [107,97,126]
    },
    drk: {
      c1: [192,180,172],
      c2: [31,28,29],
      c3: [44,61,55],
      c4: [102,57,48],
      c5: [73,45,66]
    },
    sky: {
      c1: [249,199,189],
      c2: [107,156,178],
      c3: [133,249,249],
      c4: [232,244,252],
      c5: [29,167,221],
      c6: [54,54,102]
    },
    wtr: {
      c1: [33,107,163],
      c2: [232,208,160],
      c3: [2,58,104],
      c4: [2,2,51],
      c5: [167,63,42],
      c6: [34,34,32]
    },
    veg: {
      c1: [127,183,126],
      c2: [177,215,180],
      c3: [247,246,221],
      c4: [255,192,144],
      c5: [144,200,172],
      c6: [115,169,173]
    },
    str: {
      c1: [223,165,127],
      c2: [10,10,10],
      c3: [250,250,250]
    }
  },
  /*greek1: {
    bld: {
      c1: [237, 232, 228],
      c2: [194, 175, 168],
      c3: [120, 120, 129],
      c4: [249, 200, 165],
      c5: [231, 196, 154],
      c6: [196, 184, 167]
    },
    drk: {
      c1: [56,42,26],
      c2: [156,136,110],
      c3: [51,13,14],
      c4: [61,47,39],
      c5: [114,41,18],
      c6: [116,103,81]
    },
    sky: {
      c1: [177,178,255],
      c2: [170,196,255],
      c3: [210,218,255],
      c4: [238,241,255],
      c5: [254,241,246],
      c6: [166,209,230]
    },
    wtr: {
      c1: [131, 206, 236],
      c2: [0, 107, 189],
      c3: [40, 65, 119],
      c4: [3, 104, 172],
      c5: [43, 128, 186],
      c6: [138 ,180, 215]
    },
    veg: {
      c1: [127,183,126],
      c2: [177,215,180],
      c3: [247,246,221],
      c4: [255,192,144],
      c5: [144,200,172],
      c6: [115,169,173]
    },
    str: {
      c1: [223,165,127],
      c2: [10,10,10],
      c3: [250,250,250]
    }
  },
  mnhttn: {
    bld: {
      c1: [237, 232, 228],
      c2: [194, 175, 168],
      c3: [120, 120, 129],
      c4: [249, 200, 165],
      c5: [231, 196, 154],
      c6: [196, 184, 167]
    },
    drk: {
      c1: [68, 66, 69],
      c2: [94, 87, 75],
      c3: [51,13,14],
      c4: [61,47,39],
      c5: [114,41,18],
      c6: [116,103,81]
    },
    sky: {
      c1: [45, 71, 124],
      c2: [108, 122, 123],
      c3: [128, 165, 172],
      c4: [182, 191, 208],
      c5: [171, 177, 177],
      c6: [108, 100, 99]
    },
    wtr: {
      c1: [31, 35, 46],
      c2: [47, 53, 63],
      c3: [242, 242, 248],
      c4: [156, 160, 156],
      c5: [92, 100, 108],
      c6: [73, 80, 86]
    },
    veg: {
      c1: [57, 71, 63],
      c2: [92, 125, 114],
      c3: [164, 158, 105],
      c4: [255,192,144],
      c5: [144,200,172],
      c6: [115,169,173]
    },
    str: {
      c1: [223,165,127],
      c2: [10,10,10],
      c3: [250,250,250]
    }
  },*/
  magenta: {
    bld: {
      c1: [81, 50, 82],
      c2: [122, 64, 105],
      c3: [202, 78, 121],
      c4: [85, 57, 57],
      c5: [211, 107, 0],
      c6: [230, 210, 170]
    },
    drk: {
      c1: [31, 70, 144],
      c2: [58, 91, 160],
      c3: [124, 62, 102],
      c4: [116, 141, 166],
      c5: [77, 76, 125],
      c6: [154, 134, 164]
    },
    sky: {
      c1: [171, 201, 255],
      c2: [255, 222, 222],
      c3: [238, 238, 238],
      c4: [159, 201, 243],
      c5: [240, 125, 234],
      c6: [211, 206, 223]
    },
    wtr: {
      c1: [83, 73, 148],
      c2: [246, 117, 168],
      c3: [242, 147, 147],
      c4: [255, 204, 179],
      c5: [193, 239, 255],
      c6: [255, 179, 179]
    },
    veg: {
      c1: [57, 71, 63],
      c2: [92, 125, 114],
      c3: [164, 158, 105],
      c4: [255,192,144],
      c5: [144,200,172],
      c6: [115,169,173]
    },
    str: {
      c1: [223,165,127],
      c2: [10,10,10],
      c3: [250,250,250]
    }
  },
  gr2: {
    bld: {
      c1: [253,239,209],
      c2: [255,221,200],
      c3: [250,249,227],
      c4: [243,216,195],
      c5: [248,206,153]
    },
    drk: {
      c1: [36,36,9],
      c2: [145,109,87],
      c3: [0,61,72],
      c4: [135,88,45]
    },
    sky: {
      c1: [0, 141, 183],
      c2: [0, 179, 218],
      c3: [255, 220, 157],
      c4: [107, 208, 252],
      c5: [210, 237, 247]
    },
    wtr: {
      c1: [0, 61, 72],
      c2: [0, 100, 133],
      c3: [107, 208, 252],
      c4: [55, 48, 41],
      c5: [0, 180, 218]
    },
    veg: {
      c1: [234, 184, 59],
      c2: [36, 26, 9],
      c3: [107, 143, 69],
      c4: [41, 70, 21],
      c5: [135, 88, 45]
    },
    str: {
      c1: [183, 43, 29],
      c2: [214, 128, 59],
      c3: [52, 32, 31],
      c4: [108, 144, 170],
      c5: [145, 109, 87]
    }
  }
}

let gPts = [];
let rfd_pos = [];
let horizon;
let citL = [];
let buildings = [];
let rects = [];
let forks = [];

let p1;
let p2;
let blds;
let grid;



function setup() {
  noiseSeed(seed)
  const smD = windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(smD, smD);

  //drawingContext.filter = 'brightness(65%)'
  //drawingContext.filter = 'invert(30%)'

  grid = createGraphics(smD, smD)
  p1 = createGraphics(smD, smD)
  blds = createGraphics(smD, smD)
  p2 = createGraphics(smD, smD)

  translate(width/2,height/2)
  blds.translate(width/2,height/2)
  p1.translate(width/2,height/2)
  p2.translate(width/2,height/2)

  const pal = chCol(palettes)
  hrzOptions = [-h(.2),0,h(.32)]
  horizon = hrzOptions[floor(rnd()*hrzOptions.length)]

  setGrid(30,horizon,pal)
  drawGrid()

  //renderAmst(pal, horizon)
  renderSanGm(pal, horizon)

  granulate(20)

  //reflStrokes(p2,horizon+map(horizon,-h(.4),h(.4),h(.02),h(.08)),BLEND)
  //sanGmTerr(buff,pal,horizon)

  //if (frameCount = 400) {granulate(30)}

}

function draw() {
  //drawingContext.filter = 'brightness(50%)'
  //drawingContext.filter = 'sepia(50%)'
  //drawingContext.filter = 'invert(100%)'
  //drawingContext.filter = 'grayscale(100%)'
  image(grid, 0, 0)
  image(p1, 0, 0)
  image(p2, 0, 0)
  fillInDots()

  //oilPaint_fine(buff,xMin,xMax,yMin,yMax,maxL,maxH,minTh,maxTh,blendType)

  // more random
  //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),w(.006),map(frameCount,0,200,h(.05),h(.005)),w(.005),w(.015),HARD_LIGHT)
  //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),map(frameCount,0,200,w(.05),w(.005)),w(.006),w(.005),w(.015),BLEND)

  // more linear
  //oilPaint_fine(buff,xMin,xMax,yMin,yMax,maxL,maxH,minTh,maxTh,blendType)
  
  oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),map(frameCount,0,200,w(.03),w(.001)),0,w(.005),w(.015),HARD_LIGHT)
  oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),0,map(frameCount,0,200,w(.03),w(.001)),w(.005),w(.015),BLEND)

  //oilPaint_impr(p2,-w(.5),w(.5),horizon+map(horizon,-h(.4),h(.4),h(.01),h(.04)),h(.5),'water') // beginning mapped to halfway down quay

  //oilPaint_fine(p2,-w(.5),w(.5),horizon,h(.5),map(frameCount,0,350,h(.3),h(.003)),w(.003),HARD_LIGHT)
}

function granulate(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
      const grainAmount = random(-amount, amount);
      pixels[i] = pixels[i] + grainAmount;
      pixels[i+1] = pixels[i+1] + grainAmount;
      pixels[i+2] = pixels[i+2] + grainAmount;
      // comment in, if you want to granulate the alpha value
      // pixels[i+3] = pixels[i+3] + grainAmount;
  }
  updatePixels();
}



//////////////////////////////////////////////////////////
//////////////////// chooser funcs ///////////////////////

function chCol(obj) {
  let keys = Object.keys(obj);
  let palName = keys[floor(rnd()*keys.length)]
  return obj[palName];
}



//////////////////////////////////////////////////////////
/////////////////// component funcs //////////////////////

function setGrid(numSecs,horizon,pal) {
  let numSections = numSecs;
  let sectionWidth = width/numSections
  for (let j = 0; j < numSections; j++) {
    for (let i = 0 ; i < numSections; i++) {
      x1 = sectionWidth*i
      y1 = sectionWidth*j
      x2 = x1 + sectionWidth
      y2 = y1 + sectionWidth
      col = chCol(pal.sky)
      if (y2 > horizon + h(.5) - dist(0,-h(.5),0,horizon)/7) {col = chCol(pal.bld)}
      if (y2 > horizon + h(.5)) {col = chCol(pal.wtr)}
      gPts.push({x1,y1,x2,y2,col})
    }
  }
}

function drawGrid() {
  //grid.translate(-width/2,-height/2)
  for (let i = 0; i < gPts.length; i++) {
    let x = gPts[i].x1
    let y = gPts[i].y1
    let size = width/(sqrt(gPts.length))
    grid.fill(gPts[i].col)
    grid.noStroke()
    grid.rect(x,y,size,size)
  }
}

function texStr(buff, x1, y1, x2, y2, weight, r, g, b, alpha) {
  buff.stroke(r, g, b, alpha)
  for (let i = 0; i < weight*5; i++){
    var theta = rnd(TWO_PI);
    var nx1 = x1 + 0.5*rnd(weight/2)*cos(theta);
    var ny1 = y1 + 0.35*rnd(weight/2)*sin(theta);
    var nx2 = x2 + 0.5*rnd(weight/2)*cos(theta);
    var ny2 = y2 + 0.35*rnd(weight/2)*sin(theta);
    buff.strokeWeight(0.5);
    buff.line(nx1, ny1, nx2, ny2)
  }
}

function blobStr(buff, x1, y1, x2, y2, weight, r, g, b, a) {
  buff.noStroke()
  let dirs = ['down'] // add 'down'
  dir  = dirs[floor(rnd()*dirs.length)]
  for (let i = 0; i < weight*25; i++){
    let theta = rnd(TWO_PI);
    let nx1 = x1 + 0.5*rnd(weight/2)*cos(theta);
    let ny1 = y1 + 0.35*rnd(weight/2)*sin(theta);
    let nx2 = x2 + 0.5*rnd(weight/2)*cos(theta);
    let ny2 = y2 + 0.35*rnd(weight/2)*sin(theta);
    let lerpVal = rnd()
    let px1 = lerp(nx1,nx2, lerpVal)
    let py1 = lerp(ny1, ny2, lerpVal)
    let size = rnd(weight/4)
    if (dir === 'up') {adjAlpha = map(py1,ny1,ny2,a,a/8)}
    if (dir === 'down') {adjAlpha = map(py1,ny2,ny1,a,a/8)}
    buff.fill(r, g, b, adjAlpha)
    buff.ellipse(px1, py1, size)
  }
}

function blobStr_live(buff, x1, y1, x2, y2, weight, r, g, b, a, start) {
  buff.noStroke()
  let dirs = ['down'] // add 'down'
  dir  = dirs[floor(rnd()*dirs.length)]
  let num = weight*25
  for (let i = start; i < start+num; i++){
    let theta = rnd(TWO_PI);
    let nx1 = x1 + 0.5*rnd(weight/2)*cos(theta);
    let ny1 = y1 + 0.35*rnd(weight/2)*sin(theta);
    let nx2 = x2 + 0.5*rnd(weight/2)*cos(theta);
    let ny2 = y2 + 0.35*rnd(weight/2)*sin(theta);
    let lerpVal = rnd()
    let px1 = lerp(nx1,nx2, lerpVal)
    let py1 = lerp(ny1, ny2, lerpVal)
    let size = rnd(weight/4)
    if (dir === 'up') {adjAlpha = map(py1,ny1,ny2,a,a/8)}
    if (dir === 'down') {adjAlpha = map(py1,ny2,ny1,a,a/8)}
    buff.fill(r, g, b, adjAlpha)
    buff.ellipse(px1, py1, size)
  }
}

function pStr(buff,x1,y1,x2,y2,strokeLength, strokeColor, strokeThickness, dir) {
  let stepLength = strokeLength/4.0;
  let tangent1 = 0;
  let tangent2 = 0;
  let odds = rnd();
  
  if (odds < 0.1) {
    tangent1 = rnd(-strokeLength, strokeLength);
    tangent2 = rnd(-strokeLength, strokeLength);
  } 

  buff.noFill();
  buff.stroke(strokeColor[0],strokeColor[1],strokeColor[2],15);
  buff.strokeWeight(strokeThickness);
  v1 = createVector(x1,y1)
  v2 = createVector(x2,y2)
  cv1 = p5.Vector.lerp(v1,v2,.25)
  cv2 = p5.Vector.lerp(v1,v2,.75)
  buff.curve(v1.x,v1.y,cv1.x,cv1.y,cv2.x,cv2.y,v2.x,v2.y)

  yStep = 0
  xStep = 0

  for (let num = strokeThickness; num > 0; num -= strokeThickness/10) { // was set to w(.001)
    let offset = rnd(-50, 65);
    let newColor = buff.color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, rnd(35, 125));
    buff.stroke(newColor);
    buff.strokeWeight(rnd(strokeThickness/2)); // was set to rnd(w(.001))
    if (dir === 'h') {
      buff.curve(v1.x+tangent1,v1.y+rnd(-yStep,yStep),cv1.x,cv1.y+rnd(-yStep,yStep),cv2.x,cv2.y+rnd(-yStep,yStep),v2.x+tangent2,v2.y+rnd(-yStep,yStep))
      yStep += strokeThickness/10
    }
    if (dir == 'v') {
      buff.curve(v1.x+rnd(-xStep,xStep),v1.y,cv1.x+rnd(-xStep,xStep),cv1.y,cv2.x+rnd(-xStep,xStep),cv2.y,v2.x+rnd(-xStep,xStep),v2.y)
      xStep += strokeThickness/10
    }
  }
}

function pStr2(buff,x1,y1,x2,y2,strokeLength, strokeColor, strokeThickness, dir, opa) {
  let stepLength = strokeLength/4.0;
  let tangent1 = 0;
  let tangent2 = 0;
  let odds = rnd();
  
  if (odds < 0.1) {
    tangent1 = rnd(-strokeLength, strokeLength);
    tangent2 = rnd(-strokeLength, strokeLength);
  } 

  buff.noFill();
  buff.stroke(strokeColor[0],strokeColor[1],strokeColor[2],15);
  buff.strokeWeight(strokeThickness);
  v1 = createVector(x1,y1)
  v2 = createVector(x2,y2)
  cv1 = p5.Vector.lerp(v1,v2,.25)
  cv2 = p5.Vector.lerp(v1,v2,.75)
  //buff.curve(v1.x,v1.y,cv1.x,cv1.y,cv2.x,cv2.y,v2.x,v2.y)

  yStep = 0
  xStep = 0

  for (let num = strokeThickness; num > 0; num -= strokeThickness/40) { // was set to w(.001)
    let offset = rnd(-10, 10);
    let newColor = buff.color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, rnd(opa/2, opa*2));
    buff.stroke(newColor);
    buff.strokeWeight(rnd(strokeThickness/5)); // was set to rnd(w(.001))
    if (dir === 'h') {
      buff.bezier(v1.x+tangent1,v1.y+rnd(-yStep,yStep),cv1.x,cv1.y+rnd(-yStep,yStep),cv2.x,cv2.y+rnd(-yStep,yStep),v2.x+tangent2,v2.y+rnd(-yStep,yStep))
      yStep += strokeThickness/50
    }
    if (dir == 'v') {
      buff.bezier(v1.x+rnd(-xStep,xStep),v1.y,cv1.x+rnd(-xStep,xStep),cv1.y,cv2.x+rnd(-xStep,xStep),cv2.y,v2.x+rnd(-xStep,xStep),v2.y)
      xStep += strokeThickness/50
    }
  }
}

function pStr3(buff, x, y, strokeLength, strokeColor, strokeThickness, type) {
  let stepLength = strokeLength/4.0;
  
  // Determines if the stroke is curved. A straight line is 0.
  let tangent1 = 0;
  let tangent2 = 0;
  
  let odds = rnd();
  
  if (odds < 0) { // RETURN TO POS VALUE TO BRING BACK RND
    tangent1 = rnd(-strokeLength, strokeLength);
    tangent2 = rnd(-strokeLength, strokeLength);
  } 
  
  // Draw a big stroke
  buff.noFill();
  buff.stroke(strokeColor[0],strokeColor[1],strokeColor[2],2);
  buff.strokeWeight(strokeThickness);

  // CAN CHANGE BEZIER BACK TO CURVE

  if (type === 'water') {
    buff.bezier(x - stepLength*2, y + tangent1, x-stepLength,  y, x + stepLength, y, x + stepLength*2, y + tangent2);
  }else if (type === 'sky') {
    buff.bezier(x - stepLength*2, y + tangent1, x-stepLength,  y, x + stepLength, y, x + stepLength*2, y + tangent2);
  }else{
    buff.bezier(x + tangent1, y - stepLength*2, x,  y -stepLength, x, y, x + tangent2, y + stepLength*2);
  }
  
  yStep = 0
  // Draw stroke's details
  for (let num = strokeThickness; num > 0; num -= w(.001)) {
    let offset = rnd(-50, 25);
    let newColor = buff.color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, rnd(5, 25));
    
    buff.stroke(newColor);
    buff.strokeWeight(floor(rnd(0, 3)));
    if (type === 'water') {
      buff.bezier(x - stepLength*2, y + tangent1 + yStep, x-stepLength*rnd(0.9, 1.1),  y-strokeThickness/2 + yStep, x + stepLength*random(0.9, 1.1), y + yStep, x + stepLength*2, y + tangent2 + yStep);
      yStep += strokeThickness/100
    }else if (type === 'sky') {
      buff.bezier(x - stepLength*2, y + tangent1 + yStep, x-stepLength*rnd(0.9, 1.1),  y-strokeThickness/2 + yStep, x + stepLength*random(0.9, 1.1), y + yStep, x + stepLength*2, y + tangent2 + yStep);
      yStep += strokeThickness/100
    }else{
      buff.bezier(x + tangent1, y - stepLength*2, x-strokeThickness/2, y-stepLength*rnd(0.9, 1.1), x-strokeThickness/2, y+stepLength*random(0.9, 1.1), x+tangent2, y+stepLength*2);
    }
  }
}

function simpleHouse(buff,xMid,yBot,xS,yS,col,cntr,strCol) {
  let x1 = xMid - xS/2
  let x2 = xMid + xS/2
  let yDiff = yS/10
  let dirs = ['l','r']
  dir = dirs[floor(rnd()*dirs.length)]
  buff.strokeWeight(rnd(w(.001),w(.003)))
  buff.stroke(strCol)
  if (dir === 'l') {
    yT1 = yBot - yS - yDiff
    yT2 = yBot - yS + yDiff
    x3 = x1 - xS/rnd(2,4)
    for (let x = x3; x < x2; x += xS/30) {
      if (x < x1) {
        y = map(x,x3,x1,yT2,yT1)
        cD = 2
      }else{
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }
      if (cntr = 3 && x > x2 - xS/10) {
        texStr(buff, x, y, x, yBot+rnd(h(.5)), xS/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
      }
      texStr(buff, x, y, x, yBot, xS/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
    }
    if (cntr = 1) {
      buff.line(x1,yT1,x1,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
    if (cntr = 2) {
      buff.line(x3,yT2,x1,yT1)
      buff.line(x3,yT2,x3,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
  }
  if (dir === 'r') {
    yT1 = yBot - yS + yDiff
    yT2 = yBot - yS - yDiff
    x3 = x2 + xS/rnd(2,4)
    for (let x = x1; x < x3; x += xS/30) {
      if (x < x2) {
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }else{
        y = map(x,x2,x3,yT2,yT1)
        cD = 2
      }
      texStr(buff, x, y, x, yBot, xS/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
    }
    if (cntr = 1) {
      buff.line(x2,yT2,x2,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
    if (cntr = 2) {
      buff.line(x3,yT1,x2,yT2)
      buff.line(x3,yT1,x3,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
  }
}

function grH2(buff,xMid,yBot,xS,yS,col,cntr,strCol) {
  let x1 = xMid - xS/2
  let x2 = xMid + xS/2
  let yTop = yBot - yS
  let yM = yBot - .8*yS
  for (let x = x1; x < x2; x += xS/30) {
    if (x < xMid) {
      y = map(x,x1,xMid,yM,yTop)
    }else{
      y = map(x,xMid,x2,yTop,yM)
    }
    texStr(buff, x, y, x, yBot, xS/10, col[0], col[1], col[2], 100)
  }
  buff.strokeWeight(rnd(w(.001),w(.003)))
  buff.stroke(strCol)
  if (cntr = 1) {
    buff.line(x1,yBot,x1,yM)
    buff.line(x1,yM,xMid,yTop)
  }
  if (cntr = 2) {
    buff.line(x1,yM,xMid,yTop)
    buff.line(xMid,yTop,x2,yM)
    buff.line(x2,yM,x2,yBot)
  }
  let wx1 = lerp(x1,x2,.25)
  let wx2 = lerp(x1,x2,.5)
  let wx3 = lerp(x1,x2,.75)
  let windows = [wx1, wx2, wx3]
  lWgt = w(.005)
  windows.forEach(i => {
    for (let x = i - (x2-x1)/12; x < i + (x2-x1)/12; x+= w(.001)) {
      y1 = yM + .1*yS
      y2 = y1 + .35*yS
      //if (i == wx2) {y2 = y1 + .5*yS}
      texStr(p1, x, y1, x, y2, lWgt, strCol[0], strCol[1], strCol[2], 40)
    }
  })
}

function amstHouse1(buff, pal, xM, yB, xW, yH) {
  x1 = xM - xW/2
  x2 = xM + xW/2
  col  = chCol(pal.bld)
  rCol = chCol(pal.str)
  rCol2 = chCol(pal.str)
  //let attic = rnd()
  //let brick = rnd()
  let yT = yB - yH
  let yM = lerp(yB,yT,.8)
  for (x = x1; x < x2; x+= xW/20) {
    if (x < xM) {yR = map(x,x1,xM,yM,yT)}
    if (x > xM) {yR = map(x,xM,x2,yT,yM)}
    texStr(buff, x, yB, x, yR, w(.02), col[0], col[1], col[2], 150)
  }
  if (xW < width/8) {
    wx1 = lerp(x1,x2,.33)
    wx2 = lerp(x1,x2,.66)
    windows = [wx1,wx2]
  }else{
    wx1 = lerp(x1,x2,.25)
    wx2 = lerp(x1,x2,.5)
    wx3 = lerp(x1,x2,.75)
    windows = [wx1,wx2,wx3]
  }
  yStep = (dist(0,yB,0,yM))/3
  if ((dist(0,yB,0,yM)) > yH*.75){yStep = (dist(0,yB,0,yM))/4}
  for (let y = yB; y > yM; y -= yStep) {
    texStr(buff, x1, y, x2, y, w(.03), rCol[0], rCol[1], rCol[2], 90)
    texStr(buff, x1, y+h(.002), x2, y+h(.002), w(.01), rCol2[0], rCol2[1], rCol2[2], 150)
    for (let i = 0; i < windows.length; i++) {
      for (let x = windows[i]-xW/12; x < windows[i]+xW/12; x += w(.001)){
        texStr(buff, x, y, x, y - (yStep*.7), w(.01), rCol[0], rCol[1], rCol[2], 90)
      }
      texStr(buff, windows[i]-xW/12, y, windows[i]-xW/12, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
      texStr(buff, windows[i]+xW/12, y, windows[i]+xW/12, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
      texStr(buff, windows[i]-xW/12, y - (yStep*.7), windows[i]+xW/12, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
    }
  }
  randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'h',0,30)
  randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'v',30,60)
}

function amstHouse2(buff, pal, xM, yB, xW) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let yH = xW * rnd(1.8,2.7)
  col  = chCol(pal.bld)
  rCol = chCol(pal.str)
  rCol2 = chCol(pal.str)
  let yT = yB - yH
  let yM = lerp(yB,yT,rnd(.6,.8))
  let topFlankOptions = ['none', 'flanks']
  topFlanks = topFlankOptions[floor(rnd()*topFlankOptions.length)]
  for (let y = yB; y > yT; y -= h(.003)) {
    if (y < yM) {
      angle = map(y,yM,yT,TWO_PI,PI+HALF_PI)
      x1 = xM + (xW/3 * sin(angle) + xW/2.1)
      x2 = xM - (xW/3 * sin(angle) + xW/2.1)
    }
    texStr(buff, x1, y, x2, y, w(.01), col[0], col[1], col[2], 150)
    if (topFlanks === 'flanks') {
      if (x1 > xM + xW/5 || x2 < xM - xW/5) { // because x1 and x2 are right and left, respectively
        texStr(buff, x1, y, x1, yM, w(.01), rCol[0], rCol[1], rCol[2], 150)
        texStr(buff, x2, y, x2, yM, w(.01), rCol[0], rCol[1], rCol[2], 150)
      }
    }
  }
  let numSteps = floor(1.5*yH/xW)
  yStep = dist(0,yB,0,yM)/numSteps
  for (let y = yM; y < yB; y += yStep) {
    texStr(buff, xM - xW/2, y, xM + xW/2, y, w(.015), rCol[0], rCol[1], rCol[2], 150)
  }
  let windowTypes = ['round','square'] // ,'french'
  windowType = windowTypes[floor(rnd()*windowTypes.length)]
  if (windowType === 'round') {
    let yMid = (yT+yM)/2
    buff.noStroke()
    buff.fill(rCol[0], rCol[1], rCol[2], 150)
    buff.ellipse(xM,yMid,xW/6)
    for (let x = xM - xW/8; x < xM + xW/8; x += w(.001)) {
      angle = map(x, xM - xW/8, xM + xW/8, PI, TWO_PI)
      y1 = yMid - Math.sin(angle)*(xW/8) //- map(dist(x,0,x,xM),xW/8,0,xW/300,0)
      y2 = yMid + Math.sin(angle)*(xW/8) //+ map(dist(x,0,x,xM),xW/8,0,xW/300,0)
      texStr(buff, x, y1, x, y2, w(.002), rCol2[0], rCol2[1], rCol2[2], 150)
    }
  }
  if (windowType === 'square') {
    let yMid = (yT+yM)/2
    let sqW = xW/rnd(8,11)
    for (let x = xM - xW/8; x <= xM + xW/8; x += w(.003)) {
      //texStr(buff, x, yT + yH/30, x, yM, w(.01), rCol[0], rCol[1], rCol[2], 150)
    }
    for (let x = xM - sqW; x < xM + sqW; x += w(.001)) {
      y1 = yMid - xW/10
      y2 = yMid + xW/10
      texStr(buff, x, y1, x, y2, w(.002), rCol2[0], rCol2[1], rCol2[2], 150)
    }
  }
}

function amstHouse3(buff, pal, xM, yB, xW) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let yH = xW * rnd(2.8,3.4)
  col  = chCol(pal.bld)
  rCol = chCol(pal.str)
  rCol2 = chCol(pal.str)
  let yT = yB - yH
  let yT2 = lerp(yB,yT,.93)
  let yM = lerp(yB,yT,.75)
  let topDiv = rnd(7,8.5)
  let xML = xM - xW/topDiv
  let xMR = xM + xW/topDiv
  for (let y = yT; y < yB; y += h(.003)) {
    xL = x1
    xR = x2
    if (y < yT2) {
      xL = xML
      xR = xMR
    }else if (y < yM) {
      xL = map(y,yT2,yM,xML,x1)
      xR = map(y,yT2,yM,xMR,x2)
    }
    texStr(buff, xR, y, xL, y, w(.01), col[0], col[1], col[2], 150)
  }
  buff.fill(rCol[0], rCol[1], rCol[2], 250)
  buff.ellipse(xM,yT2,xW/8)
  let topWinY = lerp(yT2,yM,.65)
  buff.rectMode(CENTER)
  buff.rect(xM,topWinY,xW/5,xW/4)
  buff.rect(xM,yB-xW/3/2,xW/4,xW/3)
  buff.arc(xM,yB-xW/3,xW/4,xW/3/4,PI,TWO_PI,OPEN)
  let yStep = yH/5
  for (let y = yM; y < yB - yStep; y += yStep) {
    buff.rectMode(CORNER)
    rW = xW/4
    rX = xM - rW/2
    rXL = x1 + xW/8
    rXR = x2 - xW/4
    rH = xW/3
    rY = y + rH/2
    buff.rect(rX,rY,rW,rH)
    buff.rect(rXL,rY,rW/2,xW/4)
    buff.rect(rXR,rY,rW/2,xW/4)
    buff.arc(xM,rY,rW,rH/4,PI,TWO_PI,OPEN)
  }
}

function prtHouse1(buff, xM, yB, xW, yH, pal) {
  x1 = xM - xW/2
  x2 = xM + xW/2
  col  = chCol(pal.bld)
  let attic = rnd()
  let brick = rnd()
  
  for (x = x1; x < x2; x+= xW/20) {
    texStr(buff, x, yB, x, yB - yH, w(.03), col[0], col[1], col[2], 90)
  }
  rCol = chCol(pal.str)
  rCol2 = chCol(pal.str)
  for (y = yB - yH; y > yB - yH - yH/4; y -= w(.003)) {
    vAdj = rnd(-10,40)
    texStr(buff, x1, y, x2, y, w(.03), rCol[0]+vAdj, rCol[1]+vAdj, rCol[2]+vAdj, 90)
  }
  if (brick < .3) {
    for (let y = yB; y > yB - yH + yH/60; y -= yH/60) {
      let colOff = rnd(-30,-65)
      lineStep = xW/rnd(2,10)
      for (let x = x1; x < x2; x += w(.001)) {
        for (let i = 0; i < floor(xW/lineStep); i++){
          lineAlpha = map(x,x1+lineStep*i,x1+lineStep*(i+1),255,0)
        }
        //if (x > x1 + lineStep){linealpha = map(x,x1+lineStep,x1+lineStep*2,255,0)} // can become a for loop
        buff.strokeWeight(w(.001))
        buff.stroke(col[0]+colOff,col[1]+colOff,col[2]+colOff,lineAlpha)
        buff.line(x,y,x,y-yH/25)
      }
    }
  }
  if (attic < .3) {
    xL = x1 + xW/5
    xR = x2 - xW/5
    yT = yB - yH - yH/4
    yTm = yB - yH - yH/6
    for (let x = xL; x < xR; x += w(.003)) {
      if (x < xM) {y = map(x,xL,xM,yTm,yT)}
      if (x > xM) {y = map(x,xM,xR,yT,yTm)}
      texStr(buff, x, y, x, yB - yH - yH/24, w(.03), col[0], col[1], col[2], 90)
    }
    texStr(buff, xL, yTm, xM, yT, w(.03), rCol[0], rCol[1], rCol[2], 90)
    texStr(buff, xM, yT, xR, yTm, w(.03), rCol[0], rCol[1], rCol[2], 90)
    xWL = xL + xW/5
    xWR = xR - xW/5
    for (let x = xWL; x < xWR; x += w(.001)) {
      if (x < xM) {y = map(x,xL,xM,yTm,yT)}
      if (x > xM) {y = map(x,xM,xR,yT,yTm)}
      texStr(buff, x, y + yH/10, x, yB - yH - yH/22, w(.01), rCol[0], rCol[1], rCol[2], 90)
    }
  }
  if (xW < width/8) {
    wx1 = lerp(x1,x2,.33)
    wx2 = lerp(x1,x2,.66)
    windows = [wx1,wx2]
  }else{
    wx1 = lerp(x1,x2,.25)
    wx2 = lerp(x1,x2,.5)
    wx3 = lerp(x1,x2,.75)
    windows = [wx1,wx2,wx3]
  }
  yStep = yH/3
  if (yH > h(.35)){yStep = yH/4}
  for (let y = yB; y > yB - yH; y -= yStep) {
    texStr(buff, x1, y, x2, y, w(.03), rCol[0], rCol[1], rCol[2], 90)
    texStr(buff, x1, y+h(.002), x2, y+h(.002), w(.01), rCol2[0], rCol2[1], rCol2[2], 150)
    for (let i = 0; i < windows.length; i++) {
      for (let x = windows[i]-xW/12; x < windows[i]+xW/12; x += w(.001)){
        texStr(buff, x, y, x, y - (yStep*.7), w(.01), rCol[0], rCol[1], rCol[2], 90)
      }
      texStr(buff, windows[i]-xW/12, y, windows[i]-xW/12, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
      texStr(buff, windows[i]+xW/12, y, windows[i]+xW/12, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
      texStr(buff, windows[i]-xW/12, y - (yStep*.7), windows[i]+xW/12, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
    }
  }
  randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'h',0,30)
  randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'v',30,60)
}

function prtHouse2(buff, xM, yB, xW, yH, pal) {
  x1 = xM - xW/2
  x2 = xM + xW/2
  col  = chCol(pal.bld)
  rCol = chCol(pal.str)
  rCol2 = chCol(pal.str)

  for (x = x1; x < x2; x+= xW/20) {
    texStr(buff, x, yB, x, yB - yH, w(.03), col[0], col[1], col[2], 90)
  }

  if (xW < width/4) {
    wx1 = lerp(x1,x2,.2)
    wx2 = lerp(x1,x2,.8)
    windows = [wx1,wx2]
  }else{
    wx1 = lerp(x1,x2,.25)
    wx2 = lerp(x1,x2,.5)
    wx3 = lerp(x1,x2,.75)
    windows = [wx1,wx2,wx3]
  }

  yStep = yH/3
  if (yH > h(.45)){yStep = yH/4}
  for (let y = yB; y > yB - yH; y -= yStep) {
    //texStr(buff, x1, y, x2, y, w(.03), rCol[0], rCol[1], rCol[2], 90)
    texStr(buff, x1, y+h(.002), x2, y+h(.002), w(.02), rCol2[0], rCol2[1], rCol2[2], 150)
    for (let i = 0; i < windows.length; i++) {
      for (let x = windows[i]-xW/8; x < windows[i]+xW/8; x += w(.001)){
        texStr(buff, x, y, x, y - (yStep*.7), w(.01), rCol[0], rCol[1], rCol[2], 90)
        texStr(buff, x, y, x, y - (yStep*.7) + xW/8 + w(.003), w(.01), rCol2[0], rCol2[1], rCol2[2], 90)
        if (x > windows[i]-xW/10 && x <= windows[i]-xW/45 || x > windows[i]+xW/45 && x <= windows[i]+xW/10) {
          texStr(buff, x, y - xW/24, x, y - (yStep*.7) + xW/8 + xW/24, w(.01), rCol[0], rCol[1], rCol[2], 90)
        }
      }
      texStr(buff, windows[i]-xW/8, y, windows[i]-xW/8, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
      texStr(buff, windows[i]+xW/8, y, windows[i]+xW/8, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
      texStr(buff, windows[i]-xW/8, y - (yStep*.7), windows[i]+xW/8, y - (yStep*.7), w(.003), rCol2[0], rCol2[1], rCol2[2], rnd(150))
      buff.noFill()
      buff.strokeWeight(rnd(w(.001)))
      buff.stroke(rCol2)
      buff.arc(windows[i], y - (yStep*.7) + xW/8, xW/4, xW/4, PI, TWO_PI)
      buff.arc(windows[i], y - (yStep*.7) + xW/8, xW/8, xW/8, PI, TWO_PI)
      buff.fill(rCol2)
      buff.arc(windows[i], y - (yStep*.7) + xW/8, xW/24, xW/24, PI, TWO_PI)
      buff.line(windows[i], y - (yStep*.7) + xW/8, windows[i]-xW/8, y - (yStep*.7) + xW/24)
      buff.line(windows[i], y - (yStep*.7) + xW/8, windows[i]-xW/16, y - (yStep*.7))
      buff.line(windows[i], y - (yStep*.7) + xW/8, windows[i], y - (yStep*.7))
      buff.line(windows[i], y - (yStep*.7) + xW/8, windows[i]+xW/16, y - (yStep*.7))
      buff.line(windows[i], y - (yStep*.7) + xW/8, windows[i]+xW/8, y - (yStep*.7) + xW/24)
      buff.line(windows[i] - xW/8, y - (yStep*.7) + xW/8, windows[i] + xW/8, y - (yStep*.7) + xW/8)
      buff.line(windows[i] - xW/8, y - (yStep*.7) + xW/8 + w(.003), windows[i] + xW/8, y - (yStep*.7) + xW/8 + w(.003))
    }
  }
  randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'h',0,30)
  randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'v',30,60)
}

function sanGmTower(buff, pal, xM, yB, xW, yH) {
  //sanGmHouse1(buff, pal, xM, yB, xW/2, yH*1.1, dir, 'tower')
  sanGmHouse1(buff, pal, xM, yB, xW, yH, dir, 'tower')
}

function sanGmHouse1(buff, pal, xM, yB, xW, yH, dir, type) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let yDiff = yH/20
  if (type === 'tower') { yDiff = yH/90}
  //let dirs = ['l','r']
  //dir = dirs[floor(rnd()*dirs.length)]
  let col = chCol(pal.bld)
  let strCol = chCol(pal.str)
  buff.strokeWeight(rnd(w(.001),w(.003)))
  buff.stroke(strCol)
  if (dir === 'l') {
    yT1 = yB - yH - yDiff
    yT2 = yB - yH + yDiff
    sideWidth = rnd(2,4)
    x3 = x1 - xW/sideWidth
    for (let x = x3; x < x2; x += xW/30) {
      if (x < x1) {
        y = map(x,x3,x1,yT2,yT1)
        cD = 2
      }else{
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }
      if (cntr = 3 && x > x2 - xW/10) {
        texStr(buff, x, y, x, yB+rnd(h(.5)), xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
      }
      /*if (type === 'tower') {
        yex = yH/7
        x4 = xM - xW/4
        x5 = xM + xW/4
        x6 = x4 - sideWidth/2
        for (let xt = x6; xt < x5; xt += xW/30) {
          if (xt < x4) {
            ytt = map(xt,x6,x4,yT2-yex,yT1-yex)
            cDt = 6
          }else{
            ytt = map(xt,x4,x5,yT1-yex,yT2-yex)
            cDt = 3
          }
          texStr(buff, xt, ytt, x, y, xW/10, col[0]/cDt, col[1]/cDt, col[2]/cDt, 100)
        }
      }*/
      texStr(buff, x, y, x, yB, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
      if (type === 'tower') {
        if (x > xM - xW/8 && x < xM + xW/8) {
          ywt = y + yH/8
          ywb = ywt + yH/12
          cD = 3
          texStr(buff, x, ywt, x, ywb, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 200)
        }
      }else{
        let numWindows = 4
        if (xW > width/8) {numWindows = 5}
        for (let i = 1; i < numWindows; i++) {
          wPos = lerp(x1,x2,.2*i)
          if (x > wPos - xW/24 && x < wPos + xW/24) {
            ywt = y + yH/8
            ywb = ywt + yH/12
            cD = 2
            texStr(buff, x, ywt, x, ywb, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 200)
            texStr(buff, x, ywt + yH/5, x, ywb + yH/5, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 200)
          }
        }
      }
    }
    if (cntr = 1) {
      buff.line(x1,yT1,x1,yB)
      buff.line(x1,yT1,x2,yT2)
    }
    if (cntr = 2) {
      buff.line(x3,yT2,x1,yT1)
      buff.line(x3,yT2,x3,yB)
      buff.line(x1,yT1,x2,yT2)
      pStr2(p2, x1,yT1,x2,yT2, dist(x1,yT1,x2,yT2), strCol, w(.003), 'h', 100)
      pStr2(p2, x3,yT2,x3,yB-yH/rnd(2,4), dist(x3,yT1,x3,yB), strCol, w(.003), 'v', 100)
    }
    if (type === 'tower') {
      pStr2(p2, x1,yT1,x1,yB-yH/rnd(2,3), dist(x1,yT1,x1,yB), strCol, w(.003), 'v', 100)
    }
  }
  if (dir === 'r') {
    yT1 = yB - yH + yDiff
    yT2 = yB - yH - yDiff
    x3 = x2 + xW/rnd(2,4)
    for (let x = x1; x < x3; x += xW/30) {
      if (x < x2) {
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }else{
        y = map(x,x2,x3,yT2,yT1)
        cD = 2
      }
      texStr(buff, x, y, x, yB, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
    }
    if (cntr = 1) {
      buff.line(x2,yT2,x2,yB)
      buff.line(x1,yT1,x2,yT2)
      pStr2(p2, x2,yT2,x2,yB, dist(x2,yT2,x2,yB), strCol, w(.003), 'v', 100)
    }
    if (cntr = 2) {
      buff.line(x3,yT1,x2,yT2)
      buff.line(x3,yT1,x3,yB)
      buff.line(x1,yT1,x2,yT2)
      pStr2(p2, x1,yT1,x2,yT2, dist(x1,yT1,x2,yT2), strCol, w(.003), 'h', 100)
      pStr2(p2, x3,yT1,x3,yB, dist(x3,yT1,x3,yB), strCol, w(.003), 'v', 100)
      if (type === 'tower') {
        pStr2(p2, x2,yT2,x2,yB-yH/rnd(2,3), dist(x3,yT1,x3,yB), strCol, w(.003), 'v', 100)
      }
    }
  }
  if (dir === 'l') {

  }
}

function simpleHouse(buff,xMid,yBot,xS,yS,col,cntr,strCol) {
  let x1 = xMid - xS/2
  let x2 = xMid + xS/2
  let yDiff = yS/10
  let dirs = ['l','r']
  dir = dirs[floor(rnd()*dirs.length)]
  buff.strokeWeight(rnd(w(.001),w(.003)))
  buff.stroke(strCol)
  if (dir === 'l') {
    yT1 = yBot - yS - yDiff
    yT2 = yBot - yS + yDiff
    x3 = x1 - xS/rnd(2,4)
    for (let x = x3; x < x2; x += xS/30) {
      if (x < x1) {
        y = map(x,x3,x1,yT2,yT1)
        cD = 2
      }else{
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }
      if (cntr = 3 && x > x2 - xS/10) {
        texStr(buff, x, y, x, yBot+rnd(h(.5)), xS/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
      }
      texStr(buff, x, y, x, yBot, xS/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
    }
    if (cntr = 1) {
      buff.line(x1,yT1,x1,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
    if (cntr = 2) {
      buff.line(x3,yT2,x1,yT1)
      buff.line(x3,yT2,x3,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
  }
  if (dir === 'r') {
    yT1 = yBot - yS + yDiff
    yT2 = yBot - yS - yDiff
    x3 = x2 + xS/rnd(2,4)
    for (let x = x1; x < x3; x += xS/30) {
      if (x < x2) {
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }else{
        y = map(x,x2,x3,yT2,yT1)
        cD = 2
      }
      texStr(buff, x, y, x, yBot, xS/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
    }
    if (cntr = 1) {
      buff.line(x2,yT2,x2,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
    if (cntr = 2) {
      buff.line(x3,yT1,x2,yT2)
      buff.line(x3,yT1,x3,yBot)
      buff.line(x1,yT1,x2,yT2)
    }
  }
}

function simpleShape(buff, xM, yB, xW, yH, pal) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let yDiff = yH/10
  let dirs = ['l','r']
  strCol = chCol(pal.str)
  dir = dirs[floor(rnd()*dirs.length)]
  buff.strokeWeight(rnd(w(.001),w(.003)))
  buff.stroke(strCol)
  if (dir === 'l') {
    yT1 = yB - yH - yDiff
    yT2 = yB - yH + yDiff
    x3 = x1 - xW/rnd(2,4)
    for (let x = x3; x < x2; x += xW/30) {
      if (x < x1) {
        y = map(x,x3,x1,yT2,yT1)
        cD = 2
      }else{
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }
      if (cntr = 3 && x > x2 - xW/10) {
        texStr(buff, x, y, x, yB+rnd(h(.5)), xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
      }
      texStr(buff, x, y, x, yB, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
    }
    if (cntr = 1) {
      buff.line(x1,yT1,x1,yB)
      buff.line(x1,yT1,x2,yT2)
    }
    if (cntr = 2) {
      buff.line(x3,yT2,x1,yT1)
      buff.line(x3,yT2,x3,yB)
      buff.line(x1,yT1,x2,yT2)
    }
  }
  if (dir === 'r') {
    yT1 = yB - yH + yDiff
    yT2 = yB - yH - yDiff
    x3 = x2 + xW/rnd(2,4)
    for (let x = x1; x < x3; x += xW/30) {
      if (x < x2) {
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }else{
        y = map(x,x2,x3,yT2,yT1)
        cD = 2
      }
      texStr(buff, x, y, x, yB, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
    }
    if (cntr = 1) {
      buff.line(x2,yT2,x2,yB)
      buff.line(x1,yT1,x2,yT2)
    }
    if (cntr = 2) {
      buff.line(x3,yT1,x2,yT2)
      buff.line(x3,yT1,x3,yB)
      buff.line(x1,yT1,x2,yT2)
    }
  }
}

function porto(buff, hrz, numSecs, pal, bMode) {
  buff.push()
  buff.blendMode(bMode)
  leftEnd = -w(.5)
  rightEnd = w(.5)
  let sectionWidths = [leftEnd]
  //let numSecs = map(hrz,-h(.5),h(.5),18,6)
  let diW = width/numSecs
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(diW*.75,diW*2)
    sectionWidths.push(division)
  }
  sectionWidths.push(rightEnd)
  let sections = []
  for (let i = 0; i < sectionWidths.length-1; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    const end = sectionWidths[i+2] ? begin + sectionWidths[i+1] : sectionWidths[i+1]// Or sectionsWidths[i]?
    sections.push([begin,end])
  }
  let houseTypes = [prtHouse1,prtHouse2,simpleShape]
  for (let i = 0; i < sections.length-1; i++) {
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    let xD = (x1+x2)/2
    let xW = x2 - x1
    hH = rnd(h(.25),h(.5))
    houseType = houseTypes[floor(rnd()*houseTypes.length)]
    houseType(buff, xD, hrz, xW, hH, pal)
  }
  buff.pop()
}

function makeSections(numSecs,left,right,minDiv,maxDiv) {
  leftEnd = left
  rightEnd = right
  let sectionWidths = [leftEnd]

  let diW = dist(left,0,right,0)/numSecs
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(diW*minDiv,diW*maxDiv)
    sectionWidths.push(division)
  }
  sectionWidths.push(rightEnd)
  let sections = []
  for (let i = 0; i < sectionWidths.length-1; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    const end = sectionWidths[i+2] ? begin + sectionWidths[i+1] : sectionWidths[i+1]// Or sectionsWidths[i]?
    sections.push([begin,end])
  }
  return sections
}

function amsterdam(buff, hrz, numSecs, pal, bMode) {
  buff.push()
  buff.blendMode(bMode)
  bridgeM = rnd(-w(.25),w(.25))
  bridgeW = map(hrz,-h(.4),h(.4),w(.08),w(.2))
  brL = bridgeM - bridgeW/2
  brR = bridgeM + bridgeW/2
  leftSections = floor((dist(-w(.5),0,brL,0)/width)*numSecs)
  rightSections = floor((dist(brR,0,w(.5),0)/width)*numSecs)
  sections1 = makeSections(leftSections,-w(.5),brL,.8,1.2)
  sections2 = makeSections(rightSections,brR,w(.5),.8,1.2)
  sections = [sections1,sections2]
  let houseTypes = [amstHouse1, amstHouse2, amstHouse3] //amstHouse1, amstHouse2, 
  sections.forEach(arr => {
    for (let i = 0; i < arr.length-1; i++) {
      let x1 = arr[i][0]
      let x2 = arr[i][1]
      let xD = (x1+x2)/2
      let xW = x2 - x1
      //hH = rnd(h(.25),h(.5))
      hH = (x2-x1) * rnd(2,3.3)
      houseType = houseTypes[floor(rnd()*houseTypes.length)]
      houseType(buff, pal, xD, hrz, xW, hH)
    }
  })
  let quayHeight = map(hrz,-h(.4),h(.4),h(.01),h(.04))
  let quayCol = chCol(pal.drk)
  for (let y = hrz; y < hrz + quayHeight; y += h(.008)) {
    texStr(buff, -w(.5), y, brL, y, w(.03), quayCol[0], quayCol[1], quayCol[2], 200)
    texStr(buff, brR, y, w(.5), y, w(.03), quayCol[0], quayCol[1], quayCol[2], 200)
  }
  //pStr2(buff,-w(.5), hrz, brL, hrz, dist(-w(.5), hrz, brL, hrz), strokeColor, strokeThickness, dir, opa)
  for (let x = brL; x < brR; x += w(.002)) {
    let brBrL = lerp(brL,brR,.25)
    let brBrR = lerp(brL,brR,.75)
    let angle = map(x,brL,brR,HALF_PI,PI+HALF_PI)
    yT = hrz + (quayHeight/2) * cos(angle)
    yB = hrz + quayHeight
    if (x > brBrL && x < brBrR) {
      angle = map(x,brBrL,brBrR,HALF_PI,PI+HALF_PI)
      yB = hrz + quayHeight + quayHeight * cos(angle)
    }
    texStr(buff, x, yT, x, yB, w(.01), quayCol[0], quayCol[1], quayCol[2], 200)
  }
  buff.pop()
}

function sanGm(buff, hrz, numSecs, pal, bMode, towers) {
  buff.push()
  buff.blendMode(bMode)
  sections = makeSections(numSecs,-w(.5),w(.5),.8,1.2)
  let houseTypes = [sanGmHouse1]
  let dirs = ['l','r']
  if (towers === 'towers') {
    for (let i = 0; i < sections.length-1; i += 2) {
      let x1 = sections[i][0]
      let x2 = sections[i][1]
      let xD = (x1+x2)/3
      let xW = (x2 - x1)/3
      let hH = xW*rnd(4,7)
      dir = dirs[floor(rnd()*dirs.length)]
      //sanGmHouse1(buff, pal, xD, hrz, xW/2, hH*1.1, dir, 'tower')
      //sanGmHouse1(buff, pal, xD, hrz, xW, hH, dir, 'tower')
      sanGmTower(buff, pal, xD, hrz, xW, hH)
    }
  }else{
    for (let i = 0; i < sections.length-1; i++) {
      let x1 = sections[i][0]
      let x2 = sections[i][1]
      let xD = (x1+x2)/2
      let xW = x2 - x1
      let hH = xW*rnd(.5,1.3)
      //hH = rnd(h(.25),h(.5))
      //hH = (x2-x1) * rnd(2,3.3)
      dir = dirs[floor(rnd()*dirs.length)]
      houseType = houseTypes[floor(rnd()*houseTypes.length)]
      houseType(buff, pal, xD, hrz, xW, hH, dir, 'house')
    }
  }
  buff.pop()
}

function randHouses(buff,pal,horizon) {
  buff.push()
  let num = 30; 
  let lines = [0,0,1,2,3]
  let houseTypes = [grH2,simpleHouse]
  yMax = h(.16)
  for (let i = 0; i < num; i++) {
    let x = rnd(-w(.5),w(.5))*map(i,0,num,1,.5)
    //let y = rnd(horizon,horizon-h(.1))*map(i,0,num,1,.25)
    //let y = horizon // FOR BASIC ON-HORIZON TOWN
    y = horizon - map(dist(x,0,0,0),0,w(.5),yMax/5,yMax)
    let xS = rnd(w(.25),w(.5))*map(i,0,num,1,.35)
    let yS = rnd(h(.2),h(.6))*map(i,0,num,1,.35) // * map(dist(x,0,0,0),0,w(.5),1.3,.6) // REMOVE MAP MULT IF REVERTING TO BASIC ON-HORIZON TOWN
    let line = lines[floor(rnd()*lines.length)]
    col = chCol(pal.bld)
    strCol = chCol(pal.str)
    //col.setAlpha(255)
    buff.noStroke()
    //buff.fill(col)
    if (pal === palettes.gr2) {buff.blendMode(SOFT_LIGHT)}else{buff.blendMode(HARD_LIGHT)}
    houseType = houseTypes[floor(rnd()*houseTypes.length)]
    //buff.rect(x,y,xS,yS)
    houseType(buff,x,y,xS,yS,col,line,strCol)
    ///////////////////////////////
    /*strCol = color(chCol(pal.str))
    buff.strokeWeight(rnd(w(.001),w(.003)))
    buff.stroke(strCol)
    if (line = 1) {
      buff.line(x,y,x+xS,y)
      buff.line(x,y,x,y+yS)
    }
    if (line = 2) {
      buff.line(x,y,x+xS,y)
      buff.line(x+xS,y,x+xS,y+1.5*yS)
      buff.line(x,y,x,y+yS)
    }*/
  }
  buff.pop()
}

function skyStrokes(buff,pal,horizon,bMode) {
  buff.push()
  buff.translate(width/2,height/2)
  buff.blendMode(bMode)
  let num_lines = 20
  let x_break_L = rnd(0,w(.25))
  let x_break_R = rnd(-w(.25),0)
  for (let i = 0; i < num_lines; i++) {
    let y1 = rnd(-h(.5),horizon)
    let y2 = rnd(-h(.5),horizon)
    let x1 = rnd(-w(.5),w(.5))
    let x2 = x1 + rnd(-w(.01),w(.01))
    strCol = chCol(pal.sky)
    strThick = rnd(w(.002),w(.03))
    pStr2(buff,x1,-h(.5),x2,horizon,dist(x1,-h(.5),x2,horizon), strCol, strThick, 'v', 80)
    pStr2(buff,-w(.5),y1,x_break_L,y2,dist(-w(.5),y1,x_break_L,y2), strCol, strThick, 'h', 50)
    pStr2(buff,x_break_R,y1,w(.5),y2,dist(-w(.5),y1,x_break_L,y2), strCol, strThick, 'h', 50)
  }
  buff.pop()
}

function skyStrokes_h(buff,pal,horizon,bMode) {
  buff.push()
  buff.translate(width/2,height/2)
  buff.blendMode(bMode)
  let num_lines = 20
  for (let i = 0; i < num_lines; i++) {
    strCol = chCol(pal.sky)
    strThick = rnd(w(.002),w(.03))
    let y  = rnd(-h(.5),horizon)
    let x1 = -w(.5)
    let x2 = w(.5)
    pStr2(buff,x1,y,x2,y,dist(x1,y,x2,y), strCol, strThick, 'h', 50)
  }
  buff.pop()
}

function randStrokes(buff, bMode, maxTh) {
  buff.push()
  //buff.translate(width/2,height/2)
  buff.blendMode(bMode)
  let num_lines = 10
  let x_break_L = rnd(0,w(.25))
  let x_break_R = rnd(-w(.25),0)
  for (let i = 0; i < num_lines; i++) {
    let y1 = rnd(-h(.5),h(.5))
    let y2 = y1 + rnd(-h(.01),h(.01))
    let x1 = rnd(-w(.5),w(.5))
    let x2 = x1 + rnd(-w(.01),w(.01))
    strCol = p1.get((x1+x2)/2+width/2,(y1+y2)/2+height/2)
    if (strCol[0] == 0 && strCol[1] == 0 && strCol[2] == 0) {
      strCol = grid.get((x1+x2)/2+width/2,(y1+y2)/2+height/2)
    }
    strThick = rnd(w(.005),maxTh)
    pStr2(buff,x1,-h(.5),x2,h(.5),dist(x1,-h(.5),x2,h(.5)), strCol, strThick, 'v', 25)
    pStr2(buff,-w(.5),y1,x_break_L,y2,dist(-w(.5),y1,x_break_L,y2), strCol, strThick, 'h', 25)
    pStr2(buff,x_break_L,y1,w(.5),y2,dist(-w(.5),y1,x_break_L,y2), strCol, strThick, 'h', 25)
    //pStr2(buff,-w(.5),y1,x_break_L,y2,dist(-w(.5),y1,x_break_L,y2), strCol, strThick, 'h', 25)
    //pStr2(buff,x_break_R,y1,w(.5),y2,dist(-w(.5),y1,x_break_L,y2), strCol, strThick, 'h', 25)
  }
  buff.pop()
}

function wtrStrokes(buff,pal,horizon,bMode) {
  buff.push()
  buff.blendMode(bMode)
  let num_lines = 120
  for (let i = 0; i < num_lines; i++) {
    strCol = chCol(pal.wtr)
    let y = rnd(horizon,h(.5))
    strThick = rnd(w(.001),w(.01)) * map(dist(0,horizon,0,y),0,h(.75),.7,10)
    let x1 = rnd(-w(.6),w(.6))
    let x2 = rnd(-w(.6),w(.6))
    pStr2(buff,x1,y,x2,y,dist(x1,y,x2,y), strCol, strThick, 'h', 30)
  }
  buff.pop()
}

function snGmTerrShape(buff,pal,x,y,xW,yH) {
  strCol = chCol(pal.veg)
  let dirs = ['l','r']
  dir = dirs[floor(rnd()*dirs.length)]

  if (dir === 'l') {
    xlt = x - xW/2
    xrt = x + xW/2
  }
  if (dir === 'r') {
    xlt = x + xW/2
    xrt = x - xW/2
  }

  let ylt = y - rnd(yH/2)
  let yrt = y - rnd(yH/2)
  let xShift = rnd(xW/3)
  let xlb = xlt - xShift
  let xrb = xlt + xShift
  let ylb = y + rnd(yH/2)
  let yrb = y + rnd(yH/2)
  for (let x = xlt; x < xrt; x += w(.003)) {
    let y1 = map(x,xlt,xrt,ylt,yrt)
    let y2 = map(x,xlt,xrt,ylb,yrb)
    let x2 = map(x,xlt,xrt,xlb,xrb)
    pStr2(buff,x,y1,x2,y2,dist(x,y1,x,y2), strCol, strThick, 'h', 80)
  }
}

function sanGmTerr(buff,pal,horizon) {
  let numSteps = floor(map(horizon,-h(.4),h(.4),7,3))
  let yStep = dist(0,horizon,0,h(.5))/numSteps
  for (let y = horizon; y < h(.65); y += yStep) {
    numSecs = 5
    yH = yStep
    for (let i = 0; i < numSecs; i++) {
      x = map(i,0,numSecs,-w(.5),w(.5))
      xW = width/numSecs
      snGmTerrShape(buff,pal,x,y,xW,yH) 
    }
  }
}

function topSubDiv(buff, pal, horizon) {
  let po1 = createVector(-w(.5),horizon)
  let po2 = createVector(w(.5),horizon)
  let po3 = createVector(w(.5),h(.5))
  let po4 = createVector(-w(.5),h(.5))
  sanGmSubdiv(buff,pal,po1,po2,po3,po4)
}

function subDivPoint(po1,po2,div) {
  let x = po1.x + (po2.x - po1.x)*div
  let y = po1.y + (po2.y - po1.y)*div
  return createVector(x,y)
}

function sanGmSubdiv(buff,pal,po1,po2,po3,po4) {
  /*let p1 = createVector(-w(.5),initY)
  let p2 = createVector(w(.5),initY)
  let p3 = createVector(w(.5),h(.5))
  let p4 = createVector(-w(.5),h(.5))*/
  let col = chCol(pal.veg)
  drawPoly(buff,po1,po2,po3,po4,col)

  //let div = rnd(.3,.7)
  //let split1 = subDivPoint(po1,po2,div)
  //let split2 = subDivPoint(po3,po4,div)

  //let col2 = chCol(pal.veg)
  //let col3 = chCol(pal.veg)
  //drawPoly(buff,po1,split1,split2,po4,col2)
  //drawPoly(buff,split1,po3,po4,split2,col3)


  //let numDivs = 3
  //for (let i = 0; i < numDivs; i++) {
    let div = rnd(.3,.7)
    let minArea = map(horizon,-h(.4),h(.4),w(100),w(30))
    let dir = rnd(.2,.8)
    if (polyArea(po1, po2, po3, po4) > minArea) {
      if (rnd() > dir) {
        let split1 = subDivPoint(po1,po2,div)
        let split2 = subDivPoint(po3,po4,div)
        sanGmSubdiv(buff,pal,po1,split1,split2,po4)
        sanGmSubdiv(buff,pal,split1,po3,po4,split2)
      }else{
        let split1 = subDivPoint(po2,po3,div)
        let split2 = subDivPoint(po1,po4,div)
        sanGmSubdiv(buff,pal,po1,po2,split1,split2)
        sanGmSubdiv(buff,pal,split2,split1,po3,po4)
      }
    }
    //let col = chCol(pal.veg)
    //drawPoly(buff,po1,po2,po3,po4,col)
  //}
}

function triArea(po1, po2, po3) {
  return abs((po1.x*(po2.y-po3.y) + po2.x*(po3.y-po1.y) + po3.x*(po1.y-po2.y))* .5)
}

function polyArea(po1, po2, po3, po4) {
  return triArea(po1,po2,po3) + triArea(po3, po4, po1)
}

function drawPoly(buff,po1,po2,po3,po4,col) {
  buff.push()
  buff.noStroke()
  buff.fill(col)
  buff.blendMode(OVERLAY)
  buff.beginShape()
    buff.vertex(po1.x,po1.y)
    buff.vertex(po2.x,po2.y)
    buff.vertex(po3.x,po3.y)
    buff.vertex(po4.x,po4.y)
  buff.endShape(CLOSE)
  buff.pop()
}

function sanGmTerr2(buff, horizon, pal) {
  let numSecs = map(horizon,-h(.4),h(.4),6,3)
  let yStep = dist(0,horizon,0,h(.7))/numSecs
  let ptsWrap = []
  let stepDiv = 3
  for (let i = 0; i < numSecs; i++) {
    stepDiv -= .45
    let baseY = horizon + yStep*i/stepDiv
    console.log(baseY)
    let points = []
    let xLimL = map(baseY,horizon,h(.6),-w(.7),-w(5))
    let xLimR = map(baseY,horizon,h(.6),w(.9),w(5))
    //yDiff = rnd(-yStep/i,yStep/i)
    for (let j = 0; j < 6; j++) {
      //let yDiff = rnd(-yStep/i,yStep/i)
      let yDiff = rnd(-w(.05),0)
      let x = map(j,0,6,xLimL,xLimR) + rnd(-width/8,width/8)
      let y = baseY + yDiff
      let vec = createVector(x,y)
      points.push(vec)
    }
    /*for (let x = -w(.5); x < w(.5); x += rnd(w(.1),w(.35))) {
      let yDiff = rnd(-yStep/i,yStep/i)
      let y = baseY+yDiff
      let vec = createVector(x,y)
      points.push(vec)
    }*/
    ptsWrap.push(points)
    /*for (let j = 0; j < points.length; j++) {
      buff.beginShape()
        buff.vertex([i].x,[i].y)
      buff.endShape(CLOSE)
    }*/
  }
  console.log(ptsWrap)
  for (let i = 0; i < ptsWrap.length-1; i++) {
    console.log(ptsWrap[i][0].x,ptsWrap[i][0].y)
    for (let j = 0; j < ptsWrap[i].length-1; j++) {
      let detailType = rnd()
      //let hasVineyard = rnd()
      let col = chCol(pal.veg)
      let strCol = chCol(pal.veg)
      let tl = createVector(ptsWrap[i][j].x,ptsWrap[i][j].y)
      let tr = createVector(ptsWrap[i][j+1].x,ptsWrap[i][j+1].y)
      let bl = createVector(ptsWrap[i+1][j].x,ptsWrap[i+1][j].y)
      let br = createVector(ptsWrap[i+1][j+1].x,ptsWrap[i+1][j+1].y)
      /*buff.fill(col)
      buff.beginShape()
        buff.vertex(ptsWrap[i][j].x,ptsWrap[i][j].y)
        buff.vertex(ptsWrap[i][j+1].x,ptsWrap[i][j+1].y)
        buff.vertex(ptsWrap[i+1][j+1].x,ptsWrap[i+1][j+1].y)
        buff.vertex(ptsWrap[i+1][j].x,ptsWrap[i+1][j].y)
      buff.endShape(CLOSE)*/
      let strTh = w(.025)
      for (let x = ptsWrap[i][j].x; x < ptsWrap[i][j+1].x; x += w(.006)) {
        let y1 = map(x,  ptsWrap[i][j].x,  ptsWrap[i][j+1].x,  ptsWrap[i][j].y,  ptsWrap[i][j+1].y)
        let x2 = map(x,  ptsWrap[i][j].x,  ptsWrap[i][j+1].x,  ptsWrap[i+1][j].x,  ptsWrap[i+1][j+1].x)
        let y2 = map(x,  ptsWrap[i][j].x,  ptsWrap[i][j+1].x,  ptsWrap[i+1][j].y,  ptsWrap[i+1][j+1].y)
        pStr2(buff, x, y1, x2, y2, dist(x, y1, x2, y2), col, strTh, 'v', 100)
      }
      pStr2(buff, tl.x, tl.y, tr.x, tr.y, dist(tl.x, tl.y, tr.x, tr.y), strCol, strTh/2, 'h', 65)
      pStr2(buff, tl.x, tl.y, bl.x, bl.y, dist(tl.x, tl.y, tr.x, tr.y), strCol, strTh/2, 'h', 65)
      if (detailType < .3) {
        // CYPRESSES
        let numTrees = map(tr.x-tl.x,w(.1),w(2),10,45)
        for (let x = tl.x; x < tr.x; x += (tr.x-tl.x)/numTrees) {
          let mult = map(tl.y,-h(.4),h(.6),.6,1.2)
          let y = map(x,tl.x,tr.x,tl.y,tr.y)
          xW = ((tr.x-tl.x)/numTrees) * mult
          yH = (xW*rnd(4,6)) * mult
          cypress(buff,pal,x,y,xW,yH)
        }
      }else if (detailType < .6) {
        /// VINEYARD
        let xStep = (tr.x-tl.x)/15
        let col = chCol(pal.veg)
        let darkCol = [col[0]/2,col[1]/2,col[2]/2]
        let vinTh = w(.02)
        for (let x = tl.x+xStep;  x < tr.x-xStep; x += xStep) {
          let x2 = map(x,tl.x,tr.x,bl.x,br.x);
          let y1 = map(x,tl.x,tr.x,tl.y,tr.y) + (dist(0,tl.y,0,bl.y)/12);
          let y2 = map(x2,bl.x,br.x,bl.y,br.y) - (dist(0,tl.y,0,bl.y)/8);
          pStr2(buff, x, y1, x2, y2, dist(x, y1, x2, y2), darkCol, vinTh, 'v', 100)
        }
      }else if (detailType < .9) {
        /// BUSHES
        for (let y = tl.y; y < bl.y; y += (dist(0,tl.y,0,bl.y))/15) {
          mult = map(tl.y,-h(.4),h(.5),.5,1)
          x = map(y,tl.y,bl.y,tl.x,bl.x)
          xW = ((tr.x-tl.x)/30) * mult
          yH = (xW*rnd(2.2,3.3)) * mult
          cD = rnd(1,1.8)
          bush(buff,pal,x,y,xW,yH,cD)
          //buff.fill(strCol)
          //buff.ellipse(x,y,w(.1)*mult)
        }
      } // if statements
    } //inner array
  } //wrap array
}

function cypress(buff,pal,xTr,y,xW,yH) {
  let top = y - yH
  let base = lerp(y,top,.15)
  let mid = lerp(y,top,.3)
  let xbL = xTr - xW/3
  let xbR = xTr + xW/3
  let xL = xTr - xW/2
  let xR = xTr + xW/2
  let xtL = xTr - xW/5
  let xtR = xTr + xW/5
  trunkCol = chCol(pal.drk)
  trTh = w(.01)
  pStr2(buff, xTr, y, xTr, top, dist(xTr, y, xTr, top), trunkCol, trTh, 'v', 200)
  for (let x = xbL; x < xbR; x += w(.001)) {
    strTh = w(.01)
    let col = chCol(pal.veg)
    let darkCol = [col[0]/4,col[1]/4,col[2]/4]
    xMid = map(x,xbL,xbR,xL,xR)
    pStr2(buff, x, base, xMid, mid, dist(x, base, xMid, mid), darkCol, strTh, 'v', 100)
    xTop = map(x,xbL,xbR,xtL,xtR)
    pStr2(buff, xMid, mid, xTop, top, dist(xMid, mid, xTop, top), darkCol, strTh, 'v', 141000)
  }
}

function bush(buff,pal,xTr,y,xW,yH,colDiv) {
  let top = y - yH
  let base = lerp(y,top,.05)
  let mid = lerp(y,top,.4)
  let xbL = xTr - xW/3
  let xbR = xTr + xW/3
  let xL = xTr - xW/2
  let xR = xTr + xW/2
  let xtL = xTr - xW/3
  let xtR = xTr + xW/3
  let numC = 40
  let col = chCol(pal.veg)
  let darkCol = color([col[0]/colDiv,col[1]/colDiv,col[2]/colDiv])
  for (let i = 0; i < numC; i++) {
    let yPos = map(i,0,numC,top,base)
    if (yPos < mid) {
      x = rnd(map(yPos,mid,base,xL,xbL), map(yPos,mid,base,xR,xbR))
    }else{
      x = rnd(map(yPos,mid,base,xL,xbL), map(yPos,mid,base,xbR,xR))
    }
    //let col = chCol(pal.veg)
    //let darkCol = color([col[0]/colDiv,col[1]/colDiv,col[2]/colDiv])
    darkCol.setAlpha(rnd(145,255))
    let size = rnd(xW/2)
    buff.noStroke()
    buff.fill(darkCol)
    buff.ellipse(x,yPos,size)
  }
  /*for (let y = top; y < mid; y += h(.002)) {
    strTh = w(.01)
    let col = chCol(pal.veg)
    let darkCol = [col[0]/colDiv,col[1]/colDiv,col[2]/colDiv]
    xtl = map(y,top,mid,xtL,xL)
    xbr = map(y,top,mid,xR,xbR)
    xtr = map(y,top,mid,xtR,xR)
    xbl = map(y,top,mid,xL,xbL)
    y2 = map(y,top,mid,mid,base)
    pStr2(buff, xtl, y, xbr, y2, dist(xtl, y, xbr, y2), darkCol, strTh, 'v', 140)
    pStr2(buff, xbl, y, xtr, y2, dist(xbl, y, xtr, y2), darkCol, strTh, 'v', 140)
  }*/
}


//////////////////////////////////////////////////////////
//////////////////// overlay funcs ///////////////////////

function fillDots(buff,x1,y1,x2,y2,numDots,r,g,b) {
  buff.push()
  for (let i = 0; i < numDots; i++) {
    let x = rnd(x1,x2)
    let y = rnd(y1,y2)
    //let size = w(sqrt(x2-x1)*.0003)*rnd(.3,.8)
    let size = rnd(w(.002))
    let alpha = rnd(75)
    buff.blendMode(OVERLAY)
    buff.fill(r,g,b,alpha)
    buff.noStroke()
    buff.ellipse(x,y,size)
  }
  buff.pop()
}

function randDotFills(buff,sBuff,dir,st,en) {
  buff.push()
  let numRects = 30
  for (let i = 0; i < numRects; i++) {
    if (dir === 'v'){
      x1 = rnd(-w(.5),w(.5))
      //x1 = rnd(width)
      xW = rnd(w(.002),w(.01))
      x2 = x1 + xW
      y1 = rnd(-h(.5),h(.5))
      //y1 = rnd(height)
      y2 = rnd(-h(.45),h(.45))
      //y2 = rnd(height)
    }
    if (dir === 'h'){
      x1 = rnd(-w(.5),w(.5))
      //x1 = rnd(width)
      x2 = rnd(-w(.45),w(.45))
      //x2 = rnd(width)
      y1 = rnd(-h(.5),h(.5))
      //y1 = rnd(height)
      yH = rnd(h(.002),h(.01))
      y2 = y1 + yH
    }
    let numDots = rnd(75,500)
    // get() does not work with negative values,moving it back into positive values

    if (sBuff = grid) {col = sBuff.get((x1+x2)/2,(y1+y2)/2)}
    if (sBuff = p1) {
      col = sBuff.get((x1+x2)/2+width/2,(y1+y2)/2+height/2)
      if (col[0] == 0 && col[1] == 0 && col[2] == 0) {
        col = grid.get((x1+x2)/2+width/2,(y1+y2)/2+height/2)
      }
    }
    let r = col[0]
    let g = col[1]
    let b = col[2]
    let start = rnd(st,en)
    rfd_pos.push([x1,y1,x2,y2,numDots,r,g,b,start,buff])
  }
  buff.pop()
}

function randDotFills_bld(buff,sBuff,xMin,xMax,yMin,yMax,dir,st,en) {
  buff.push()
  let numRects = 15
  for (let i = 0; i < numRects; i++) {
    if (dir === 'v'){
      x1 = rnd(xMin,xMax)
      xW = rnd(w(.002),w(.03))
      x2 = x1 + xW
      y1 = rnd(yMin,yMax)
      y2 = rnd(yMin,yMax)
    }
    if (dir === 'h'){
      x1 = rnd(xMin,xMax)
      x2 = rnd(xMin,xMax)
      y1 = rnd(yMin,yMax)
      yH = rnd(h(.002),h(.03))
      y2 = y1 + yH
    }
    let numDots = rnd(25,150)
    if (sBuff = grid) {col = sBuff.get((x1+x2)/2,(y1+y2)/2)}
    if (sBuff = p1) {
      col = sBuff.get((x1+x2)/2+width/2,(y1+y2)/2+height/2)
      if (col[0] == 0 && col[1] == 0 && col[2] == 0) {
        col = grid.get((x1+x2)/2+width/2,(y1+y2)/2+height/2)
      }
    }
    let r = col[0]
    let g = col[1]
    let b = col[2]
    let start = rnd(st,en)
    rfd_pos.push([x1,y1,x2,y2,numDots,r,g,b,start,buff])
  }
  buff.pop()
}

function fillInDots() {
  for (let i = 0; i < rfd_pos.length; i++) {
    let x1 = rfd_pos[i][0]
    let y1 = rfd_pos[i][1]
    let x2 = rfd_pos[i][2]
    let y2 = rfd_pos[i][3]
    let numDots = rfd_pos[i][4]
    let r = rfd_pos[i][5]
    let g = rfd_pos[i][6]
    let b = rfd_pos[i][7]
    let start = rfd_pos[i][8]
    let buff = rfd_pos[i][9]
    if (frameCount > start && frameCount < start + 40){
      fillDots(buff,x1,y1,x2,y2,numDots,r,g,b)
    }
  }
}

function oilPaint_fine(buff,xMin,xMax,yMin,yMax,maxL,maxH,minTh,maxTh,blendType) {
  buff.push()
  buff.translate(-width/2,-height/2)
  if (frameCount < 200) {
    let numDaubs = floor(map(dist(0,yMin,0,yMax),h(.15),h(.75),5,20));
    for (let i = 0; i < numDaubs; i++) {
      let xD = rnd(maxL)
      let yD = rnd(maxH)
      let x1 = rnd(xMin,xMax) + width/2
      let y1 = rnd(yMin,yMax) + height/2
      let x2 = x1 + rnd(-xD,xD)
      let y2 = y1 + rnd(-yD,yD)
      strokeLength = rnd(w(.01))
      strokeColor = get(x1,y1)
      strokeThickness = rnd(minTh,maxTh) // was rnd(w(.002),w(.015))
      //if (y1 > horizon+height/2) {strokeThickness = rnd(w(.002),w(.015)) * map(dist(0,horizon+height/2,0,y1),0,h(.65),1,8)}
      if (xD > yD){dir = 'h'}
      if (yD > xD){dir = 'v'}
      buff.blendMode(blendType)
      pStr(buff,x1,y1,x2,y2,strokeLength, strokeColor, strokeThickness, dir)
      //blobStr_live(buff, x1, y1, x2, y2, strokeLength*3.5, strokeColor[0], strokeColor[1], strokeColor[2], 15, frameCount)
    }
  }
  buff.pop()
}

function oilPaint_impr(buff,xMin,xMax,yMin,yMax,type) {
  buff.push()
  if (frameCount < 200) {
    if (frameCount % 4) {buff.blendMode(BLEND)}else{buff.blendMode(OVERLAY)}
    let numDaubs = floor(map(dist(0,yMin,0,yMax),h(.15),h(.75),5,20));
    for (let i = 0; i < numDaubs; i++) {
      let x = rnd(xMin,xMax)
      let y = rnd(yMin,yMax)
      strokeLength = rnd(w(.25))
      strokeColor = get(x+width/2,y+height/2)
      strokeThickness = rnd(w(.001),w(.01))
      if (type === 'water') {
        if ( y > horizon) {
          strokeThickness = rnd(w(.001),w(.01)) * map(y,horizon,h(.5),1,12)
        }
      }
      pstr3(buff, x, y, strokeLength, strokeColor, strokeThickness, type)
    }
  }
  buff.pop()
}

function aboveHorizon(buff, pal, yTop, yBot) {
  buff.push()
  buff.blendMode(BLEND)
  let yPos = [yTop]
  let xPos = [-w(.5)]
  //let horizon = rnd(h(.25),h(.75))
  let upSections = rnd(8,16);
  let upSections_H = rnd(6,24);
  let avgSH = dist(0,yTop,0,yBot)/upSections
  for (let j = 0; j < upSections; j++) {
    let sectionHeight = rnd(avgSH*.75,avgSH*2)
    yPos.push(sectionHeight)
  }
  yPos.push(yBot)
  let yPosArray = []
  for (let j = 0; j < yPos.length-1; j++) {
    let y1 = yPosArray[j-1] ? yPosArray[j-1][1] : yPos[j]
    let y2 = yPos[j+2] ? y1 + yPos[j+1] : yPos[j+1]
    yPosArray.push([y1,y2])
    let avgSW = width/upSections_H
    for (let i = 0; i < upSections_H; i++) {
      let sectionWidth = rnd(avgSW*.75,avgSW*2);
      xPos.push(sectionWidth)
    }
    xPos.push(w(.5))
    let xPosArray = []
    for (let i = 0; i < xPos.length-1; i++) {
      let x1 = xPosArray[i-1] ? xPosArray[i-1][1] : xPos[i]
      let x2 = xPos[i+2] ? x1 + xPos[i+1] : xPos[i+1]
      xPosArray.push([x1,x2]);
      let col = chCol(pal)
      for (let x = x1; x < x2; x += w(.008)) {
        let y1 = yPosArray[j][0]
        let y2 = yPosArray[j][1]
        if (y1 < yBot) {
          if (y2 > yBot) {
            y2 = yBot
          }
          let types = [texStr]
          type = types[floor(rnd()*types.length)]
          type(buff, x, y1, x, y2, w(0.03), col[0], col[1], col[2], 60) /// weidht was .03
        }
      } // ADD HORIZONTAL OPTION
    }
  }
  //console.log(yPosArray)
  buff.pop()
}

function oilPaint_impr(buff,xMin,xMax,yMin,yMax,type) {
  buff.push()
  if (frameCount > 200 && frameCount < 300) {
    if (frameCount % 4) {buff.blendMode(BLEND)}else{buff.blendMode(OVERLAY)}
    let numDaubs = floor(map(dist(0,yMin,0,yMax),h(.15),h(.75),5,20));
    for (let i = 0; i < numDaubs; i++) {
      let x = rnd(xMin,xMax)
      let y = rnd(yMin,yMax)
      strokeLength = rnd(w(.25))
      strokeColor = get(x+width/2,y+height/2)
      strokeThickness = rnd(w(.001),w(.01))
      if (type === 'water') {
        if ( y > horizon) {
          strokeThickness = rnd(w(.001),w(.01)) * map(y,horizon,h(.5),1,12)
        }
      }
      pStr3(buff, x, y, strokeLength, strokeColor, strokeThickness, type)
    }
  }
  buff.pop()
}

function reflStrokes(buff,horizon,bMode) {
  buff.push()
  buff.blendMode(bMode)
  let num_lines = map(horizon,-h(.4),h(.4),2400,1200)
  for (let i = 0; i < num_lines; i++) {
    let x = rnd(-w(.5),w(.5))
    //let vDist = rnd() //
    let y = horizon + rnd(dist(0,horizon,0,h(.5))) * map(i,0,num_lines,1,.1)
    //xW = rnd(w(.003),w(.1)) * map(dist(0,horizon,0,y),0,h(.75),2,.5)
    xW = rnd(w(.001),w(.02)) * map(dist(0,horizon,0,y),0,h(.75),2,.5)
    if (y < horizon) {y = horizon}
    strCol = p1.get(x+width/2,horizon-rnd(h(.25))+height/2)
    if (strCol[0] == 0 && strCol[2] == 0) {
      strCol = grid.get(x+width/2,horizon-rnd(h(.25))+height/2)
    }
    strThick = rnd(w(.003),w(.015)) * map(dist(0,horizon,0,y),0,h(.75),2,.5)
    pStr2(buff,x-xW/2,y,x+xW/2,y,dist(x-xW/2,y,x+xW/2,y), strCol, strThick, 'h', 50)
  }
  buff.pop()
}



//////////////////////////////////////////////////////////
///////////////////// render funcs ///////////////////////


function renderAmst(pal, horizon) {
  aboveHorizon(p1, pal.sky, -h(.5), horizon)
  aboveHorizon(p1, pal.wtr, horizon, h(.5))

  amsterdam(p1, horizon, floor(map(horizon,-h(.4),h(.4),17,7)), pal, BLEND)

  skyStrokes_h(grid,pal,h(.45),BLEND)

  skyStrokes(grid,pal,h(.45),BLEND)

  randStrokes(p1,SOFT_LIGHT)

  skyStrokes_h(grid,pal,h(.45),SOFT_LIGHT)

  skyStrokes(grid,pal,h(.45),SOFT_LIGHT)

  randStrokes(p2,SOFT_LIGHT)

  randDotFills(p1,grid,'h',0,40)
  randDotFills(p1,grid,'v',40,80)
  randDotFills(p2,p1,'h',80,120)
  randDotFills(p2,p1,'v',120,160)

  reflStrokes(p2,horizon+map(horizon,-h(.4),h(.4),h(.02),h(.08)),BLEND)
}

function renderSanGm(pal, horizon) {
  aboveHorizon(p1, pal.sky, -h(.5), horizon)
  aboveHorizon(p1, pal.veg, horizon, h(.5))

  sanGm(p1, horizon-h(.14), floor(map(horizon,-h(.4),h(.4),17,7)), pal, BLEND, 'towers')
  sanGm(p1, horizon-h(.12), floor(map(horizon,-h(.4),h(.4),17,7)), pal, BLEND)
  sanGm(p1, horizon-h(.06), floor(map(horizon,-h(.4),h(.4),17,7)), pal, BLEND)
  sanGm(p1, horizon, floor(map(horizon,-h(.4),h(.4),17,7)), pal, BLEND)

  skyStrokes_h(grid,pal,h(.45),BLEND)

  skyStrokes(grid,pal,h(.45),BLEND)

  randStrokes(p1,SOFT_LIGHT,w(.05))

  skyStrokes_h(grid,pal,h(.45),SOFT_LIGHT)

  skyStrokes(grid,pal,h(.45),SOFT_LIGHT)

  randStrokes(p2,SOFT_LIGHT,w(.02)) // was .03

  //sanGmTerr(p1,pal,horizon)

  //sanGmSubdiv(p1,pal,horizon)
  //topSubDiv(p1, pal, horizon)
  sanGmTerr2(p1, horizon, pal)


  randDotFills(p1,grid,'h',0,40)
  randDotFills(p1,grid,'v',40,80)
  randDotFills(p2,p1,'h',80,120)
  randDotFills(p2,p1,'v',120,160)
}
