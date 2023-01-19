tokenData.hash = '0xbcbdab052f4263dae48dabae65eaafbeb237b43f83d681e0d0019f04fc0289f2'
const hashPairs = [];
for (let j = 0; j < 32; j++) {
  hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}
const decPairs = hashPairs.map(x => {
  return parseInt(x, 16);
});

S=Uint32Array.from([0,1,s=t=2,3].map(i=>parseInt(tokenData.hash.substr(i*8+2,8),16)));R=_=>(t=S[3],S[3]=S[2],S[2]=S[1],S[1]=s=S[0],t^=t<<11,S[0]^=(t^t>>>8)^(s>>>19),S[0]/2**32);

const seed = parseInt(tokenData.hash.slice(2,16), 16);

let rnd_callCount = 0

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
    rnd_callCount += 1;
    return rand * (max - min) + min;
  }
}

function w(val) {if (val == null) return width;return width * val;}
function h(val) {if (val == null) return height;return height * val;}s

//////////////////////////////////////////////////////////
///////////////////// declarations ///////////////////////

const newPals = {
  tuscan: {
    name: 'tuscan',
    bld: {
      c1: [203,162,101],
      c2: [200,169,140],
      c3: [233,195,99],
      c4: [127,90,60]
    },
    drk: {
      c1: [103,28,17],
      c2: [21,59,86],
      c3: [73,14,64],
      c4: [127,90,60]
    },
    sky: {
      c1: [189,198,221],
      c2: [47,119,191],
      c3: [37,134,231],
      c4: [210,237,247]
    },
    wtr: {
      c1: [160,197,230],
      c2: [42,122,120],
      c3: [95,160,187],
      c4: [57,176,220],
      c5: [201,220,244]
    },
    veg: {
      c1: [131,136,90],
      c2: [21,27,25],
      c3: [198,164,54],
      c4: [36,62,20],
      c5: [75,72,23]
    },
    trees: {
      c1: [56,81,75],
      c2: [21,27,25],
      c3: [73,78,52]
    },
    accents: {
      c1: [11,12,31],
      c2: [200,124,55],
      c3: [149,126,131],
      c4: [73,45,66]
    },
    suns: {
      c1: [246,209,166],
      c2: [237,142,105],
      c3: [199,169,162],
      c4: [125,75,72]
    }
  },
  umbrian: {
    name: 'umbrian',
    bld: {
      c1: [224,169,159],
      c2: [230,210,210],
      c3: [214,141,141],
      c4: [117,71,71],
      c5: [221,129,91]
    },
    drk: {
      c1: [60,55,63],
      c2: [116,130,113],
      c3: [172,114,53],
      c4: [95,48,23]
    },
    sky: {
      c1: [250,230,190],
      c2: [123,116,111],
      c3: [33,93,204],
      c4: [202,172,144],
      c5: [249,221,133]
    },
    wtr: {
      c1: [160,197,230],
      c2: [42,122,120],
      c3: [95,160,187],
      c4: [57,176,220],
      c5: [201,220,244]
    },
    veg: {
      c1: [155,82,34],
      c2: [35,20,12],
      c3: [108,129,42],
      c4: [72,93,107],
      c5: [52,86,38]
    },
    trees: {
      c1: [31,42,10],
      c2: [60,95,33],
      c3: [48,60,44]
    },
    accents: {
      c1: [88,51,69],
      c2: [170,122,115],
      c3: [182,104,16],
      c4: [159,138,82]
    },
    suns: {
      c1: [255,210,136],
      c2: [255,161,96],
      c3: [116,177,211],
      c4: [8,64,89]
    }
  },
  amsterdam: {
    name: 'amsterdam',
    bld: {
      c1: [118,79,81],
      c2: [223,50,38],
      c3: [236,164,123],
      c4: [238,145,73],
      c5: [86,79,110]
    },
    drk: {
      c1: [60,55,63],
      c2: [116,130,113],
      c3: [172,114,53],
      c4: [95,48,23]
    },
    sky: {
      c1: [227,235,240],
      c2: [58,128,191],
      c3: [106,177,214],
      c4: [114,149,185],
      c5: [93,166,215]
    },
    wtr: {
      c1: [86,66,73],
      c2: [96,126,157],
      c3: [111,140,147],
      c4: [7,12,79],
      c5: [59,131,192]
    },
    veg: {
      c1: [155,82,34],
      c2: [54,56,28],
      c3: [108,129,42],
      c4: [72,93,107],
      c5: [52,86,38]
    },
    trees: {
      c1: [31,42,10],
      c2: [60,95,33],
      c3: [48,60,44]
    },
    accents: {
      c1: [252,249,223],
      c2: [18,48,71],
      c3: [252,235,200],
      c4: [92,81,70]
    },
    suns: {
      c1: [252,209,197],
      c2: [255,100,136],
      c3: [166,177,211],
      c4: [46,81,96]
    }
  },
  cinqueterre: {
    name: 'cinqueterre',
    bld: {
      c1: [223,158,65],
      c2: [206,118,77],
      c3: [250,245,230],
      c4: [228,94,88],
      c5: [223,114,150]
    },
    drk: {
      c1: [189,198,189],
      c2: [41,38,32],
      c3: [200,168,123],
      c4: [143,138,136],
      c5: [159,129,88]
    },
    sky: {
      c1: [227,235,240],
      c2: [234,234,233],
      c3: [100,154,229],
      c4: [204,211,227],
      c5: [149,180,230]
    },
    wtr: {
      c1: [70,136,204],
      c2: [22,54,56],
      c3: [46,107,153],
      c4: [81,167,171],
      c5: [158,188,230]
    },
    veg: {
      c1: [155,82,34],
      c2: [35,20,12],
      c3: [108,129,42],
      c4: [72,93,107],
      c5: [52,86,38]
    },
    trees: {
      c1: [31,42,10],
      c2: [60,95,33],
      c3: [48,60,44]
    },
    accents: {
      c1: [67,139,121],
      c2: [152,79,35],
      c3: [72,32,24],
      c4: [34,62,59]
    },
    suns: {
      c1: [252,219,126],
      c2: [239,158,178],
      c3: [35,199,216],
      c4: [35,44,162]
    }
  },
  yorktown: {
    name: 'yorktown',
    bld: {
      c1: [198,168,144],
      c2: [62,41,36],
      c3: [254,186,61],
      c4: [254,202,189],
      c5: [206,144,107]
    },
    drk: {
      c1: [38,35,38],
      c2: [166,155,141],
      c3: [217,183,154],
      c4: [64,19,35],
      c5: [19,53,54]
    },
    sky: {
      c1: [242,153,165],
      c2: [26,134,200],
      c3: [116,175,224],
      c4: [160,214,218],
      c5: [8,70,152]
    },
    wtr: {
      c1: [22,71,74],
      c2: [145,202,175],
      c3: [242,184,191],
      c4: [26,134,200],
      c5: [116,175,224]
    },
    veg: {
      c1: [187,158,64],
      c2: [125,136,70],
      c3: [206,144,107],
      c4: [195,199,166],
      c5: [190,152,32]
    },
    trees: {
      c1: [174,191,138],
      c2: [60,64,29],
      c3: [70,78,65]
    },
    accents: {
      c1: [28,33,55],
      c2: [40,69,85],
      c3: [222,70,57],
      c4: [245,173,13],
      c5: [219,101,40]
    },
    suns: {
      c1: [242,207,136],
      c2: [229,103,97],
      c3: [244,170,52],
      c4: [94,33,46]
    }
  },
  grace: {
    name: 'grace',
    bld: {
      c1: [223,212,203],
      c2: [129,108,75],
      c3: [178,179,173],
      c4: [219,180,141],
      c5: [156,166,146]
    },
    drk: {
      c1: [205,37,37],
      c2: [192,68,131],
      c3: [45,133,121],
      c4: [26,25,33],
      c5: [221,216,212]
    },
    sky: {
      c1: [242,237,233],
      c2: [225,207,223],
      c3: [219,180,141],
      c4: [217,187,184],
      c5: [169,211,234]
    },
    wtr: {
      c1: [253,201,164],
      c2: [245,177,166],
      c3: [236,166,168],
      c4: [225,173,185],
      c5: [208,191,215]
    },
    veg: {
      c1: [50,89,82],
      c2: [81,115,105],
      c3: [170,115,70],
      c4: [156,166,148],
      c5: [209,210,170]
    },
    trees: {
      c1: [187,158,64],
      c2: [125,136,70],
      c3: [70,78,65]
    },
    accents: {
      c1: [205,37,37],
      c2: [192,68,131],
      c3: [45,133,121],
      c4: [26,25,33],
      c5: [221,216,212]
    },
    suns: {
      c1: [253,201,164],
      c2: [245,177,166],
      c3: [191,73,116],
      c4: [56,16,31]
    }
  },
  charcoal: {
    name: 'charcoal',
    bld: {
      c1: [60,60,60],
      c2: [30,30,30],
      c3: [70,70,70],
      c4: [200,200,200],
      c5: [250,250,250]
    },
    drk: {
      c1: [10,10,10]
    },
    sky: {
      c1: [235,235,235],
      c2: [190,190,190],
      c3: [140,140,140],
      c4: [110,110,110]
    },
    wtr: {
      c1: [60,60,60],
      c2: [190,190,190],
      c3: [130,130,130],
      c4: [100,100,100]
    },
    veg: {
      c1: [60,60,60],
      c2: [40,40,40],
      c3: [85,85,85]
    },
    trees: {
      c1: [15,15,15],
      c2: [35,35,35],
      c3: [50,50,50]
    },
    accents: {
      c1: [30,30,30],
      c2: [5,5,5],
      c3: [225,225,225],
    },
    suns: {
      c1: [255,255,255],
      c2: [215,215,215],
      c3: [125,125,125],
      c4: [25,25,25]
    }
  }
}

const wLightsPal = {
  c1: [241,163,80],
  c2: [246,198,154],
  c3: [28,75,117],
  c4: [0,0,5]
}

let p1;
let p2;
let p3;
let p4;
let blds;
let blds2;
let blds3;
let grid;
let skyBuff;
let frameBuff;
let moonBuff;

let gPts = [];

let hrz;
//let hTransfer;

let rfd_pos = [];
let rfd_pos2 = [];
let dotsToFill = [];
let fillShapeArr = [];
let fillPolyArr = [];

let strL = [];
let strLRefl = [];
let dotStrArray = [];

let dotBlobs = [];

let paintStrokes = [];

let pStA = [];

let reflsArray = [];

let pointsToPaint = [];
let shuffled_pTp = [];

let twilight_dots = [];
let star_dots = [];
let sm_dots = [];

let style;
let time;
let sky;
let layout;
let sunmoon;
let frW_forRefls;


let cV;
let p5vl;
let cGr;

//////////////////////////////////////////////////////////
///////////////////// setup & draw ///////////////////////

function setup() {
  noiseSeed(seed)
  const smD = windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(smD, smD);

  pixelDensity(2)

  cV = createVector
  p5vl = p5.Vector.lerp
  cGr = createGraphics

  grid = cGr(smD, smD)
  skyBuff = cGr(smD, smD)
  blds = cGr(smD, smD)
  blds2 = cGr(smD, smD)
  blds3 = cGr(smD, smD)
  p1 = cGr(smD, smD)
  p2 = cGr(smD, smD)
  p3 = cGr(smD, smD)
  p4 = cGr(smD, smD)
  frameBuff = cGr(smD, smD)
  moonBuff = cGr(smD, smD)

  translate(w()/2,h()/2)
  skyBuff.translate(w()/2,h()/2)
  blds.translate(w()/2,h()/2)
  blds2.translate(w()/2,h()/2)
  blds3.translate(w()/2,h()/2)
  p1.translate(w()/2,h()/2)
  p2.translate(w()/2,h()/2)
  p3.translate(w()/2,h()/2)
  p4.translate(w()/2,h()/2)
  frameBuff.translate(w()/2,h()/2)
  moonBuff.translate(w()/2,h()/2)

  style = chStyle()

  time = chTime()

  hrz = chHorizon()

  let frameType = chFrame()
  frW_forRefls = frameType.frW

  const pal = chPal(style)

  layout = chLayout()

  sky = chSky()

  //sunMoon = chSunMoon(time) 

  sunType = chSun(time)
  moonType = chMoon(time)
  sSz = chSuSize()
  mSz = chMoSize()
  starsType = chStars(time)

  setGrid(45,hrz,pal)
  drawGrid(time,pal,style)

  layout(pal, hrz, sky, style, time, sunType, moonType)

  let sPosX = rnd(-w(.45),w(.45))
  let hLerpValS = map(hrz,-h(.2),h(.32),.35,.65)
  if (layout === renderMetro) {hLerpValS = map(hrz,-h(.2),h(.32),.25,.45)}
  let sPosY = rnd(-h(.42),lerp(-h(.5),hrz,hLerpValS))

  let mPosX = rnd(-w(.45),w(.45))
  let hLerpValM = map(hrz,-h(.2),h(.32),.35,.65)
  if (layout === renderMetro) {hLerpValM = map(hrz,-h(.2),h(.32),.25,.45)}
  let mPosY = rnd(-h(.42),lerp(-h(.5),hrz,hLerpValM))

  if (time === 'twilight') {
    let chooseSide = rnd()
    if (chooseSide < .5) {
      sPosX = rnd(-w(.5)+sSz/2,-sSz/2)
      mPosX = rnd(sPosX+sSz,w(.5)-mSz/2)
    }else{
      sPosX = rnd(sSz,w(.5)-sSz)
      mPosX = rnd(sSz-sSz,-w(.5)+mSz/2)
    }
  }

  renderSun(sunType,style,hrz,pal,sSz,sPosX,sPosY)
  renderMoon(moonType,style,hrz,pal,mSz,mPosX,mPosY)

  basicFrame(frameBuff,pal,style,time,frameType)

  starryNight(style, hrz, pal, starsType)

  shArr(strL)
  shArr(paintStrokes)
  shArr(dotStrArray)
  shArr(pStA)
  shArr(dotBlobs)
}

function draw() {
  image(grid, 0, 0)
  image(skyBuff, 0, 0)
  image(moonBuff, 0, 0)
  image(blds, 0, 0)
  image(blds2, 0, 0)
  image(blds3, 0, 0)
  image(p1, 0, 0)
  image(p2, 0, 0)
  image(p3, 0, 0)
  image(p4, 0, 0)
  image(frameBuff, 0, 0)

  drawTwilight(skyBuff,twilight_dots,style,time)

  drawBlobStr()
  draw_pStr()

  if (layout != renderSanGm) {
    newRefls(p3,style,time,frW_forRefls)
  }

  drawSunMoon(skyBuff,sm_dots,style)

  if (time === 'night' || time === 'twilight') {
    drawStars(moonBuff,star_dots,style)
  }

  drawDotBlobStr()
}

//////////////////////////////////////////////////////////
//////////////////// chooser funcs ///////////////////////

function chPal(style) {
  const pP = map(decPairs[1],0,255,0,1);
  if (pP < .3) {
    chP = newPals.tuscan
  }else if (pP < .55){
    chP = newPals.umbrian
  }else if (pP < .7){
    chP = newPals.amsterdam
  }else if (pP < .85){
    chP = newPals.cinqueterre
  }else if (pP < .95){
    chP = newPals.yorktown
  }else{
    chP = newPals.grace
  }
  if (style === 'neat') {
    if (pP < .27) {
      chP = newPals.tuscan
    }else if (pP < .51){
      chP = newPals.umbrian
    }else if (pP < .65){
      chP = newPals.amsterdam
    }else if (pP < .79){
      chP = newPals.cinqueterre
    }else if (pP < .88){
      chP = newPals.yorktown
    }else if (pP < .94){
      chP = newPals.grace
    }else{
      chP = newPals.charcoal
    }
  }
  return chP
}

function chCol(obj) {
  let keys = Object.keys(obj);
  let palName = keys[floor(rnd()*keys.length)]
  return obj[palName];
}

function chTime() {
  const tT = map(decPairs[2],0,255,0,1);
  if (tT < .5) {
    chT = 'day'
  }else if (tT < .85) {
    chT = 'night'
  }else{
    chT = 'twilight'
  }
  return chT
}

function chStyle() {
  const stV = map(decPairs[3],0,255,0,1);
  if (stV < .5) {
    chS = 'orig'
  }else if (stV < .85) {
    chS = 'dev'
  }else{
    chS = 'neat'
  }
  return chS
}

function chLayout() {
  const layV = map(decPairs[4],0,255,0,1);
  if (layV < .33) {
    chL = renderSanGm
  }else if (layV < .66) {
    chL = renderCqtr
  }else{
    chL = renderMetro
  }
  return chL
}

function chSky() {
  const layV = map(decPairs[5],0,255,0,1);
  if (layV < .5) {
    chosenSky = 'open'
  }else if (layV < .85) {
    chosenSky = 'quilted'
  }else{
    chosenSky = 'soaring'
  }
  return chosenSky
}

function chSun(time) {
  const sunV = map(decPairs[6],0,255,0,1);
  let choSun = 'none'
  if (time !== 'night') {
    if (sunV < .5) {
      choSun = 'none'
    }else if (sunV < .95) {
      choSun = 'sun'
    }else{
      choSun = 'red sun'
    }
  }
  return choSun
}

function chMoon(time) {
  const moonV = map(decPairs[12],0,255,0,1);
  let choMoon = 'none'
  if (time !== 'day') {
    if (moonV < .4) {
      choMoon = 'none'
    }else if (moonV < .75) {
      choMoon = 'moon'
    }else if (moonV < .92) {
      choMoon = 'crescent'
    }else if (moonV < .98) {
      choMoon = 'pink moon'
    }else{
      choMoon = 'eclipse'
    }
  }
  return choMoon
}

function chStars(time) {
  const starsV = map(decPairs[7],0,255,0,1);
  if (time !== 'day') {
    if (starsV < .4) {
      chosenStars = 'none'
    }else if (starsV < .8) {
      chosenStars = 'some stars'
    }else{
      chosenStars = 'starry night'
    }
  }
  return chosenStars
}

function chFrame() {
  const fV = map(decPairs[8],0,255,0,1);
  if (fV < .4) {
    chF = {typ:'minimal',frW:w(.005)}
  }else if (fV < .8) {
    chF = {typ:'basic',frW:w(.025)}
  }else{
    chF = {typ:'quilted',frW:w(.025)}
  }
  return chF
}

function chHorizon() {
  const hV = map(decPairs[9],0,255,0,1);
  if (hV < .5) {
    hrzLevel = 0
  }else if (hV < .8) {
    hrzLevel = h(.32)
  }else{
    hrzLevel = -h(.2)
  }
  return hrzLevel
}

function chSuSize() {
  const msV = map(decPairs[10],0,255,0,1);
  if (msV < .45) {
    sSz = 'sm'
  }else if (msV < .8) {
    sSz = 'md'
  }else{
    sSz = 'lg'
  }
  return sSz
}

function chMoSize() {
  const msV = map(decPairs[11],0,255,0,1);
  if (msV < .45) {
    mSz = 'sm'
  }else if (msV < .8) {
    mSz = 'md'
  }else{
    mSz = 'lg'
  }
  return mSz
}

//////////////////////////////////////////////////////////
/////////////////// component funcs //////////////////////

function makeSections(numSecs,left,right,minDiv,maxDiv,type) {
  leftEnd = left
  rightEnd = right
  let sectionWidths = [leftEnd]
  let diW = width/numSecs
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(diW*minDiv,diW*maxDiv)
    if (type === 'water') {
      division = map(i,0,numSecs,diW*.1,diW*2)*rnd(.5,2)
    }
    sectionWidths.push(division)
  }
  sectionWidths.push(rightEnd)
  let sections = []
  for (let i = 0; i < sectionWidths.length; i++) {
    let begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    let end = sectionWidths[i+1] ? begin + sectionWidths[i+1] : sectionWidths[i] // Or sectionsWidths[i]?
    if (end > right) {
      end = right
    }
    sections.push([begin,end])
  }
  return sections
}

function bldSections(numSecs,left,right,minDiv,maxDiv) {
  leftEnd = left;
  rightEnd = right;
  let sectionWidths = [leftEnd];
  let diW = width/numSecs;
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(diW*minDiv,diW*maxDiv);
    sectionWidths.push(division)
  }
  let sections = [];
  for (let i = 0; i < sectionWidths.length; i++) {
    let begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    let end = sectionWidths[i+1] ? begin + sectionWidths[i+1] : begin + sectionWidths[i];
    sections.push([begin,end])
  }
  let lastBegin = sections[sections.length-1][1]
  let lastEnd = lastBegin + rnd(diW*minDiv,diW*maxDiv)
  sections.push([lastBegin,lastEnd])
  return sections
}

function setGrid(numSecs,hrz,pal) {
  let numSections = numSecs;
  let sectionWidth = width/numSections
  for (let j = 0; j < numSections; j++) {
    for (let i = 0 ; i < numSections; i++) {
      x1 = sectionWidth*i
      y1 = sectionWidth*j
      x2 = x1 + sectionWidth
      y2 = y1 + sectionWidth
      col = chCol(pal.sky)
      //col = rnd(155,255)
      //if (y2 > hrz + h(.5) - dist(0,-h(.5),0,hrz)/7) {col = rnd(155,255)}
      //if (y2 > hrz + h(.5)) {col = rnd(155,255)}
      gPts.push({x1,y1,x2,y2,col})
    }
  }
}

function drawGrid(time,pal,style) {
  for (let i = 0; i < gPts.length; i++) {
    let x = gPts[i].x1
    let y = gPts[i].y1
    let size = width/(sqrt(gPts.length))
    //grid.fill(gPts[i].col)
    grid.noStroke()
    if (time === 'day') {
      grid.fill(255)
      if (style === 'dev') {
        grid.fill(pal.suns.c1)
      }
      //grid.stroke(rnd(200))
    }else if (time === 'twilight') {
      //grid.fill(150)
      grid.fill(78,82,135)
      if (style === 'dev') {
        grid.fill(pal.suns.c2)
      }
      //grid.fill(gPts[i].col)
      //grid.stroke(rnd(225))
      //grid.stroke(gPts[i].col)
      grid.noStroke()
    }else if (time === 'night') {
      grid.fill(0)
      if (style === 'dev') {
        grid.fill(pal.suns.c4)
      }
      //grid.stroke(rnd(200))
    }
    grid.strokeWeight(w(.0001))
    grid.rect(x,y,size,size)
  }
}

function shArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = floor(rnd() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

//////////////////////////////////////////////////////////
/////////////////// component lines //////////////////////

function bsr(buff, x1, y1, x2, y2, weight, r, g, b, a, dir, type) {
  buff.noStroke()
  let blendType = type ? OVERLAY : BLEND
  if (type === 'ovr') {blendType = SOFT_LIGHT}
  buff.blendMode(blendType)
  let adjAlpha = a
  let num = 30
  if (type === 'frame_long') {num = 150}
  for (let i = 0; i < num; i++){
    let lerpVal = rnd()
    let px1 = lerp(x1, x2, lerpVal)
    let py1 = lerp(y1, y2, lerpVal)
    let lerpVal2 = lerpVal + 1/35
    let px2 = lerp(x1, x2, lerpVal2)
    let py2 = lerp(y1, y2, lerpVal2)
    let size = rnd(weight/20)
    if (dir === 'up') {adjAlpha = map(py1,y1,y2,a,a/3)}
    if (dir === 'down') {adjAlpha = map(py1,y2,y1,a,a/3)}
    if (dir === 'none') {adjAlpha = a}
    if (type === 'refl') {
      strLRefl.push({buff,px1,py1,px2,py2,size,r,g,b,adjAlpha})
    }else{
      strL.push({buff,px1,py1,px2,py2,size,r,g,b,adjAlpha})
    }
  }
}

function drawBlobStr() {
  let total = floor(strL.length) - 2401
  if (frameCount*2400 < total) {
    let i = frameCount * 2400
    for (let j = i; j < i + 2400; j++) {
      let buff = strL[j].buff
      let px1 = strL[j].px1
      let py1 = strL[j].py1
      let px2 = strL[j].px2
      let py2 = strL[j].py2
      let size = strL[j].size
      let r = strL[j].r
      let g = strL[j].g
      let b = strL[j].b
      let a = strL[j].adjAlpha
      buff.stroke(r, g, b, a)
      buff.strokeWeight(size)
      buff.line(px1,py1,px2,py2)
    }
  }
}

function dsr(buff, x1, y1, x2, y2, weight, r, g, b, a, dir) {
  let numDots = 50
  for (let i = 0; i < numDots; i++){
    let theta = rnd(TWO_PI);
    let nx1 = x1 + 0.3*rnd(weight/2)*cos(theta);
    let ny1 = y1 + 0.3*rnd(weight/2)*sin(theta);
    let nx2 = x2 + 0.3*rnd(weight/2)*cos(theta);
    let ny2 = y2 + 0.3*rnd(weight/2)*sin(theta);
    let lerpVal = rnd()
    let x = lerp(nx1, nx2, lerpVal)
    let y = lerp(ny1, ny2, lerpVal)
    let size = rnd(weight/2)
    if (dir === 'up') {adjAlpha = map(y,ny1,ny2,a,a/3)}
    if (dir === 'down') {adjAlpha = map(y,ny2,ny1,a,a/3)}
    if (dir === 'none') {adjAlpha = a}
    let col = [r,g,b,adjAlpha]
    dotBlobs.push({buff,x,y,size,col})
  }
}

function drawDotBlobStr() {
  let total = floor(dotBlobs.length) - 2401
  if (frameCount*2400 < total) {
    let i = frameCount * 2400
    for (let j = i; j < i + 2400; j++) {
      let buff = dotBlobs[j].buff
      let x = dotBlobs[j].x
      let y = dotBlobs[j].y
      let size = dotBlobs[j].size
      let dotCol = dotBlobs[j].col
      buff.noStroke()
      buff.fill(dotCol)
      buff.push()
      buff.blendMode(BLEND)
      buff.ellipse(x,y,size)
      buff.pop()
    }
  }
}

function pstr4(buff,x1,y1,x2,y2,thickness,weight,density,col,lenDiv,bMode,type) {
  buff.push()
  let num = 3 //thickness * density; // WAS (thickness/w(.0005)) * density
  let v1 = cV(x1,y1)
  let v2 = cV(x2,y2)
  let cv1 = p5vl(v1,v2,.3)
  let cv2 = p5vl(v1,v2,.7)
  let dir = 'h'
  if (y2-y1 > x2-x1) {dir = 'v'}

  let odds = rnd()
  let tangent1 = 0;
  let tangent2 = 0;
  let strokeLength = dist(x1,y1,x2,y2)
  let maxOdds = 0
  if (type === 'cover') {maxOdds = .5}
  if (odds < maxOdds) {
    tangent1 = rnd(-strokeLength, strokeLength);
    tangent2 = rnd(-strokeLength, strokeLength);
  } 
  
  let strLength = dist(x1,y1,x2,y2)
  let thisBlend = bMode ? bMode : BLEND
  buff.blendMode(thisBlend)
  
  xStep = 0
  yStep = 0
  
  buff.noFill();

  if (dir === 'h') {
    //for (let i = thickness; i > 0; i -= thickness/num) {
    for (let i = num; i > 0; i--) {
    
      buff.strokeWeight(rnd(weight));
      buff.stroke(col);
      
      let yOffset = rnd(thickness)
      
      if (i > thickness/2) {
        angle = map(i,thickness,thickness/2,TWO_PI,PI + HALF_PI)
        xDiff = strLength/lenDiv * sin(angle)
      }else{
        angle = map(i,thickness,thickness/2,PI + HALF_PI,PI)
        xDiff = strLength/lenDiv * cos(angle)
      }
        
      //buff.bezier(  v1.x + xDiff + tangent1,  v1.y + yStep,  cv1.x,  cv1.y + yStep + rnd(-yOffset,yOffset),  cv2.x,  cv2.y + yStep + rnd(-yOffset,yOffset),  v2.x - xDiff/3 + tangent2,  v2.y + yStep )
      let x1 = v1.x + xDiff + tangent1
      let y1 = v1.y + yStep
      let x2 = cv1.x
      let y2 = cv1.y + yStep + rnd(-yOffset,yOffset)
      let x3 = cv2.x
      let y3 = cv2.y + yStep + rnd(-yOffset,yOffset)
      let x4 = v2.x - xDiff/3 + tangent2
      let y4 = v2.y + yStep
      let strW = rnd(weight)
      if (type === 'refl') {
        buff.strokeWeight(strW)
        buff.stroke(col)
        buff.noFill()
        buff.blendMode(bMode)
        buff.bezier(x1,y1,x2,y2,x3,y3,x4,y4)
      }else{
        pStA.push({buff,x1,y1,x2,y2,x3,y3,x4,y4,col,strW,bMode})
      }
      yStep += w(.0003)
    }
  }
  if (dir === 'v') {
    //for (let i = thickness; i > 0; i -= thickness/num) {
    for (let i = num; i > 0; i--) {
    
      buff.strokeWeight(rnd(weight));
      buff.stroke(col);
      
      let xOffset = rnd(thickness)
      
      if (i > thickness/2) {
        angle = map(i,thickness,thickness/2,TWO_PI,PI + HALF_PI)
        yDiff = strLength/lenDiv * sin(angle)
      }else{
        angle = map(i,thickness,thickness/2,PI + HALF_PI,PI)
        yDiff = strLength/lenDiv * cos(angle)
      }
        
      //buff.bezier(  v1.x + xStep,  v1.y + yDiff + tangent1,  cv1.x + xStep + rnd(-xOffset,xOffset),  cv1.y,  cv2.x + xStep + rnd(-xOffset,xOffset),  cv2.y,  v2.x + xStep,  v2.y - yDiff/3 + tangent2)
      let x1 = v1.x + xStep
      let y1 = v1.y + yDiff + tangent1
      let x2 = cv1.x + xStep + rnd(-xOffset,xOffset)
      let y2 = cv1.y
      let x3 = cv2.x + xStep + rnd(-xOffset,xOffset)
      let y3 = cv2.y
      let x4 = v2.x + xStep
      let y4 = v2.y - yDiff/3 + tangent2
      let strW = rnd(weight)
      if (type === 'refl') {
        buff.strokeWeight(strW)
        buff.stroke(col)
        buff.noFill()
        buff.blendMode(bMode)
        buff.bezier(x1,y1,x2,y2,x3,y3,x4,y4)
      }else{
        pStA.push({buff,x1,y1,x2,y2,x3,y3,x4,y4,col,strW,bMode})
      }
      xStep += w(.0003)
    }
  }
  buff.pop()
}

function draw_pStr() {
  let total = floor(pStA.length) - 501
  if (frameCount*500 < total) {
    let i = frameCount * 500
    for (let j = i; j < i + 500; j++) {
      let buff = pStA[j].buff
      let x1 = pStA[j].x1
      let x2 = pStA[j].x2
      let x3 = pStA[j].x3
      let x4 = pStA[j].x4
      let y1 = pStA[j].y1
      let y2 = pStA[j].y2
      let y3 = pStA[j].y3
      let y4 = pStA[j].y4
      let col = pStA[j].col
      let strW = pStA[j].strW
      let bMode = pStA[j].bMode
      buff.strokeWeight(strW)
      buff.stroke(col)
      buff.noFill()
      buff.blendMode(bMode)
      buff.bezier(x1,y1,x2,y2,x3,y3,x4,y4)
    }
  }
}

function quilting(buff, style, time, hrz, pal, features) {
  let numRows = floor(rnd(8,16))
  let rows = makeSections(numRows,-h(.5),hrz,.75,2)
  rows.forEach(row => {
    numCols = floor(rnd(6,24))
    cols = makeSections(numCols,-w(.5),w(.52),.75,2)
    let y1 = row[0]
    let y2 = row[1]
    let cD = 0
    let weightMult = 1
    if (time === 'day') {weightMult = 1.7, colAlpha = 135}
    if (time === 'twilight') {cD = map(dist(0,y1,0,hrz),0,dist(0,-h(.5),0,hrz),0,50), weightMult = 1.35, colAlpha = 90}
    if (time === 'night') {cD = map(dist(0,y1,0,hrz),0,dist(0,-h(.5),0,hrz),0,100), colAlpha = 45}
    for (let i = 0; i < cols.length-1; i++) {
      col = color(chCol(pal.sky))
      let x1 = cols[i][0]
      let x2 = cols[i][1]
      let num_lines = 60;
      if (style === 'orig') {num_lines = 30}
      let yDiffTop = rnd(h(.003),h(.03))
      let yDiff = rnd(h(.005),h(.065))
      for (let i = 0; i < num_lines; i++) {
        let x = map(i,0,num_lines,x1,x2) // + xOff
        if (y1 < hrz) {
          if (style === 'neat') {
            dsr(buff, x, y1, x, y2, w(.005), red(col),green(col),blue(col),colAlpha, 'none')
          }else if (style === 'orig') {
            let xOff = rnd(-w(.001),w(.001))
            //colOffset = rnd(-10,10)
            bsr(buff, x - xOff, y1 - yDiffTop, x + xOff, y2 - yDiff, w(.05)*weightMult, red(col)-cD, green(col)-cD, blue(col)-cD, colAlpha)
            bsr(buff, x + xOff, y1, x - xOff, y2, w(.03)*weightMult, red(col)-cD, green(col)-cD, blue(col)-cD, colAlpha/2) // had colOffset added
          }else if (style === 'dev') {
            //bsr(buff, x, y1, x, y2, w(.03)*weightMult, col[0]-cD, col[1]-cD, col[2]-cD, colAlpha)
            col.setAlpha(55)
            pstr4(buff, x, y1 - yDiffTop, x, y2 - yDiff, w(.005), w(.003), 1, col, 30, BLEND)
          }
        }
      }
    }
  })
}

function quilting_water(buff, style, time, hrz, pal) {
  let qW_numRows = floor(rnd(18,30));
  let rows = makeSections(qW_numRows,hrz,h(.5),.75,2,'water')
  for (let j = 0; j < qW_numRows; j++) {
    numCols = floor(rnd(3,12) * map(j,0,qW_numRows,3,.3))
    cols = makeSections(numCols,-w(.5),w(.5),.75,2)
    let y1 = rows[j][0]
    let y2 = rows[j][1]
    let weightMult = map((y2-y1),0,h(.3),.3,1)
    for (let i = 0; i < cols.length; i++) {
      col = chCol(pal.wtr)
      let x1 = cols[i][0]
      let x2 = cols[i][1]
      let xW = (x2-x1)
      let numLines = 10 + j*2
      for (let k = 0; k < numLines; k++) {
        let y = map(k,0,numLines,y1,y2)
        if (style === 'neat') {
          dsr(buff, x1, y, x2, y, w(.005), col[0],col[1],col[2],125, 'none')
        }else if (style === 'orig') {
          bsr(buff, x1, y, x2, y, w(.025)*weightMult, col[0], col[1], col[2], 90)
        }else if (style === 'dev') {
          let strW = rnd(w(.001),w(.005))
          pstr4(buff, x1 - rnd(xW/2), y, x2 + rnd(xW/2), y, strW*weightMult, strW/3*weightMult, 1, [col[0], col[1], col[2],rnd(120)], 30, SOFT_LIGHT)
        }
      }
    }
  }
}

function makePoly4(buff,x1,y1,x2,y2,x3,y3,x4,y4,col,pal,type,style) {
  buff.push()
  buff.noStroke()
  if (type === 'bg') {
    buff.fill(col)
    buff.blendMode(BLEND)
  }else if (type === 'ovr') {
    buff.fill(col)
    buff.blendMode(BLEND)
  }
  let tl = cV(x1,y1)
  let tr = cV(x2,y2)
  let br = cV(x3,y3)
  let bl = cV(x4,y4)
  //buff.blendMode(BURN)
  if (style === 'dev') {
    buff.noFill()
    c = chCol(pal.bld)
    buff.stroke(c)
    buff.beginShape()
      buff.vertex(x1,y1)
      buff.vertex(x2,y2)
      buff.vertex(x3,y3)
      buff.vertex(x4,y4)
    buff.endShape(CLOSE)
  }

  let hTrans;
  if (hrz == -h(.2)) {hTrans = h(.5)}
  if (hrz == 0) {hTrans = h(.5)}
  if (hrz == h(.32)) {hTrans = h(.8)}

  let xStep = w(.0003)
  if (style === 'geom') {xStep = w(.002)}
  if (style === 'geom') {xStep = w(.003)}

  if (type === 'ovr') {
    let bCol = chCol(pal.drk)
    for (let x = x1; x < x2; x+= xStep) {
      let xB = map(x,x1,x2,x4,x3)
      let yT = map(x,x1,x2,y1,y2)
      let yB = map(xB,x4,x3,y3,y4)
      let vStrW = rnd(w(.03),w(.05))
      if (style === 'orig') {
        bsr(buff, x, yT, xB, yB, vStrW, bCol[0], bCol[1], bCol[2], rnd(40,85))
      }else if (style === 'dev') {
        pstr4(buff, x, yT, xB, yB, w(.002), w(.001), 1, [col[0], col[1], col[2], rnd(20)], 100, OVERLAY) // WAS OVERLAY
      }else if (style === 'neat') {
        dsr(buff, x, yT, xB, yB, w(.003), col[0], col[1], col[2], 125)
      }
      // REFLS
      let maxReflY = hrz - dist(x,yB,x,yT) // adjust to proportions for hrz level
      let adjReflY = map(maxReflY,hrz,-h(.5),hrz,hTrans)
      let reflY = rnd(yB,adjReflY)
      let relfWidth = rnd(-w(.03),w(.03))
      let reflCol = chCol(pal.drk)
      if (style === 'dev') {
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        pstr4(buff, x, reflY, x + relfWidth, reflY, strW, strW/3, 1, [reflCol[0], reflCol[1], reflCol[2], rnd(85)], 100, OVERLAY) // WAS OVERLAY
      }else if (style === 'neat') {
        bsr(buff, x, reflY, x + relfWidth, reflY, w(.02), reflCol[0], reflCol[1], reflCol[2], rnd(85), 'none', 'refl')
      }else if (style === 'orig'){
        bsr(buff, x, reflY, x + relfWidth, reflY, vStrW, reflCol[0], reflCol[1], reflCol[2], rnd(65))
      }
    }
  }
  if (style === 'dev' || style === 'orig') {
    let numSecs = rnd(8,18)
    if (style === 'dev') {
      arLin(buff,numSecs/2,tl,tr,br,bl,pal.drk,0,1)
      arLin(buff,numSecs,tl,tr,br,bl,pal.drk,0,1)
    }

    let detail = rnd()
    if (detail < .2) {
      newPt = p5vl(tl,tr,rnd(.6,1.5))
      newPt2 = p5vl(bl,tl,rnd(.6,1.5))
      c = chCol(pal.accents)
      strW = rnd(w(.001),w(.003))
      strW_orig = rnd(w(.03),w(.08))
      if (style === 'dev') {
        pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,strW,w(.001),1,c,30,OVERLAY)
        pstr4(p3,bl.x,bl.y,newPt2.x,newPt2.y,strW,w(.001),1,c,30,OVERLAY)
      }else if (style === 'orig') {
        bsr(p3,tl.x,tl.y,newPt.x,newPt.y, strW_orig, c[0], c[1], c[2], rnd(165,225))
        bsr(p3,bl.x,bl.y,newPt2.x,newPt2.y, strW_orig, c[0], c[1], c[2], rnd(165,225))
      }
    }else if (detail < .2) {
      newPt = p5vl(tr,tl,rnd(.6,1.5))
      newPt2 = p5vl(tr,br,rnd(.6,1.5))
      newPt3 = p5vl(bl,br,rnd(.6,1.5))
      c = chCol(pal.accents)
      strW = rnd(w(.001),w(.003))
      if (style === 'dev') {
        pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,strW,w(.001),1,c,30,OVERLAY)
        pstr4(p3,bl.x,bl.y,newPt2.x,newPt2.y,strW,w(.001),1,c,30,OVERLAY)
        pstr4(p3,bl.x,bl.y,newPt3.x,newPt3.y,strW,w(.001),1,c,30,OVERLAY)
      }else if (style === 'orig') {
        bsr(p3,tl.x,tl.y,newPt.x,newPt.y, strW_orig, c[0], c[1], c[2], rnd(165,225))
        bsr(p3,bl.x,bl.y,newPt2.x,newPt2.y, strW_orig, c[0], c[1], c[2], rnd(165,225))
        bsr(p3,bl.x,bl.y,newPt3.x,newPt3.y, strW_orig, c[0], c[1], c[2], rnd(165,225))
      }
    }
  }
  buff.pop()
}

function makePoly6(buff,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,col,pal,type,style) {
  makePoly4(buff,x1,y1,x2,y2,x5,y5,x6,y6,col,pal,type,style)
  makePoly4(buff,x2,y2,x3,y3,x4,y4,x5,y5,col,pal,type,style)
}

function arLin(buff,numSecs,tl,tr,br,bl,pal,minSpl,maxSpl,type) {
  buff.push()
  for (let i = 0; i < numSecs; i++) { // WAS SET TO NUMSECS-1
    let col = color(chCol(pal))
    let lerpVal1 = i/numSecs
    let lerpVal2 = (i+1)/numSecs
    let tvl = p5vl(tl,bl,lerpVal1)
    let tvr = p5vl(tr,br,lerpVal1)
    let bvl = p5vl(tl,bl,lerpVal2)
    let bvr = p5vl(tr,br,lerpVal2)
    let t_split = rnd(minSpl,maxSpl)
    let dir = rnd()
    buff.stroke(col)
    let bldAlpha;
    if (type === 'metroBuilding') {
      bldAlpha = rnd(10,80);
    }else{
      bldAlpha = rnd(90,220);
    }
    buff.strokeWeight(w(.001))
    if (dir < .5) {
      let lpt = p5vl(tvl,tvr,t_split)
      let lpb = p5vl(bvl,bvr,t_split)
      let numLines = floor(map(dist(tvl.x,tvl.y,tvr.x,tvr.y),0,w(.3),0,100))
      for (let j = 0; j < numLines; j++) {
        let x = map(j,0,numLines,lpt.x,tvr.x)
        let x2 = map(j,0,numLines,lpb.x,bvr.x)
        let y1 = map(j,0,numLines,lpt.y,tvr.y)
        let y2 = map(j,0,numLines,lpb.y,bvr.y)
        let colOffset = rnd(-15,15)
        let nCol = [red(col)+colOffset, green(col)+colOffset, blue(col)+colOffset, bldAlpha]
        buff.stroke(nCol)
        buff.line(x,y1,x2,y2)
      }
    }else{
      let rpt = p5vl(tvl,tvr,t_split)
      let rpb = p5vl(bvl,bvr,t_split)
      let numLines = floor(map(dist(tvl.x,tvl.y,rpt.x,rpt.y),0,w(.3),0,100))
      for (let j = 0; j < numLines; j++) {
        let x = map(j,0,numLines,tvl.x,rpt.x)
        let x2 = map(j,0,numLines,bvl.x,rpb.x)
        let y1 = map(j,0,numLines,tvl.y,rpt.y)
        let y2 = map(j,0,numLines,bvl.y,rpb.y)
        let colOffset = rnd(-15,15)
        let nCol = [red(col)+colOffset, green(col)+colOffset, blue(col)+colOffset, bldAlpha]
        buff.stroke(nCol)
        buff.line(x,y1,x2,y2)
      }
    }
  }
  buff.pop()
}

function wedge_V(buff,style,x,yB,xS,yH,col) {
  let x1 = x - xS/2;
  let x2 = x + xS/2;
  let yT = yB - yH;
  let ySplitVal = rnd(.3,.7);
  let ySplit = lerp(yB,yT,ySplitVal);
  let xSplit = x;
  let dir = rnd()
  let numLines = 200;
  for (let i = 0; i < numLines; i++) {
    let y = map(i,0,numLines,yT,yB)
    if (dir < .5) {
      xR = x2
      if (y < ySplit) {
        xL = map(y,yT,ySplit,xSplit,x1)
      }else{
        xL = x1
      }
    }else{
      xL = x1
      if (y < ySplit) {
        xR = map(y,yT,ySplit,xSplit,x2)
      }else{
        xR = x2
      }
    }
    if (style === 'dev') {
      pstr4(buff,xL,y,xR,y,w(.005),w(.002),1,col,30,OVERLAY)
    }else if (style === 'orig') {
      bsr(buff, xL,y,xR,y, w(.05), red(col), green(col), blue(col), alpha(col), 'none')
    }else if (style === 'neat') {
      buff.stroke(col)
      buff.strokeWeight(w(.001))
      buff.line(xL,y,xR,y)
    }
  }
}

