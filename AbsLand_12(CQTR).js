//tokenData.hash = '0xdf861cd7530acea81c7b95b19020e279038de68150e1f51864225e7accdb2bc6'
//tokenData.hash = '0x48da01b54880c2c3424b8318edce48ba95438efc7e9e2dc354b255c649232b05'
//tokenData.hash = '0x6bc8235ff7fa2e25737ade9105f721ab38812fd401e2a7a5346628bfeea7553b'
//tokenData.hash = '0xf6c9863a4e7fa4aa1b0188559bbcd8d12b1556b7a72023cefb9bc42170035db0'
//tokenData.hash = '0xe55d0d261a9fd9fc4ca8837632284c7616d39433cbdadd8b29d55eccc7e2f810'
//tokenData.hash = '0x413970322c2b5101a4c08bc54724479de4dd1ad6f497a22862a9f3f4eb083059'
//tokenData.hash = '0x4b9e31b45fb679a36aa7cd6f167350f5c338d0dbe6803384f6e49b1a59751808'
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

  skyStrokes_h(p1,pal,horizon,BLEND)

  skyStrokes(p1,pal,horizon,BLEND)

  //setRects('h',pal)
  //setRects('v',pal)
  //drawRects()

  skyStrokes(p1,pal,horizon,SOFT_LIGHT)

  hills(p1,180,pal,horizon-h(.3)+height/2,horizon+height/2,w(.05),w(.15),5)

  oldTown(pal,horizon)

  wtrStrokes(p2,pal,horizon,SOFT_LIGHT) 

  reflStrokes(p2,horizon,SOFT_LIGHT) 

  //setForkLines(pal)
  //forkLines()

  randDotFills(p1,grid,'h',0,40)
  randDotFills(p1,grid,'v',40,80)
  randDotFills(p2,p1,'h',80,120)
  randDotFills(p2,p1,'v',120,160)

}

