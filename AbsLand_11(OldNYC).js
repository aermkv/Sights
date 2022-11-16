//tokenData.hash = '0xbda1d2eee1ddee2606b917c190c482c96ebe434a136641415804c8e4574e7f33'
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
  greek1: {
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
  },
  mnhttn: {
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
  }
}

let gPts = [];
let rfd_pos = [];
let horizon;
let citL = [];
let buildings = [];

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

  const pal = chCol(palettes)
  hrzOptions = [-h(.2),0,h(.32)]
  horizon = hrzOptions[floor(rnd()*hrzOptions.length)]

  setGrid(30,horizon,pal)
  drawGrid()

  oldNYC(horizon,pal)

  randDotFills(p2,'h',0,300)
  randDotFills(p2,'v',0,300)
}

function draw() {
  image(grid, 0, 0)
  image(p1, 0, 0)
  image(blds, 0, 0)
  image(p2, 0, 0)
  oilPaint(p1,-w(.5),w(.5),-h(.5),horizon,w(.5),h(.1),w(.03))
  oilPaint(p1,-w(.5),w(.5),-h(.5),horizon,w(.001),h(.5),w(.01))
  oilPaint(p2,-w(.5),w(.5),horizon,h(.5),w(.35),h(.005),w(.02))
  oilPaint_fine(p2,-w(.5),w(.5),-h(.5),horizon,w(.003),map(frameCount,0,350,h(.3),h(.003)),HARD_LIGHT)
  oilPaint_fine(p2,-w(.5),w(.5),horizon,h(.5),map(frameCount,0,350,h(.3),h(.003)),w(.003),HARD_LIGHT)
  fillInDots()
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

function fillDots(buff,x1,y1,x2,y2,numDots,r,g,b) {
  push()
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
  pop()
}

function randDotFills(buff,dir,st,en) {
  let numRects = 60
  for (let i = 0; i < numRects; i++) {
    if (dir === 'v'){
      x1 = rnd(-w(.5),w(.5)) + w(.5)
      xW = rnd(w(.005),w(.025))
      x2 = x1 + xW
      y1 = rnd(-h(.5),h(.5)) + h(.5)
      y2 = rnd(-h(.45),h(.45)) + h(.5)
    }
    if (dir === 'h'){
      x1 = rnd(-w(.5),w(.5)) + w(.5)
      x2 = rnd(-w(.45),w(.45)) + w(.5)
      y1 = rnd(-h(.5),h(.5)) + h(.5)
      yH = rnd(h(.005),h(.025))
      y2 = y1 + yH
    }
    let numDots = rnd(10,60)
    push()
    // get() does not work with negative values,moving it back into positive values
    let col = grid.get((x1+x2)/2,(y1+y2)/2)
    pop()
    let r = col[0]
    let g = col[1]
    let b = col[2]
    let start = rnd(st,en)
    rfd_pos.push([x1,y1,x2,y2,numDots,r,g,b,start,buff])
  }
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
    if (frameCount > start && frameCount < start + 400){
      fillDots(buff,x1,y1,x2,y2,numDots,r,g,b)
    }
  }
}

function oilPaint(buff,xMin,xMax,yMin,yMax,maxL,maxH,sTh) {
  if (frameCount < 200) {
    let numDaubs = floor(map(dist(0,yMin,0,yMax),h(.15),h(.75),5,20));
    for (let i = 0; i < numDaubs; i++) {
      let x1 = rnd(xMin,xMax) + width/2
      let y1 = rnd(yMin,yMax) + height/2
      let x2 = x1 + rnd(-maxL,maxL)
      let y2 = y1 + rnd(-maxH,maxH)
      let strThCoeff = 1
      //let yDev = rnd(w(.001))
      strokeLength = rnd(w(.25))
      strokeColor = grid.get(x1,y1)
      strokeThickness = rnd(sTh/5,sTh)
      if (y1 > horizon+height/2) {strokeThickness = rnd(w(.002),w(.015)) * map(dist(0,horizon+height/2,0,y1),0,h(.65),1,8)}
      if (maxL > maxH){dir = 'h'}
      if (maxH > maxL){dir = 'v'}
      //if ((y1+y2)/2 > horizon && dir === 'h'){strThCoeff = map(dist(0,(y1+y1)/2,0,horizon),0,h(.65),1,10)}
      buff.blendMode(BLEND)
      pStr(buff,x1,y1,x2,y2,strokeLength, strokeColor, strokeThickness, dir)
    }
  }
}