function wedge_H(buff,style,pal,y,yS,xLength,col,orientation,blendType) {
  let y1 = y - yS/2;
  let y2 = y + yS/2;
  if (orientation < .5){
    xB = -w(.5)
    xEnd = xB + xLength;
  }else{
    xB = w(.5)
    xEnd = xB - xLength;
  }
  let xSplitVal = rnd(.3,.7);
  let xSplit = lerp(xB,xEnd,xSplitVal);
  let ySplit = y;
  let h_or_v = rnd()
  let dir = rnd()

  if (style === 'dev') {
    buff.push()
    let detail = rnd()
    dCol = color(chCol(pal.suns))
    dCol.setAlpha(alpha(col)*5)
    if (detail < .3) {
      let pt1 = cV(xB,y2)
      let pt2 = cV(xSplit,ySplit)
      pstr4(buff,pt1.x,pt1.y,pt2.x,pt2.y,w(.01),w(.0035),1,dCol,30,BLEND)
    }else if (detail < .6) {
      let pt1 = cV(xEnd,y1)
      let pt2 = cV(xB,y1)
      pstr4(buff,pt1.x,pt1.y,pt2.x,pt2.y,w(.01),w(.0035),1,dCol,30,BLEND)
    }
    buff.pop()
  }

  //col.setAlpha(alpha(col))
  let numLinesV = 200;
  let numLinesH = 250;
  if (h_or_v < .5) {
    if (orientation < .5) {
      for (let i = 0; i < numLinesV; i++) {
        let x = map(i,0,numLinesV,xB,xEnd)
        if (dir < .5) {
          yT = y1
          if (x < xSplit) {
            yB = y2
          }else{
            yB = map(x,xSplit,xEnd,y2,ySplit)
          }
        }else{
          yB = y2
          if (x < xSplit) {
            yT = y1
          }else{
            yT = map(x,xSplit,xEnd,y1,ySplit)
          }
        }
        if (style === 'dev') {
          pstr4(buff,x,yT,x,yB,w(.005),w(.003),1,col,30,blendType)
        }else if (style === 'neat') {
          dsr(buff, x,yT,x,yB, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
        }else if (style === 'orig') {
          bsr(buff, x,yT,x,yB, w(.05), red(col), green(col), blue(col), alpha(col))
        }
      }
    }else{
      for (let i = 0; i < numLinesV; i++) {
        let x = map(i,0,numLinesV,xB,xEnd)
        if (dir < .5) {
          yT = y1
          if (x > xSplit) {
            yB = y2
          }else{
            yB = map(x,xSplit,xEnd,y2,ySplit)
          }
        }else{
          yB = y2
          if (x > xSplit) {
            yT = y1
          }else{
            yT = map(x,xSplit,xEnd,y1,ySplit)
          }
        }
        if (style === 'dev') {
          pstr4(buff,x,yT,x,yB,w(.005),w(.003),1,col,30,blendType)
        }else if (style === 'neat') {
          dsr(buff, x,yT,x,yB, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
        }else if (style === 'orig') {
          bsr(buff, x,yT,x,yB, w(.05), red(col), green(col), blue(col), alpha(col))
        }
      }
    }
  }else{
    if (orientation < .5) {
      for (let i = 0; i < numLinesH; i++) {
        let y = map(i,0,numLinesH,y1,y2)
        if (dir < .5) {
          xL = xB
          if (y < ySplit) {
            xR = xEnd
          }else{
            xR = map(y,ySplit,y2,xEnd,xSplit)
          }
        }else{
          xL = xB
          if (y < ySplit) {
            xR = map(y,ySplit,y2,xSplit,xEnd)
          }else{
            xR = xEnd
          }
        }
        if (y < hrz) {
          if (style === 'dev') {
            pstr4(buff,xL,y,xR,y,w(.005),w(.003),1,col,300,blendType)
          }else if (style === 'neat') {
            dsr(buff, xL,y,xR,y, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
          }else if (style === 'orig') {
            bsr(buff, xL,y,xR,y, w(.05), red(col), green(col), blue(col), alpha(col))
          }
        }
      }
    }else{
      for (let i = 0; i < numLinesH; i++) {
        let y = map(i,0,numLinesH,y1,y2)
        if (dir < .5) {
          xR = xB
          if (y < ySplit) {
            xL = xEnd
          }else{
            xL = map(y,ySplit,y2,xEnd,xSplit)
          }
        }else{
          xR = xB
          if (y < ySplit) {
            xL = map(y,ySplit,y2,xSplit,xEnd)
          }else{
            xL = xEnd
          }
        }
        if (y < hrz) {
          if (style === 'dev') {
            pstr4(buff,xL,y,xR,y,w(.005),w(.003),1,col,300,blendType)
          }else if (style === 'neat') {
            dsr(buff, xL,y,xR,y, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
          }else if (style === 'orig') {
            bsr(buff, xL,y,xR,y, w(.05), red(col), green(col), blue(col), alpha(col))
          }
        }
      }
    }
  }
}

//////////////////////////////////////////////////////////
////////////////////// house types ///////////////////////

function sgmh(buff, style, pal, xM, yB, xW, yH, dir, time, type) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let sideWidth = rnd(3,6)
  let x3 = x1 + xW/sideWidth
  let wrl = x3
  let wrr = x2
  if (dir === 'r') {
    x3 = x2 - xW/sideWidth
    wrl = x1
    wrr = x3
  }

  let hTrans;
  if (hrz == -h(.2)) {hTrans = h(.5)}
  if (hrz == 0) {hTrans = h(.5)}
  if (hrz == h(.32)) {hTrans = h(.8)}

  let dD = map(yB,-h(.4),h(.5),70,10)
  let yDiff = yH/dD
  if (type === 'tower') {yDiff = yH/(dD*5)}
  let yth = yB - yH - yDiff
  let ytl = yB - yH + yDiff
  let refl_dist_yth = hrz - dist(0,hrz,0,yth)
  let refl_dist_ytl = hrz - dist(0,hrz,0,ytl)
  let refl_dist_yB = hrz - dist(0,hrz,0,yB)
  let refl_yth = map(refl_dist_yth,hrz,-h(.5),hrz,hTrans)
  let refl_ytl = map(refl_dist_ytl,hrz,-h(.5),hrz,hTrans)
  let refl_yB = map(refl_dist_yB,hrz,-h(.5),hrz,hTrans)
  let col = chCol(pal.bld)

  if (style === 'neat' || style === 'orig' || style === 'dev') {
    if (time === 'day') {
      baseCol = [235,235,235]
    }else if (time === 'twilight') {
      //baseCol = [125,125,125]
      baseCol = [46,49,96]
    }else if (time === 'night') {
      baseCol = [15,15,15]
    }
  }

  if (dir === 'l') {
    stl = cV(x1,ytl)
    sbl = cV(x1,yB)
    tl = cV(x3,yth)
    tr = cV(x2,ytl)
    br = cV(x2,yB)
    bl = cV(x3,yB)
    r_tl = cV(x3,refl_yth)
    r_tr = cV(x2,refl_ytl)
    r_br = cV(x2,refl_yB)
    r_bl = cV(x3,refl_yB)
  }else if (dir === 'r') {
    str = cV(x2,ytl)
    sbr = cV(x2,yB)
    tl = cV(x1,ytl)
    tr = cV(x3,yth)
    br = cV(x3,yB)
    bl = cV(x1,yB)
    r_tl = cV(x1,refl_ytl)
    r_tr = cV(x3,refl_yth)
    r_br = cV(x3,refl_yB)
    r_bl = cV(x1,refl_yB)
  }

  buff.fill(baseCol)
  if (style === 'dev') {
    if (time === 'day') {
      buff.fill(col)
    }else if (style === 'twilight') {
      buff.fill(col[0]/2,col[1]/2,col[2]/2)
    }else if (style === 'night') {
      buff.fill(col[0]/4,col[1]/4,col[2]/4)
    }
  }
  buff.noStroke()
  buff.beginShape()
    buff.vertex(x1,hrz)
    buff.vertex(x1,ytl)
    buff.vertex(x3,yth)
    buff.vertex(x2,ytl)
    buff.vertex(x2,hrz)
  buff.endShape(CLOSE)

  let num_lines = 120;
  if (type === 'tower') {num_lines = 65}

  let drkCols1 = []
  let drkCols2 = []
  for (let i = 0; i < Object.keys(wLightsPal).length; i++){
    drkCols1.push(Object.values(wLightsPal)[i])
    drkCols2.push(Object.values(wLightsPal)[i])
  }
  shArr(drkCols1)
  shArr(drkCols2)
  let drkCol = chCol(pal.drk)

  let strW_mult = map(hrz,-h(.2),h(.32),.8,1.3)

  for (let i = 0; i < num_lines; i++) {
    let x = map(i,0,num_lines,x1,x2)
    if (x < x3) {
      y = map(x,x1,x3,ytl,yth)
      if (dir === 'l'){cD = 100; cD2 = 0}else{cD = 0; cD2 = 30}
    }else{
      y = map(x,x3,x2,yth,ytl)
      if (dir === 'r'){cD = 100; cD2 = 0}else{cD = 0; cD2 = 30}
    }
    // STYLES ///////////////
    if (style === 'orig') {
      bsr(buff, x, y, x, yB, w(.03)*strW_mult, col[0]-cD, col[1]-cD, col[2]-cD, 165)
      let xOffset = rnd(-w(.002),w(.002))
      bsr(p2, x + xOffset, y, x + xOffset, yB, w(.02)*strW_mult, col[0]-cD, col[1]-cD, col[2]-cD, 65)
      // WINDOWS
      let numWindows = 4
      if (wrr - wrl > width/8) {numWindows = 5}
      let ywt = y + yH/10
      let ywb = ywt + yH/6
      if (type === 'tower') {
        wPos = lerp(wrl,wrr,.5)
        if (x > wPos - xW/8 && x < wPos + xW/8) {
          drkCol1 = drkCols1[0]
          if (time === 'night') {
            bsr(buff, x, ywt, x, ywb, w(.05)*strW_mult, drkCol1[0], drkCol1[1], drkCol1[2], 125)
          }
          bsr(buff, x, ywt, x, ywb, w(.05)*strW_mult, drkCol[0]/2, drkCol[1]/2, drkCol[2]/2, 125)
        }
      }else if (type === 'sanGm' || type === 'cqtr'){
        for (let i = 1; i < numWindows; i++) {
          //if (time === 'night') {drkCol = chCol(wLightsPal)}
          if (time === 'night') {
            keyNum = floor(map(i,0,numWindows,0,drkCols1.length))
            drkCol1 = drkCols1[keyNum]
            drkCol2 = drkCols2[keyNum]
            //console.log(drkCol)
          }
          wPos = lerp(wrl,wrr,.2*i)
          if (x > wPos - xW/32 && x < wPos + xW/32) {
            bsr(buff, x, ywt, x, ywb, w(.05)*strW_mult, drkCol1[0], drkCol1[1], drkCol1[2], 125)
            bsr(buff, x, ywt + yH/5, x, ywb + yH/5, w(.05)*strW_mult, drkCol2[0], drkCol2[1], drkCol2[2], 125)
          }
        }
      }
      // REFLECTIONS
      if (type === 'metro') {
        let minY = hrz
        let maxY = map(dist(x,y,x,hrz),0,dist(x,-h(.5),0,hrz),hrz,h(.5))
        let reflY = rnd(minY,maxY)
        let reflY2 = reflY + rnd(dist(x,y,x,hrz))
        let vStrW = rnd(w(.03),w(.08))
        bsr(buff, x, reflY, x, reflY2, vStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
        if (dir === 'l') {
          reflXMain = rnd(x3,x2)
          reflXSide = rnd(x1,x3)
          reflLMain = rnd(x2-x3)
          relfLSide = rnd(x3-x1)
        }else if (dir === 'r') {
          reflXMain = rnd(x1,x3)
          reflXSide = rnd(x3,x2)
          reflLMain = rnd(x3-x1)
          relfLSide = rnd(x2-x3)
        }
        let hStrW = rnd(w(.03),w(.08))
        let hY = map(y,hrz,-h(.5),hrz,h(.5))
        let hY2 = rnd(hrz,hY)
        bsr(buff, x, hY, x + rnd(-reflLMain,reflLMain), hY, hStrW/3, col[0]-cD, col[1]-cD, col[2]-cD, rnd(30,60)) // DRAWS THICK LINES
        bsr(buff, x, hY2, x + rnd(-reflLMain,reflLMain), hY2, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(90,185))
      }
    }else if (style === 'neat') {
      dsr(buff, x, y, x, hrz, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      /*if (type === 'cqtr' || type === 'metro') {
        let reflDist = dist(x,hrz,x,y)
        let reflDistMin = dist(x,hrz,x,yB)
        let maxReflY = hrz - reflDist
        let minReflY = hrz - reflDistMin
        let adjReflY = map(maxReflY,hrz,-h(.5),hrz,hTrans)
        let adjReflYMin = map(minReflY,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8
        //bsr(buff, x, reflY, x + reflWidth, reflY, w(.01), col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'ovr')
        //bsr(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), w(.01), col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'ovr')
      }*/
    }else if (style === 'dev') {
      pstr4(buff, x, y, x, hrz, w(.003), w(.003), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 135], 200, OVERLAY)
      numSecs = rnd(3,10)
      //arLin(buff,numSecs,tl,tr,br,bl,pal.bld,0,1)
      // WINDOWS
      let numWindows = 4
      if (wrr - wrl > width/8) {numWindows = 5}
      let win_cD = 3
      let drkCol = [col[0]/win_cD, col[1]/win_cD, col[2]/win_cD]
      let ywt = y + yH/10
      let ywb = ywt + yH/6
      if (type === 'tower') {
        wPos = lerp(wrl,wrr,.5)
        if (x > wPos - xW/8 && x < wPos + xW/8) {
          pstr4(buff, x, ywt, x, ywb, w(.002), w(.0005), 1, [drkCol[0], drkCol[1], drkCol[2]], 100, BLEND)
        }
      }else if (type === 'sanGm' || type === 'cqtr'){
        for (let i = 1; i < numWindows; i++) {
          if (time === 'night') {drkCol = chCol(wLightsPal)}
          wPos = lerp(wrl,wrr,.2*i)
          if (x > wPos - xW/32 && x < wPos + xW/32) {
            pstr4(buff, x, ywt, x, ywb, w(.002), w(.0005), 1, [drkCol[0], drkCol[1], drkCol[2]], 100, BLEND)
            pstr4(buff, x, ywt + yH/4, x, ywb + yH/4, w(.002), w(.0005), 1, [drkCol[0], drkCol[1], drkCol[2]], 100, BLEND)
          }
        }
      }
      if (type === 'cqtr' || type === 'metro') {
        let reflDist = dist(x,hrz,x,y)
        let reflDistMin = dist(x,hrz,x,yB)
        let maxReflY = hrz - reflDist
        let minReflY = hrz - reflDistMin
        let adjReflY = map(maxReflY,hrz,-h(.5),hrz,hTrans)
        let adjReflYMin = map(minReflY,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.003),maxWeight)
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*1.3, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, strW/1.5, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }
    }
  }
  // WINDOWS
  /*let numWindows = 4
  if (wrr - wrl > width/8) {numWindows = 5}
  for (let k = 0; k < num_lines; k++) {
    xP = map(k,0,num_lines,wrl,wrr)
  }
  let yP = map(xP,wrl,wrr,tl.y,tr.y)
  let ywt = yP + yH/8
  console.log(ywt)
  let ywb = ywt + yH/12
  if (type === 'tower') {
    wPos = lerp(wrl,wrr,.5)
    //if (x > wPos - xW/8 && x < wPos + xW/8) {
    let numLines = 7
    for (let j = 0; j < numLines; j++) {
      let winX = map(j,0,numLines,wPos-xW/8,wPos+xW/8)
      bsr(buff, winX, ywt, winX, ywb, w(.05)*strW_mult, drkCol[0], drkCol[1], drkCol[2], 90)
    }
  }else if (type === 'sanGm' || type === 'cqtr'){
    for (let i = 1; i < numWindows; i++) {
      if (time === 'night') {drkCol = chCol(wLightsPal)}
      wPos = lerp(wrl,wrr,.2*i)
      let numLines = 5
      for (let j = 0; j < numLines; j++) {
        let winX = map(j,0,numLines,wPos-xW/32,wPos+xW/32)
        bsr(buff, winX, ywt, winX, ywb, w(.05)*strW_mult, drkCol[0], drkCol[1], drkCol[2], 90)
        bsr(buff, winX, ywt + yH/5, winX, ywb + yH/5, w(.05)*strW_mult, drkCol[0], drkCol[1], drkCol[2], 90)
      }
    }
  }*/
  // DETAIL
  if (style === 'dev') {
    for (let i = 0; i < 5; i++) {
      arLin(buff,numSecs,tl,tr,br,bl,pal.bld,0,1,'metroBuilding')
    }
  }
  if (style === 'dev' || style === 'orig') {
    let detail = rnd()
    strW_dev = rnd(w(.0015),w(.0025)) // upper value may be too high / lines too heavy
    strW_orig = rnd(w(.04),w(.08))
    c = color(chCol(pal.accents))
    c.setAlpha(155)
    if (detail < .2) {
      newPt = p5vl(tl,tr,rnd(.6,1.5))
      newPt2 = p5vl(tl,bl,rnd(.6,1.5))
      if (style === 'dev') {
        pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
      }else if (style === 'orig') {
        bsr(p3,tl.x,tl.y,newPt.x,newPt.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        bsr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
      }
    }else if (detail < .4) {
      newPt = p5vl(tr,br,rnd(.6,1.5))
      newPt2 = p5vl(tl,bl,rnd(.5,2.5))
      newPt3 = p5vl(tl,tr,rnd(1,2.5))
      if (style === 'dev') {
        pstr4(p3,tr.x,tr.y,newPt.x,newPt.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt3.x,newPt3.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
      }else if (style === 'orig') {
        bsr(p3,tr.x,tr.y,newPt.x,newPt.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        bsr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        bsr(p3,tl.x,tl.y,newPt3.x,newPt3.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
      }
    }else if (detail < .6) {
      newPt = p5vl(bl,tl,rnd(1,15))
      newPt2 = p5vl(tr,br,rnd(1,15))
      newPt3 = p5vl(tr,tl,rnd(1,2.5))
      if (style === 'dev') {
        pstr4(p3,bl.x,bl.y,newPt.x,newPt.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        pstr4(p3,tr.x,tr.y,newPt2.x,newPt2.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        pstr4(p3,tr.x,tr.y,newPt3.x,newPt3.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
      }else if (style === 'orig') {
        bsr(p3,bl.x,bl.y,newPt.x,newPt.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        bsr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        bsr(p3,tl.x,tl.y,newPt3.x,newPt3.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
      }
      // REFL 
      if (type === 'cqtr' || type === 'metro') {
        reflPt = p5vl(r_bl,r_tl,rnd(1,15))
        reflPt2 = p5vl(r_tr,r_br,rnd(1,15))
        reflPt3 = p5vl(r_tr,r_tl,rnd(1,2.5))
        reflCol = chCol(pal.bld)
        r_strW_dev = rnd(w(.001),w(.003))
        r_strW_orig = rnd(w(.03),w(.07))
        if (style === 'dev') {
          pstr4(p3,r_bl.x,r_bl.y,reflPt.x,reflPt.y,r_strW_dev,strW_dev/1.3,1,reflCol,300,OVERLAY)
          pstr4(p3,r_tr.x,r_tr.y,reflPt2.x,reflPt2.y,r_strW_dev,strW_dev/1.3,1,reflCol,300,OVERLAY)
          pstr4(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_dev,strW_dev/1.3,1,reflCol,300,OVERLAY)
        }else if (style === 'orig') {
          bsr(p3,r_bl.x,r_bl.y,reflPt.x,reflPt.y,r_strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
          bsr(p3,r_tr.x,r_tr.y,reflPt2.x,reflPt2.y,r_strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
          bsr(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        }
      }
    }
    else if (detail < .9) {
      newPt = p5vl(br,tr,rnd(1,25))
      newPt2 = p5vl(tl,tr,rnd(1,5))
      newPt3 = p5vl(tr,br,rnd(1,2.5))
      if (style === 'dev') {
        pstr4(p3,br.x,br.y,newPt.x,newPt.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        pstr4(p3,tr.x,tr.y,newPt3.x,newPt3.y,strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
      }else if (style === 'orig') {
        bsr(p3,br.x,br.y,newPt.x,newPt.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        bsr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        bsr(p3,tr.x,tr.y,newPt3.x,newPt3.y,strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
      }
      // REFL 
      if (type === 'cqtr' || type === 'metro') {
        reflPt = p5vl(r_br,r_tr,rnd(1,25))
        reflPt2 = p5vl(r_tl,r_tr,rnd(1,5))
        reflPt3 = p5vl(r_tr,r_br,rnd(1,2.5))
        reflCol = chCol(pal.bld)
        r_strW_dev = rnd(w(.001),w(.003))
        r_strW_orig = rnd(w(.03),w(.07))
        if (style === 'dev') {
          pstr4(p3,r_br.x,r_br.y,reflPt.x,reflPt.y,r_strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
          pstr4(p3,r_tl.x,r_tl.y,reflPt2.x,reflPt2.y,r_strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
          pstr4(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_dev,strW_dev/1.3,1,c,300,OVERLAY)
        }else if (style === 'orig') {
          bsr(p3,r_br.x,r_br.y,reflPt.x,reflPt.y,r_strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
          bsr(p3,r_tl.x,r_tl.y,reflPt2.x,reflPt2.y,r_strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
          bsr(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_orig,red(c),green(c),blue(c),rnd(100,225),'down','ovr')
        }
      }
    }
  }
}

function sanGmTower(buff, style, pal, xM, yB, xW, yH, time) {
  sgmh(buff, style, pal, xM, yB, xW, yH, dir, time, 'tower')
}

function building(buff, style, pal, xM, yB, xW, yH, dir, time, type) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let sideWidth = rnd(4,9)
  let xT = x1 + xW/sideWidth
  let lVal1 = rnd(.1,.45)
  let lVal2 = lVal1*2
  let xBr1 = lerp(xT,x2,lVal1)
  let xBr2 = lerp(xT,x2,lVal2)

  if (style === 'neat' || style === 'orig' || style === 'geom' || style === 'dev') {
    if (time === 'day') {
      baseCol = [235,235,235]
    }else if (time === 'twilight') {
      //baseCol = [125,125,125]
      baseCol = [46,49,96]
    }else if (time === 'night') {
      baseCol = [15,15,15]
    }
  }

  let hTrans;
  if (hrz == -h(.2)) {hTrans = h(.5)}
  if (hrz == 0) {hTrans = h(.5)}
  if (hrz == h(.32)) {hTrans = h(.8)}

  let dD = map(yB,-h(.4),h(.5),70,10)
  let yDiff = yH/dD
  if (type === 'tower') {yDiff = yH/(dD*5)}
  let yth = yB - yH - yDiff
  let ytl = yB - yH + yDiff
  let r_yth = map(yth,hrz,-h(.5),hrz,hTrans)
  let r_ytl = map(ytl,hrz,-h(.5),hrz,hTrans)
  let col = chCol(pal.bld)
  /*
  let side_tl = cV(x1,ytl)
  let side_tr = cV(xT,yth)
  let side_br = cV(xT,yB)
  let side_bl = cV(x1,yB)*/

  let xBr1Y = lerp(yth,ytl,lVal1)
  let xBr2Y = lerp(yth,ytl,lVal2)

  let r_xBr1Y = map(xBr1Y,hrz,-h(.5),hrz,hTrans)
  let r_xBr2Y = map(xBr2Y,hrz,-h(.5),hrz,hTrans)

  let sec1_tl = cV(xT,yth)
  let sec1_tr = cV(xBr1,xBr1Y)
  let sec1_br = cV(xBr1,lerp(yB,xBr1Y,.8))
  let sec1_bl = cV(xT,lerp(yB,yth,.8))

  let sec2_tl = cV(xT,sec1_bl.y)
  let sec2_tr = cV(xBr2,lerp(yB,xBr2Y,.8))
  let sec2_br = cV(xBr2,lerp(yB,xBr2Y,.5))
  let sec2_bl = cV(xT,lerp(yB,yth,.5))

  let sec3_tl = cV(xT,sec2_bl.y)
  let sec3_tr = cV(x2,lerp(yB,ytl,.5))
  let sec3_br = cV(x2,yB)
  let sec3_bl = cV(xT,yB)

  let r_sec1_tl = cV(xT,r_yth)
  let r_sec1_tr = cV(xBr1,r_xBr1Y)
  let r_sec1_br = cV(xBr1,lerp(hrz,r_xBr1Y,.8))
  let r_sec1_bl = cV(xT,lerp(hrz,r_yth,.8))

  let r_sec2_tl = cV(xT,r_sec1_bl.y)
  let r_sec2_tr = cV(xBr2,lerp(hrz,r_xBr2Y,.8))
  let r_sec2_br = cV(xBr2,lerp(hrz,r_xBr2Y,.5))
  let r_sec2_bl = cV(xT,lerp(hrz,r_yth,.5))

  let r_sec3_tl = cV(xT,r_sec2_bl.y)
  let r_sec3_tr = cV(x2,lerp(hrz,r_ytl,.5))
  let r_sec3_br = cV(x2,hrz)
  let r_sec3_bl = cV(xT,hrz)

  if (dir === 'r') {
    xT = x2 - xW/sideWidth
    xBr1 = lerp(xT,x1,lVal1)
    xBr2 = lerp(xT,x1,lVal2)

    sec1_tr = cV(xT,yth)
    sec1_tl = cV(xBr1,xBr1Y)
    sec1_bl = cV(xBr1,lerp(yB,xBr1Y,.8))
    sec1_br = cV(xT,lerp(yB,yth,.8))

    sec2_tr = cV(xT,sec1_bl.y)
    sec2_tl = cV(xBr2,lerp(yB,xBr2Y,.8))
    sec2_bl = cV(xBr2,lerp(yB,xBr2Y,.5))
    sec2_br = cV(xT,lerp(yB,yth,.5))

    sec3_tr = cV(xT,sec2_bl.y)
    sec3_tl = cV(x1,lerp(yB,ytl,.5))
    sec3_bl = cV(x1,yB)
    sec3_br = cV(xT,yB)

    r_sec1_tr = cV(xT,r_yth)
    r_sec1_tl = cV(xBr1,r_xBr1Y)
    r_sec1_bl = cV(xBr1,lerp(yB,r_xBr1Y,.8))
    r_sec1_br = cV(xT,lerp(yB,r_yth,.8))

    r_sec2_tr = cV(xT,r_sec1_bl.y)
    r_sec2_tl = cV(xBr2,lerp(yB,r_xBr2Y,.8))
    r_sec2_bl = cV(xBr2,lerp(yB,r_xBr2Y,.5))
    r_sec2_br = cV(xT,lerp(yB,r_yth,.5))

    r_sec3_tr = cV(xT,r_sec2_bl.y)
    r_sec3_tl = cV(x1,lerp(yB,r_ytl,.5))
    r_sec3_bl = cV(x1,yB)
    r_sec3_br = cV(xT,yB)
  }

  buff.noStroke()
  buff.fill(baseCol)
  if (dir === 'l') {
    buff.beginShape()
      buff.vertex(x1,ytl)
      buff.vertex(xT,yth)
      buff.vertex(xT,yB)
      buff.vertex(x1,yB)
    buff.endShape(CLOSE)
    buff.beginShape()
      buff.vertex(sec1_tl.x,sec1_tl.y)
      buff.vertex(sec1_tr.x,sec1_tr.y)
      buff.vertex(sec1_br.x,sec1_br.y)
      buff.vertex(sec2_tr.x,sec2_tr.y)
      buff.vertex(sec2_br.x,sec2_br.y)
      buff.vertex(sec3_tr.x,sec3_tr.y)
      buff.vertex(sec3_br.x,sec3_br.y)
      buff.vertex(sec3_bl.x,sec3_bl.y)
    buff.endShape(CLOSE)
  }else if (dir === 'r'){
    buff.beginShape()
      buff.vertex(xT,yth)
      buff.vertex(x2,ytl)
      buff.vertex(x2,yB)
      buff.vertex(xT,yB)
    buff.endShape(CLOSE)
    buff.beginShape()
      buff.vertex(sec1_tr.x,sec1_tr.y)
      buff.vertex(sec1_tl.x,sec1_tl.y)
      buff.vertex(sec1_bl.x,sec1_bl.y)
      buff.vertex(sec2_tl.x,sec2_tl.y)
      buff.vertex(sec2_bl.x,sec2_bl.y)
      buff.vertex(sec3_tl.x,sec3_tl.y)
      buff.vertex(sec3_bl.x,sec3_bl.y)
      buff.vertex(sec3_br.x,sec3_br.y)
    buff.endShape(CLOSE)
  }

  if (style === 'dev') {
    arLin(buff,12,sec1_tl,sec1_tr,sec1_br,sec1_bl,pal.bld,0,1,'metroBuilding')
    arLin(buff,15,sec2_tl,sec2_tr,sec2_br,sec2_bl,pal.bld,0,1,'metroBuilding')
    arLin(buff,20,sec3_tl,sec3_tr,sec3_br,sec3_bl,pal.bld,0,1,'metroBuilding')
  }

  if (style === 'orig') {xStep = w(.0003)}
  if (style === 'dev') {xStep = w(.0006)}

  let num_lines = 75
  if (style === 'neat') {num_lines = 120}

  let strW_mult = map(hrz,-h(.2),h(.32),.8,1.3)

  //for (let x = x1; x < x2; x += xStep) {
  for (let i = 0; i < num_lines; i++) {
    let x = map(i,0,num_lines,x1,x2)
    if (dir === 'l') {
      if (x < xT) {
        cD = 100;
        y = map(x,x1,xT,ytl,yth)
      }else{
        cD = 0;
        if (x < xBr1) {
          yMult = 1
        }else if (x < xBr2) {
          yMult = .8
        }else{
          yMult = .5
        }
        y = lerp(yB,map(x,xT,x2,yth,ytl),yMult)
      }
      if (style === 'orig') {
        bsr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // REFLS
        let minY = hrz
        let maxY = map(dist(x,y,x,hrz),0,dist(x,-h(.5),0,hrz),hrz,h(.5))
        let reflY = rnd(minY,maxY)
        let reflY2 = reflY + rnd(dist(x,y,x,hrz))
        bsr(buff, x, reflY, x, reflY2, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
        reflXMain = rnd(xT,x2)
        reflXSide = rnd(x1,xT)
        reflLMain = rnd(x2-xT)
        relfLSide = rnd(xT-x1)

        hStrW = rnd(w(.02),w(.05))

        let hY = map(y,hrz,-h(.5),hrz,h(.5))
        let hY2 = rnd(hrz,hY)
        bsr(buff, x, hY, x + rnd(-reflLMain,reflLMain), hY, hStrW*strW_mult, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85)) // DRAWS THICK LINES
        bsr(buff, x, hY2, x + rnd(-reflLMain,reflLMain), hY2, hStrW*strW_mult, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
      }else if (style === 'dev') {
        pstr4(buff, x, y, x, yB, w(.003), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 100], 200, HARD_LIGHT)
        //bsr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // REFLS
        let reflDist = dist(x,hrz,x,y)
        let reflDistMin = dist(x,hrz,x,yB)
        let maxReflY = hrz - reflDist
        let minReflY = hrz - reflDistMin
        let adjReflY = map(maxReflY,hrz,-h(.5),hrz,hTrans)
        let adjReflYMin = map(minReflY,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }else if (style === 'neat') {
        dsr(buff, x, y, x, yB, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      }
    }
    if (dir === 'r') {
      if (x > xT) {
        cD = 100;
        y = map(x,xT,x2,yth,ytl)
      }else{
        cD = 0;
        if (x > xBr1) {
          yMult = 1
        }else if (x > xBr2) {
          yMult = .8
        }else{
          yMult = .5
        }
        y = lerp(yB,map(x,x1,xT,ytl,yth),yMult)
      }
      if (style === 'orig') {
        bsr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)

        // REFLS
        let minY = hrz
        let maxY = map(dist(x,y,x,hrz),0,dist(x,-h(.5),0,hrz),hrz,h(.5))
        let reflY = rnd(minY,maxY)
        let reflY2 = reflY + rnd(dist(x,y,x,hrz))
        bsr(buff, x, reflY, x, reflY2, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
        reflXMain = rnd(xT,x2)
        reflXSide = rnd(x1,xT)
        reflLMain = rnd(x2-xT)
        relfLSide = rnd(xT-x1)
        hStrW = rnd(w(.02),w(.05))

        let hY = map(y,hrz,-h(.5),hrz,h(.5))
        let hY2 = rnd(hrz,hY)
        bsr(buff, x, hY, x + rnd(-reflLMain,reflLMain), hY, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85)) // DRAWS THICK LINES
        bsr(buff, x, hY2, x + rnd(-reflLMain,reflLMain), hY2, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
      }else if (style === 'dev') {
        pstr4(buff, x, y, x, yB, w(.003), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 100], 200, HARD_LIGHT)

        // REFLS
        let reflDist = dist(x,hrz,x,y)
        let reflDistMin = dist(x,hrz,x,yB)
        let maxReflY = hrz - reflDist
        let minReflY = hrz - reflDistMin
        let adjReflY = map(maxReflY,hrz,-h(.5),hrz,hTrans)
        let adjReflYMin = map(minReflY,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8

        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }else if (style === 'neat') {
        dsr(buff, x, y, x, yB, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      }
    }
  }
  // DETAIL
  if (style === 'dev' || style === 'orig') {
    let strWmult = map(hrz,-h(.4),h(.4),1,2)
    strW = rnd(w(.0015),w(.002)) * strWmult
    strWO = rnd(w(.03),w(.06)) * strWmult
    r_strW = rnd(w(.0015),w(.002))
    r_strWO = rnd(w(.03),w(.06))
    let detail = rnd()
    let OV = OVERLAY
    if (detail < .2) {
      nPt = p5vl(sec1_tl,sec1_tr,rnd(.6,1.5))
      nPt2 = p5vl(sec1_tr,sec1_br,rnd(.6,2.5))
      c = chCol(pal.accents)
      if (style === 'dev') {
        pstr4(p3,sec1_tl.x,sec1_tl.y,nPt.x,nPt.y,strW,strW/1.5,1,c,200,OV)
        pstr4(p3,sec1_tr.x,sec1_tr.y,nPt2.x,nPt2.y,strW,strW/1.5,1,c,200,OV)
      }else{
        bsr(p3,sec1_tl.x,sec1_tl.y,nPt.x,nPt.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec1_tr.x,sec1_tr.y,nPt2.x,nPt2.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
      }
      // FILL
    }else if (detail < .4) {
      nPt = p5vl(sec1_tr,sec1_tl,rnd(.6,1.5))
      nPt2 = p5vl(sec1_tr,sec1_br,rnd(1,3.5))
      nPt3 = p5vl(sec2_tr,sec1_br,rnd(1,1.5))
      nPt4 = p5vl(sec2_tr,sec1_br,rnd(1,1.5))
      c = chCol(pal.accents)
      if (style === 'dev') {
        pstr4(p3,sec1_tr.x,sec1_tr.y,nPt.x,nPt.y,strW,strW/1.5,1,c,200,OV)
        pstr4(p3,sec1_tr.x,sec1_tr.y,nPt2.x,nPt2.y,strW,strW/1.5,1,c,200,OV)
        pstr4(p3,sec2_tr.x,sec2_tr.y,nPt3.x,nPt3.y,strW,strW/1.5,1,c,200,OV)
        pstr4(p3,sec2_tr.x,sec2_tr.y,nPt4.x,nPt4.y,strW,strW/1.5,1,c,200,OV)
      }else{
        bsr(p3,sec1_tr.x,sec1_tr.y,nPt.x,nPt.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec1_tr.x,sec1_tr.y,nPt2.x,nPt2.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec2_tr.x,sec2_tr.y,nPt3.x,nPt3.y, strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec2_tr.x,sec2_tr.y,nPt4.x,nPt4.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
      }
      // FILLS
    }else if (detail < .6) {
      c = chCol(pal.accents)
      nPt = p5vl(sec1_tl,sec1_tr,rnd(.6,1.5))
      // REFL
      reflPt = p5vl(r_sec1_tl,r_sec1_tr,rnd(.6,1.5))
      if (style === 'dev') {
        pstr4(p3,x1,yB,x1,lerp(yB,ytl,rnd(.8,2)),strW,strW/1.5,1,c,200,OV)
        pstr4(p3,xT,yth,xT,lerp(yth,yB,rnd(.5,1.5)),strW,strW/1.5,1,c,200,OV)
        pstr4(p3,sec1_tl.x,sec1_tl.y,nPt.x,nPt.y,strW,strW/1.5,1,c,200,OV)
        pstr4(p3,x1,yB,x1,lerp(yB,r_ytl,rnd(.8,2)),r_strW,r_strW/1.5,1,c,200,OV)
        pstr4(p3,xT,r_yth,xT,lerp(r_yth,yB,rnd(.5,1.5)),r_strW,r_strW/1.5,1,c,200,OV)
        pstr4(p3,r_sec1_tl.x,r_sec1_tl.y,reflPt.x,reflPt.y,r_strW,r_strW/1.5,1,c,200,OV)
      }else{
        bsr(p3,x1,yB,x1,lerp(yB,ytl,rnd(.8,2)),strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,xT,yth,xT,lerp(yth,yB,rnd(.5,1.5)),strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec1_tl.x,sec1_tl.y,nPt.x,nPt.y, strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,x1,yB,x1,lerp(yB,r_ytl,rnd(.8,2)),r_strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,xT,r_yth,xT,lerp(r_yth,yB,rnd(.5,1.5)),r_strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,r_sec1_tl.x,r_sec1_tl.y,reflPt.x,reflPt.y, r_strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
      }
    }else if (detail < .8) {
      nPt = p5vl(sec3_tr,sec3_br,rnd(1,2.5))
      nPt2 = p5vl(sec3_tr,sec3_tl,rnd(.3,1.5))
      nPt3 = p5vl(sec2_tr,sec2_br,rnd(1,1.5))
      nPt4 = p5vl(sec2_tr,sec2_tl,rnd(1,1.5))
      c = chCol(pal.accents)
      // REFL
      reflPt = p5vl(r_sec3_tr,r_sec3_br,rnd(1,2.5))
      reflPt2 = p5vl(r_sec3_tr,r_sec3_tl,rnd(.3,1.5))
      reflPt3 = p5vl(r_sec2_tr,r_sec2_br,rnd(1,1.5))
      reflPt4 = p5vl(r_sec2_tr,r_sec2_tl,rnd(1,1.5))
      reflMinimalPt4 = p5vl(r_sec2_tr,r_sec2_tl,rnd(1,1.5))
      if (style === 'dev') {
        pstr4(p3,sec3_tr.x,sec3_tr.y,nPt.x,nPt.y,strW,strW/3,1,c,200,OV)
        pstr4(p3,sec3_tr.x,sec3_tr.y,nPt2.x,nPt2.y,strW,strW/3,1,c,200,OV)
        pstr4(p3,sec2_tr.x,sec2_tr.y,nPt3.x,nPt3.y,strW,strW/3,1,c,200,OV)
        pstr4(p3,sec2_tr.x,sec2_tr.y,nPt4.x,nPt4.y,strW,strW/3,1,c,200,OV)
        pstr4(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt.x,reflPt.y,r_strW,r_strW/3,1,c,200,OV)
        pstr4(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt2.x,reflPt2.y,r_strW,r_strW/3,1,c,200,OV)
        pstr4(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt3.x,reflPt3.y,r_strW,r_strW/3,1,c,200,OV)
        pstr4(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt4.x,reflPt4.y,r_strW,r_strW/3,1,c,200,OV)
      }else{
        bsr(p3,sec3_tr.x,sec3_tr.y,nPt.x,nPt.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec3_tr.x,sec3_tr.y,nPt2.x,nPt2.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec2_tr.x,sec2_tr.y,nPt3.x,nPt3.y, strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,sec2_tr.x,sec2_tr.y,nPt4.x,nPt4.y,strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt.x,reflPt.y,r_strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt2.x,reflPt2.y,r_strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt3.x,reflPt3.y, r_strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
        bsr(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt4.x,reflPt4.y,r_strWO, c[0], c[1], c[2], rnd(100,225), 'down', 'ovr')
      }
    }
  }
}

function skyScraper(buff, style, pal, xM, yB, xW, yH, dir, time, type) {
  let xL = xM - xW/2;
  let xR = xM + xW/2;
  //let xL2 = xM - xW/4;
  let xL2 = lerp(xL,xR,.2)
  //let xR2 = xM + xW/4;
  let xR2 = lerp(xR,xL,.2)
  //let xL3 = xM - xW/8;
  let xL3 = lerp(xL,xR,.4)
  //let xR3 = xM + xW/8;
  let xR3 = lerp(xR,xL,.4)
  //let sideWidth = rnd(4,9);
  //let xT = x1 + xW/sideWidth;
  let dD = map(yB,-h(.4),h(.5),70,10);
  let yDiff = yH/dD;
  if (dir === 'l') {
    yth = yB - yH - yDiff;
    ytl = yB - yH + yDiff;
  }else if (dir === 'r') {
    yth = yB - yH + yDiff;
    ytl = yB - yH - yDiff;
  }
  let hLerpVal1 = .6;
  let hLerpVal2 = .3;
  let yth2 = lerp(yB,yth,hLerpVal1);
  let ytl2 = lerp(yB,ytl,hLerpVal1);
  let yth3 = lerp(yB,yth,hLerpVal2);
  let ytl3 = lerp(yB,ytl,hLerpVal2);

  let lb = cV(xL,yB)
  let lt = cV(xL,yth3)
  let lb2 = cV(xL2,lerp(yth3,ytl3,.2))
  let lt2 = cV(xL2,lerp(yth2,ytl2,.2))
  let lb3 = cV(xL3,lerp(yth2,ytl2,.4))
  let lt3 = cV(xL3,lerp(yth,ytl,.4))

  let rb = cV(xR,yB)
  let rt = cV(xR,ytl3)
  let rb2 = cV(xR2,lerp(yth3,ytl3,.8))
  let rt2 = cV(xR2,lerp(yth2,ytl2,.8))
  let rb3 = cV(xR3,lerp(yth2,ytl2,.6))
  let rt3 = cV(xR3,lerp(yth,ytl,.6))

  if (dir === 'l') {
    db_tl = cV(xL-xW/4,ytl3)
    db_tr = cV(xL,yth3)
    db_br = cV(xL,yB)
    db_bl = cV(xL-xW/4,yB)

    dm_tl = cV(xL,lt2.y+yDiff)
    dm_tr = cV(xL2,lt2.y)
    dm_br = cV(xL2,lb2.y)
    dm_bl = cV(xL,lt.y)

    dt_tl = cV(xL2,lt3.y+yDiff*1.5)
    dt_tr = cV(xL3,lt3.y)
    dt_br = cV(xL3,lb3.y)
    dt_bl = cV(xL2,lt2.y)
  }else if (dir === 'r') {
    db_tl = cV(xR,ytl3)
    db_tr = cV(xR+xW/4,yth3+yDiff)
    db_br = cV(xR+xW/4,yB)
    db_bl = cV(xR,yB)

    dm_tl = cV(xR2,rt2.y)
    dm_tr = cV(xR,rt2.y+yDiff)
    dm_br = cV(xR,rt.y)
    dm_bl = cV(xR2,rb2.y)

    dt_tl = cV(xR3,rt3.y)
    dt_tr = cV(xR2,rt3.y+yDiff*1.5)
    dt_br = cV(xR2,rt2.y)
    dt_bl = cV(xR3,rb3.y)
  }

  if (style === 'neat' || style === 'orig' || style === 'geom' || style === 'dev') {
    if (time === 'day') {
      baseCol = [235,235,235]
    }else if (time === 'twilight') {
      //baseCol = [125,125,125]
      baseCol = [46,49,96]
    }else if (time === 'night') {
      baseCol = [15,15,15]
    }
  }

  buff.noStroke()
  //buff.stroke(255,0,0)
  buff.fill(baseCol)

  buff.beginShape()
    buff.vertex(lb.x,lb.y)
    buff.vertex(lt.x,lt.y)
    buff.vertex(lb2.x,lb2.y)
    buff.vertex(lt2.x,lt2.y)
    buff.vertex(lb3.x,lb3.y)
    buff.vertex(lt3.x,lt3.y)
    buff.vertex(rt3.x,rt3.y)
    buff.vertex(rb3.x,rb3.y)
    buff.vertex(rt2.x,rt2.y)
    buff.vertex(rb2.x,rb2.y)
    buff.vertex(rt.x,rt.y)
    buff.vertex(rb.x,rb.y)
  buff.endShape(CLOSE)
  //buff.fill(baseCol[0]-30,baseCol[1]-30,baseCol[2]-30)
  buff.beginShape()
    buff.vertex(db_tl.x,db_tl.y)
    buff.vertex(db_tr.x,db_tr.y)
    buff.vertex(db_br.x,db_br.y)
    buff.vertex(db_bl.x,db_bl.y)
  buff.endShape(CLOSE)
  buff.beginShape()
    buff.vertex(dm_tl.x,dm_tl.y)
    buff.vertex(dm_tr.x,dm_tr.y)
    buff.vertex(dm_br.x,dm_br.y)
    buff.vertex(dm_bl.x,dm_bl.y)
  buff.endShape(CLOSE)
  buff.beginShape()
    buff.vertex(dt_tl.x,dt_tl.y)
    buff.vertex(dt_tr.x,dt_tr.y)
    buff.vertex(dt_br.x,dt_br.y)
    buff.vertex(dt_bl.x,dt_bl.y)
  buff.endShape(CLOSE)

  if (dir === 'l') {
  }

  let col = chCol(pal.bld)

  let numLines = 120;
  let numDarkLines = 90;
  for (let i = 0; i < numLines; i++) {
    let x = map(i,0,numLines,xL,xR);
    //let y = map(x,xL,xR,yth3,ytl3)
    if (x < xL2 || x > xR2) {
      y = map(x,xL,xR,yth3,ytl3)
    }else if (x < xL3 || x > xR3) {
      y = map(x,xL,xR,yth2,ytl2)
    }else{
      y = map(x,xL,xR,yth,ytl)
    } // ADD SPIRE
    let reflY = hrz + dist(0,hrz,0,y) + rnd(-yH/25,yH/25)
    // DARK SIDE
    //buff.stroke(baseCol)
    //buff.strokeWeight(w(.002))
    //buff.line(x,y,x,hrz)
    if (style === 'neat') {
      dsr(buff, x, y, x, hrz, w(.003), col[0], col[1], col[2], 225, 'none')
      dsr(buff, x, reflY, x, hrz, w(.003), col[0], col[1], col[2], 165, 'none')
    }else if (style === 'orig') {
      bsr(buff, x, y, x, yB, w(.03), col[0], col[1], col[2], 125)
      bsr(buff, x, reflY, x, yB, w(.03), col[0], col[1], col[2], 65)
      let xOffset = rnd(-w(.002),w(.002))
      bsr(buff, x + xOffset, y, x + xOffset, yB, w(.02), col[0], col[1], col[2], 125)
    }else if (style === 'dev') {
      pstr4(buff, x, y, x, hrz, w(.005), w(.001), 1, [col[0], col[1], col[2], 125], 200, HARD_LIGHT)
      pstr4(buff, x, reflY, x, hrz, w(.005), w(.001), 1, [col[0], col[1], col[2], 65], 200, HARD_LIGHT)
    }
  }
  for (let j = 0; j < numDarkLines; j++) {
    let dyt,dyb;
    if (dir === 'l') {
      dx = map(j,0,numDarkLines,xL-xW/4,xL3)
    }else if (dir === 'r') {
      dx = map(j,0,numDarkLines,xR3,xR+xW/4)
    }
    let cD = 100;
    if (dir === 'l') {
      if (dx > xL - xW/4 && dx < xL) {
        //dyt = map(dx,xL-xW/4,xL,ytl3,yth3)
        dyt = map(dx,xL-xW/4,xL,db_tl.y,db_tr.y)
        dyb = yB
        if (style === 'orig') {
          bsr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'ovr')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dsr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }else if (dx > xL && dx < xL2) {
        //dyt = map(dx,xL,xL2,ytl2,yth2)
        dyt = map(dx,xL,xL2,dm_tl.y,dm_tr.y)
        //dyb = map(dx,xL,xL2,lt.y,lb2.y)
        dyb = map(dx,xL,xL2,dm_bl.y,dm_br.y)
        if (style === 'orig') {
          bsr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'ovr')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dsr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
      else if (dx > xL2 && dx < xL3) {
        //dyt = map(dx,xL2,xL3,lt3.y+yDiff,lt3.y)
        dyt = map(dx,xL2,xL3,dt_tl.y,dt_tr.y)
        //dyb = map(dx,xL,xL2,lt2.y,lb3.y)
        dyb = map(dx,xL2,xL3,dt_bl.y,dt_br.y)
        if (style === 'orig') {
          bsr(buff, dx, dyb, dx, dyt, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'ovr')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dsr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
    }else if (dir === 'r') {
      if (dx > xR3 && dx < xR2) {
        //dyt = map(dx,xR3,xR2,rt3.y,rt3.y+yDiff)
        dyt = map(dx,xR3,xR2,dt_tl.y,dt_tr.y)
        //dyb = map(dx,xR3,xR2,rb3.y,rt2.y)
        dyb = map(dx,xR3,xR2,dt_bl.y,dt_br.y)
        if (style === 'orig') {
          bsr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'ovr')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dsr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }else if (dx > xR2 && dx < xR) {
        //dyt = map(dx,xR2,xR,rt2.y,ytl2)
        dyt = map(dx,xR2,xR,dm_tl.y,dm_tr.y)
        //dyb = map(dx,xR2,xR,rb2.y,rt.y)
        dyb = map(dx,xR2,xR,dm_bl.y,dm_br.y)
        if (style === 'orig') {
          bsr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'ovr')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dsr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
      else if (dx > xR && dx < xR + xW/4) {
        //dyt = map(dx,xR,xR+xW/4,rt.y,ytl3)
        dyt = map(dx,xR,xR+xW/4,db_tl.y,db_tr.y)
        dyb = yB
        if (style === 'orig') {
          bsr(buff, dx, dyb, dx, dyt, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'ovr')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dsr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
    }
  }
  // DETAILS
  if (style === 'dev') {
    arLin(buff,12,lt3,rt3,rb3,lb3,pal.bld,0,1,'metroBuilding')
    arLin(buff,15,lt2,rt2,rb2,lb2,pal.bld,0,1,'metroBuilding')
    arLin(buff,20,lt,rt,rb,lb,pal.bld,0,1,'metroBuilding')
  }
  if (style === 'orig' || style === 'dev') {
    let strWmult = map(hrz,-h(.4),h(.4),1,2)
    strW = rnd(w(.03),w(.06)) * strWmult
    dev_strW = rnd(w(.0005),w(.001)) * strWmult
    let c = chCol(pal.accents)
    let detail = rnd()
    let OV = OVERLAY
    if (detail < .3) {
      nPt = p5vl(lt,lb,rnd(.6,2.5))
      nPt2 = p5vl(lt,lb2,rnd(1,1.4))
      nPt3 = p5vl(lt2,lb2,rnd(1,3))
      if (style === 'orig') {
        bsr(buff, lt.x, lt.y, nPt.x, nPt.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, lt.x, lt.y, nPt2.x, nPt2.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, lt2.x, lt2.y, nPt3.x, nPt3.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
      }else if (style === 'dev') {
        pstr4(p3, lt.x, lt.y, nPt.x, nPt.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, lt.x, lt.y, nPt2.x, nPt2.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, lt2.x, lt2.y, nPt3.x, nPt3.y, dev_strW, dev_strW, 1, c, 200, OV)
      }
    }else if (detail < .6) {
      nPt = p5vl(lt3,lb3,rnd(.6,2.5))
      nPt2 = p5vl(lt3,rt3,rnd(1,1.3))
      nPt3 = p5vl(rt3,rb3,rnd(1,3))
      nPt4 = p5vl(rt2,rb3,rnd(1,3))
      nPt5 = p5vl(rt2,rb2,rnd(1,3))
      if (style === 'orig') {
        bsr(buff, lt3.x, lt3.y, nPt.x, nPt.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, lt3.x, lt3.y, nPt2.x, nPt2.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rt3.x, rt3.y, nPt3.x, nPt3.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rt2.x, rt2.y, nPt4.x, nPt4.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rt2.x, rt2.y, nPt5.x, nPt5.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
      }else if (style === 'dev') {
        pstr4(p3, lt3.x, lt3.y, nPt.x, nPt.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, lt3.x, lt3.y, nPt2.x, nPt2.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rt3.x, rt3.y, nPt3.x, nPt3.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rt2.x, rt2.y, nPt4.x, nPt4.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rt2.x, rt2.y, nPt5.x, nPt5.y, dev_strW, dev_strW, 1, c, 200, OV)
      }
    }else if (detail < .9) {
      nPt = p5vl(lt3,lb3,rnd(.6,5))
      nPt2 = p5vl(rt3,lt3,rnd(1,3))
      nPt3 = p5vl(rt3,rb3,rnd(.6,5))
      nPt4 = p5vl(rt2,rb3,rnd(1,3))
      nPt5 = p5vl(rt2,rb2,rnd(1,5))
      nPt6 = p5vl(rb,rt,rnd(1,8))
      if (style === 'orig') {
        bsr(buff, lt3.x, lt3.y, nPt.x, nPt.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rt3.x, rt3.y, nPt2.x, nPt2.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rt3.x, rt3.y, nPt3.x, nPt3.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rt2.x, rt2.y, nPt4.x, nPt4.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rt2.x, rt2.y, nPt5.x, nPt5.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
        bsr(buff, rb.x, rb.y, nPt6.x, nPt6.y, strW, c[0], c[1], c[2], 125, 'up', 'ovr')
      }else if (style === 'dev') {
        pstr4(p3, lt3.x, lt3.y, nPt.x, nPt.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rt3.x, rt3.y, nPt2.x, nPt2.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rt3.x, rt3.y, nPt3.x, nPt3.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rt2.x, rt2.y, nPt4.x, nPt4.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rt2.x, rt2.y, nPt5.x, nPt5.y, dev_strW, dev_strW, 1, c, 200, OV)
        pstr4(p3, rb.x, rb.y, nPt6.x, nPt6.y, dev_strW, dev_strW, 1, c, 200, OV)
      }
    }
    if (detail < .7) {
      if (dir === 'l') {
        nPt = p5vl(db_tl,db_bl,rnd(1,5))
        nPt2 = p5vl(db_tr,db_tl,rnd(1,2.5))
        nPt3 = p5vl(dm_tl,dm_bl,rnd(1,2.5))
        nPt4 = p5vl(dm_tr,dm_tl,rnd(1,3.5))
        nPt5 = p5vl(dt_bl,dt_tl,rnd(1,5))
        nPt6 = p5vl(dt_tr,dt_tl,rnd(1,2.5))
        if (style === 'orig') {
          bsr(buff, db_tl.x, db_tl.y, nPt.x, nPt.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, db_tr.x, db_tr.y, nPt2.x, nPt2.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dm_tl.x, dm_tl.y, nPt3.x, nPt3.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dm_tr.x, dm_tr.y, nPt4.x, nPt4.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dt_bl.x, dt_bl.y, nPt5.x, nPt5.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dt_tr.x, dt_tr.y, nPt6.x, nPt6.y, strW, c[0], c[1], c[2], 125, 'up', 'ovr')
        }else if (style === 'dev') {
          pstr4(p3, db_tl.x, db_tl.y, nPt.x, nPt.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, db_tr.x, db_tr.y, nPt2.x, nPt2.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dm_tl.x, dm_tl.y, nPt3.x, nPt3.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dm_tr.x, dm_tr.y, nPt4.x, nPt4.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dt_bl.x, dt_bl.y, nPt5.x, nPt5.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dt_tr.x, dt_tr.y, nPt6.x, nPt6.y, dev_strW, dev_strW, 1, c, 200, OV)
        }
      }else if (dir === 'r') {
        nPt = p5vl(db_tr,db_br,rnd(1,5))
        nPt2 = p5vl(db_tl,db_tr,rnd(1,2.5))
        nPt3 = p5vl(dm_tr,dm_br,rnd(1,2.5))
        nPt4 = p5vl(dm_tl,dm_tr,rnd(1,3.5))
        nPt5 = p5vl(dt_br,dt_tr,rnd(1,5))
        nPt6 = p5vl(dt_tl,dt_tr,rnd(1,2.5))
        if (style === 'orig') {
          bsr(buff, db_tr.x, db_tr.y, nPt.x, nPt.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, db_tl.x, db_tl.y, nPt2.x, nPt2.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dm_tr.x, dm_tr.y, nPt3.x, nPt3.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dm_tl.x, dm_tl.y, nPt4.x, nPt4.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dt_br.x, dt_br.y, nPt5.x, nPt5.y, strW, c[0], c[1], c[2], 125, 'down', 'ovr')
          bsr(buff, dt_tl.x, dt_tl.y, nPt6.x, nPt6.y, strW, c[0], c[1], c[2], 125, 'up', 'ovr')
        }else if (style === 'dev') {
          pstr4(p3, db_tr.x, db_tr.y, nPt.x, nPt.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, db_tl.x, db_tl.y, nPt2.x, nPt2.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dm_tr.x, dm_tr.y, nPt3.x, nPt3.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dm_tl.x, dm_tl.y, nPt4.x, nPt4.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dt_br.x, dt_br.y, nPt5.x, nPt5.y, dev_strW, dev_strW, 1, c, 200, OV)
          pstr4(p3, dt_tl.x, dt_tl.y, nPt6.x, nPt6.y, dev_strW, dev_strW, 1, c, 200, OV)
        }
      }
    }
  }
}

function cqtrHouse(buff, style, pal, xM, yB, xW, yH, dir, time, type) {
  buff.push()

  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let sideWidth = rnd(4,8)
  let xT = x1 + xW/10
  let lVal = rnd(.5,.75)
  let xBr = lerp(xT,x2,lVal)
  let topPoint = lerp(xT,xBr,.5)

  if (dir === 'r') {
    xT = x2 - xW/sideWidth
    lVal = rnd(.5,.75)
    xBr = lerp(xT,x1,lVal)
    topPoint = lerp(xBr,xT,.5)
  }

  let dD = map(yB,-h(.4),h(.5),70,10)
  let yDiff = yH/dD

  let yth = yB - yH - yDiff
  let ytl = yB - yH + yDiff
  let yBr = lerp(yB,ytl,.6)
  let yTopPt = yth - yDiff*3

  if (style === 'neat' || style === 'orig' || style === 'geom' || style === 'dev') {
    if (time === 'day') {
      baseCol = [235,235,235]
    }else if (time === 'twilight') {
      //baseCol = [125,125,125]
      baseCol = [46,49,96]
    }else if (time === 'night') {
      baseCol = [15,15,15]
    }
  }

  let hTrans;
  if (hrz == -h(.2)) {hTrans = h(.5)}
  if (hrz == 0) {hTrans = h(.5)}
  if (hrz == h(.32)) {hTrans = h(.8)}

  let col = chCol(pal.bld)
  let wCol = chCol(pal.drk)

  let numLines = 100;
  if (style === 'neat') {numLines = 90}

  if (dir === 'l') {
    buff.noStroke()
    //buff.stroke(255,0,0)
    buff.fill(baseCol)
    buff.beginShape()
      buff.vertex(x1,ytl)
      buff.vertex(xT,yth)
      buff.vertex(topPoint,yTopPt)
      buff.vertex(xBr,ytl)
      buff.vertex(xBr,yBr)
      buff.vertex(x2,yBr)
      buff.vertex(x2,yB)
      buff.vertex(x1,yB)
    buff.endShape(CLOSE)
    let wPos = cV(topPoint,yBr);
    let winW = xW/7;
    for (let i = 0; i < numLines; i++) {
      let cD = 0;
      let strW = rnd(w(.001),w(.005))
      let x = map(i,0,numLines,x1,x2);
      if (x < xT) {
        y = map(x,x1,xT,ytl,yth);
        cD = 100;
      }else if(x > xT && x < topPoint){
        y = map(x,xT,topPoint,yth,yTopPt);
      }else if(x > topPoint && x < xBr){
        y = map(x,topPoint,xBr,yTopPt,ytl);
      }else{
        //y = map(x,xBr,x2,ytl,yth)
        y = yBr;
      }
      if (x > xT && x < xBr) {
        wb = map(x,xT,xBr,yth+yH/3,ytl+yH/3)
        wt2 = map(x,xT,xBr,yth+yH/2,ytl+yH/2)
        wb2 = map(x,xT,xBr,yth+yH/1.5,ytl+yH/1.5)
      }
      if (style === 'dev') {
        pstr4(buff, x, y, x, yB, strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, 150], 200, BLEND, 'none')
        pstr4(buff, x, y, x, yB, strW*1.5, strW*.8, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 200, OVERLAY, 'none')
        // WINDOW
        if (x > wPos.x - winW/2 && x < wPos.x + winW/2) {
          let wt = y+yH/6
          pstr4(buff, x, wt, x, wb, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND, 'none')
          pstr4(buff, x, wt2, x, wb2, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND, 'none')
        }
        // REFLS
        let reflDist = dist(x,hrz,x,y)
        let maxReflY = map(y,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY, 'none')
        pstr4(buff, x, reflY + rnd(-yOff,yOff), x, maxReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY, 'none')
      }else if (style === 'neat') {
        dsr(buff, x, y, x, hrz, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      }else if (style === 'orig') {
        bsr(buff, x, y, x, hrz, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        let xOffset = rnd(-w(.002),w(.002))
        bsr(p2, x + xOffset, y, x + xOffset, hrz, w(.02), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // WINDOWS
        if (x > wPos.x - winW/2 && x < wPos.x + winW/2) {
          let wt = y+yH/6
          bsr(p2, x, wt, x, wb, w(.02), wCol[0], wCol[1], wCol[2], 125)
          bsr(p2, x, wt2, x, wb2, w(.02), wCol[0], wCol[1], wCol[2], 125)
        }
        // REFLS
        let reflDist = dist(x,hrz,x,y)
        let maxReflY = map(y,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        bsr(buff, x, reflY, x + reflWidth, reflY, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(85))
      }
    }
    // DETAILS
    let bt_l = cV(x1,yB)
    let top_l = cV(x1,ytl)
    let corner_t = cV(xT,yth)
    let topPt = cV(topPoint,yTopPt)
    let mid_t = cV(xBr,ytl)
    let mid_b = cV(xBr,yBr)
    let mid_r = cV(x2,yBr)
    let corner_b = cV(xT,yB)
    let details = rnd()
    let strW_dev = rnd(w(.001),w(.01)) // upper value may be too high / lines too heavy
    let strW_orig = rnd(w(.04),w(.08))
    if (style === 'dev' || style === 'orig') {
      if (details < .2) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(topPt,corner_t,rnd(1,2.5))
        let pt2 = p5vl(corner_t,topPt,rnd(1,2.5))
        if (style === 'dev') {
          pstr4(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          bsr(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        }
      }else if (details < .4) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(mid_t,mid_b,rnd(1,5))
        let pt2 = p5vl(topPt,mid_t,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(150,225)], 300, SOFT_LIGHT)
          pstr4(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          bsr(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
          bsr(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        }
      }else if (details < .6) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(mid_r,bt_l,rnd(1,3))
        let pt2 = p5vl(mid_r,mid_b,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(150,225)], 300, SOFT_LIGHT)
          pstr4(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          bsr(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
          bsr(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        } // ADD REFLS
      }else if (details < .8) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(corner_t,corner_b,rnd(1,3))
        let pt2 = p5vl(corner_t,top_l,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(150,225)], 300, SOFT_LIGHT)
          pstr4(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          bsr(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
          bsr(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        } // ADD REFLS
      }
    }
  }else if (dir === 'r') {
    buff.noStroke()
    //buff.stroke(255,0,0)
    buff.fill(baseCol)
    buff.beginShape()
      buff.vertex(x1,yBr)
      buff.vertex(xBr,yBr)
      buff.vertex(xBr,ytl)
      buff.vertex(topPoint,yTopPt)
      buff.vertex(xT,yth)
      buff.vertex(x2,ytl)
      buff.vertex(x2,yB)
      buff.vertex(x1,yB)
    buff.endShape(CLOSE)
    let wPos = cV(topPoint,yBr);
    let winW = xW/7;
    for (let i = 0; i < numLines; i++) {
      let cD = 0;
      let strW = rnd(w(.0015),w(.003))
      let x = map(i,0,numLines,x1,x2)
      if (x < xBr) {
        y = yBr;
      }else if (x > xBr && x < topPoint) {
        y = map(x,xBr,topPoint,ytl,yTopPt)
      }else if (x > topPoint && x < xT){
        y = map(x,topPoint,xT,yTopPt,yth);
      }else{
        y = map(x,xT,x2,yth,ytl);
        cD = 100;
      }
      if (x > xBr && x < xT) {
        wb = map(x,xBr,xT,yth+yH/3,ytl+yH/3)
        wt2 = map(x,xT,xBr,yth+yH/2,ytl+yH/2)
        wb2 = map(x,xT,xBr,yth+yH/1.5,ytl+yH/1.5)
      }
      if (style === 'dev') {
        pstr4(buff, x, y, x, yB, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, 150], 200, BLEND)
        pstr4(buff, x, y, x, yB, strW*1.5, strW*.8, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 200, OVERLAY)
        // WINDOWS
        if (x > wPos.x - winW/2 && x < wPos.x + winW/2) {
          let wt = y+yH/6
          pstr4(buff, x, wt, x, wb, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND)
          pstr4(buff, x, wt2, x, wb2, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND)
        }
        // REFLS
        let reflDist = dist(x,hrz,x,y)
        let maxReflY = map(y,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, reflY + rnd(-yOff,yOff), x, maxReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }else if (style === 'neat') {
        dsr(buff, x, y, x, hrz, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      }else if (style === 'orig') {
        bsr(buff, x, y, x, hrz, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        let xOffset = rnd(-w(.002),w(.002))
        bsr(p2, x + xOffset, y, x + xOffset, hrz, w(.02), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // WINDOWS
        if (x > wPos.x - winW/2 && x < wPos.x + winW/2) {
          let wt = y+yH/6
          bsr(p2, x, wt, x, wb, w(.02), wCol[0], wCol[1], wCol[2], 125)
          bsr(p2, x, wt2, x, wb2, w(.02), wCol[0], wCol[1], wCol[2], 125)
        }
        // REFLS
        let reflDist = dist(x,hrz,x,y)
        let maxReflY = map(y,hrz,-h(.5),hrz,hTrans)
        let reflY = rnd(hrz,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        bsr(buff, x, reflY, x + reflWidth, reflY, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(85))
      }
    }
    // DETAILS
    let bt_l = cV(x1,yB)
    let mid_l = cV(x1,yBr)
    let mid_b = cV(xBr,yBr)
    let mid_t = cV(xBr,ytl)
    let topPt = cV(topPoint,yTopPt)
    let corner_t = cV(xT,yth)
    let mid_r = cV(x2,ytl)
    let bt_r = cV(x2,yB)
    let corner_b = cV(xT,yB)
    let details = rnd()
    let strW = rnd(w(.001),w(.004))
    let strW_dev = rnd(w(.001),w(.01)) // upper value may be too high / lines too heavy
    let strW_orig = rnd(w(.03),w(.06))
    if (style === 'dev' || style === 'orig') {
      if (details < .2) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(topPt,corner_t,rnd(1,2.5))
        let pt2 = p5vl(corner_t,topPt,rnd(1,2.5))
        if (style === 'dev') {
          pstr4(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          bsr(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        }
      }else if (details < .4) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(mid_t,mid_b,rnd(1,5))
        let pt2 = p5vl(topPt,mid_t,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(180,255)], 300, OVERLAY)
          pstr4(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          bsr(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
          bsr(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        }
      }else if (details < .6) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(mid_r,bt_r,rnd(1,3))
        let pt2 = p5vl(mid_r,mid_b,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(180,255)], 300, OVERLAY)
          pstr4(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          bsr(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
          bsr(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        } // ADD REFLS
      }else if (details < .8) {
        let c = chCol(pal.accents)
        let pt1 = p5vl(corner_t,corner_b,rnd(1,3))
        let pt2 = p5vl(corner_t,topPt,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(180,255)], 300, OVERLAY)
          pstr4(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [c[0], c[1], c[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          bsr(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
          bsr(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_orig, c[0], c[1], c[2], rnd(100,225))
        } // ADD REFLS
      }
    }
  }
  buff.pop()
}

function sanGmTerr(buff, style, hrz, pal, style, time) {
  let numSecs = map(hrz,-h(.4),h(.4),6,3)
  let yStep = dist(0,hrz,0,h(.7))/numSecs
  let ptsWrap = []
  let stepDiv = 3
  for (let i = 0; i < numSecs; i++) {
    stepDiv -= .45
    let baseY = hrz + yStep*i/stepDiv
    let points = []
    let xLimL = map(baseY,hrz,h(.6),-w(.7),-w(5))
    let xLimR = map(baseY,hrz,h(.6),w(.9),w(5))
    for (let j = 0; j < 6; j++) {
      //let yDiff = rnd(-yStep/i,yStep/i)
      let yDiff = rnd(-w(.05),0)
      let x = map(j,0,6,xLimL,xLimR) + rnd(-width/8,width/8)
      let y = baseY + yDiff
      let vec = cV(x,y)
      points.push(vec)
    }
    ptsWrap.push(points)
  }
  for (let i = 0; i < ptsWrap.length-1; i++) {
    let num_lines = 250 + 500*i;
    for (let j = 0; j < ptsWrap[i].length-1; j++) {
      let col = chCol(pal.veg)
      let c = chCol(pal.veg)
      let tl = cV(ptsWrap[i][j].x,ptsWrap[i][j].y)
      let tr = cV(ptsWrap[i][j+1].x,ptsWrap[i][j+1].y)
      let bl = cV(ptsWrap[i+1][j].x,ptsWrap[i+1][j].y)
      let br = cV(ptsWrap[i+1][j+1].x,ptsWrap[i+1][j+1].y)
      if (style === 'neat' || style === 'orig') {
        if (time === 'day') {
          baseCol = [250,250,250];
          cD = 0;
          orig_cD = 15;
        }else if (time === 'twilight') {
          //baseCol = [85,85,85];
          baseCol = [36,52,76]
          cD = 30;
          orig_cD = 30;
        }else if (time === 'night') {
          baseCol = [5,5,5];
          cD = 70;
          orig_cD = 50;
        }
      }

      buff.fill(baseCol)
      if (style === 'dev') {
        buff.fill(col)
      }
      buff.noStroke()
      buff.beginShape()
        buff.vertex(tl.x,tl.y)
        buff.vertex(tr.x,tr.y)
        buff.vertex(br.x,br.y)
        buff.vertex(bl.x,bl.y)
      buff.endShape(CLOSE)

      let maxL = tl.x, maxR = tr.x

      for (let i = 0; i < num_lines; i++) {
        let x = map(i,0,num_lines,maxL,maxR)
        let y1 = map(x,  maxL,  maxR,  tl.y,  tr.y)
        let x2 = map(x,  maxL,  maxR,  bl.x,  br.x)
        let y2 = map(x,  maxL,  maxR,  bl.y,  br.y)
        let yOffset = rnd(-h(.001),h(.005))
        if (style === 'neat') {
          dsr(buff, x, y1 - yOffset, x2, y2, w(.005), c[0], c[1], c[2], 155, 'none')
        }else if (style === 'orig') {
          bsr(buff, x, y1 - yOffset, x2, y2, w(.09), col[0]+orig_cD/3, col[1]+orig_cD/3, col[2]+orig_cD/3, 100)
          let xOffset = rnd(-w(.002),w(.002))
          bsr(p3, x + xOffset, y1 - yOffset, x2 + xOffset, y2, w(.03), col[0]-orig_cD, col[1]-orig_cD, col[2]-orig_cD, 100)
          buff.push()
          buff.stroke(col[0]-orig_cD, col[1]-orig_cD, col[2]-orig_cD, 50)
          let strW = rnd(w(.0005),w(.001))
          buff.strokeWeight(strW)
          buff.line(x + xOffset*2, y1 - yOffset/2, x2 + xOffset*2, y2)
          buff.pop()
        }else if (style === 'dev') {
          pstr4(p3, x, y1 - yOffset, x2, y2, w(.02), w(.003), 1, [c[0]-20, c[1]-20, c[2]-20, rnd(10)], 200, BLEND)
          pstr4(p3, x, y1 - yOffset, x2, y2, w(.01), w(.003), 1, [c[0], c[1], c[2], rnd(30)], 200, SOFT_LIGHT)
        }
      }
      // DETAILS
      if (style === 'neat') {
        // ONLY RENDER SOME ADD RND 
      }else if (style === 'dev' || style === 'orig') {
        if (style === 'dev') {
          let numSecs = rnd(12,24)
          arLin(buff,numSecs,tl,tr,br,bl,pal.veg,-.5,1.5)
        }
        let detail = rnd()
        ov_c = chCol(pal.veg)
        if (detail < .2) {
          newPt = p5vl(tl,tr,rnd(.7,1.5))
          newPt2 = p5vl(tl,bl,rnd(.7,1.5))
          ov_strW = rnd(w(.005),w(.01))
          ov_strW_orig = ov_strW*10
          if (style === 'dev') {
            pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
          }else if (style === 'orig') {
            bsr(p3,tl.x,tl.y,newPt.x,newPt.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,tl.x,tl.y,newPt2.x,newPt2.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
          }
        }else if (detail < .4) {
          newPt = p5vl(tr,br,rnd(.7,1.5))
          newPt2 = p5vl(bl,br,rnd(.7,1.5))
          ov_strW = rnd(w(.005),w(.01))
          ov_strW_orig = ov_strW*10
          if (style === 'dev') {
            pstr4(p3,tr.x,tr.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,bl.x,bl.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
          }else if (style === 'orig') {
            bsr(p3,tr.x,tr.y,newPt.x,newPt.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,bl.x,bl.y,newPt2.x,newPt2.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
          }
        }
        else if (detail < .6) {
          newPt = p5vl(tr,br,rnd(1,1.5))
          newPt2 = p5vl(br,tr,rnd(1,1.5))
          newPt3 = p5vl(tl,bl,rnd(.7,1.5))
          newPt4 = p5vl(tr,br,rnd(.7,1.5))
          ov_strW = rnd(w(.005),w(.01))
          ov_strW_orig = ov_strW*10
          if (style === 'dev') {
            pstr4(p3,newPt2.x,newPt2.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,tl.x,tl.y,newPt3.x,newPt3.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,tr.x,tr.y,newPt4.x,newPt4.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
          }else if (style === 'orig') {
            bsr(p3,newPt2.x,newPt2.y,newPt.x,newPt.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,tl.x,tl.y,newPt3.x,newPt3.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,tr.x,tr.y,newPt4.x,newPt4.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
          }
        }
        // SECOND SEQUENCE
        let weightMult = map(tl.y,hrz,h(.5),.7,1.2)
        if (detail < .3) {
          let lCutVal1 = rnd(.1,.3)
          let lCutVal2 = rnd(.1,.3)
          tlCutTop = p5vl(tl,tr,lCutVal1)
          tlCutBot = p5vl(bl,br,lCutVal1)
          tlCutLeft = p5vl(tl,bl,lCutVal2)
          tlCutRight = p5vl(tr,br,lCutVal2)
          tlCutCut = p5vl(tlCutTop,tlCutBot,lCutVal2)

          newPt = p5vl(tlCutCut,tlCutLeft,rnd(1,1.5))
          newPt2 = p5vl(tlCutCut,tlCutBot,rnd(1,1.5))

          ov_strW = rnd(w(.005),w(.01)) * weightMult
          ov_strW_orig = ov_strW*10

          if (style === 'dev') {
            pstr4(p3,tlCutCut.x,tlCutCut.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,tlCutCut.x,tlCutCut.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
          }else if (style === 'orig') {
            bsr(p3,tlCutCut.x,tlCutCut.y,newPt.x,newPt.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,tlCutCut.x,tlCutCut.y,newPt2.x,newPt2.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
          }
        }else if (detail < .6) {
          let lCutVal1 = rnd(.1,.3)
          let lCutVal2 = rnd(.6,1.1)
          tlCutTop = p5vl(tl,tr,lCutVal1)
          tlCutBot = p5vl(bl,br,lCutVal1)
          tlCutTop2 = p5vl(tl,tr,lCutVal1*2)
          tlCutBot2 = p5vl(bl,br,lCutVal1*2)
          tlCutLeft = p5vl(tl,bl,lCutVal2)
          tlCutRight = p5vl(tr,br,lCutVal2)
          tlCutCut1 = p5vl(tlCutTop,tlCutBot,lCutVal2)
          tlCutCut2 = p5vl(tlCutTop2,tlCutBot2,lCutVal2)

          newPt = p5vl(tlCutCut1,tlCutLeft,rnd(1,1.5))
          newPt2 = p5vl(tlCutCut1,tlCutTop,rnd(1,1.5))
          newPt3 = p5vl(tlCutCut2,tlCutTop2,rnd(1,1.5))

          ov_strW = rnd(w(.005),w(.01)) * weightMult
          ov_strW_orig = ov_strW*10

          if (style === 'dev') {
            pstr4(p3,tlCutCut2.x,tlCutCut2.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,tlCutCut1.x,tlCutCut1.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,tlCutCut2.x,tlCutCut2.y,newPt3.x,newPt3.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
          }else if (style === 'orig') {
            bsr(p3,tlCutCut2.x,tlCutCut2.y,newPt.x,newPt.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,tlCutCut1.x,tlCutCut1.y,newPt2.x,newPt2.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,tlCutCut2.x,tlCutCut2.y,newPt3.x,newPt3.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
          }
        }else if (detail < .9) {
          let rCutVal1 = rnd(.05,.2)
          let rCutVal2 = rnd(.05,.2)
          rCutRight = p5vl(tr,br,rCutVal1)
          rCutLeft = p5vl(tl,bl,rCutVal1)
          rCutRight2 = p5vl(tr,br,rCutVal1*2)
          rCutLeft2 = p5vl(tl,bl,rCutVal1*2)
          rCutRight3 = p5vl(tr,br,rCutVal1*3)
          rCutLeft3 = p5vl(tl,bl,rCutVal1*3)
          rCutTop = p5vl(tr,tl,rCutVal2)
          rCutBot = p5vl(br,bl,rCutVal2)
          rCutCut1 = p5vl(rCutRight,rCutLeft,rCutVal2)
          rCutCut2 = p5vl(rCutRight2,rCutLeft2,rCutVal2)
          rCutCut3 = p5vl(rCutRight3,rCutLeft3,rCutVal2)

          newPt = p5vl(rCutCut3,rCutTop,rnd(1,1.5))
          newPt2 = p5vl(rCutCut1,rCutLeft,rnd(1,1.5))
          newPt3 = p5vl(rCutCut2,rCutLeft2,rnd(1,1.5))
          newPt4 = p5vl(rCutCut3,rCutLeft3,rnd(1,1.5))

          ov_strW = rnd(w(.005),w(.01)) * weightMult
          ov_strW_orig = ov_strW*10

          
          if (style === 'dev') {
            pstr4(p3,rCutCut1.x,rCutCut1.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,rCutCut1.x,rCutCut1.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,rCutCut2.x,rCutCut2.y,newPt3.x,newPt3.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
            pstr4(p3,rCutCut3.x,rCutCut3.y,newPt4.x,newPt4.y,ov_strW,ov_strW/2,1,ov_c,300,OVERLAY)
          }else if (style === 'orig') {
            bsr(p3,rCutCut1.x,rCutCut1.y,newPt.x,newPt.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,rCutCut1.x,rCutCut1.y,newPt2.x,newPt2.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,rCutCut2.x,rCutCut2.y,newPt3.x,newPt3.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
            bsr(p3,rCutCut3.x,rCutCut3.y,newPt4.x,newPt4.y, ov_strW_orig, ov_c[0], ov_c[1], ov_c[2], 200)
          }
        }
      }
      let detailType = rnd()
      if (detailType < .3 && style === 'orig') {
        // CYPRESSES
        let numTrees = map(tr.x-tl.x,w(.1),w(2),10,45)
        for (let x = tl.x; x < tr.x; x += (tr.x-tl.x)/numTrees) {
          let mult = map(tl.y,-h(.4),h(1),.6,1.5)
          let y = map(x,tl.x,tr.x,tl.y,tr.y)
          xW = ((tr.x-tl.x)/numTrees) * mult
          yH = (xW*rnd(4,6)) * mult
          if (y < h(.5)) {
            //cypress(buff,pal,x,y,xW,yH,style,time)
          }
        }
      }

    } //inner array

  } //wrap array

}

function cqtrTerr(buff, style, hrz, pal, time, xMid) {

  if (style === 'neat' || style === 'orig' || style === 'geom' || style === 'dev') {
    if (time === 'day') {
      baseCol = [235,235,235]
    }else if (time === 'twilight') {
      //baseCol = [125,125,125]
      baseCol = [36,52,76]
    }else if (time === 'night') {
      baseCol = [15,15,15]
    }
  }

  let bH = dist(0,-h(.5),0,hrz)/8
  let lxt = -w(.5)
  let bHL = hrz - bH*rnd(1,1.3)
  let ObHL = hrz - bH*rnd(.9,1.5)
  let bBL = hrz + bH*rnd(.1,.3)
  let ObBL = hrz + bH*rnd(.4)
  let lxt2val = rnd(.3,.6)
  let lxt2 = lerp(-w(.5),xMid,lxt2val)
  let lxb2 = lxt2 + rnd(w(.15))
  let bHL2 = hrz - bH*rnd(.7,1)
  let bBL2 = hrz + bH*rnd(.1)
  let lxt3val = rnd(.7,.9)
  let lxt3 = lerp(lxt2,xMid,lxt3val)
  let lxb3 = lxt3 + rnd(w(.03),w(.08))
  let bHL3 = hrz - bH*rnd(.25,.6)
  let bBL3 = hrz + bH*rnd(.1)

  let rxt = w(.5)
  let bHR = hrz - bH*rnd(1,1.3)
  let ObHR = hrz - bH*rnd(.9,1.5)
  let bBR = hrz + bH*rnd(.1,.3)
  let ObBR = hrz + bH*rnd(.4)
  let rxt2val = rnd(.3,.6)
  let rxt2 = lerp(w(.5),xMid,rxt2val)
  let rxb2 = rxt2 - rnd(w(.15))
  let bHR2 = hrz - bH*rnd(.7,1)
  let bBR2 = hrz + bH*rnd(.1)
  let rxt3val = rnd(.7,.9)
  let rxt3 = lerp(rxt2,xMid,rxt3val)
  let rxb3 = rxt3 - rnd(w(.03),w(.08))
  let bHR3 = hrz - bH*rnd(.25,.6)
  let bBR3 = hrz + bH*rnd(.1)

  let bgbHL = hrz - bH*rnd(.2,.5)
  let bgbHM = hrz - bH*rnd(.1)
  let bgbHR = hrz - bH*rnd(.2,.5)
  let bgbLL = hrz + bH*rnd(.1,.3)
  let bgbLM = hrz + bH*rnd(.1,.3)
  let bgbLR = hrz + bH*rnd(.1,.3)
  let mx = xMid + rnd(-w(.1),w(.1))

  let col1 = chCol(pal.accents)
  let col2 = chCol(pal.accents)
  let col3 = chCol(pal.accents)
  let col4 = chCol(pal.accents)
  let col5 = chCol(pal.accents)

  makePoly6(buff,lxt,bgbHL,mx,bgbHM,rxt,bgbHR,rxt,bgbLR,mx,bgbLM,lxt,bgbLL,baseCol,pal,'bg',style)

  makePoly4(buff,lxt,bHL,lxt2,bHL2,lxb2,bBL2,lxt,bBL,baseCol,pal,'bg',style)
  makePoly6(buff,lxt,ObHL,lxt2,bHL2,lxt3,bHL3,lxb3,bBL3,lxb2,bBL2,lxt,ObBL,baseCol,pal,'bg',style)

  makePoly4(buff,rxt2,bHR2,rxt,bHR,rxt,bBR,rxb2,bBR2,baseCol,pal,'bg',style)
  makePoly6(buff,rxt,ObHR,rxt2,bHR2,rxt3,bHR3,rxb3,bBR3,rxb2,bBR2,rxt,ObBR,baseCol,pal,'bg',style)

  //OVERLAY

  makePoly4(buff,lxt,bHL,lxt2,bHL2,lxb2,bBL2,lxt,bBL,col1,pal,'ovr',style)
  makePoly6(buff,lxt,ObHL,lxt2,bHL2,lxt3,bHL3,lxb3,bBL3,lxb2,bBL2,lxt,ObBL,col2,pal,'ovr',style)

  makePoly4(buff,rxt2,bHR2,rxt,bHR,rxt,bBR,rxb2,bBR2,col3,pal,'ovr',style)
  makePoly6(buff,rxt3,bHR3,rxt2,bHR2,rxt,ObHR,rxt,ObBR,rxb2,bBR2,rxb3,bBR3,col4,pal,'ovr',style)

  makePoly6(buff,lxt,bgbHL,mx,bgbHM,rxt,bgbHR,rxt,bgbLR,mx,bgbLM,lxt,bgbLL,col5,pal,'ovr',style)
}


//////////////////////////////////////////////////////////
///////////////////// little boats ///////////////////////

function cqtrBoat(buff,hrz,pal,style,boatDir) {
  let x = rnd(-w(.43),w(.43))
  let yMin = lerp(hrz,h(.5),.05)
  let yMax = lerp(hrz,h(.5),.5)
  let y = rnd(yMin,yMax)
  let size = map(y,hrz,yMax,w(.025),w(.15))
  let mW_mult = map(y,hrz,yMax,.5,1.2);

  let bxl = x-size/2;
  let bxr = x+size/2;
  let txl = x-size/1.2;
  let txr = x+size/1.8;
  let ytl = y-size/4.2;
  let ytr = y-size/5;
  let r_ytl = y+size/4.2;
  let r_ytr = y+size/5;
  let mastX = x+size/8

  let yMast = lerp(ytl,ytr,.5)
  let r_yMast = lerp(r_ytl,r_ytr,.5)
  let mastTop = yMast - size
  let r_mastTop = r_yMast + size*rnd(.7,1.3)
  let sail_main = mastX - size/15
  let sail_end = x-size/3

  if (boatDir === 'r') {
    bxl = x+size/2;
    bxr = x-size/2;
    txl = x+size/1.2;
    txr = x-size/1.8;
    ytl = y-size/4.2;
    ytr = y-size/5;
    r_ytl = y+size/4.2;
    r_ytr = y+size/5;
    mastX = x-size/8
    sail_main = mastX + size/15
    sail_end = x+size/3
  }

  let tl = cV(txl,ytl)
  let tr = cV(txr,ytr)
  let br = cV(bxr,y)
  let bl = cV(bxl,y)
  let r_tl = cV(txl,r_ytl)
  let r_tr = cV(txr,r_ytr)

  let sail_t = cV(sail_main, mastTop)
  let sail_m = cV(sail_end, lerp(mastTop,yMast,.9))
  let sail_b = cV(sail_main, yMast)


  let fillCol;
  if (time === 'day') {
    fillCol = [255,255]
    if (style === 'dev') {
      fillCol = pal.suns.c1
    }
  }else if (time === 'twilight') {
    fillCol = [78,82,135,255]
    if (style === 'dev') {
      fillCol = pal.suns.c2
    }
  }else if (time === 'night') {
    fillCol = [0,255]
    if (style === 'dev') {
      fillCol = pal.suns.c4
    }
  }


  //buff.fill(fillCol)
  /*buff.strokeWeight(w(.01))
  buff.stroke(255,0,0,255)
  buff.fill(255,0,0,255)
  buff.beginShape()
    buff.vertex(tl.x,tl.r)
    buff.vertex(tr.x,tr.r)
    buff.vertex(br.x,br.r)
    buff.vertex(bl.x,bl.r)
  buff.endShape(CLOSE)*/

  buff.beginShape()
    buff.vertex(sail_t.x,sail_t.r)
    buff.vertex(sail_m.x,sail_m.r)
    buff.vertex(sail_b.x,sail_b.r)
  buff.endShape(CLOSE)

  let r_sail_t = cV(sail_main, r_mastTop)
  let r_sail_m = cV(sail_end, lerp(r_mastTop,r_yMast,.9))
  let r_sail_b = cV(sail_main, r_yMast)

  let numLines = 60;
  let col1 = chCol(pal.bld)
  let col2 = chCol(pal.accents)
  let col3 = chCol(pal.drk)
  for (let i = 0; i < numLines; i++) {
    let y1 = map(i,0,numLines,tl.y,bl.y)
    let y2 = map(i,0,numLines,tr.y,br.y)
    let x1 = map(i,0,numLines,tl.x,bl.x)
    let x2 = map(i,0,numLines,tr.x,br.x)
    if (style === 'orig') {
      if (i < 16){
        bsr(buff, x1, y1, x2, y2, w(.03)*mW_mult, col2[0], col2[1], col2[2], 255)
      }
      bsr(buff, x1, y1, x2, y2, w(.03)*mW_mult, col1[0], col1[1], col1[2], 255)
    }else if (style === 'neat') {
      if (i < 16){
        dsr(buff, x1, y1, x2, y2, w(.004)*mW_mult, col2[0], col2[1], col2[2], 225, 'none')
      }
      dsr(buff, x1, y1, x2, y2, w(.004)*mW_mult, col1[0], col1[1], col1[2], 225, 'none')
    }else if (style === 'dev') {
      if (i < 16){
        pstr4(buff, x1, y1, x2, y2, w(.005)*mW_mult, w(.001)*mW_mult, 1, col2, 200, BLEND)
      }
      pstr4(buff, x1, y1, x2, y2, w(.005)*mW_mult, w(.001)*mW_mult, 1, col1, 200, BLEND)
    }
  }
  // MAIN BODY REFLS
  let numRefls;
  if (style === 'neat'){numRefls = 300}
  if (style === 'orig'){numRefls = 300}
  if (style === 'dev'){numRefls = 200}
  for (let i = 0; i < numRefls; i++) {
    let y1 = map(i,0,numRefls,r_tl.y,bl.y)
    let y2 = map(i,0,numRefls,r_tr.y,br.y)
    let x1 = map(i,0,numRefls,r_tl.x,bl.x)
    let x2 = map(i,0,numRefls,r_tr.x,br.x)
    let refl_col = color(col1[0]-50,col1[1]-50,col1[2]-50)
    if (style === 'neat') {
      let x = rnd(x1,x2)
      let y = rnd(y1,y2)
      refl_col.setAlpha(25)
      let refl_xOff = (size/2) * map(y,hrz,yMax,.5,1.5)
      let weight_mult = map(y,hrz,yMax,.5,1.5)
      let yOff = rnd(w(.01)) // *(weight_mult*map(i,0,numRefls,1,2))
      dsr(buff, x, y + yOff, x + rnd(-refl_xOff,refl_xOff), y + yOff, w(.003)*weight_mult, red(refl_col)-cD, green(refl_col)-cD, blue(refl_col)-cD, alpha(refl_col), 'none')
    }else if (style === 'orig') {
      let x = rnd(x1,x2)
      let y = rnd(y1,y2)
      refl_col.setAlpha(125)
      let refl_xOff = (size/2) * map(y,hrz,yMax,.5,1.5)
      let weight_mult = map(y,hrz,yMax,.5,1.5)
      let yOff = rnd(w(.01)) // *(weight_mult*map(i,0,numRefls,1,2))
      bsr(buff, x, y + yOff, x + rnd(-refl_xOff,refl_xOff), y + yOff, w(.03)*weight_mult, red(refl_col)-cD, green(refl_col)-cD, blue(refl_col)-cD, alpha(refl_col))
    }else if (style === 'dev') {
      let x = rnd(x1,x2)
      let y = rnd(y1,y2)
      refl_col.setAlpha(160)
      let refl_xOff = map(y,hrz,yMax,w(.005),w(.015))
      let weight_mult = map(y,hrz,yMax,.5,1.5)
      pstr4(p3, x, y, x + rnd(-refl_xOff,refl_xOff), y, w(.006)*weight_mult, w(.002)*weight_mult, 1, refl_col, 25, OVERLAY)
    }
  }
  if (style === 'orig') {
    bsr(buff, mastX, yMast, mastX, yMast-size, w(.1)*mW_mult, col2[0], col2[1], col2[2], 255)
    bsr(buff, bl.x - rnd(w(.2)), bl.y, br.x + rnd(w(.2)), br.y, w(.1), col3[0], col3[1], col3[2], 255)
  }else if (style === 'neat') {
    dsr(buff, mastX, yMast, mastX, yMast-size, w(.005)*mW_mult, col2[0], col2[1], col2[2], 225, 'none')
    dsr(buff, bl.x - rnd(w(.2)), bl.y, br.x + rnd(w(.2)), br.y, w(.005), col3[0], col3[1], col3[2], 225, 'none')
  }else if (style === 'dev') {
    pstr4(buff, mastX, yMast, mastX, yMast-size, w(.02)*mW_mult, w(.007)*mW_mult, 1, col2, 25, BLEND)
    pstr4(buff, bl.x - rnd(w(.2)), bl.y, br.x + rnd(w(.2)), br.y, w(.008), w(.005), 1, col3, 25, HARD_LIGHT)
  }
  let hasSails = rnd()
  if (hasSails < .5) {
    let numLines = 90
    let wMult = map(y,hrz,yMax,.5,1.5)
    for (let i = 0; i < numLines; i++) {
      let y = map(i,0,numLines,sail_t.y,sail_b.y)
      if (y < sail_m.y) {
        x = map(y,sail_t.y,sail_m.y,sail_t.x,sail_m.x)
      }else{
        x = map(y,sail_m.y,sail_b.y,sail_m.x,sail_b.x)
      }
      if (style === 'orig') {
        bsr(buff, x, y, sail_main, y, w(.03)*wMult, col2[0], col2[1], col2[2], 255)
      }else if (style === 'neat') {
        dsr(buff, x, y, sail_main, y, w(.003)*wMult, col2[0], col2[1], col2[2], 225, 'none')
      }else if (style === 'dev') {
        pstr4(buff, x, y, sail_main, y, w(.006)*wMult, w(.002)*wMult, 1, col2, 200, BLEND)
      }
    }
    // SAIL REFLS
    let sailRefls;
    if (style === 'neat'){sailRefls = 300}
    if (style === 'orig'){sailRefls = 75}
    if (style === 'dev'){sailRefls = 200}
    let refl_col = color(col2[0]-50,col2[1]-50,col2[2]-50)
    for (let i = 0; i < sailRefls; i++) {
      let y = map(i,0,sailRefls,r_sail_b.y,r_sail_t.y)
      let x1 = sail_main
      if (y < r_sail_m.y) {
        x2 = map(y,r_sail_b.y,r_sail_m.y,r_sail_b.x,r_sail_m.x)
      }else{
        x2 = map(y,r_sail_m.y,r_sail_t.y,r_sail_m.x,r_sail_t.x)
      }
      if (style === 'neat') {
        let xOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.003))*rnd(1,3)
        let xPos = rnd(x1,x2) + rnd(-xOff,xOff)
        let yOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.004))*rnd(1,3)
        let yPos = y + rnd(-yOff,yOff)
        let refl_xOff = (size/2) * map(y,hrz,yMax,.5,1.5)
        let alphaDim = map(i,0,sailRefls,1,.1)
        refl_col.setAlpha(65*alphaDim)
        dsr(buff, xPos, yPos, xPos + rnd(-refl_xOff,refl_xOff), yPos, w(.003)*wMult, red(refl_col), green(refl_col), blue(refl_col), alpha(refl_col), 'none')
      }else if (style === 'orig') {
        let xOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.003))*rnd(1,1.1)
        let xPos = rnd(x1,x2) + rnd(-xOff,xOff)
        let yOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.004))
        let yPos = y + rnd(-yOff,yOff)
        let refl_xOff = (size/5) * map(y,hrz,yMax,.5,1)
        bsr(buff, xPos, yPos, xPos + rnd(-refl_xOff,refl_xOff), yPos, w(.03)*wMult, red(refl_col)-50, green(refl_col)-50, blue(refl_col)-50, alpha(refl_col)/2)
      }else if (style === 'dev') {
        let xOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.003))*rnd(1,3)
        let xPos = rnd(x1,x2) + rnd(-xOff,xOff)
        let yOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.004))*rnd(1,3)
        let yPos = y + rnd(-yOff,yOff)
        refl_col.setAlpha(65)
        let refl_xOff = map(y,hrz,yMax,w(.005),w(.015))
        pstr4(p3, xPos, yPos, xPos + rnd(-refl_xOff,refl_xOff), yPos, w(.006)*wMult, w(.002)*wMult, 1, refl_col, 25, OVERLAY)
      }
    }
  }
}

//////////////////////////////////////////////////////////
//////////////////// overlay funcs ///////////////////////

function twilightSkyOverlay(style, hrz, pal) {
  //let numTwilightDots = 100000
  let numTwilightDots = floor(map(hrz,-h(.2),h(.32),50000,125000))
  if (style === 'orig') {numTwilightDots = floor(map(hrz,-h(.2),h(.32),20000,60000))}
  if (style === 'dev') {numTwilightDots = floor(map(hrz,-h(.2),h(.32),5000,15000))}
  for (let i = 0; i < numTwilightDots; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = rnd(-h(.5),hrz)
    let h1 = hrz
    let h2 = hrz - rnd(w(.05),w(.2))
    let h3 = h2 - rnd(w(.05),w(.2))
    let yOffset = 0;
    if (style !== 'orig') {
      yOffset = rnd(-w(.05),0)
    }
    if (y >= h2) {
      col1 = pal.suns.c1
      col2 = pal.suns.c2
      col = color(map(y,h1,h2,col1[0],col2[0]), map(y,h1,h2,col1[1],col2[1]), map(y,h1,h2,col1[2],col2[2]))
    }else{
      col1 = pal.suns.c2
      col2 = pal.suns.c3
      col = color(map(y,h2,h3,col1[0],col2[0]), map(y,h2,h3,col1[1],col2[1]), map(y,h2,h3,col1[2],col2[2]))
    }
    if (time === 'twilight') {alphaMultVal = .3}
    if (time === 'night') {alphaMultVal = .1}
    let dotAlpha = map(y,hrz,-h(.5),255,50) * alphaMultVal
    col.setAlpha(dotAlpha)
    yPos = y + yOffset
    let xS = rnd(w(.03))
    let yS = rnd(h(.03))
    twilight_dots.push({x,yPos,col,xS,yS})
  }
  shArr(twilight_dots)
}

function drawTwilight(buff,ptsArray,style,time) {
  buff.push()
  let delay = 0 //100
  let maxDist = dist(0,-h(.5),0,hrz)
  if (frameCount > delay && frameCount < delay + floor(ptsArray.length/50)) { // /10 for geom
    let numToDraw = floor(ptsArray.length/50)
    let i = frameCount * numToDraw;
    if (i < ptsArray.length-numToDraw) {
      for (let j = i; j < i + numToDraw; j++) {
        if (style === 'orig') {
          let x = ptsArray[j].x
          let y1 = ptsArray[j].yPos
          let y2 = y1 + rnd(w(.002),w(.01))
          buff.stroke(ptsArray[j].col)
          let thisDist = dist(0,y1,0,hrz)
          let strW = map(thisDist,0,maxDist,w(.005),w(.001))
          buff.strokeWeight(strW)
          buff.line(x,y1,x,y2)
        }else if (style === 'dev') {
          if (i < ptsArray.length/35) {
            let xPos = ptsArray[j].x
            let yPos = ptsArray[j].yPos
            let xW = rnd(w(.1),w(.35))
            let yH = rnd(h(.003),h(.01))
            let rectCol = ptsArray[j].col
            buff.rectMode(CENTER)
            buff.noStroke()
            buff.fill(rectCol)
            buff.rect(xPos,yPos,xW,yH)
          }
        }else if (style === 'neat') {
          let xPos = ptsArray[j].x
          let yPos = ptsArray[j].yPos
          let size = ptsArray[j].xS
          let dotCol = ptsArray[j].col
          buff.noStroke()
          buff.fill(dotCol)
          buff.ellipse(xPos,yPos,size/5)
        }
      }
    }
    }
  buff.pop()
}

function sunOrMoon(style,hrz,type,sz, pX, pY) {
  let xPos = pX
  let yPos = pY
  if (sz === 'sm'){size = w(.03),numDots=8000}else if (sz === 'md'){size = w(.06),numDots=16000}else{size = w(.09),numDots=24000}
  sunCols = [[255,217,85],[255,210,136],[241,231,243]]
  redCols = [[255,240,176],[242,114,114],[249,155,155],[226,100,90]]
  pinkCols = [[241,231,243],[226,144,195],[220,109,154],[192,83,102]]

  if (style === 'dev') {numDots = 100}
  if (style === 'orig') {numDots = 300}

  for (let i = 0; i < numDots; i++) {
    if (type === 'sun') {
      smCol = color(sunCols[floor(rnd()*sunCols.length)])
      bMode = HARD_LIGHT
    }else if (type === 'red sun') {
      smCol = color(redCols[floor(rnd()*redCols.length)])
      bMode = SOFT_LIGHT
    }else if (type === 'moon') {
      smCol = color(235,249,252,65)
      bMode = SCREEN
    }else if (type === 'pink moon') {
      smCol = color(pinkCols[floor(rnd()*pinkCols.length)])
      bMode = HARD_LIGHT
    }else if (type === 'black') {
      smCol = color(0,0,5,225)
      bMode = BURN
    }
    if (style === 'dev') {
      y = map(i,0,numDots,yPos-size,yPos+size);
      angle = map(i,0,numDots,0,PI)
      angleYL = map(i,0,numDots,0,PI)
      angleYR = map(i,0,numDots,PI,TWO_PI)
      yl = yPos - cos(angleYL)*size
      yr = yPos - cos(angleYL)*size
      x1 = xPos - sin(angle)*size
      x2 = xPos + sin(angle)*size
      let strW = map(size,w(.03),w(.09),w(.01),w(.015)) * map(abs(x2-x1),0,size,.5,1.25)
      smCol.setAlpha(200)
      if (i % 2) {
        pstr4(moonBuff, x1, yl, x2, yr, strW, strW/3, 1, smCol, 30, bMode)
      }else{
        pstr4(moonBuff, x2, yl, x1, yr, strW, strW/3, 1, smCol, 30, bMode)
      }
    }else if (style === 'neat') {
      let angle = rnd(0,TWO_PI)
      let r = rnd(size)
      let x = xPos + r * cos(angle)
      let y = yPos + r * sin(angle)
      let dotSize = w(.004) * map(r,0,size,.6,1)
      sm_dots.push({x,y,dotSize,smCol,bMode})
    }else if (style === 'orig') {
      x = map(i,0,numDots,xPos-size,xPos+size);
      angle = map(i,0,numDots,0,PI)
      angleXT = map(i,0,numDots,0,PI)
      angleXB = map(i,0,numDots,PI,TWO_PI)
      x = xPos - cos(angleXT)*size
      y1 = yPos - sin(angle)*size
      y2 = yPos + sin(angle)*size
      let strW = map(size,w(.03),w(.09),w(.03),w(.09)) * map(dist(x,0,xPos,0),0,size,1.5,.75)
      smCol.setAlpha(200)
      bsr(moonBuff, x, y1, x, y2, strW, red(smCol), green(smCol), blue(smCol), alpha(smCol)/1.5)
    }
  }
  //REFLS
  if (layout !== renderSanGm) {
    let levelMult = map(hrz,-h(.2),h(.32),.5,1.5)
    if (style === 'neat'){sunRefls = 1000*levelMult}
    if (style === 'orig'){sunRefls = 300*levelMult}
    if (style === 'dev'){sunRefls = 250*levelMult}
    for (let i = 0; i < sunRefls; i++) {
      if (type === 'sun') {
        rCol = color(sunCols[floor(rnd()*sunCols.length)])
        bMode = HARD_LIGHT
      }else if (type === 'red sun') {
        rCol = color(redCols[floor(rnd()*redCols.length)])
        bMode = HARD_LIGHT
      }else if (type === 'moon') {
        rCol = color(235,249,252,65)
        bMode = SCREEN
      }else if (type === 'pink moon') {
        rCol = color(pinkCols[floor(rnd()*pinkCols.length)])
        bMode = HARD_LIGHT
      }
      let yMin = lerp(hrz,h(.5),.2)
      let y = rnd(yMin,h(.5))
      let xOff = size * map(y,hrz,h(.5),.3,3)
      let x = xPos + rnd(-xOff,xOff)
      let weightMult = map(y,yMin,h(.5),1,3)
      rCol.setAlpha(rnd(25,90)*map(y,yMin,h(.5),.2,1))
      if (style === 'dev') {
        pstr4(p3, x, y, x + rnd(-xOff,xOff), y, w(.02), w(.006), 1, rCol, 15, bMode)
      }else if (style === 'neat') {
        dsr(p3, x, y, x + rnd(-xOff,xOff), y, w(.003)*weightMult, red(rCol), green(rCol), blue(rCol), alpha(rCol), 'none')
      }else if (style === 'orig') {
        bsr(p3, x, y, x + rnd(-xOff,xOff), y, w(.1)*weightMult, red(rCol), green(rCol), blue(rCol), alpha(rCol))
      }
    }
  }
}

function crescent(style, hrz, sz, pX, pY) {
  let xPos = pX
  let yPos = pY
  if (sz === 'sm'){size = w(.03),numDots=3000}else if (sz === 'md'){size = w(.06),numDots=6000}else{size = w(.09),numDots=9000}
  if (style === 'orig' || style === 'dev') {numDots = 100}
  let col = color(255,255,255,255)
  let mCol = color(255,255,255,255)
  for (let i = 0; i < numDots; i++) {
    let angle = rnd(-HALF_PI,HALF_PI)
    r1 = size
    if (angle <= 0) {
      insideVal = map(angle,-HALF_PI,0,1,.7)
    }else{
      insideVal = map(angle,0,HALF_PI,.7,1)
    }
    r2 = size*insideVal
    let r = rnd(r2,r1)
    if (style === 'neat') {
      let x = xPos + r * cos(angle)
      let y = yPos + r * sin(angle)
      let dotSize = w(.003) * map(r,0,size,.6,1)
      bMode = SCREEN
      mCol.setAlpha(225)
      moon_dots.push({x,y,dotSize,mCol,bMode})
    }else if (style === 'orig') {
      let xOut = xPos + r1*cos(angle)
      let xIn = xPos + r2*cos(angle)
      let y = yPos + r1*sin(angle)
      let strW = map(size,w(.03),w(.09),w(.03),w(.09)) * map(abs(xOut-xIn),0,size/5,.6,1.2)
      bsr(skyBuff, xIn, y, xOut, y, strW, red(mCol), green(mCol), blue(mCol), alpha(mCol)/2)
    }else if (style === 'dev') {
      let xOut = xPos + r1*cos(angle)
      let xIn = xPos + r2*cos(angle)
      let y = yPos + r1*sin(angle)
      bMode = SCREEN
      let strW = map(size,w(.03),w(.09),w(.003),w(.009)) * map(abs(xOut-xIn),0,size/5,.3,1.5)
      if (numDots % 2) {
        pstr4(skyBuff, xIn, y, xOut, y, strW, strW/3, 1, mCol, 15, bMode)
      }else{
        pstr4(skyBuff, xOut, y, xIn, y, strW, strW/3, 1, mCol, 15, bMode)
      }
    }
  }
  // refls
  if (layout !== renderSanGm) {
    let levelMult = map(hrz,-h(.2),h(.32),.5,1.5)
    let rCol = color(255,255,255)
    if (style === 'neat'){moonRefls = 1000*levelMult}
    if (style === 'orig'){moonRefls = 200*levelMult}
    if (style === 'dev'){moonRefls = 320*levelMult}
    for (let i = 0; i < moonRefls; i++) {
      let yMin = lerp(hrz,h(.5),.1)
      let y = rnd(yMin,h(.5))
      let xOff = size * map(y,hrz,h(.5),.7,3)
      let yOff = map(y,hrz,h(.5),w(.003),w(.01))
      let x = xPos + rnd(-xOff,xOff)
      let x2 = x + rnd(-xOff,xOff)
      let bMode = SCREEN
      let weightMult = map(y,yMin,h(.5),.7,2.1)
      rCol.setAlpha(rnd(15,85)*map(y,yMin,h(.5),.3,1))
      col.setAlpha(rnd(15,85)*map(y,yMin,h(.5),.3,1))
      if (style === 'dev') {
        //p4.text(`${alpha(rCol).toFixed(1)}`,x,y)
        pstr4(p3, x, y, x + rnd(-xOff,xOff), y, w(.02), w(.006), 1, [red(rCol), green(rCol), blue(rCol), alpha(rCol)], 15, bMode)
      }else if (style === 'neat') {
        dsr(p3, x, y, x2, y, w(.01), red(col), green(col), blue(col), alpha(col), 'none')
      }else if (style === 'orig') {
        bsr(p3, x, y+rnd(-yOff,yOff), x + rnd(-xOff,xOff), y+rnd(-yOff,yOff), w(.1)*weightMult, red(rCol), green(rCol), blue(rCol), alpha(rCol))
      }
    }
  }
}

function eclipse(style, hrz, sz, pX, pY) {
  let xPos = pX
  let yPos = pY
  if (sz === 'sm'){size = w(.03),nL=360}else if (sz === 'md'){size = w(.06),nL=720}else{size = w(.09),nL=1080}
  let numLines = nL
  sunOrMoon(style,hrz,'black',sz,xPos,yPos)
  let strW = map(size,w(.03),w(.09),w(.002),w(.006))
  let angoff = 0
  for (let i = 0; i < numLines; i++) {
    let angle = rnd(0,TWO_PI)
    let angle2 = angle + radians(3)
    col = color(255,255,255,255)
    bMode = BLEND
    let r = size*rnd(.99,1.01)
    let r2 = r*(1.01+(noise(sin(angoff))/10))
    let r3 = r*(1.01+(noise(sin(angoff))/3))
    let x1 = xPos + r * cos(angle)
    let y1 = yPos + r * sin(angle)
    let x2 = xPos + r2 * cos(angle)
    let x3 = xPos + r2 * cos(angle2)
    let x4 = xPos + r3 * cos(angle2)
    let y2 = yPos + r2 * sin(angle)
    let y3 = yPos + r * sin(angle2)
    let y4 = yPos + r3 * sin(angle2)
    if (style === 'orig') {
      bsr(skyBuff, x1, y1, x2, y2, strW*10, red(col), green(col), blue(col), alpha(col))
      bsr(skyBuff, x3, y3, x4, y4, strW*10, red(col), green(col), blue(col), alpha(col)/3)
    }else if (style === 'dev') {
      let sCol1 = color(red(col),green(col),blue(col),alpha(col))
      pstr4(skyBuff, x1, y1, x2, y2, strW, strW/1.5, 1, sCol1, 30, SCREEN)
      let sCol2 = color(red(col),green(col),blue(col),alpha(col)/3)
      pstr4(skyBuff, x3, y3, x4, y4, strW, strW/1.5, 1, sCol2, 30, SCREEN)
    }else if (style === 'neat') {
      dsr(skyBuff, x1, y1, x2, y2, strW, red(col), green(col), blue(col), alpha(col), 'none')
      dsr(skyBuff, x3, y3, x4, y4, strW, red(col), green(col), blue(col), alpha(col)/3, 'none')
    }
    angoff += .01
  }
}

function drawSunMoon(buff,ptsArray,style) {
  buff.push()
  let delay = 100
  let numToDraw = floor(ptsArray.length/50)
  if (frameCount > delay && frameCount < delay + numToDraw) {
    let i = (frameCount-delay) * numToDraw;
    if (i < ptsArray.length - numToDraw) {
      for (let j = i; j < i + numToDraw; j++) {
        buff.fill(ptsArray[j].smCol)
        buff.noStroke()
        buff.blendMode(ptsArray[j].bMode)
        if (style === 'neat') {
          buff.ellipse(ptsArray[j].x,ptsArray[j].y,ptsArray[j].dotSize)
        }else if (style === 'orig') {
          let size = ptsArray[j].dotSize*2
          let ySize = size*rnd(.5,1.5)
          buff.ellipse(ptsArray[j].x,ptsArray[j].y,size,ySize)
        }
      }
    }
  }
  buff.pop()
}

function starryNight(style, hrz, pal, type) {
  let numStars;
  if (type === 'none') {numStars = 0}
  if (type === 'some stars') {numStars = 15}
  if (type === 'starry night') {numStars = 60}
  for (let i = 0; i < numStars; i++) {
    let starSize = rnd(w(.001),w(.008))
    let numDots = 120
    let xPos = rnd(-w(.5),w(.5))
    let yPos = rnd(-h(.5),hrz)
    for (let j = 0; j < numDots; j++) {
      let angle = rnd(TWO_PI)
      let xOff = rnd(starSize)
      let yOff = rnd(starSize)
      x = xPos + xOff*cos(angle)
      y = yPos + yOff*sin(angle)
      let col = chCol(pal.suns)
      nCol = [col[0]*1.3,col[1]*1.3,col[2]*1.3]
      let size = w(.001) * map(i,0,numDots,1,2)
      star_dots.push({x,y,nCol,size})
    }
  }
  shArr(star_dots)
}

function drawStars(buff,ptsArray,style) {
  buff.push()
  let delay = 200
  if (frameCount > delay && frameCount < delay + floor(ptsArray.length/50)) {
    for (let i = frameCount; i < ptsArray.length; i += ptsArray.length/50) {
      buff.fill(ptsArray[i].nCol)
      buff.noStroke()
      buff.blendMode(SCREEN)
      buff.ellipse(ptsArray[i].x,ptsArray[i].y,ptsArray[i].size)
    }
  }
  buff.pop()
}

function newRefls(buff,style,time,frW) {
  buff.push()
  let num;
  let delay;
  let hMult = map(hrz,-h(.2),h(.32),1.2,.5);
  let hTrans;
  if (hrz == -h(.2)) {hTrans = h(.5)}
  if (hrz == 0) {hTrans = h(.5)}
  if (hrz == h(.32)) {hTrans = h(.8)}
  if (style === 'neat') {num = floor(200000*hMult), delay = 300, numToDraw = 2000}
  if (style === 'dev') {num = floor(16000*hMult), delay = 150, numToDraw = 200}
  if (style === 'orig') {num = floor(120000*hMult), delay = 400, numToDraw = 400}
  let i = frameCount
  if (i > delay && i < delay+(num/numToDraw)) {
    for (let j = i; j < i + numToDraw; j++) {
      let xPos = rnd(-w(.5)+frW,w(.5)-frW)
      let yPosGet = rnd(-h(.5)+frW,hrz)
      let yPos = map(yPosGet,hrz,-h(.5)+frW,hrz,hTrans)
      let col = color(get(xPos + width/2, yPosGet + height/2))
      let reflAlpha_mult = map(yPos,hrz,h(.5),1,.1)
      let baseAlpha;
      if (time === 'day') {baseAlpha=150}else if(time === 'twilight') {baseAlpha=180}else if(time === 'night') {baseAlpha=210}
      let reflAlpha = rnd(baseAlpha) * reflAlpha_mult
      if (style === 'neat') {
        col.setAlpha(reflAlpha)
        buff.noStroke()
        buff.fill(col)
        let size = map(yPos,hrz,h(.5),w(.004),w(.002))
        buff.ellipse(xPos,yPos,size)
      }else if (style === 'dev') {
        col.setAlpha(reflAlpha/2)
        let xOff = map(yPos,hrz,h(.5),w(.005),w(.1))
        let strW_mult = map(yPos,hrz,h(.5),.7,1.6)
        let size = map(yPos,hrz,h(.5),w(.002),w(.03))
        if (i % 2) {
          pstr4(buff, xPos + rnd(-size,size)+rnd(-xOff,xOff), yPos, xPos+rnd(-xOff,xOff), yPos, w(.006) * strW_mult, w(.003), 1, col, 15, HARD_LIGHT,'refl')
        }else{
          pstr4(buff, xPos+rnd(-xOff,xOff),yPos,xPos + rnd(-size,size)+rnd(-xOff,xOff),yPos, w(.006) * strW_mult, w(.003), 1, col, 15, HARD_LIGHT,'refl')
        }
      }else if (style === 'orig') {
        buff.noStroke()
        col.setAlpha(reflAlpha)
        buff.fill(col)
        let xOff = map(yPos,hrz,h(.5),w(.001),w(.1))
        let size = map(yPos,hrz,h(.5),w(.002),w(.007)) * rnd(.3,2)
        let sizeY = map(yPos,hrz,h(.5),w(.002),w(.01)) * rnd(.3,2)
        buff.ellipse(xPos+rnd(-xOff,xOff),yPos,size,sizeY)
      }
    }
  }
  buff.pop()
}

function devSky(buff,style,time,pal,bMode) {
  buff.push()
  let numLines_h = 50
  let numLines_v = 150
  let numRects = 500
  let sections = makeSections(3,-w(.5),w(.5),.8,1.2)
  if (time === 'day') {a = 125, aL = 125, dla = 90}
  if (time === 'twilight') {a = 35, aL = 65, dla = 50}
  if (time === 'night') {a = 25, aL = 15, dla = 25}
  for (let i = 0; i < numRects; i++) {
    rectMode(CENTER)
    let x = rnd(-w(.55),w(.55))
    let y = rnd(-h(.55),hrz)
    let maxS = dist(0,-h(.5),0,hrz)
    let xS = rnd(maxS/5)
    let yS = rnd(maxS/5)
    fillCol = color(chCol(pal.sky))
    if (time === 'twilight') {
      let adjA = map(y,hrz,-h(.5),45,10) + rnd(-10,10)
      fillCol.setAlpha(adjA)
    }else if (time === 'night') {
      let adjA = map(y,hrz,-h(.5),25,3) + rnd(-5,5)
      fillCol.setAlpha(adjA)
    }else{
      fillCol.setAlpha(a)
    }
    if (style === 'orig') {
      buff.fill(fillCol)
      buff.noStroke()
      let sqBlend;
      if (time === 'day'){sqBlend = HARD_LIGHT}else if(time === 'twilight'){sqBlend = SOFT_LIGHT}else if(time === 'night'){sqBlend = OVERLAY}
      buff.blendMode(sqBlend)
      buff.rect(x,y,xS,yS)
    }else if (style === 'dev') {
      let numLines = 15
      for (let j = 0; j < numLines; j++) {
        let ly = map(j,0,numLines,y-yS/2,y+yS/2)
        let x1 = x-xS/2
        let x2 = x+xS/2
        pstr4(buff, x1,ly,x2,ly, w(.01), w(.007), 1, [red(fillCol), green(fillCol), blue(fillCol), alpha(fillCol)/2], 200, OVERLAY)
      }
    }else{
      let numLines = 25
      for (let j = 0; j < numLines; j++) {
        let ly = map(j,0,numLines,y-yS/2,y+yS/2)
        let x1 = x-xS/2
        let x2 = x+xS/2
        dsr(buff, x1,ly,x2,ly, w(.002), red(fillCol), green(fillCol), blue(fillCol), alpha(fillCol), 'none')
      }
    }
    //if (style === 'orig' || style === 'neat') {
      let tl = cV(x-xS/2,y-yS/2)
      let tr = cV(x+xS/2,y-yS/2)
      let bl = cV(x-xS/2,y+yS/2)
      let br = cV(x+xS/2,y+yS/2)
      let strW = rnd(w(.002),w(.007))
      if (i % 25) {
        let newPt = p5vl(tl,bl,rnd(1,5))
        let accCol = chCol(pal.suns)
        let dCol = color(accCol)
        dCol.setAlpha(dla)
        if (style === 'orig') {
          bsr(buff,tl.x,tl.y,newPt.x,newPt.y,strW*10, accCol[0],accCol[1],accCol[2],85)
        }else if (style === 'neat') {
          dsr(buff, tl.x,tl.y,newPt.x,newPt.y, strW, accCol[0], accCol[1], accCol[2], 85, 'none')
        }else if (style === 'dev') {
          pstr4(buff, tl.x,tl.y,newPt.x,newPt.y, w(.009), w(.006), 1, dCol, 200, OVERLAY)
        }
      }else if (i % 35) {
        let newPt = p5vl(br,bl,rnd(1,5))
        let accCol = chCol(pal.suns)
        let dCol = color(accCol)
        dCol.setAlpha(dla)
        if (style === 'orig') {
          bsr(buff,br.x,br.y,newPt.x,newPt.y,strW*10, accCol[0],accCol[1],accCol[2],85)
        }else if (style === 'neat') {
          dsr(buff, br.x,br.y,newPt.x,newPt.y, strW, accCol[0], accCol[1], accCol[2], 85, 'none')
        }else if (style === 'dev') {
          pstr4(buff, br.x,br.y,newPt.x,newPt.y, w(.009), w(.006), 1, dCol, 200, OVERLAY)
        }
      }else if (i % 45) {
        let newPt = p5vl(tr,bl,rnd(1,10))
        let accCol = chCol(pal.suns)
        let dCol = color(accCol)
        dCol.setAlpha(dla)
        if (style === 'orig') {
          bsr(buff,tr.x,tr.y,newPt.x,newPt.y,strW*10, accCol[0],accCol[1],accCol[2],85)
        }else if (style === 'neat') {
          dsr(buff, tr.x,tr.y,newPt.x,newPt.y, strW, accCol[0], accCol[1], accCol[2], 85, 'none')
        }else if (style === 'dev') {
          pstr4(buff, tr.x,tr.y,newPt.x,newPt.y, w(.009), w(.006), 1, dCol, 200, SOFT_LIGHT)
        }
      }
    //}
  }
  for (let j = 0; j < sections.length-1; j++) {
    for (let i = 0; i < numLines_h; i++) {
      let x1options = [sections[j][0],sections[j][1]]
      let x1 = x1options[floor(rnd()*x1options.length)]
      let xLength = rnd(width)
      if (x1 = sections[j][0]) {x2 = x1 + xLength}
      if (x1 = sections[j][1]) {x2 = x1 - xLength}
      let lL = dist(x1,0,x2,0)
      let lH = lL/20
      let y = rnd(-h(.5),hrz)
      let strW = rnd(w(.002),w(.006))
      let c = chCol(pal.sky)
      let cD = 0;
      if (time === 'twilight') {cD = 15}
      if (time === 'night') {cD = 30}
      if (style === 'dev') {
        pstr4(buff,x1,y,x2,y+(rnd(-lH,lH)),strW,strW/3,1,[c[0]-cD,c[1]-cD,c[2]-cD,aL],120,bMode)
      }else if (style === 'neat') {
        dsr(buff, x1,y,x2,y+(rnd(-lH,lH)), strW*1.5, c[0]-cD, c[1]-cD, c[2]-cD, aL, 'none')
      }else if (style === 'orig') {
        bsr(buff,x1,y,x2,y+(rnd(-lH,lH)),strW*20, c[0]-cD,c[1]-cD,c[2]-cD,aL)
      }
    }
  }
  for (let i = 0; i < numLines_v; i++) {
    let y1 = rnd(-h(.55),hrz)
    let y2 = hrz
    let lL = dist(0,y1,0,y2)
    let lW = lL/20
    let x = rnd(-w(.5),w(.5))
    let strW = rnd(w(.002),w(.015))
    let c = color(chCol(pal.sky))
    c.setAlpha(30)
    let cD = 0;
    if (time === 'twilight') {cD = 30}
    if (time === 'night') {cD = 60}
    if (style === 'dev') {
      pstr4(buff,x,y1,x+(rnd(-lW,lW)),y2,strW,strW/3,1,[red(c)-cD,green(c)-cD,blue(c)-cD,alpha(c)],120,bMode)
    }else if (style === 'neat') {
      dsr(buff, x,y1,x+(rnd(-lW,lW)),y2, strW, red(c)-cD,green(c)-cD,blue(c)-cD,alpha(c), 'none')
    }else if (style === 'orig') {
      bsr(buff,x,y1,x+(rnd(-lW,lW)),y2,strW*20, red(c)-cD,green(c)-cD,blue(c)-cD,alpha(c))
    }
  }
  buff.pop()
}

function stripedBg(buff,hrz,pal,style) {
  let numSections = 10
  let sections = makeSections(numSections,-w(.55),w(.55),.8,1.5)
  for (let i = 0; i < numSections; i++) {
    x1 = sections[i][0]
    x2 = sections[i][1]
    let numLines = floor(map(x2-x1,0,w(1),0,2500)*rnd(.5,1.5))
    let yT = -h(.5);
    let yB = hrz;
    let col = color(chCol(pal.sky));
    if (style === 'neat') {
      col.setAlpha(rnd(45,110))
    }else if (style === 'dev') {
      if (time === 'day') {
        nCol = color(red(col), green(col), blue(col), alpha(col))
        nCol.setAlpha(rnd(20,60))
      }else if (time === 'twilight') {
        nCol = color(red(col), green(col), blue(col), alpha(col))
        nCol.setAlpha(rnd(7,21))
      }else if (time === 'night') {
        nCol = color(red(col)-50, green(col)-50, blue(col)-50, alpha(col))
        nCol.setAlpha(rnd(3,9))
      }
    }else{
      if (time === 'day') {
        col.setAlpha(rnd(20,60))
      }else if (time === 'twilight') {
        col.setAlpha(rnd(7,21))
      }else if (time === 'night') {
        col.setAlpha(rnd(3,9))
      }
    }
    for (let j = 0; j < numLines; j++) {
      let x = map(j,0,numLines,x1,x2)
      if (style === 'dev') {
        pstr4(buff,x,yT,x,yB,w(.005),w(.003),1,nCol,30,BLEND)
      }else if (style === 'neat') {
        dsr(buff, x,yT,x,yB, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
      }else if (style === 'orig') {
        bsr(buff, x,yT,x,yB, w(.05), red(col), green(col), blue(col), alpha(col))
      }
    }
  }
}

function crissCrossSky(buff,hrz,pal,style,num,bMode,time) {
  let numWedges = num;
  //let skySegmentHeight = dist(0,hrz,0,-h(.5));
  stripedBg(buff,hrz,pal,style);
  for (let i = 0; i < numWedges; i++) {
    //let xB = -w(.5)
    let y = rnd(-h(.5),hrz)
    //let yS = rnd(skySegmentHeight/12,skySegmentHeight/5)
    let yS = w(.15)
    //let yS = map(i,0,numWedges,skySegmentHeight/3,skySegmentHeight/12)
    let xLength = rnd(w(.25),w(1.5))
    //let xLength = width
    let col = color(chCol(pal.sky))
    if (style === 'neat') {
      nCol = col
      nCol.setAlpha(rnd(45,110))
    }else if (style === 'dev' || style === 'orig') {
      //if (time === 'day') {
      col.setAlpha(rnd(15,30))
      if (time === 'day') {
        nCol = color(red(col), green(col), blue(col), alpha(col))
        nCol.setAlpha(rnd(20,60))
      }else if (time === 'twilight') {
        nCol = color(red(col), green(col), blue(col), alpha(col))
        nCol.setAlpha(rnd(15,30))
      }else if (time === 'night') {
        nCol = color(red(col)-50, green(col)-50, blue(col)-50, alpha(col))
        nCol.setAlpha(rnd(7,21))
      }
    }
    let orientation = rnd()
    wedge_H(buff,style,pal,y,yS,xLength,nCol,orientation,bMode)
  }
  let numSecs = 7;
  for (let i = 0; i < numSecs; i++) {
    let x = rnd(-w(.5),w(.5))
    let xW = rnd(w(.003),w(.01))
    numL = 20
    x1 = x - xW/2
    x2 = x + xW/2
    let col = color(chCol(pal.sky))
    col.setAlpha(rnd(10,30))
    for (let j = 0; j < numL; j++) {
      xPos = map(j,0,numL,x1,x2)
      pstr4(buff,xPos,-h(.5),xPos,hrz,w(.005),w(.003),1,col,300,SOFT_LIGHT)
    }
  }
}

function renderSun(sunMoon,style,hrz,pal,sSz,px,py) {
  if (sunMoon === 'none') {

  }else if (sunMoon === 'sun') {
    sunOrMoon(style,hrz,'sun',sSz, px, py)
  }else if (sunMoon === 'red sun') {
    sunOrMoon(style,hrz,'red sun',sSz, px, py)
  }
}

function renderMoon(sunMoon,style,hrz,pal,mSz,px,py) {
  if (sunMoon === 'none') {

  }else if (sunMoon === 'moon') {
    sunOrMoon(style,hrz,'moon',mSz, px, py)
  }else if (sunMoon === 'pink moon') {
    sunOrMoon(style,hrz,'pink moon',mSz, px, py)
  }else if (sunMoon === 'crescent') {
    crescent(style, hrz, mSz, px, py)
  }else if (sunMoon === 'eclipse') {
    eclipse(style, hrz, mSz, px, py)
  }
}

//////////////////////////////////////////////////////////
/////////////////// assembly funcs ///////////////////////

function sanGm(buff, hrz, numSecs, pal, style, time, bMode, type) {
  buff.push()
  buff.blendMode(bMode)
  sections = bldSections(numSecs,-w(.5),w(.5),.8,1.2)
  let houseTypes = [sgmh]
  let dirs = ['l','r']
  let minWidth = width/numSecs/2.5
  let maxWidth = width/numSecs/.5
  if (type === 'towers') {
    for (let i = 0; i < sections.length-1; i += 2) {
      let x1 = sections[i][0]
      let x2 = sections[i][1]
      let xD = (x1+x2)/3
      let xW = (x2 - x1)/3
      let hH = xW*rnd(4,7)
      let yOffset = dist(0,hrz,0,-h(.5))/8 * rnd(.7)
      dir = dirs[floor(rnd()*dirs.length)]
      sanGmTower(buff, style, pal, xD, hrz+yOffset, xW, hH, time, 'tower')
    }
  }else{
    for (let i = 0; i < sections.length-1; i++) {
      let x1 = sections[i][0]
      let x2 = sections[i][1]
      let xD = (x1+x2)/2
      let xW = x2 - x1
      let hH = xW*rnd(.5,1.3)
      let yOffset = dist(0,hrz,0,-h(.5))/8 * rnd(.7)
      dir = dirs[floor(rnd()*dirs.length)]
      houseType = houseTypes[floor(rnd()*houseTypes.length)]
      if (xW > minWidth) {
        if (xW > maxWidth) {xW = maxWidth}
        houseType(buff, style, pal, xD, hrz+yOffset, xW, hH, dir, time, 'sanGm')
      }
    }
  }
  buff.pop()
  if (style === 'orig') {
    buff.push()
    let numBlocks = 35
    let maxHeight = map(hrz,-h(.2),h(.32),h(.03),h(.1))
    for (let i = 0; i < numBlocks; i++) {
      buff.blendMode(BURN)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(hrz,hrz-maxHeight/2)
      let xS = rnd(w(.05))
      let yS = rnd(-maxHeight)
      buff.noStroke()
      let rectCol = color(chCol(pal.bld))
      let rectAlpha = rnd(75,175)
      rectCol.setAlpha(rectAlpha)
      let numLines = 15
      for (let j = 0; j < numLines; j++) {
        let ly = map(j,0,numLines,yPos-yS/2,yPos+yS/2)
        let x1 = xPos-xS/2
        let x2 = xPos+xS/2
        bsr(buff,x1,ly,x2,ly,w(.03),red(rectCol),green(rectCol),blue(rectCol),alpha(rectCol))
      }
    }
    buff.pop()
  }
  if (style === 'dev') {
    let numWedges = 20;
    for (let i = 0; i < numWedges; i++) {
      let x = rnd(-w(.5),w(.5))
      let yB = rnd(hrz,hrz)
      let xS = rnd(minWidth/5,minWidth/1.5)
      let yH = xS * rnd(2,6)
      let col = color(chCol(pal.accents))
      col.setAlpha(rnd(60,200))
      wedge_V(buff,style,x,yB,xS,yH,col)
    }
  }
}

function metropolis(buff, hrz, numSecs, pal, style, time, bMode) {
  buff.push()
  buff.blendMode(bMode)
  let houseTypes = [sgmh,building,skyScraper] //sgmh,building,
  let dirs = ['l','r']
  let sections = bldSections(numSecs+1,-w(.52),w(.55),.7,1.2)
  let minWidth = width/numSecs/2.5
  let maxWidth = width/numSecs/.5
  for (let i = 0; i < sections.length; i++) {
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    let xM = (x1+x2)/2
    let xW = x2 - x1
    let hMult = map(dist(xM,0,0,0),0,w(.5),1.2,.6)
    let hH = xW * rnd(2,3.3) * hMult
    dir = dirs[floor(rnd()*dirs.length)]
    houseType = houseTypes[floor(rnd()*houseTypes.length)]
    if (xW > minWidth) {
      if (xW > maxWidth) {xW = maxWidth}
      houseType(buff, style, pal, xM, hrz, xW, hH, dir, time, 'metro')
    }
  }
  buff.pop()
  if (style === 'orig') {
    blds2.push()
    //rectMode(CENTER)
    let numBlocks = 30
    let yPosMax = map(hrz,-h(.2),h(.32),h(.03),h(.1))
    for (let i = 0; i < numBlocks; i++) {
      blds2.blendMode(SOFT_LIGHT)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(hrz,hrz-yPosMax)
      let xS = rnd(w(.05))
      let yS = rnd(-h(.15))
      blds2.noStroke()
      let rectCol = color(chCol(pal.bld))
      rectCol.setAlpha(rnd(100))
      blds2.fill(rectCol)
      blds2.rect(xPos,yPos,xS,yS)
    }
    blds2.pop()
  }
}

function cqtr(buff, hrz, numSecs, pal, style, time, bMode, xMid) {
  buff.push()
  buff.blendMode(bMode)
  let houseTypes = [cqtrHouse,sgmh] // sgmh
  let dirs = ['l','r']
  let sections = bldSections(numSecs,-w(.52),w(.52),.7,1.2)
  let minWidth = width/numSecs/2
  let maxWidth = width/numSecs/.8
  for (let i = 0; i < sections.length-1; i++) {
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    let xM = (x1+x2)/2
    let xW = x2 - x1
    let hH = xW * rnd(.5,1.3)
    let xDist = dist(xM,hrz,xMid,hrz)
    let yOff = map(xDist,0,w(.7),h(.001),h(.03))*rnd(.1,.8)
    dir = dirs[floor(rnd()*dirs.length)]
    houseType = houseTypes[floor(rnd()*houseTypes.length)]
    if (xW > minWidth) {
      if (xW > maxWidth) {xW = maxWidth}
      houseType(buff, style, pal, xM, hrz-yOff, xW, hH, dir, time, 'cqtr')
    }
    // REVISIT RANDOMIZED PLACEMENT FROM ABSLAND 12
  }
  if (style === 'orig') {
    blds3.push()
    //rectMode(CENTER)
    let numBlocks = 30
    let maxHeight = map(hrz,-h(.2),h(.32),h(.05),h(.15))
    for (let i = 0; i < numBlocks; i++) {
      blds3.blendMode(SOFT_LIGHT)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(hrz,hrz-h(.05))
      let xS = rnd(w(.05))
      //let yS = rnd(-h(.05))
      let yS = rnd(-maxHeight)
      blds3.noStroke()
      let rectCol = color(chCol(pal.bld))
      rectCol.setAlpha(rnd(200))
      blds3.fill(rectCol)
      blds3.rect(xPos,yPos,xS,yS)
    }
    blds3.pop()
  }
  if (style === 'dev') {
    let numWedges = 20;
    for (let i = 0; i < numWedges; i++) {
      let x = rnd(-w(.5),w(.5))
      let yB = rnd(hrz,hrz)
      let xS = rnd(minWidth/5,minWidth/1.5)
      let yH = xS * rnd(2,6)
      let col = color(chCol(pal.accents))
      col.setAlpha(rnd(60,200))
      wedge_V(buff,style,x,yB,xS,yH,col)
    }
  }
  buff.pop()
}

//////////////////////////////////////////////////////////
///////////////////// frame funcs ////////////////////////

function basicFrame(buff,pal,style,time,type) {
  /*buff.noFill()
  buff.strokeWeight(w(.05))
  buff.beginShape()
    buff.vertex(-w(.5),-h(.5))
    buff.vertex(w(.5),-h(.5))
    buff.vertex(w(.5),h(.5))
    buff.vertex(-w(.5),h(.5))
  buff.endShape(CLOSE)*/

  //if (type[0] === 'basic' || type[0] === 'quilted') {frW = w(.025)}
  //if (type[0] === 'minimal') {frW = w(.005)}

  let frW = type.frW

  if (type.typ === 'basic' || type.typ === 'minimal') {
    if (time === 'day') {
      baseCol = [255,255,255]
      if (style === 'dev') {
        baseCol = pal.suns.c1
      }
    }else if (time === 'twilight') {
      baseCol = [78,82,135]
      if (style === 'dev') {
        baseCol = pal.suns.c2
      }
    }else if (time === 'night') {
      baseCol = [0,0,0]
      if (style === 'dev') {
        baseCol = pal.suns.c4
      }
    }
    if (style === 'neat') {
      frameSection(buff,pal,style,time,1,1,-h(.5),-h(.5)+frW,baseCol,'h','b')
      frameSection(buff,pal,style,time,1,1,h(.5)-frW,h(.5),baseCol,'h','b')
      frameSection(buff,pal,style,time,1,1,-h(.5),-h(.5)+frW,baseCol,'v','b')
      frameSection(buff,pal,style,time,1,1,h(.5)-frW,h(.5),baseCol,'v','b')
    }else{
      //let col = chCol(pal.sky)
      let numLines = 12;
      if (type.typ === 'basic') {numLines = 12}
      if (type.typ === 'minimal') {numLines = 5}
      let frameAlpha = 165;
      let bMode = HARD_LIGHT
      for (let i = 0; i < numLines; i++) {
        let lW = map(i,0,numLines,w(.1),w(.05))
        let y = map(i,0,numLines,-h(.5),-h(.5)+frW)
        if (style === 'orig') {
          bsr(buff, -w(.5), y, w(.5), y, lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, -w(.5), y, w(.5), y, w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
      for (let i = 0; i < numLines; i++) {
        let y = map(i,0,numLines,h(.5)-frW,h(.5))
        let lW = map(i,0,numLines,w(.05),w(.1))
        if (style === 'orig') {
          bsr(buff, -w(.5), y, w(.5), y, lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, -w(.5), y, w(.5), y, w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
      for (let i = 0; i < numLines; i++) {
        let x = map(i,0,numLines,-w(.5),-w(.5)+frW)
        let lW = map(i,0,numLines,w(.1),w(.05))
        if (style === 'orig') {
          bsr(buff, x, -h(.5), x, h(.5), lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, x, -h(.5), x, h(.5), w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
      for (let i = 0; i < numLines; i++) {
        let x = map(i,0,numLines,w(.5)-frW,w(.5))
        let lW = map(i,0,numLines,w(.05),w(.1))
        if (style === 'orig') {
          bsr(buff, x, -h(.5), x, h(.5), lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, x, -h(.5), x, h(.5), w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
    }
  }

  if (type.typ === 'quilted') {
    frameSection(buff,pal,style,time,5,8,-h(.5),-h(.5)+frW,pal.bld,'h','q')
    frameSection(buff,pal,style,time,5,8,h(.5)-frW,h(.5),pal.bld,'h','q')
    frameSection(buff,pal,style,time,5,8,-h(.5),-h(.5)+frW,pal.bld,'v','q')
    frameSection(buff,pal,style,time,5,8,h(.5)-frW,h(.5),pal.bld,'v','q')
  }
}

function frameSection(buff,pal,style,time,minSecs,maxSecs,a,b,palType,dir,type) {
  buff.push()
  // if type basic, pass in pal, if type quilted pass in pal.subpal
  let numSecs = floor(rnd(minSecs,maxSecs))
  let sections = bldSections(numSecs,-w(.55),w(.55),.8,1.2)
  lW = w(.05)
  if (type === 'b') {
    sCol = palType
    numLines = 1000
    frameAlpha = 220
  }
  for (let i = 0; i < sections.length; i++) {
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    if (type === 'q') {
      sCol = chCol(palType)
      numLines = floor(rnd(90,150))
      frameAlpha = 165
    }
    let bMode = HARD_LIGHT
    for (let j = 0; j < numLines; j++) {
      let x = map(j,0,numLines,x1,x2)
      if (dir === 'h') {
        if (style === 'neat') {
          dsr(buff, x, a, x, b, w(.005), sCol[0], sCol[1], sCol[2], frameAlpha, 'none')
        }else if (style === 'orig') {
          bsr(buff, x, a, x, b, lW, sCol[0], sCol[1], sCol[2], frameAlpha)
        }else if (style === 'dev') {
          pstr4(buff, x, a, x, b, w(.005), w(.002), 1, sCol, 90, bMode)
        }
      }else if (dir === 'v') {
        if (style === 'neat') {
          dsr(buff, a, x, b, x, w(.005), sCol[0], sCol[1], sCol[2], frameAlpha, 'none')
        }else if (style === 'orig') {
          bsr(buff, a, x, b, x, lW, sCol[0], sCol[1], sCol[2], frameAlpha)
        }else if (style === 'dev') {
          pstr4(buff, a, x, b, x, w(.005), w(.002), 1, sCol, 90, bMode)
        }
      }
    }
  }
  buff.pop()
}



//////////////////////////////////////////////////////////
///////////////////// render funcs ///////////////////////

function renderSanGm(pal, hrz, sky, style, time, sType, mType) {

  let hStep = map(hrz,-h(.4),h(.5),h(.02),h(.07))

  let numSecs;
  if (hrz == -h(.2)) {numSecs = 15}
  if (hrz == 0) {numSecs = 11}
  if (hrz == h(.32)) {numSecs = 8}

  sanGm(blds, hrz-hStep*2.5, numSecs, pal, style, time, BLEND, 'towers')
  sanGm(blds2, hrz-hStep*2, numSecs, pal, style, time, BLEND, 'sanGm')
  sanGm(blds2, hrz-hStep, numSecs, pal, style, time, BLEND, 'sanGm')
  sanGm(blds3, hrz, numSecs, pal, style, time, BLEND, 'sanGm')

  sanGmTerr(p2, style, hrz, pal, style, time) // SHOULD PROBABLY BE P3

  if (sky === 'open') {
    let bMode2 = OVERLAY
    if (style === 'dev' && time !== 'day') {bMode2 = SOFT_LIGHT}
    devSky(skyBuff,style,time,pal,SOFT_LIGHT)
    devSky(skyBuff,style,time,pal,bMode2)
  }else if (sky === 'quilted') {
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
  }else if (sky === 'soaring') {
    crissCrossSky(skyBuff,hrz,pal,style,30,HARD_LIGHT,time)
  }

  if (time !== 'day') {
    twilightSkyOverlay(style, hrz, pal)
  }
}

function renderCqtr(pal, hrz, sky, style, time, sType, mType) {

  let hStep = map(hrz,-h(.4),h(.5),h(.01),h(.04))
  let xMid = rnd(-w(.15),w(.15))

  if (sky === 'open') {
    let bMode2 = OVERLAY
    if (style === 'dev' && time !== 'day') {bMode2 = SOFT_LIGHT}
    devSky(skyBuff,style,time,pal,SOFT_LIGHT)
    devSky(skyBuff,style,time,pal,bMode2)
  }else if (sky === 'quilted') {
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
  }else if (sky === 'soaring') {
    crissCrossSky(skyBuff,hrz,pal,style,30,HARD_LIGHT,time)
  }

  if (time !== 'day') {
    twilightSkyOverlay(style, hrz, pal)
  }

  let numSecs;
  if (hrz == -h(.2)) {numSecs = 24}
  if (hrz == 0) {numSecs = 18}
  if (hrz == h(.32)) {numSecs = 12}

  cqtr(blds, hrz-hStep*3, numSecs, pal, style, time, BLEND, xMid)
  cqtr(blds2, hrz-hStep*2, numSecs, pal, style, time, BLEND, xMid)
  cqtr(blds2, hrz-hStep, numSecs, pal, style, time, BLEND, xMid)
  cqtr(blds3, hrz, numSecs, pal, style, time, BLEND, xMid)

  quilting_water(p1, style, time, hrz, pal)
  quilting_water(p1, style, time, hrz, pal)

  cqtrTerr(p3, style, hrz, pal, time, xMid) 
  cqtrTerr(p3, style, hrz, pal, time, xMid) 

  let hasBoats = rnd()
  if (hasBoats < .5) {
    let numBoats = floor(rnd(1,5))
    for (let i = 0; i < numBoats; i++) {
      let boatDirs = ['r','l']
      let boatDir = boatDirs[floor(rnd()*boatDirs.length)]
      cqtrBoat(p4,hrz,pal,style,boatDir)
    }
  }

}

function renderMetro(pal, hrz, sky, style, time, sType, mType) {
  let hStep = map(hrz,-h(.4),h(.5),h(.005),h(.02))

  if (hrz == -h(.2)) {numSecs = 16}
  if (hrz == 0) {numSecs = 12}
  if (hrz == h(.32)) {numSecs = 8}

  metropolis(blds, hrz-hStep, floor(map(hrz,-h(.4),h(.4),18,6)), pal, style, time, BLEND)
  metropolis(blds2, hrz, floor(map(hrz,-h(.4),h(.4),18,6)), pal, style, time, BLEND)


  quilting_water(p1, style, time, hrz, pal)
  quilting_water(p1, style, time, hrz, pal)


  if (sky === 'open') {
    let bMode2 = OVERLAY
    if (style === 'dev' && time !== 'day') {bMode2 = SOFT_LIGHT}
    devSky(skyBuff,style,time,pal,SOFT_LIGHT)
    devSky(skyBuff,style,time,pal,bMode2)
  }else if (sky === 'quilted') {
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
    quilting(skyBuff, style, time, hrz, pal, 'ovr')
  }else if (sky === 'soaring') {
    crissCrossSky(skyBuff,hrz,pal,style,30,HARD_LIGHT,time)
  }


  if (time !== 'day') {
    twilightSkyOverlay(style, hrz, pal)
  }

  let hasBoats = rnd()
  if (hasBoats < .5) {
    let numBoats = floor(rnd(1,5))
    for (let i = 0; i < numBoats; i++) {
      let boatDir = 'r'
      cqtrBoat(p4,hrz,pal,style,boatDir)
    }
  }

}