function draw() {
  //drawingContext.filter = 'brightness(50%)'
  //drawingContext.filter = 'sepia(50%)'
  image(grid, 0, 0)
  image(p1, 0, 0)
  image(p2, 0, 0)
  fillInDots()
  //oilPaint_impr(p1,-w(.5),w(.5),h(.5),horizon,'sky')
  oilPaint_impr(p2,-w(.5),w(.5),horizon,h(.5),'water')
  //filter(INVERT)
  //filter(GRAY)
  //p1.blendMode(HARD_LIGHT)
  //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),horizon,w(.001),map(frameCount,0,800,h(.005),h(.001)),BLEND)
  //oilPaint_fine(p2,-w(.5),w(.5),horizon,h(.5),map(frameCount,0,800,h(.3),h(.003)),w(.003),BLEND)
  //oilPaint_touch(p2,-w(.5),w(.5),-h(.5),h(.5),w(.2),h(.001),BLEND)
  //oilPaint_touch(p2,-w(.5),w(.5),-h(.5),h(.5),w(.001),h(.3),BLEND)
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

function drawRects() {
  push()
  for (let i = 0; i < rects.length; i++) {
    p1.blendMode(OVERLAY)
    p1.noStroke()
    p1.fill(rects[i].col)
    p1.rect(rects[i].x,rects[i].y,rects[i].xW,rects[i].yH)
  }
  pop()
}

function setRects(dir,pal) {
  for (let i = 0; i < 20; i++) {
    let col = color(chCol(pal.sky))
    col.setAlpha(145)
    if (dir === 'h') {
      x = -w(.5)
      xW = width
      y = rnd(-h(.5),h(.5))
      yH = rnd(h(.03))
    }
    if (dir === 'v') {
      x = rnd(-w(.5),w(.5))
      xW = rnd(w(.03))
      y = -h(.5)
      yH = height
    }
    rects.push({x,y,xW,yH,col})
  }
}

function forkLines() {
  for (let i = 0; i < forks.length; i++) {
    dir = forks[i].dir
    x1 = forks[i].x
    y1 = forks[i].y
    x2 = x1
    y2 = y1 + forks[i].yH
    c = forks[i].col
    texStr(p1, x1, y1, x2, y2, forks[i].weight, c[0], c[1], c[2], 50)
    if (dir === 'l') {
      xl = x1 - forks[i].xW/2
      texStr(p1, x1, y1, xl, forks[i].yTop, forks[i].weight, c[0], c[1], c[2], 50)
    }
    if (dir === 'r') {
      xr = x1 + forks[i].xW/1.5
      texStr(p1, x1, y1, xr, forks[i].yTop, forks[i].weight, c[0], c[1], c[2], 50)
    }
    if (dir === 'dbl') {
      xl = x1 - forks[i].xW/1.5
      xr = x1 + forks[i].xW/2
      texStr(p1, x1, y1, xl, forks[i].yTop, forks[i].weight, c[0], c[1], c[2], 50)
      texStr(p1, x1, y1, xr, forks[i].yTop, forks[i].weight, c[0], c[1], c[2], 50)
    }
  }
}

function setForkLines(pal) {
  let dirs = ['l','r','dbl']
  for (let i = 0; i < 12; i++) {
    col = chCol(pal.str)
    dir = dirs[floor(rnd()*dirs.length)]
    x = rnd(-w(.5),w(.5))
    y = horizon - rnd(h(.25)) // map to adjust for horizon height
    yH = rnd(h(.15),h(.3))
    xW = rnd(yH/2,yH)
    yTop = y - xW/8
    weight = rnd(w(.003),w(.01))
    forks.push({x,y,xW,yH,yTop,dir,col,weight})
  }
}

function rowHouses(buff, pal, bldPal, hrz) {
  leftEnd = -w(.5)
  rightEnd = w(.5)
  let sectionWidths = [leftEnd]
  let numSecs = map(hrz,-h(.5),h(.5),30,8)
  let winOpts = [0,0,1]
  let wins = winOpts[floor(rnd()*winOpts.length)]
  let diW = width/numSecs
  sCol = chCol(pal.str)
  hAl = 150
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
  yMult = map(hrz,-h(.5),h(.5),1,3)
  for (let i = 0; i < sections.length-1; i++) {
    let lnOpts = [0,0,1,2,3]
    let numL = lnOpts[floor(rnd()*lnOpts.length)]
    let lWgt = w(.01)
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    let y1 = hrz + rnd(-h(.01),h(.01))
    let y2 = y1 + rnd(-h(.01),h(.01))
    let hH = rnd(h(.05),h(.12)) * yMult
    let p = chCol(bldPal)
    for (let x = x1; x < x2; x+= w(.006)) {
      let yTop = map(x,x1,x2,y1,y2)
      let yBot = yTop - hH
      texStr(buff, x, yTop, x, yBot, w(.02), p[0], p[1], p[2], 100)
    }
    if (numL == 1) {
      texStr(p1, x1, y1-hH, x1, y1-hH/2+rnd(w(.05)), lWgt/2, sCol[0], sCol[1], sCol[2], hAl)
    }
    if (numL == 2) {
      texStr(p1, x2, y2-hH, x2, y2-hH/2+rnd(w(.05)), lWgt/2, sCol[0], sCol[1], sCol[2], hAl)
      texStr(p1, x1, y1-hH, x2, y2-hH, lWgt/2, sCol[0], sCol[1], sCol[2], hAl)
    }
    if (numL == 3) {
      texStr(p1, x1, y1, x1, y1-hH, lWgt/2, sCol[0], sCol[1], sCol[2], hAl)
      texStr(p1, x2, y2, x2, y2-hH, lWgt/2, sCol[0], sCol[1], sCol[2], hAl)
      texStr(p1, x1, y1, x2, y2, lWgt/2, sCol[0], sCol[1], sCol[2], hAl)
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
      texStr(p1, x, y1, x, y2, lWgt, sCol[0], sCol[1], sCol[2], 40)
    }
  })
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

function grHouses2(buff, pal, bldPal, hrz) {
  leftEnd = -w(.5)
  rightEnd = w(.5)
  let sectionWidths = [leftEnd]
  let numSecs = map(hrz,-h(.5),h(.5),18,6)
  let winOpts = [0,0,1]
  let wins = winOpts[floor(rnd()*winOpts.length)]
  let diW = width/numSecs
  hAl = 200
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(diW*.9,diW*1.1)
    sectionWidths.push(division)
  }
  sectionWidths.push(rightEnd)
  let sections = []
  for (let i = 0; i < sectionWidths.length-1; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    const end = sectionWidths[i+2] ? begin + sectionWidths[i+1] : sectionWidths[i+1]// Or sectionsWidths[i]?
    sections.push([begin,end])
  }
  yMult = map(hrz,-h(.5),h(.5),1,3)
  for (let i = 0; i < sections.length-1; i++) {
    let lnOpts = [0,0,1,2,3]
    let numL = lnOpts[floor(rnd()*lnOpts.length)]
    let lWgt = w(.005)
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    let xMid = (x1+x2)/2
    let yBot = hrz + rnd(-h(.005),h(.005))
    let hH = rnd(h(.07),h(.1))
    let yTop = yBot - hH * yMult
    let yM = yBot - (hH * yMult)*.8
    let p = chCol(bldPal)
    sCol = chCol(pal.str)
    for (let x = x1; x < x2; x+= w(.005)) {
      if (x < xMid) {
        y = map(x,x1,xMid,yM,yTop)
      }else{
        y = map(x,xMid,x2,yTop,yM)
      }
      //texStr(buff, x, y, x, yBot, w(.02), p[0], p[1], p[2], 100)
      pStr2(buff,x,y,x,yBot,yBot-y, p, rnd(w(.02)), 'v')
    }
    if (numL == 1) {
      //texStr(buff, x1, yM, xMid, yTop, lWgt, sCol[0], sCol[1], sCol[2], hAl)
      pStr2(buff,x1,yM,xMid,yTop,yBot-y, sCol, rnd(w(.01)), 'h')
    }
    if (numL == 2) {
      //texStr(buff, xMid, yTop, x2, yM, lWgt, sCol[0], sCol[1], sCol[2], hAl)
      pStr2(buff,xMid,yTop,x2,yM,yBot-y, sCol, rnd(w(.01)), 'h')
      //texStr(buff, x2, yM, x2, yM+hH/2+rnd(h(.01),h(.05)), lWgt, sCol[0], sCol[1], sCol[2], hAl)
      pStr2(buff,x2,yM,x2,yM+hH/2+rnd(h(.01),h(.05)),yBot-y, sCol, rnd(w(.01)), 'v')
    }
    if (numL == 3) {
      //texStr(buff, x1, yM, xMid, yTop, lWgt, sCol[0], sCol[1], sCol[2], hAl)
      pStr2(buff,x1,yM,xMid,yTop,yBot-y, sCol, rnd(w(.01)), 'h')
      //texStr(buff, xMid, yTop, x2, yM, lWgt, sCol[0], sCol[1], sCol[2], hAl)
      pStr2(buff,xMid,yTop,x2,yM,yBot-y, sCol, rnd(w(.01)), 'h')
      //texStr(p1, x1, yM, x1, yBot, lWgt, sCol[0], sCol[1], sCol[2], hAl)
      //texStr(p1, x2, yBot, x2 - (x2-x1)*rnd(.5,1.5), yBot, lWgt, sCol[0], sCol[1], sCol[2], hAl)
    }
    let wx1 = lerp(x1,x2,.25)
    console.log(wx1)
    let wx2 = lerp(x1,x2,.5)
    let wx3 = lerp(x1,x2,.75)
    let windows = [wx1, wx2, wx3]
    windows.forEach(i => {
      for (let x = i - (x2-x1)/12; x < i + (x2-x1)/12; x+= w(.002)) {
        y1 = yM + .1*hH
        y2 = y1 + .35*hH
        if (i == wx2) {y2 = y1 + .5*hH}
        texStr(p1, x, y1, x, y2, lWgt/2, sCol[0], sCol[1], sCol[2], hAl)
      }
    })
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
  //buff.curve(v1.x,v1.y,cv1.x,cv1.y,cv2.x,cv2.y,v2.x,v2.y)

  yStep = 0
  xStep = 0

  for (let num = strokeThickness; num > 0; num -= strokeThickness/10) { // was set to w(.001)
    let offset = rnd(-50, 65);
    let newColor = buff.color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, rnd(125, 255));
    buff.stroke(newColor);
    buff.strokeWeight(rnd(strokeThickness/2)); // was set to rnd(w(.001))
    if (dir === 'h') {
      buff.bezier(v1.x+tangent1,v1.y+rnd(-yStep,yStep),cv1.x,cv1.y+rnd(-yStep,yStep),cv2.x,cv2.y+rnd(-yStep,yStep),v2.x+tangent2,v2.y+rnd(-yStep,yStep))
      yStep += strokeThickness/10
    }
    if (dir == 'v') {
      buff.bezier(v1.x+rnd(-xStep,xStep),v1.y,cv1.x+rnd(-xStep,xStep),cv1.y,cv2.x+rnd(-xStep,xStep),cv2.y,v2.x+rnd(-xStep,xStep),v2.y)
      xStep += strokeThickness/10
    }
  }
}