function oilPaint_fine(buff,xMin,xMax,yMin,yMax,maxL,maxH,blendType) {
  if (frameCount < 350) {
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
      strokeThickness = rnd(w(.002),w(.015))
      //if (y1 > horizon+height/2) {strokeThickness = rnd(w(.002),w(.015)) * map(dist(0,horizon+height/2,0,y1),0,h(.65),1,8)}
      if (xD > yD){dir = 'h'}
      if (yD > xD){dir = 'v'}
      buff.blendMode(blendType)
      pStr(buff,x1,y1,x2,y2,strokeLength, strokeColor, strokeThickness, dir)
    }
  }
}



//////////////////////////////////////////////////////////
///////////////////// shape arrays ///////////////////////

const nyc_bld_1_fill = [
  [[559.7,329.5]],
  [[559.7,266.2]],
  [[540.4,266.2]],
  [[540.4,84.8]],
  [[531.2,84.8]],
  [[531.2,55.2]],
  [[520,55.2]],
  [[520,38.9]],
  [[508.3,38.9]],
  [[508.3,8.8]],
  [[488.9,8.8]],
  [[488.9,38.9]],
  [[477.7,38.9]],
  [[477.7,55.2]],
  [[467.5,55.2]],
  [[467.5,84.8]],
  [[459,84.8]],
  [[459,266.2]],
  [[440.3,266.2]],
  [[440.3,329.5]],
  [[419.4,329.5]],
  [[419.4,500.8]],
  [[580.6,500.8]],
  [[580.6,329.5]],
  [[559.7,329.5]]
]

const nyc_bld_1_stroke = [
  [[488.9,82.6,488.9,8.8]],
  [[508.3,41,508.3,8.8]],
  [[477.3,335.8,477.6,38.9]],
  [[519.7,58.8,520,38.9]],
  [[467.5,84.8,467.5,55.2]],
  [[531.4,84.8,531.4,55.2]],
  [[459,266.2,459,84.8]],
  [[540.2,217.6,540.2,84.8]],
  [[440.4,390.4,440.4,266.2]],
  [[424.1,323.3,424.1,282.4]],
  [[419.4,479.6,419.4,329.5]],
  [[508.3,8.8,488.9,8.8]],
  [[501.8,38.9,477.7,38.9]],
  [[519.9,38.9,508.3,38.9]],
  [[477.3,55.2,467.5,55.2]],
  [[531.5,55.2,521.7,55.2]],
  [[467.5,84.8,459,84.8]],
  [[539.7,84.8,529.1,84.8]],
  [[419.4,329.5,440.3,329.5]],
  [[440.3,266.2,461.2,266.2]],
  [[559.8,348.7,559.8,266.2]],
  [[552.8,266.2,559.7,266.2]],
  [[580.6,411.9,580.6,329.3]],
  [[559.7,329.3,580.6,329.3]],
  [[449.4,102.9,459,87.4]],
  [[460.2,68.1,467.5,56.4]],
  [[460.2,68.1,460.2,84.8]],
  [[449.4,102.9,449.4,266.2]],
  [[424.1,282.4,440.4,267]]
]

const nyc_bld_2_fill = [
  [[537,246.7]],
  [[537,217.9]],
  [[530.9,217.9]],
  [[530.9,193]],
  [[523.8,193]],
  [[523.8,152.7]],
  [[507.8,152.7]],
  [[507.8,103.6]],
  [[480.3,103.6]],
  [[480.3,129.6]],
  [[472,129.6]],
  [[472,190.1]],
  [[457,190.1]],
  [[457,500.4]],
  [[472,500.4]],
  [[480.3,500.4]],
  [[496.9,500.4]],
  [[543,500.4]],
  [[543,246.7]],
  [[537,246.7]]
]

const nyc_bld_2_stroke = [
  [[480.3,103.6,507.8,103.6]],
  [[507.8,261.8,519,261.8]],
  [[507.8,152.7,523.8,152.7]],
  [[523.8,193,530.9,193]],
  [[530.9,217.9,537,217.9]],
  [[537,246.7,543,246.7]],
  [[480.3,129.6,480.3,103.6]],
  [[507.8,152.7,507.8,103.6]],
  [[523.8,197.9,523.8,154.1]],
  [[472.1,193,472.1,129.6]],
  [[530.9,217.9,530.9,193]],
  [[537,253.7,537,217.9]],
  [[543,410.3,543,246.7]],
  [[518.5,425.4,518.5,261.8]],
  [[509.8,326.3,509.8,162.8]]
]

