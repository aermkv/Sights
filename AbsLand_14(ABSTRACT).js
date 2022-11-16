//tokenData.hash = '0xf5cf59f07ba09373cfc7ad9fdb4b6b73a2ad8d34bd961cea28c96f188508c595'
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

  aboveHorizon(p1, pal.sky, -h(.5), horizon)
  aboveHorizon(p1, pal.wtr, horizon, h(.5))

  rand_vL(p1)

  createCoords(p1, horizon, 20, pal, MULTIPLY)
  createCoords(p1, horizon, 25, pal, OVERLAY)
  //createCoords(p1, horizon, 30, pal, HARD_LIGHT)
  //createCoords(p1, horizon, 40, pal, OVERLAY)

}

function draw() {
  //drawingContext.filter = 'brightness(50%)'
  //drawingContext.filter = 'sepia(85%)'
  //drawingContext.filter = 'grayscale(80%)'
  image(grid, 0, 0)
  image(p1, 0, 0)
  image(p2, 0, 0)
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

function texStr(buff, x1, y1, x2, y2, weight, r, g, b, a) {
  buff.stroke(r, g, b, a)
  for (let i = 0; i < weight*5; i++){
    let theta = rnd(TWO_PI);
    let nx1 = x1 + 0.5*rnd(weight/2)*cos(theta);
    let ny1 = y1 + 0.35*rnd(weight/2)*sin(theta);
    let nx2 = x2 + 0.5*rnd(weight/2)*cos(theta);
    let ny2 = y2 + 0.35*rnd(weight/2)*sin(theta);
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

function createCoords(buff, hrz, numSecs, pal, bMode) {
  buff.push()
  buff.blendMode(bMode)
  leftEnd = -w(.5)
  rightEnd = w(.5)
  let sectionWidths = [leftEnd]
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
  let coords = []
  for (let i = 0; i < sections.length; i++) {
    let secW = sections[i][1]-sections[i][0]
    let angles = ['angled','straight']
    let angle  = angles[floor(rnd()*angles.length)]
    let yb1 = hrz - rnd(h(.02)) 
    if (angle === 'straight') {yb2 = yb1} else if (angle === 'angled') {yb2 = yb1 + rnd(-h(.015),h(.015)) * map(secW,diW*.75,diW*2,.5,1)}
    let hH = secW * rnd(1,3)
    let yt1 = yb1 - hH // y valuees housl probably be generated in house type functions
    //let yt2 = yb2 - hH * map(secW,diW*.75,diW*2,.5,1)
    let yt2 = yt1 + rnd(-h(.015),h(.015)) * map(secW,diW*.75,diW*2,.5,1)
    coords.push([sections[i][0],sections[i][1],yb1,yb2,yt1,yt2])
  }
  for (let i = 0; i < coords.length; i++) {
    let types = [texStr] //blobStr
    type = types[floor(rnd()*types.length)]
    let bldTypes = [basicShape,building]
    bldType = bldTypes[floor(rnd()*bldTypes.length)]
    bldType(buff, pal, coords[i][0], coords[i][1], coords[i][2], coords[i][3], coords[i][4], coords[i][5], type)
    /*let c = chCol(pal.bld)
    for (let x = coords[i][0]; x < coords[i][1]; x += w(.002)) {
      yb = map(x,coords[i][0],coords[i][1],coords[i][2],coords[i][3])
      yt = map(x,coords[i][0],coords[i][1],coords[i][4],coords[i][5])
      texStr(buff, x, yb, x, yt, w(.01), c[0], c[1], c[2], 60)
    }
    let y1b = coords[i][2]
    let y2b = coords[i][3]
    let y1t = coords[i][4]
    let y2t = coords[i][5]
    let weight = rnd(w(.006),w(.016))
    let xExtOff = rnd(w(.01))
    let strCol = chCol(pal.str)
    if (i % 3) {
      texStr(buff, coords[i][0]-xExtOff, y1b, coords[i][1]+xExtOff, y2b, weight, strCol[0], strCol[1], strCol[2], 110)
    }
    if (i % 5) {
      texStr(buff, coords[i][1], (y1t+y1b)/2, coords[i][1], (y1t+y1b)/2 + rnd(h(.15)), weight, strCol[0], strCol[1], strCol[2], 110)
    }
    if (i % 11) {
      let dirs = ['l','r']
      let dir = dirs[floor(rnd()*dirs.length)]
      if (dir === 'l'){x1 = coords[i][0]}else if (dir === 'r'){x1 = coords[i][1]}
      texStr(buff, x1, (y1t+y1b)/2 + rnd(y1b-y1t), x1, y1t - rnd(-h(.01),h(.03)), weight/2, strCol[0], strCol[1], strCol[2], 110)
      texStr(buff, coords[i][0], y1t, coords[i][1], y2t, weight/2, strCol[0], strCol[1], strCol[2], 110)
    }*/
  }
  buff.pop()
}

function basicShape(buff, pal, xL, xR, yb1, yb2, yt1, yt2, type) {
  let c = chCol(pal.bld)
  for (let x = xL; x < xR; x += w(.002)) {
    yb = map(x,xL,xR,yb1,yb2)
    yt = map(x,xL,xR,yt1,yt2)
    if (type = texStr) {
      texStr(buff, x, yb, x, yt, w(.01), c[0], c[1], c[2], 65) 
    }
    if (type = blobStr) {
      blobStr(buff, x, yb, x, yt, w(.01), c[0], c[1], c[2], 165) 
    }
  }
  let cntrChooser = rnd()
  let weight = rnd(w(.006),w(.016))
  let xExtOff = rnd(w(.01))
  let strCol = chCol(pal.str)
  if (cntrChooser < .7) {
    texStr(buff, xL-xExtOff, yb1, xR+xExtOff, yb2, weight, strCol[0], strCol[1], strCol[2], 110)
  }
  if (cntrChooser < .5) {
    texStr(buff, xR, (yt1+yb1)/2, xR, (yt1+yb1)/2 + rnd(h(.15)), weight, strCol[0], strCol[1], strCol[2], 110)
  }
  if (cntrChooser < .3) {
    let dirs = ['l','r']
    let dir = dirs[floor(rnd()*dirs.length)]
    if (dir === 'l'){x1 = xL}else if (dir === 'r'){x1 = xR}
    texStr(buff, x1, (yt1+yb1)/2 + rnd(yb1-yt1), x1, yt1 - rnd(-h(.01),h(.03)), weight/2, strCol[0], strCol[1], strCol[2], 110)
    texStr(buff, xL, yt1, xR, yt2, weight/2, strCol[0], strCol[1], strCol[2], 110)
  }
}

function building(buff, pal, xL, xR, yB) {
  let c = chCol(pal.bld)
  let yH = (xR-xL) * rnd(2,5)
  yT = yB - yH
  let dirs = [['l',0],['r',.4]] // does not reverse, only shifts to right
  dir = dirs[floor(rnd()*dirs.length)]
  let x2 = lerp(xL,xR,dir[1]+.15)
  let y2 = lerp(yB,yT,.5)
  let x3 = lerp(xL,xR,dir[1]+.3)
  let y3 = lerp(yB,yT,.7)
  let x4 = lerp(xL,xR,dir[1]+.45)
  let y4 = lerp(yB,yT,.9)
  let types = [texStr]
  type = types[floor(rnd()*types.length)]
  if (type == texStr) { a = 65, weight = w(.01)}
  if (type == blobStr) { a = 160, weight = w(.03)}
  for (let x = xL; x < xR; x += w(.002)) {
    if (x < x2) {
      type(buff, x, yB, x, y2, w(.01), c[0], c[1], c[2], a) 
    }else if (x < x3){
      type(buff, x, yB, x, y3, w(.01), c[0], c[1], c[2], a)
    }else if (x < x4){
      type(buff, x, yB, x, y4, w(.01), c[0], c[1], c[2], a)
    }else{
      type(buff, x, yB, x, yT, w(.01), c[0], c[1], c[2], a)
    }
  }
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
          let types = [texStr,blobStr] // blobStr
          type = types[floor(rnd()*types.length)]
          type(buff, x, y1, x, y2, w(0.03), col[0], col[1], col[2], 60) /// weidht was .03
        }
      } // ADD HORIZONTAL OPTION
    }
  }
  console.log(yPosArray)
  buff.pop()
}