function pStr2(buff,x1,y1,x2,y2,strokeLength, strokeColor, strokeThickness, dir, opa) {
  let stepLength = strokeLength/4.0;
  let tangent1 = 0;
  let tangent2 = 0;
  let odds = rnd();
  
  if (odds < 0.5) { /// NORMALLY
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

function skyStrokes(buff,pal,horizon,bMode) {
  buff.push()
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
  buff.blendMode(bMode)
  let num_lines = 20
  for (let i = 0; i < num_lines; i++) {
    strCol = chCol(pal.sky)
    strThick = rnd(w(.01),w(.1)) // ADJUSTV THICKNESS - WAS LOWER
    let y  = rnd(-h(.5),horizon)
    let x1 = -w(.5)
    let x2 = w(.5)
    pStr2(buff,x1,y,x2,y,dist(x1,y,x2,y), strCol, strThick, 'h', 50)
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

function reflStrokes(buff,horizon,bMode) {
  buff.push()
  buff.blendMode(bMode)
  let num_lines = 600
  for (let i = 0; i < num_lines; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = rnd(horizon,h(.5)) * map(i,0,num_lines,1,.1)
    xW = rnd(w(.003),w(.1)) * map(dist(0,horizon,0,y),0,h(.75),2,.5)
    if (y < horizon) {y = horizon + rnd(h(.15))}
    strCol = p1.get(x+width/2,horizon-rnd(h(.25))+height/2)
    strThick = rnd(w(.003),w(.015)) * map(dist(0,horizon,0,y),0,h(.75),2,.5)
    pStr2(buff,x-xW/2,y,x+xW/2,y,dist(x-xW/2,y,x+xW/2,y), strCol, strThick, 'h', 50)
  }
  buff.pop()
}

function oilPaint_fine(buff,xMin,xMax,yMin,yMax,maxL,maxH,blendType) {
  buff.push()
  buff.translate(-width/2,-height/2)
  if (frameCount < 800) {
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
  buff.pop()
}

function oilPaint_touch(buff,xMin,xMax,yMin,yMax,maxL,maxH,blendType) {
  if (frameCount < 250) {
    let numDaubs = floor(map(dist(0,yMin,0,yMax),h(.15),h(.75),5,20));
    for (let i = 0; i < numDaubs; i++) {
      let xD = rnd(maxL)
      let yD = rnd(maxH)
      let x1 = rnd(xMin,xMax) + width/2
      let y1 = rnd(yMin,yMax) + height/2
      let x2 = x1 + rnd(-xD,xD)
      let y2 = y1 + rnd(-yD,yD)
      strokeLength = rnd(w(.001))
      strokeColor = get(x1,y1)
      if (xD > yD){dir = 'h', strokeThickness = rnd(maxL/30)}
      if (yD > xD){dir = 'v', strokeThickness = rnd(maxH/30)}
      //if (y1 > horizon+height/2) {strokeThickness = rnd(w(.002),w(.015)) * map(dist(0,horizon+height/2,0,y1),0,h(.65),1,8)}
      buff.blendMode(blendType)
      pStr(buff,x1,y1,x2,y2,strokeLength, strokeColor, strokeThickness, dir)
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
  }{
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

function randHouses(buff,pal,horizon) {
  buff.push()
  let num = 120; 
  let lines = [0,0,1,2,3]
  let houseTypes = [grH2,simpleHouse]
  yMax = h(.16)
  for (let i = 0; i < num; i++) {
    let x = rnd(-w(.5),w(.5))*map(i,0,num,1,.5)
    //let y = rnd(horizon,horizon-h(.1))*map(i,0,num,1,.25)
    //let y = horizon // FOR BASIC ON-HORIZON TOWN
    y = horizon - map(dist(x,0,0,0),0,w(.5),yMax/5,yMax)
    let xS = rnd(w(.05),w(.15))*map(i,0,num,1,.35)
    let yS = rnd(h(.05),h(.15))*map(i,0,num,1,.35) * map(dist(x,0,0,0),0,w(.5),1.3,.6) // REMOVE MAP MULT IF REVERTING TO BASIC ON-HORIZON TOWN
    let line = lines[floor(rnd()*lines.length)]
    col = chCol(pal.bld)
    strCol = color(chCol(pal.str))
    //col.setAlpha(255)
    buff.noStroke()
    //buff.fill(col)
    if (pal === palettes.gr2) {buff.blendMode(BLEND)}else{buff.blendMode(HARD_LIGHT)}
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

function hill(buff,x,y,xS,yD,yH,dir,weight,pal) {
  buff.push()
  buff.blendMode(BLEND)
  x1 = x - xS/2;
  x2 = x + xS/2;
  sCol = chCol(pal.veg)
  alpha = rnd(85,165)
  if (dir === 'l') {
    y1 = y + yH - yD; 
    y2 = y + yH + yD;
    for (let xO = x1; xO < x; xO += w(.003)) {
      yO = map(xO,x1,x,y1,y)
      xI = xO + xS/2
      yI = y2
      v1 = createVector(xO,yO)
      v2 = createVector(xI,yI)
      factor = rnd(.75,1)
      v3 = p5.Vector.lerp(v1,v2,factor)
      inW = rnd(weight/2)
      texStr(buff,v1.x, v1.y, v3.x, v3.y, inW, sCol[0], sCol[1], sCol[2], alpha/2)
      //pStr2(buff,v1.x, v1.y, v3.x, v3.y, dist(v1.x, v1.y, v3.x, v3.y), sCol, w(.01), 'h', alpha)
    }
  }
  if (dir === 'r') {
    y1 = y + yH + yD; 
    y2 = y + yH - yD;
    for (let xO = x; xO < x2; xO += w(.003)) {
      yO = map(xO,x,x2,y,y2)
      xI = xO - xS/2
      yI = y1
      v1 = createVector(xO,yO)
      v2 = createVector(xI,yI)
      factor = rnd(.75,1)
      v3 = p5.Vector.lerp(v1,v2,factor)
      inW = rnd(weight/2)
      texStr(buff,v1.x, v1.y, v3.x, v3.y, inW, sCol[0], sCol[1], sCol[2], alpha/2)
      //pStr2(buff,v1.x, v1.y, v3.x, v3.y, dist(v1.x, v1.y, v3.x, v3.y), sCol, w(.01), 'h', alpha)
    }
  }
  //texStr(buff,x1, y1, x, y, weight, sCol[0], sCol[1], sCol[2], alpha)
  pStr2(buff,x1, y1, x, y, dist(x1, y1, x, y), sCol, w(.01), 'h', alpha)
  //texStr(buff,x, y, x2, y2, weight, sCol[0], sCol[1], sCol[2], alpha)
  pStr2(buff,x, y, x2, y2, dist(x, y, x2, y2), sCol, w(.01), 'h', alpha)
   buff.pop()
}

function hills(buff,nH,pal,minY,maxY,minS,maxS,flatness) {
  buff.push()
  buff.translate(-width/2,-height/2)
  let num = nH;
  let numRows = floor(((maxY - minY)*minS)/width*10)
  numPR = nH/numRows
  for (let j = 0; j < numRows; j++) {
    let xLine = map(j,0,numRows,minY,maxY)
    for (let i = 0; i < numPR; i++) {
      let x = rnd(-w(.1),w(1.1))
      let xVar = (maxY - minY)/(numRows*2)
      let y = xLine + rnd(xVar)
      //let y = rnd(minY,maxY)
      let xMult = map(y,minY,maxY,2,1)
      let xS = rnd(minS,maxS) * xMult
      let yD = xS/20
      let mult = rnd(.7,1.3)
      let yH = xS/flatness * mult
      dirs = ['l','r']
      dir = dirs[floor(rnd()*dirs.length)]
      weight = rnd(w(.01),w(.02))
      hill(buff,x,y,xS,yD,yH,dir,weight,pal)
    }
  }
  buff.pop()
}

function terrForm1(buff,pal,hrz,yMax) {
  buff.push()
  buff.blendMode(BLEND)
  leftEnd = -w(.5)
  rightEnd = w(.5)
  let sectionWidths = [leftEnd]
  let numSecs = map(hrz,-h(.5),h(.5),18,6)
  let diW = width/numSecs
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(diW*.5,diW*2.5)
    sectionWidths.push(division)
  }
  sectionWidths.push(rightEnd)
  let sections = []
  for (let i = 0; i < sectionWidths.length-1; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    const end = sectionWidths[i+2] ? begin + sectionWidths[i+1] : sectionWidths[i+1]// Or sectionsWidths[i]?
    sections.push([begin,end])
  }
  //let xC = rnd(-w(.2),w(.2)) // FOR SHIFTING CENTER POINT
  //let yMax = h(.2)
  let lineOpts = [0,0,0,1,2]
  for (let i = 0; i < sections.length-1; i++) {
    let dirs = ['h','v']
    let dir = dirs[floor(rnd()*dirs.length)]
    let lines = lineOpts[floor(rnd()*lineOpts.length)]
    let x1 = sections[i][0] - rnd(w(.1))
    let x2 = sections[i][1] + rnd(w(.1))
    let xD = rnd(x1,x2)
    let yA = hrz - map(dist((x1+x2)/2,0,0,0),0,w(.5),yMax/5,yMax)
    let col = chCol(pal.drk)
    y1 = yA + rnd(h(.03))
    y2 = yA + rnd(h(.03))
    xDiff = rnd(w(.1))
    step = (x2-x1)/map((x2-x1),diW*.5,diW*2.5,25,80)
    if (dir === 'v'){
      for (let x = x1; x < x2; x += step) {
        xOff = map(x,x1,x2,-xDiff,xDiff)
        strTh = rnd(w(.003),w(.01))
        opa = rnd(50,165)
        if (x < xD) {
          yT = map(x,x1,xD,y1,yA)
          texStr(buff, x,yT,x+xOff,hrz, w(.01), col[0], col[1], col[2], 50)
          pStr2(buff,x,yT,x+xOff,hrz,dist(x,yT,x,hrz), col, strTh, 'v', opa)
        }
        if (x > xD) {
          yT = map(x,xD,x2,yA,y2)
          texStr(buff, x,yT,x+xOff,hrz, w(.01), col[0], col[1], col[2], 50)
          pStr2(buff,x,yT,x+xOff,hrz,dist(x,yT,x,hrz), col, strTh, 'v', opa)
        }
      }
    }
    if (dir === 'h'){
      for (let y = hrz; y > yA; y -= (dist(0,hrz,0,yA))/30) {
        strTh = rnd(w(.003),w(.01))
        opa = rnd(50,165)
        yL = map(y,hrz,yA,hrz,y1)
        yR = map(y,hrz,yA,hrz,y2)
        xL = map(y,hrz,yA,x1-xDiff,x1)
        xR = map(y,hrz,yA,x2+xDiff,x2)
        texStr(buff, xL, yL, xD, y, w(.01), col[0], col[1], col[2], 50)
        pStr2(buff, xL, yL, xD, y, dist(xL, yL, xD, yA), col, strTh, 'h', opa)
        texStr(buff, xD, y, xR, yR, w(.01), col[0], col[1], col[2], 50)
        pStr2(buff, xD, y, xR, yR, dist(xD, y, xR, yR), col, strTh, 'h', opa)
      }
    }
    strCol = chCol(pal.str)
    //if (lines = 0) {}
    if (lines === 1) {
      texStr(buff, xD, yA, x2, y2, w(.01), strCol[0], strCol[1], strCol[2], 25)
      texStr(buff, x2, y2, x2 + xDiff, hrz, w(.01), strCol[0], strCol[1], strCol[2], 25)
    }
    if (lines === 2) {
      texStr(buff, x1, y1, xD, yA, w(.01), strCol[0], strCol[1], strCol[2], 25)
      texStr(buff, xD, yA, x2, y2, w(.01), strCol[0], strCol[1], strCol[2], 25)
      texStr(buff, x1 - xDiff - rnd(w(.05)), hrz, x1 + rnd(w(.05)), hrz, w(.01), strCol[0], strCol[1], strCol[2], 25)
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
      pStr3(buff, x, y, strokeLength, strokeColor, strokeThickness, type)
    }
  }
  buff.pop()
}

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

function oldTown(pal,hrz) {
  //rowHouses(p1, pal, pal.drk, hrz-h(.03))
  //rowHouses(p1, pal, pal.bld, hrz+h(.02))
  //grHouses2(p1, pal, pal.bld, hrz-h(.2))
  //grHouses2(p1, pal, pal.bld, hrz-h(.1))
  //grHouses2(p1, pal, pal.bld, hrz)
  randHouses(p1,pal,hrz)
  terrForm1(p1,pal,hrz,h(.16))
  terrForm1(p1,pal,hrz,h(.1))
}