const nyc_bld_3_fill = [
  [[429.2,499.5]],
  [[429.2,227.5]],
  [[444.2,219.1]],
  [[469.5,219.1]],
  [[469.5,212.3]],
  [[486.5,204.8]],
  [[486.5,136.4]],
  [[489.6,108.2]],
  [[498.5,92.2]],
  [[509.7,83.7]],
  [[520.9,79.2]],
  [[520.9,57.8]],
  [[529.8,47.5]],
  [[537.4,56.9]],
  [[537.4,78.3]],
  [[547.7,84.6]],
  [[556.6,93]],
  [[563.3,103.3]],
  [[567.3,116.3]],
  [[570,132.4]],
  [[570,214.6]],
  [[597.7,214.6]],
  [[601.3,499.5]],
  [[429.2,499.5]]
]

const nyc_bld_3_stroke = [
  [[430.2,478.7,430.2,227.5]],
  [[445.3,510.3,445.3,219]],
  [[470.5,423.7,470.5,212.3]],
  [[445.3,219,430.2,227.5]],
  [[518.2,191.1,466.9,212.9]],
  [[487.5,156.7,487.5,204.8]],
  [[491.1,155.8,491.1,122.7]],
  [[491.1,122.7,496.9,100.9]],
  [[496.9,100.9,506.6,88]],
  [[506.6,88,521.9,79.2]],
  [[547,211.2,466.9,212.9]],
  [[470.5,276.6,567.7,275.2]],
  [[470.5,328.6,566.9,327.9]],
  [[470.5,377.2,566.9,377]],
  [[470.5,451.2,566.9,451.6]],
  [[567.1,278,600.2,277.5]],
  [[445.3,279.2,470.3,278.8]],
  [[567.1,329.9,600,329.6]],
  [[567.1,378.6,600,378.3]],
  [[470.5,219,445.3,219]],
  [[564.6,209,518.2,191.1]],
  [[556.4,478,556.4,393.3]],
  [[555.6,388.2,556.4,393.3]],
  [[553.1,384.5,555.6,388.2]],
  [[553.1,384.5,555.6,388.2]],
  [[549,383.1,553.1,384.5]],
  [[545,383.7,549,383.1]],
  [[587.8,463.2,588.6,468.3]],
  [[585.3,459.5,587.8,463.2]],
  [[581.2,458.1,585.3,459.5]],
  [[577.2,458.7,581.2,458.1]],
  [[588.6,478.9,588.6,468.3]],
  [[576.6,232.2,576.9,233.7]],
  [[575.9,231.2,576.6,232.2]],
  [[574.8,230.8,575.9,231.2]],
  [[573.7,231,574.8,230.8]],
  [[576.9,283.3,576.9,233.7]],
  [[538.9,79.6,538.7,57.2]],
  [[530.9,47.5,540.1,59.1]]
]

const nyc_bld_4_fill = [
  [[425.2,468.1]],
  [[425.2,310.4]],
  [[419.8,259.4]],
  [[411.6,242.4]],
  [[507.3,242.4]],
  [[507.3,175.8]],
  [[526.7,88]],
  [[551.5,175.8]],
  [[551.5,249.2]],
  [[580.1,260.4]],
  [[592.3,308]],
  [[592.3,502.9]],
  [[473.8,512]],
  [[473.8,468.1]],
  [[425.2,468.1]]
]