function aboveHorizon2(buff, hrz, pal) {

  let yPos = [-h(.5)]
  let xPos = [0]
  //let horizon = rnd(h(.25),h(.75))
  let upSections = rnd(3,12);
  let upSections_H = rnd(6,24);
  let avgSH = dist(0,-h(.5),0,hrz)/upSections
  for (let j = 0; j < upSections; j++) {
    let sectionHeight = rnd(avgSH*.75,avgSH*2)
    yPos.push(sectionHeight)
  }
  yPos.push(hrz)
  console.log(yPos)
  let yPosArray = []
  for (let j = 0; j < yPos.length-1; j++) {
    let y1 = yPosArray[j-1] ? yPosArray[j-1][1] : yPos[j]
    let y2 = yPos[j+2] ? y1 + yPos[j+1] : yPos[j+1]
    yPosArray.push([y1,y2])
    let avgSW = width/upSections_H
    for (let i = 0; i < upSections_H; i++) {
      let sectionWidth = avgSW + rnd(-avgSW*.9,avgSW*.9);
      xPos.push(sectionWidth)
    }
    xPos.push(width)
    let xPosArray = []
    for (let i = 0; i < xPos.length-1; i++) {
      let x1 = xPosArray[i-1] ? xPosArray[i-1][1] : xPos[i]
      let x2 = xPos[i+2] ? x1 + xPos[i+1] : xPos[i+1]
      xPosArray.push([x1,x2]);
      let col = chCol(pal.sky)
      for (let x = x1; x < x2; x += w(.008)) {
        let y1 = yPosArray[j][0] 
        let y2 = yPosArray[j][1] 
        texStr(buff, x, y1, x, y2, w(0.03), col[0], col[1], col[2], 60)
      }
    }
  }
}

function vL(buff, x, y, line_width, weight) {
  let hereCol = grid.get(x+width/2,y+height/2)
  let r = hereCol[0]*.9
  let g = hereCol[1]*.9
  let b = hereCol[2]*.9
  let alpha = 255
  let yH = rnd(h(.05),h(.18))
  let y1 = y-yH
  let y2 = y+yH
  for (let y = y1; y < y2; y += w(.005)){
    var x1 = x - line_width/2
    var x2 = x + line_width/2
    texStr(buff, x1, y, x2, y, weight, r, g, b, alpha)
  }
}

function rand_vL(buff) {
  let num_lines = 12;
  for (let i = 0; i < num_lines; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = rnd(-h(.5),h(.5))
    let line_width = rnd(w(.005),w(.05))
    let weight = rnd(w(.007),w(.015))
    vL(buff, x, y, line_width, weight)
  }
}