const nyc_bld_4_stroke = [
  [[433.5,326.8,433.5,274.1]],
  [[469.1,308.8,469.1,273.6]],
  [[456.7,308.8,456.7,280.2]],
  [[459.6,468.1,459.6,288.9]],
  [[451.9,265.1,433.5,274.1]],
  [[451.9,265.1,469.1,273.5]],
  [[477.2,401.2,477.2,273.3]],
  [[512.8,325.6,512.8,272.9]],
  [[495.6,264.3,477.2,273.3]],
  [[495.6,264.3,512.8,272.7]],
  [[553.3,325.4,553.3,272.6]],
  [[588,324.9,588,272.1]],
  [[571.3,263.6,553.3,272.6]],
  [[571.3,263.6,588,272]],
  [[517,508.7,517,173.4]],
  [[551.4,400.5,551.4,177.1]],
  [[503.3,181.2,515,171.8]],
  [[551.5,177.1,517,177.1]],
  [[515,171.8,552.3,171.8]],
  [[517,168.6,527.9,92.3]],
  [[527.9,92.3,551,171.6]],
  [[508,247.5,517,262.3]],
  [[508,245.7,508,178.3]],
  [[455.9,277.3,456.7,280.2]],
  [[453.8,275.4,455.9,277.3]],
  [[451.4,275.1,453.8,275.4]],
  [[440.6,289.8,463.9,289.7]],
  [[440.6,360,586.6,359.5]],
  [[487.9,400.6,487.9,364.6]],
  [[499.5,400.6,499.5,364.6]],
  [[492.2,400.6,492.2,387.2]],
  [[492.2,454.7,492.2,437.6]],
  [[488.3,454.7,488.3,437.6]],
  [[536.1,453.9,536.1,436.9]],
  [[584.3,453.2,584.3,436.2]],
  [[573.3,453.3,573.3,436.2]],
  [[511.2,400.6,511.2,338.3]],
  [[567.3,436.3,573.3,436.2]],
  [[480.7,437.7,488.3,437.5]],
  [[584.9,352.1,584.9,337.9]],
  [[572.8,400.5,572.8,386.4]],
  [[577.3,338,584.9,337.9]],
  [[572.8,307.4,572.8,289.9]],
  [[577.5,487.5,577.5,280.1]],
  [[564,289.9,572.8,289.8]],
  [[584.8,307.4,584.8,280.4]],
  [[576,280.4,584.8,280.4]],
  [[537.1,271.8,537.1,260.5]],
  [[545.1,495.4,545.1,250.2]],
  [[531,260.4,537.1,260.4]],
  [[399.1,382.6,399.1,293.9]],
  [[425.2,482.7,425.2,310.4]],
  [[425.2,310.4,419.8,259.4]],
  [[419.8,259.4,411.6,242.4]],
  [[403.1,453.2,403.1,294.5]],
  [[403.1,294.5,405.4,268.1]],
  [[411.6,242.4,401.4,268.1]],
  [[399.1,293.9,401.4,268.1]],
  [[511.2,262.3,428.1,262.3]],
  [[507.3,242.4,410.7,242.4]],
  [[580.1,260.4,551.5,249.2]],
  [[588,292.4,592.3,308]],
  [[600.9,326.8,553.3,326.8]],
  [[592.3,311.7,592.3,502.9]],
  [[600.9,332.7,600.9,326.8]],
  [[533.5,169.2,533.5,151.7]],
  [[535,169.2,535,151.7]],
  [[545.2,218.1,545.2,189.7]]
]

const nyc_bld_5_fill = [
  [[440.2,484.5]],
  [[440.2,266.2]],
  [[469.2,255.5]],
  [[469.2,412]],
  [[487.3,412]],
  [[487.3,313.2]],
  [[498.2,280.7]],
  [[511.8,308.6]],
  [[511.8,504]],
  [[440.2,484.5]],
]

const nyc_bld_5_stroke = [
  [[440.2,484.5,440.2,266.3]],
  [[454.1,261.1,440.2,266.3]],
  [[454.1,317.2,454.1,217.5]],
  [[469.2,212.2,469.2,494.4]],
  [[487.3,298.7,487.3,502.6]],
  [[477.3,194,463.6,212.2]],
  [[454.1,217.5,470,208.2]],
  [[562.3,212.9,467.5,209.7]],
  [[488.9,290.4,487.3,298.7]],
  [[489,290.4,490.5,298.7]],
  [[498.2,280.7,487.7,312.3]],
  [[498.2,280.7,511.8,308.6]],
  [[509.7,287.2,512.9,297.1]],
  [[519.3,279.5,512.9,304.8]],
  [[519.3,279.5,554.3,278.9]],
  [[557.1,275.4,545.8,292.1]],
  [[545.8,454.4,545.8,292.1]],
  [[511.8,508.9,511.8,308.6]]
]

const nyc_church_fill = [
  [[461.3,486.8]],
  [[461.3,374]],
  [[465.8,374]],
  [[465.8,309.6]],
  [[470.3,309.6]],
  [[470.3,301.9]],
  [[474.4,301.9]],
  [[484.8,204.8]],
  [[498,302.4]],
  [[502,302.4]],
  [[502,310.1]],
  [[506.1,310.1]],
  [[506.1,350.4]],
  [[526.1,350.4]],
  [[538.7,392.1]],
  [[538.7,499.2]],
  [[480.3,499.2]],
  [[461.3,486.8]]
]

const nyc_church_stroke = [
  [[474.4,301.9,484.8,204.8]],
  [[498,302.4,484.8,204.8]],
  [[503,302.4,488,302.4]],
  [[484,302.4,469,302.4]],
  [[502,310.1,502,302.4]],
  [[506.1,310.1,502,310.]],
  [[506.1,370.4,506.1,310.]],
  [[526.1,350.4,506.1,350.4]],
  [[537.3,392.1,497.4,392.1]],
  [[538.7,392.1,526.1,350.4]],
  [[465.8,309.6,465.8,386.5]],
  [[486.8,347.2,486.8,490.1]],
  [[470.4,302.8,470.4,369.7]],
  [[490,339.6,490,376.5]],
  [[461.3,373,461.3,486.]],
  [[468.5,375.3,461.3,373]]
]

function assembleShape(buff,horiz,fillArr,strArr,pal,xShift) {
  buff.push()
  scCoeff = map(horiz,-h(.5),h(.5),.15,1.2)
  xShiftCoeff = map(scCoeff,.15,1.2,2.2,.7) // since scaling reduces horizontal shift proportionatelt, it needs to be adjusted
  buff.scale(scCoeff) // introduce variable here to vary proportions between various buildings
  buff.translate(-w(.5),-h(.5)*scCoeff) //*map(scCoeff,.15,1.2,1.75,.65)
  if (horiz === -h(.2)) {buff.translate(0,-h(.5))}
  if (horiz === 0) {buff.translate(0,-h(.15))}
  if (horiz === h(.32)) {buff.translate(0,0)}
  let toFill = fillArr
  let toStroke = strArr
  const den = 1000;
  let fiCo = [];
  let stCo = [];
  for (let i = 0; i < toFill.length; i++) {
    toFill[i].forEach(l => fiCo.push([w(l[0]/den)+xShift*xShiftCoeff,h(l[1]/den)+horiz]))
  }
  buff.noStroke()
  let shCol = buff.color(chCol(pal.bld))
  shCol.setAlpha(250)
  buff.fill(shCol);
  buff.beginShape()
    fiCo.forEach(j => buff.vertex(j[0],j[1]))
    buff.endShape(CLOSE)
  for (let i = 0 ; i < toStroke.length; i++) {
    toStroke[i].forEach(k => stCo.push([w(k[0]/den)+xShift*xShiftCoeff,h(k[1]/den)+horiz,w(k[2]/den)+xShift*xShiftCoeff,h(k[3]/den)+horiz]))
  }
  let strCol = chCol(pal.str)
  for (let i = 0; i < stCo.length; i++) {
    let x1 = stCo[i][0]
    let y1 = stCo[i][1]
    let x2 = stCo[i][2]
    let y2 = stCo[i][3]
    let weight = rnd(w(.003),w(.01))
    texStr(buff, x1, y1, x2, y2, weight, strCol[0], strCol[1], strCol[2], 250)
  }
  let x_lg = fiCo[0][0]
  let x_sm = fiCo[0][0]
  let y_lg = fiCo[0][1]
  let y_sm = fiCo[0][1]
  for (let i = 0 ; i < fiCo.length; i++) {
    tempX = fiCo[i][0]
    tempY = fiCo[i][1]
    if (tempX > x_lg) {x_lg = fiCo[i][0]}
    if (tempX < x_sm) {x_sm = fiCo[i][0]}
    if (tempY > y_lg) {y_lg = fiCo[i][1]}
    if (tempY < y_sm) {y_sm = fiCo[i][1]}
  }
  size = (x_lg-x_sm)*(y_lg-y_sm)
  for (let i = 0; i < 24; i++) {
    x1 = rnd(x_sm,x_lg)
    xW = rnd(sqrt(size)/7)
    x2 = x1 + rnd(-xW,xW)
    y1 = rnd(y_sm,y_lg)
    yH = rnd(sqrt(size)/3)
    y2 = y1 + (-yH,yH)
    area = (x2-x1)*(y2-y1)
    if (area < 0) {area *= -1}
    numDots = map(area,0,w(.25),300,1000)
    cM = rnd(.5,1.5)
    col = chCol(pal.bld)
    fillDots(buff,x1,y1,x2,y2,numDots,col[0],col[1],col[2])
  }
  buff.pop()
}

function skyscraper1(x,yB,xW,yH,yCut,dir,col,step) {
  for (let y = yB - yH; y < yB; y += step) {
    x1 = x - xW/2
    x2 = x + xW/2
    if (yCut !== 'none'){
      if (dir === 'l'){
        if (y < yCut){
          x1 = x
        }
      }
      if (dir === 'r'){
        if (y < yCut){
          x2 = x
        }
      }
    }
    citL.push([x1, y, x2, y, w(.01), col[0], col[1], col[2], 100])
  }
}

function skyscraper2(x,y,xW,yH,col,step) {
  yCutL = y - rnd(.3*yH,.9*yH)
  yCutR = y - rnd(.3*yH,.9*yH)
  skyscraper1(x-xW/2,y,xW,yH,yCutL,'l',col,step)
  skyscraper1(x+xW/2,y,xW,yH,yCutR,'r',col,step)
}

function randomCity(hrz,cols,hF) {
  leftEnd = -w(.5)
  rightEnd = w(.5)
  let sectionWidths = [leftEnd]
  let numSecs = map(hrz,-h(.5),h(.5),30,8)
  let diW = width/numSecs
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(diW/3,diW*2)
    sectionWidths.push(division)
  }
  sectionWidths.push(rightEnd)
  let sections = []
  for (let i = 0; i < sectionWidths.length-1; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    const end = sectionWidths[i+2] ? begin + sectionWidths[i+1] : sectionWidths[i+1]// Or sectionsWidths[i]?
    sections.push([begin,end])
  }
  let dirs = ['l','r']
  let types = ['skSr1','skSr2']
  for (let i = 0; i < sections.length; i++) {
    x1 = sections[i][0]
    x2 = sections[i][1]
    yH = rnd(h(.01),.7*dist(0,-h(.5),0,hrz)) * hF
    yOffset = yH/10
    y1 = hrz + rnd(-yOffset,yOffset)
    y2 = y1 - yH
    p = chCol(cols)
    lineW = rnd(w(.005),w(.02))

    x = (sections[i][0]+sections[i][1])/2;
    yB = hrz + rnd(-yOffset,yOffset)
    xW = sections[i][1] - sections[i][0]
    step = rnd(h(.002),h(.005))
    let yCuts = ['none',y1-rnd(.3*yH,.9*yH)]
    yCut = yCuts[floor(rnd()*yCuts.length)]
    type = types[floor(rnd()*types.length)]
    dir = dirs[floor(rnd()*dirs.length)]
    if (type === 'skSr1') {skyscraper1(x,yB,xW,yH,yCut,dir,p,step)}
    if (type === 'skSr2') {skyscraper2(x,yB,xW,yH,p,step)}
  }
}

function drawCity(buff) {
  for (let fC = 0; fC < citL.length; fC++) {
    //texStr(buff,citL[fC][0], citL[fC][1], citL[fC][2], citL[fC][3], citL[fC][4], citL[fC][5], citL[fC][6], citL[fC][7], citL[fC][8])
    strokeColor = [citL[fC][5], citL[fC][6], citL[fC][7]]
    pStr(buff, citL[fC][0], citL[fC][1], citL[fC][2], citL[fC][3], citL[fC][2]-citL[fC][0], strokeColor, w(.01), 'h')
  }
}

function oldNYC(horizon,pal) {

  randomCity(horizon,pal.drk,1)
  drawCity(blds)
  

  assembleShape(blds,horizon,nyc_bld_5_fill,nyc_bld_5_stroke,pal,rnd(-w(.35),w(.35)))
  assembleShape(blds,horizon,nyc_bld_4_fill,nyc_bld_4_stroke,pal,rnd(-w(.35),w(.35)))
  assembleShape(blds,horizon,nyc_bld_3_fill,nyc_bld_3_stroke,pal,rnd(-w(.35),w(.35)))
  assembleShape(blds,horizon,nyc_bld_1_fill,nyc_bld_1_stroke,pal,rnd(-w(.35),w(.35)))
  assembleShape(blds,horizon,nyc_bld_2_fill,nyc_bld_2_stroke,pal,rnd(-w(.35),w(.35)))
  assembleShape(blds,horizon,nyc_church_fill,nyc_church_stroke,pal,rnd(-w(.35),w(.35)))
}