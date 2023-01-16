//tokenData.hash = '0x1f9a1ddf4c7135cb571f0351aa739872f3b6884fff4f5c746aeaacd5fed80c5f'
//tokenData.hash = '0x2bb4b6981ffc5a7b21ac062fcc42ff314209f7d84c25e6792a4c811f2914bda8'
//tokenData.hash = '0x5cbbec88dc07b13c1bb66cf105a19bc88b189dcd34f1d4ab066050bc11d923ee'
//tokenData.hash = '0x1b55844ab1015605f4973787471915d8a8233b3cdcc61d8c1717b7ced553e622'
//tokenData.hash = '0xccd328c8cd371aa0f783d1c5b229bccdcc0d65b3acd0a5d87be0f08a287d5a5e'
//tokenData.hash = '0xe3ce4366cc55b586653562da5f5e507f47b426c46b8d60f83312f0457265bc18'
//tokenData.hash = '0xbb99304d444da5db14d23c7f2d3882005516c33f1554538b52e133a8d0c29b65'
//tokenData.hash = '0x3b0e4cf190603b654a10e8e1146867b492b42cd15a3735e927cec409ce2c4127'
//tokenData.hash = '0x3f5778a9f8c687d3b3f31f60995e200d3cc0689c72952a7af015f587d7e84134'
//tokenData.hash = '0xa359a7a0a0bc3f4cb4938463574a4fa14e3ad75ec171ba99cc86db3360e836cf'
//tokenData.hash = '0x33061609f03aee901ae9c8996d369b925992f3121b378675854cc020b8fade59'
//tokenData.hash = '0x6cdd1f54783f3c67ae5344bc128278e26bc3c81973e9444603e6be7e6e24bf88'
//tokenData.hash = '0x08d889e2efbfe88dc8f228dbd69a59bcdf56093080a9f79c12d6c7386ee10396'
//tokenData.hash = '0x9ddab10ceae4b8368029185e29e5a9f00e8078d5b9110db79d7a5dc4ee8ef074'
//tokenData.hash = '0x6bd15d653bf20307f2ef43f425211f92e98acdc264752abc59fe65b6f23920ba'
//tokenData.hash = '0x8680fe958df9284bd01f913b98e3c96528750b7407723b234c4d096a48b531f6' // nice black and white if style = neat
//tokenData.hash = '0x79d208701cd8b906e31972b9e91a03f569cc12a9f7b13721091f927b866fc460' // nide cqtr in hybrid
//tokenData.hash = '0x7a928fbca862752ec49682f279d6fdd43f005d1c9e080688418ab0cdb9c2a924'
//tokenData.hash = '0x7eb634ef4aa36fa6462d6d2aeda9fb945e6fd9269eaa5890e18a1acc24b1e7e4'
//tokenData.hash = '0x13fe0075590bdb250abc7f7298b57da1a909a3928ac2d6142f21e098fa817c4b'
//tokenData.hash = '0xfeab7a7bc64c9bb9239496436baf4a0f8091aea76b9ef0d35021b6b06f482e99' // the one that renders strange on Jen's computer (chrome only)
//tokenData.hash = '0x72a3f76baf68388fd39ac04518e100e9f5c519a00c1fc5903a7a0937e4b7205f'
//tokenData.hash = '0x86730db9349d93cba8571d54d2ab8897fa4789a09bb6bc0c53f6b4352d359f78'
//tokenData.hash = '0xa8590b6e837f3733cd486a6e07aed885bc1fcad91f723a9ba904120faa5f2799'
//tokenData.hash = '0x3ed26ce615589baac58e612bcd8b26da977985b93bf4c38d0e3d642f09d57b56'
//tokenData.hash = '0xf7b3cca99ca6eea9500b53a59155952449b99e755da02eb6053140ecf0fe9cf2'
//tokenData.hash = '0x9c07674bd5c5af5194b16f2676d9d4b46c36d6437ef8ea10e5767d5aa3a6cd84'
//tokenData.hash = '0x3b9f4401bf21055507d6e1366faacb31df361bcb785332713a39fdd76f54f0a6'
//tokenData.hash = '0x3b9c4319fd696a9c793eb36bad7137befc0254cfdb2422ac34c3184ba01cfcb1'
//tokenData.hash = '0xe91846c119baf4528353211081381cfffe4da1539c575d3621a459d507300f8d'
//tokenData.hash = '0x6ad097792e6214ae0f8dc320a5062cd485a5080f45aad2f095e5ee032ba55867' // dev night to work things out
//tokenData.hash = '0x8d40b41b86c9761ec0011150b07d7b69b15352d9d37dd3b3668b333791daf1c1'
//tokenData.hash = '0x8dea8250de63ac4c1fa86cbc285c199dc8e46e6f35f0765870ff594b30f9f7e7' // slow neat render
//tokenData.hash = '0xf974863703e0997731680c42775790b80aaa4b367a8017984dac2288ee924d96' // ibid
//tokenData.hash = '0xe1e989816e720af9bd9a70c69ecf5461888cd3836c568cfdbdadc3d3969bbbe2'
//tokenData.hash = '0xc9816f6a953388c4fdc6f34f0f04f0b13cd9257eb07bf2404bf22e769389a996' // return to for sanGmTerr
//tokenData.hash = '0x880c0bdfac3d1aa5c0004c82b080b8b0e563dc680ea528deafe55c9c92866aa7' // neat pink moon needs help
//tokenData.hash = '0xc71afe8f7893597600123c3000d6d0bd0f5e47aa320d3edf4476a17ab33fdfcc' // fix moon position
tokenData.hash = '0x8b6ceddf0178050c20f5e7120e8c92e3956b83078dc4767a0d1b0725c06bb339'

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

let horizon;
//let hTransfer;

let rfd_pos = [];
let rfd_pos2 = [];
let dotsToFill = [];
let fillShapeArr = [];
let fillPolyArr = [];

let strLines = [];
let strLinesRefl = [];
let dotStrArray = [];

let dotBlobs = [];

let paintStrokes = [];

let pStrArray = [];

let reflsArray = [];

let pointsToPaint = [];
let shuffled_pTp = [];

let twilight_dots = [];
let star_dots = [];
let moon_dots = [];
let sun_dots = [];

let style;
let time;
let sky;
let layout;
let sunmoon;

//////////////////////////////////////////////////////////
///////////////////// setup & draw ///////////////////////

function setup() {
  noiseSeed(seed)
  const smD = windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(smD, smD);

  pixelDensity(2)

  grid = createGraphics(smD, smD)
  skyBuff = createGraphics(smD, smD)
  blds = createGraphics(smD, smD)
  blds2 = createGraphics(smD, smD)
  blds3 = createGraphics(smD, smD)
  p1 = createGraphics(smD, smD)
  p2 = createGraphics(smD, smD)
  p3 = createGraphics(smD, smD)
  //p3.getContext("2d", {willReadFrequently: true})
  p4 = createGraphics(smD, smD)
  frameBuff = createGraphics(smD, smD)
  moonBuff = createGraphics(smD, smD)

  grid.drawingContext.getImageData.willReadFrequently = true;
  skyBuff.drawingContext.getImageData.willReadFrequently = true;
  blds.drawingContext.getImageData.willReadFrequently = true;
  blds2.drawingContext.getImageData.willReadFrequently = true;
  blds3.drawingContext.getImageData.willReadFrequently = true;
  p1.drawingContext.getImageData.willReadFrequently = true;
  p2.drawingContext.getImageData.willReadFrequently = true;
  p3.drawingContext.willReadFrequently = true;
  p4.drawingContext.getImageData.willReadFrequently = true;


  drawingContext.getImageData.willReadFrequently = true;

  translate(width/2,height/2)
  skyBuff.translate(width/2,height/2)
  blds.translate(width/2,height/2)
  blds2.translate(width/2,height/2)
  blds3.translate(width/2,height/2)
  p1.translate(width/2,height/2)
  p2.translate(width/2,height/2)
  p3.translate(width/2,height/2)
  p4.translate(width/2,height/2)
  frameBuff.translate(width/2,height/2)
  moonBuff.translate(width/2,height/2)

  style = chStyle()
  console.log(style)
  //style = 'orig'

  time = chTime()
  //time = 'night'
  console.log(time)

  hrzOptions = [-h(.2),0,h(.32)]
  horizon = hrzOptions[floor(rnd()*hrzOptions.length)]
  //let hTransfer = h(.5)
  //if (horizon = h(.32)) {
    //hTransfer = h(1)
  //}
  //console.log('horizon: ' + horizon +  ' hTansfer: ' + hTransfer)

  console.log(horizon)

  const pal = chPal(style)
  console.log(pal.name)

  layout = chLayout()

  sky = chSky()

  sunmoon = chSunMoon(time) 

  setGrid(45,horizon,pal)
  drawGrid(time,pal,style)

  layout(pal, horizon, sky, style, time, sunmoon)

  let frameTypes = ['basic','quilted']
  let frameType = frameTypes[floor(rnd()*frameTypes.length)]
  basicFrame(frameBuff,pal,style,time,frameType)

  //console.log(strLines.length)

  //renderMetro(pal, horizon, quilting, style, time)
  //renderSanGm(pal, horizon, quilting, style, time)
  //renderCqtr(pal, horizon, quilting, style, time)

  shuffleArray(strLines)
  shuffleArray(paintStrokes)
  shuffleArray(dotStrArray)
  shuffleArray(pStrArray)
  shuffleArray(fillShapeArr)
  shuffleArray(dotBlobs)
  console.log(strLines.length)
  console.log(paintStrokes.length)
  console.log(dotStrArray.length)
  console.log(pStrArray.length)
  console.log('fillshapeArr length: ' + fillShapeArr.length)
  console.log('dotBlobs array length: ' + dotBlobs.length)

  console.log('render time: ' + millis())
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

  drawGeomPaint()

  draw_dotStr()

  draw_pStr()

  if (layout != renderSanGm) {
    newRefls(p3,style,time)
  }

  if (time === 'night' || time === 'twilight') {
    drawStars(moonBuff,star_dots,style)
    drawMoon(skyBuff,moon_dots,style)
  }else if (time === 'day') {
    drawSun(moonBuff,sun_dots,style)
  }

  fillInShapeDots()

  drawDotBlobStr()

  //console.log(frameRate())
  //console.log(frameCount)
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

function chSunMoon(time) {
  const sunMoonV = map(decPairs[6],0,255,0,1);
  if (time === 'night') {
    if (sunMoonV < .35) {
      chSM = 'none'
    }else if(sunMoonV < .7) {
      chSM = 'moon'
    }else if (sunMoonV < .88) {
      chSM = 'crescent'
    }else if (sunMoonV < .99) {
      chSM = 'pink moon'
    }else{
      chSM = 'eclipse'
    }
  }else if (time === 'twilight') {
    if (sunMoonV < .3) {
      chSM = 'none'
    }else if(sunMoonV < .6) {
      chSM = 'moon'
    }else if (sunMoonV < .74) {
      chSM = 'crescent'
    }else if (sunMoonV < .81) {
      chSM = 'pink moon'
    }else if (sunMoonV < .86) {
      chSM = 'sun and moon'
    }else if (sunMoonV < .9) {
      chSM = 'sun and crescent'
    }else if (sunMoonV < .93) {
      chSM = 'sun and pink moon'
    }else if (sunMoonV < .95) {
      chSM = 'red sun and moon' 
    }else if (sunMoonV < .97) {
      chSM = 'red sun and crescent'
    }else if (sunMoonV < .99) {
      chSM = 'red sun pink moon'
    }else{
      chSM = 'eclipse'
    }
  }else{
    if (sunMoonV < .44) {
      chSM = 'none'
    }else if(sunMoonV < .88) {
      chSM = 'sun'
    }else if (sunMoonV < .93) {
      chSM = 'sun and moon'
    }else if (sunMoonV < .98) {
      chSM = 'red sun'
    }else{
      chSM = 'red sun and moon'
    }
  }
  return chSM;
}

function chStars(time) {
  const starsV = map(decPairs[7],0,255,0,1);
  if (time !== 'day') {
    if (starsV < .4) {
      chosenStars = 'none'
    }else if (starsV < .8) {
      chosenStars = 'stars'
    }else{
      chosenStars = 'starry night'
    }
  }
  return chosenStars
}

function chFrame() {
  const fV = map(decPairs[8],0,255,0,1);
  if (fV < .4) {
    chF = 'basic'
  }else{
    chF = 'quilted'
  }
}

//////////////////////////////////////////////////////////
/////////////////// component funcs //////////////////////

function makeSections(numSecs,left,right,minDiv,maxDiv,type) {
  leftEnd = left
  rightEnd = right
  let sectionWidths = [leftEnd]
  let diW = width/numSecs
  //let diW_rounded = diW.toFixed(10)
  //console.log(diW/width)
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
    //if (end - begin > maxDiv) 
    if (end > right) {
      end = right
    }
    //if (end <= right) {
      sections.push([begin,end])
    //}
  }
  //console.log('sections rand calls couont: ' + callCount)
  //shuffleArray(sections)
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
  //sectionWidths.push(rightEnd)
  let sections = [];
  for (let i = 0; i < sectionWidths.length; i++) {
    let begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    let end = sectionWidths[i+1] ? begin + sectionWidths[i+1] : begin + sectionWidths[i];
    sections.push([begin,end])
  }
  let lastBegin = sections[sections.length-1][1]
  let lastEnd = lastBegin + rnd(diW*minDiv,diW*maxDiv)
  sections.push([lastBegin,lastEnd])
  //console.log(sections)
  return sections
}

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
      //col = rnd(155,255)
      //if (y2 > horizon + h(.5) - dist(0,-h(.5),0,horizon)/7) {col = rnd(155,255)}
      //if (y2 > horizon + h(.5)) {col = rnd(155,255)}
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = floor(rnd() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

//////////////////////////////////////////////////////////
/////////////////// component lines //////////////////////

function pStr_curve(buff,x1,y1,x2,y2,strokeColor,strokeThickness,bMode,type) {
  let strokeLength = dist(x1,y1,x2,y2)

  let tangent1 = 0;
  let tangent2 = 0;
  let odds = rnd();
  
  if (odds < 0.3) {
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
  buff.bezier(v1.x,v1.y,cv1.x,cv1.y,cv2.x,cv2.y,v2.x,v2.y)

  yStep = 0
  xStep = 0

  for (let num = strokeThickness; num > 0; num -= strokeThickness/10) { // was set to w(.001)
    let offset = rnd(-50, 65);
    let newColor = color(strokeColor[0]+offset, strokeColor[1]+offset, strokeColor[2]+offset, rnd(35, 125));
    buff.stroke(newColor);
    buff.strokeWeight(rnd(strokeThickness/2)); // was set to rnd(w(.001))
    if (dir === 'h') {
      buff.bezier(v1.x,v1.y+rnd(-yStep,yStep),cv1.x+tangent1,cv1.y+rnd(-yStep,yStep),cv2.x+tangent2,cv2.y+rnd(-yStep,yStep),v2.x,v2.y+rnd(-yStep,yStep))
      yStep += strokeThickness/10
    }
    if (dir == 'v') {
      buff.bezier(v1.x+rnd(-xStep,xStep),v1.y,cv1.x+rnd(-xStep,xStep)+tangent1,cv1.y,cv2.x+rnd(-xStep,xStep)+tangent2,cv2.y,v2.x+rnd(-xStep,xStep),v2.y)
      xStep += strokeThickness/10
    }
  }
}

function blobStr(buff, x1, y1, x2, y2, weight, r, g, b, a, dir, type) {
  buff.noStroke()
  let blendType = type ? OVERLAY : BLEND
  //if (type === 'devBlend') {buff.blendMode(OVERLAY)}
  if (type === 'overlay') {blendType = SOFT_LIGHT}
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
      strLinesRefl.push({buff,px1,py1,px2,py2,size,r,g,b,adjAlpha})
    }else{
      strLines.push({buff,px1,py1,px2,py2,size,r,g,b,adjAlpha})
    }
  }
}

function drawBlobStr() {
  let total = floor(strLines.length) - 1201
  if (frameCount*1200 < total) {
    let i = frameCount * 1200
    for (let j = i; j < i + 1200; j++) {
      let buff = strLines[j].buff
      let px1 = strLines[j].px1
      let py1 = strLines[j].py1
      let px2 = strLines[j].px2
      let py2 = strLines[j].py2
      let size = strLines[j].size
      let r = strLines[j].r
      let g = strLines[j].g
      let b = strLines[j].b
      let a = strLines[j].adjAlpha
      buff.stroke(r, g, b, a)
      buff.strokeWeight(size)
      buff.line(px1,py1,px2,py2)
    }
  }
}

function dotBlobStr(buff, x1, y1, x2, y2, weight, r, g, b, a, dir) {
  let numDots = 50
  //let numDots = floor(map(abs(floor(y2-y1))/width,0,1,0,1000))
  /*let yVal = abs(y2-y1)
  if (yVal < w(.1)) {
    numDots = 100
  }else if (yVal < w(.2)) {
    numDots = 200
  }else if (yVal < w(.3)) {
    numDots = 300
  }else if (yVal < w(.4)) {
    numDots = 400
  }else{
    numDots = 500
  }*/
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
    //let col = [r, g, b, adjAlpha]
    let col = [r,g,b,adjAlpha]
    //buff.fill(r, g, b, adjAlpha)
    //console.log(thisBuff)
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
      //console.log(dotCol)
      buff.fill(dotCol)
      buff.push()
      buff.blendMode(BLEND)
      buff.ellipse(x,y,size)
      buff.pop()
    }
  }
}

function geomPaint(buff, x1, y1, x2, y2, weight, r, g, b, bMode, type) {
  for (let i = 0; i < 5; i++) {
    let lerpVal = rnd() * i
    if (lerpVal > 1) {lerpVal = rnd()}
    let px1 = lerp(x1, x2, lerpVal)
    let py1 = lerp(y1, y2, lerpVal)
    let lerpVal2 = rnd()
    let px2 = lerp(x1, x2, lerpVal2) + rnd(-weight,weight)
    let py2 = lerp(y1, y2, lerpVal2) + rnd(-weight,weight)
    let a = rnd(80,165)
    let strokeColor = [r,g,b,a]
    strokeThickness = rnd(weight/4,weight*2)
    paintStrokes.push({buff,px1,py1,px2,py2,strokeColor,strokeThickness,bMode,type})
    //pStr_curve(buff,px1,py1,px2,py2,strokeColor,strokeThickness,bMode,type)
  }
}

function drawGeomPaint() {
  let total = floor(paintStrokes.length) - 201
  if (frameCount*200 < total) {
    let i = frameCount*200
    for (let j = 0; j < i + 200; j++) {
      let buff = paintStrokes[j].buff
      let px1 = paintStrokes[j].px1
      let py1 = paintStrokes[j].py1
      let px2 = paintStrokes[j].px2
      let py2 = paintStrokes[j].py2
      let strokeColor = paintStrokes[j].strokeColor  
      let strokeThickness = paintStrokes[j].strokeThickness
      let bMode = paintStrokes[j].bMode
      let type = paintStrokes[j].type  
      pStr_curve(buff,px1,py1,px2,py2,strokeColor,strokeThickness,bMode,type)
    }
  }
}

function pstr4(buff,x1,y1,x2,y2,thickness,weight,density,col,lenDiv,bMode,type) {
  buff.push()
  let num = 3 //thickness * density; // WAS (thickness/w(.0005)) * density
  let v1 = createVector(x1,y1)
  let v2 = createVector(x2,y2)
  let cv1 = p5.Vector.lerp(v1,v2,.3)
  let cv2 = p5.Vector.lerp(v1,v2,.7)
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
        pStrArray.push({buff,x1,y1,x2,y2,x3,y3,x4,y4,col,strW,bMode})
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
        pStrArray.push({buff,x1,y1,x2,y2,x3,y3,x4,y4,col,strW,bMode})
      }
      xStep += w(.0003)
    }
  }
  buff.pop()
}

function draw_pStr() {
  let total = floor(pStrArray.length) - 501
  if (frameCount*500 < total) {
    let i = frameCount * 500
    for (let j = i; j < i + 500; j++) {
      let buff = pStrArray[j].buff
      let x1 = pStrArray[j].x1
      let x2 = pStrArray[j].x2
      let x3 = pStrArray[j].x3
      let x4 = pStrArray[j].x4
      let y1 = pStrArray[j].y1
      let y2 = pStrArray[j].y2
      let y3 = pStrArray[j].y3
      let y4 = pStrArray[j].y4
      let col = pStrArray[j].col
      let strW = pStrArray[j].strW
      let bMode = pStrArray[j].bMode
      buff.strokeWeight(strW)
      buff.stroke(col)
      buff.noFill()
      buff.blendMode(bMode)
      buff.bezier(x1,y1,x2,y2,x3,y3,x4,y4)
    }
  }
}

function dotStr(buff,x1,y1,x2,y2,thickness,weight,col,bMode) {
  let dir = 'h'
  if (y2-y1 > x2-x1) {dir = 'v'}
  //let numDots = floor(map(dist(x1,y1,x2,y2),0,w(1.414),0,1414)*map(thickness,0,w(.1),0,10))
  if (dir === 'v') {
    xMin1 = x1 - thickness/2
    xMax1 = x1 + thickness/2
    xMin2 = x2 - thickness/2
    xMax2 = x2 + thickness/2
    yStep = w(.0001)
    let numDots = floor(map(thickness,0,w(.1),0,10))
    for (let y = y1; y < y2; y += yStep) {
      for (let i = 0 ; i < numDots; i++) {
        let x = map(y,y1,y2,x1,x2)
        let xOff = rnd(-thickness/2,thickness/2)
        //xMax = map(y,y1,y2,xMax1,xMax2)
        //let xPos = rnd(xMin,xMax)
        let xPos = x + xOff
        let yOff = rnd(-yStep,yStep)
        let yPos = y + yOff
        let size = weight/2
        dotStrArray.push({buff,xPos,yPos,size,col,bMode})
      }
    }
  }
}

function draw_dotStr() {
  let total = floor(dotStrArray.length) - 101
  if (frameCount*100 < total) {
    let i = frameCount * 100
    for (let j = i; j < i + 100; j++) {
      let buff = dotStrArray[i].buff
      let x = dotStrArray[i].xPos
      let y = dotStrArray[i].yPos
      let size = dotStrArray[i].size
      let col = dotStrArray[i].col
      let bMode = dotStrArray[i].bMode
      buff.fill(col)
      buff.noStroke()
      buff.ellipse(x,y,size)
    }
  }
}

function texStr(buff, x1, y1, x2, y2, weight, r, g, b, a) {
  buff.stroke(r, g, b, a)
  for (let i = 0; i < 10; i++){
    let theta = rnd(TWO_PI);
    let nx1 = x1 + 0.5*rnd(weight/2)*cos(theta);
    let ny1 = y1 + 0.15*rnd(weight/2)*sin(theta);
    let nx2 = x2 + 0.5*rnd(weight/2)*cos(theta);
    let ny2 = y2 + 0.15*rnd(weight/2)*sin(theta);
    buff.strokeWeight(w(.0005));
    buff.line(nx1, ny1, nx2, ny2)
  }
}

function quilting(buff, style, time, horizon, pal, features) {
  let numRows = floor(rnd(8,16))
  let rows = makeSections(numRows,-h(.5),horizon,.75,2)
  let areaLinearType = 'none'
  rows.forEach(row => {
    numCols = floor(rnd(6,24))
    cols = makeSections(numCols,-w(.5),w(.52),.75,2)
    let y1 = row[0]
    let y2 = row[1]
    let cD = 0
    let weightMult = 1
    if (time === 'day') {weightMult = 1.7, colAlpha = 135}
    if (time === 'twilight') {cD = map(dist(0,y1,0,horizon),0,dist(0,-h(.5),0,horizon),0,50), weightMult = 1.35, colAlpha = 90}
    if (time === 'night') {cD = map(dist(0,y1,0,horizon),0,dist(0,-h(.5),0,horizon),0,100), colAlpha = 45}
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
        if (y1 < horizon) {
          if (style === 'neat') {
            dotBlobStr(buff, x, y1, x, y2, w(.005), red(col),green(col),blue(col),colAlpha, 'none')
          }else if (style === 'orig') {
            let xOff = rnd(-w(.001),w(.001))
            //colOffset = rnd(-10,10)
            blobStr(buff, x - xOff, y1 - yDiffTop, x + xOff, y2 - yDiff, w(.05)*weightMult, red(col)-cD, green(col)-cD, blue(col)-cD, colAlpha)
            blobStr(buff, x + xOff, y1, x - xOff, y2, w(.03)*weightMult, red(col)-cD, green(col)-cD, blue(col)-cD, colAlpha/2) // had colOffset added
          }else if (style === 'dev') {
            //blobStr(buff, x, y1, x, y2, w(.03)*weightMult, col[0]-cD, col[1]-cD, col[2]-cD, colAlpha)
            pstr4(buff, x - xOff, y1 - yDiffTop, x + xOff, y2 - yDiff, w(.005), w(.003), 1, col, 30, BLEND)
          }
        }
      }
      /*if (features === 'overlay') {
        let hasOverlay = rnd()
        if (hasOverlay < .3) {
          let tl = createVector(x1,y1)
          let tr = createVector(x2,y1)
          let br = createVector(x2,y2)
          let bl = createVector(x1,y2)
          let st = rnd(90,135)
          //fillPoly(buff, tl, tr, br, bl, st, col, SOFT_LIGHT)
          //fillShape(buff, tl, tr, br, bl, rnd(60), col, SOFT_LIGHT, w(.003))
        }
      }*/
    }
  })
}

function quilting_water(buff, style, time, horizon, pal) {
  let qW_numRows = floor(rnd(18,30));
  console.log('num rows: ' + qW_numRows)
  let rows = makeSections(qW_numRows,horizon,h(.5),.75,2,'water')
  console.log('rows: ' + rows.length)
  //let areaLinearType = 'none'
  //rows.forEach(row => {
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
      let tl = createVector(x1,y1)
      let tr = createVector(x2,y1)
      let br = createVector(x2,y2)
      let bl = createVector(x1,y2)
      let numLines = 10 + j*2
      //let numLines = floor(map(dist(0,y1,0,y2),0,width,0,500) * rnd(1,2))
      for (let k = 0; k < numLines; k++) {
        let y = map(k,0,numLines,y1,y2)
        if (style === 'neat') {
          dotBlobStr(buff, x1, y, x2, y, w(.005), col[0],col[1],col[2],125, 'none')
        }else if (style === 'orig') {
          blobStr(buff, x1, y, x2, y, w(.025)*weightMult, col[0], col[1], col[2], 90)
        }else if (style === 'dev') {
          let strW = rnd(w(.001),w(.005))
          pstr4(buff, x1 - rnd(xW/2), y, x2 + rnd(xW/2), y, strW*weightMult, strW/3*weightMult, 1, [col[0], col[1], col[2],rnd(120)], 30, SOFT_LIGHT)
        }
      }
    }
  //})
  }
}

function makePoly4(buff,x1,y1,x2,y2,x3,y3,x4,y4,col,pal,type,style) {
  buff.push()
  buff.noStroke()
  if (type === 'bg') {
    buff.fill(col)
    buff.blendMode(BLEND)
  }else if (type === 'overlay') {
    buff.fill(col)
    buff.blendMode(BLEND)
  }
  let tl = createVector(x1,y1)
  let tr = createVector(x2,y2)
  let br = createVector(x3,y3)
  let bl = createVector(x4,y4)
  //buff.blendMode(BURN)
  if (style === 'dev') {
    buff.noFill()
    strCol = chCol(pal.bld)
    buff.stroke(strCol)
    buff.beginShape()
      buff.vertex(x1,y1)
      buff.vertex(x2,y2)
      buff.vertex(x3,y3)
      buff.vertex(x4,y4)
    buff.endShape(CLOSE)
  }

  let hTrans;
  if (horizon == -h(.2)) {hTrans = h(.5)}
  if (horizon == 0) {hTrans = h(.5)}
  if (horizon == h(.32)) {hTrans = h(.8)}

  let xStep = w(.0003)
  if (style === 'geom') {xStep = w(.002)}
  if (style === 'geom') {xStep = w(.003)}

  if (type === 'overlay') {
    let bCol = chCol(pal.drk)
    for (let x = x1; x < x2; x+= xStep) {
      let xB = map(x,x1,x2,x4,x3)
      let yT = map(x,x1,x2,y1,y2)
      let yB = map(xB,x4,x3,y3,y4)
      let vStrW = rnd(w(.03),w(.05))
      if (style === 'orig') {
        blobStr(buff, x, yT, xB, yB, vStrW, bCol[0], bCol[1], bCol[2], rnd(40,85))
      }/*else if (style === 'geom') {
        geomPaint(buff, x, yT, xB, yB, vStrW/20, bCol[0], bCol[1], bCol[2])
      }*/else if (style === 'geom') {
        blobStr(buff, x, yT, xB, yB, vStrW, bCol[0], bCol[1], bCol[2], rnd(40,85))
      }else if (style === 'dev') {
        //blobStr(buff, x, yT, xB, yB, vStrW, bCol[0], bCol[1], bCol[2], rnd(40,85))
        pstr4(buff, x, yT, xB, yB, w(.002), w(.001), 1, [col[0], col[1], col[2], rnd(20)], 100, OVERLAY) // WAS OVERLAY
      }else if (style === 'neat') {
        //blobStr(buff, x, yT, xB, yB, w(.02), col[0], col[1], col[2], 125)
        dotBlobStr(buff, x, yT, xB, yB, w(.003), col[0], col[1], col[2], 125)
      }
      // REFLS
      let maxReflY = horizon - dist(x,yB,x,yT) // adjust to proportions for horizon level
      let adjReflY = map(maxReflY,horizon,-h(.5),horizon,hTrans)
      let reflY = rnd(yB,adjReflY)
      let relfWidth = rnd(-w(.03),w(.03))
      let reflCol = chCol(pal.drk)
      if (style === 'dev') {
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        pstr4(buff, x, reflY, x + relfWidth, reflY, strW, strW/3, 1, [reflCol[0], reflCol[1], reflCol[2], rnd(85)], 100, OVERLAY) // WAS OVERLAY
      }else if (style === 'neat') {
        blobStr(buff, x, reflY, x + relfWidth, reflY, w(.02), reflCol[0], reflCol[1], reflCol[2], rnd(85), 'none', 'refl')
      }else if (style === 'orig'){
        blobStr(buff, x, reflY, x + relfWidth, reflY, vStrW, reflCol[0], reflCol[1], reflCol[2], rnd(65))
      }
    }
  }
  if (style === 'dev' || style === 'orig') {
    let numSecs = rnd(8,18)
    if (style === 'dev') {
      areaLinearDev(buff,numSecs/2,tl,tr,br,bl,pal.drk,0,1)
      areaLinearDev(buff,numSecs,tl,tr,br,bl,pal.drk,0,1)
    }

    let detail = rnd()
    if (detail < .2) {
      newPt = p5.Vector.lerp(tl,tr,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(bl,tl,rnd(.6,1.5))
      strCol = chCol(pal.accents)
      strW = rnd(w(.001),w(.003))
      strW_orig = rnd(w(.03),w(.08))
      if (style === 'dev') {
        pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,strW,w(.001),1,strCol,30,OVERLAY)
        pstr4(p3,bl.x,bl.y,newPt2.x,newPt2.y,strW,w(.001),1,strCol,30,OVERLAY)
      }else if (style === 'orig') {
        blobStr(p3,tl.x,tl.y,newPt.x,newPt.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(165,225))
        blobStr(p3,bl.x,bl.y,newPt2.x,newPt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(165,225))
      }
    }else if (detail < .2) {
      newPt = p5.Vector.lerp(tr,tl,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(tr,br,rnd(.6,1.5))
      newPt3 = p5.Vector.lerp(bl,br,rnd(.6,1.5))
      strCol = chCol(pal.accents)
      strW = rnd(w(.001),w(.003))
      if (style === 'dev') {
        pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,strW,w(.001),1,strCol,30,OVERLAY)
        pstr4(p3,bl.x,bl.y,newPt2.x,newPt2.y,strW,w(.001),1,strCol,30,OVERLAY)
        pstr4(p3,bl.x,bl.y,newPt3.x,newPt3.y,strW,w(.001),1,strCol,30,OVERLAY)
      }else if (style === 'orig') {
        blobStr(p3,tl.x,tl.y,newPt.x,newPt.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(165,225))
        blobStr(p3,bl.x,bl.y,newPt2.x,newPt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(165,225))
        blobStr(p3,bl.x,bl.y,newPt3.x,newPt3.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(165,225))
      }
    }
  }
  buff.pop()
}

function makePoly6(buff,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,col,pal,type,style) {
  makePoly4(buff,x1,y1,x2,y2,x5,y5,x6,y6,col,pal,type,style)
  makePoly4(buff,x2,y2,x3,y3,x4,y4,x5,y5,col,pal,type,style)
}

function areaLinear(buff,numSecs,tl,tr,br,bl,pal,minSpl,maxSpl,type) { // DESCRIBE type/STYLE
  buff.push()
  buff.blendMode(SOFT_LIGHT)
  if (type === 'nightsky'){buff.blendMode(BURN)}
  let lerpCounter = 0
  for (let i = 0; i < numSecs; i++) {
    let col = chCol(pal)
    let extCol = chCol(pal)
    let addLerp = rnd((1/numSecs)*2)
    let lerpVal1 = lerpCounter
    let lerpVal2 = lerpCounter + addLerp
    let tvl = p5.Vector.lerp(tl,bl,lerpVal1)
    let tvr = p5.Vector.lerp(tr,br,lerpVal1)
    let bvl = p5.Vector.lerp(tl,bl,lerpVal2)
    let bvr = p5.Vector.lerp(tr,br,lerpVal2)
    if (type === 'terrain') {
      //buff.stroke(extCol)
      //buff.strokeWeight(w(.005))
      let detail = rnd()
      if (detail < .1) {
        let lVal = rnd(1,30)
        let extPoint = p5.Vector.lerp(bvl,tvl,lVal)
        //buff.line(bvl.x,bvl.y,extPoint.x,extPoint.y)
        geomPaint(buff, bvl.x,bvl.y,extPoint.x,extPoint.y, w(.005), extCol[0], extCol[1], extCol[2])
      }else if (detail < .2) {
        let lVal = rnd(1,30)
        let extPoint = p5.Vector.lerp(tvr,tvl,lVal)
        //buff.line(tvr.x,tvr.y,extPoint.x,extPoint.y)
        geomPaint(buff, bvl.x,bvl.y,extPoint.x,extPoint.y, w(.005), extCol[0], extCol[1], extCol[2])
      }
    }
    let t_split = rnd(minSpl,maxSpl)
    //let xoff
    let dir = rnd()
    if (dir < .5) {
      let lpt = p5.Vector.lerp(tvl,tvr,t_split)
      let lpb = p5.Vector.lerp(bvl,bvr,t_split)
      for (let x = lpt.x; x < tvr.x; x += w(.001)) {
        let x2 = map(x,lpt.x,tvr.x,lpb.x,bvr.x)
        let y1 = map(x,lpt.x,tvr.x,lpt.y,tvr.y)
        let y2 = map(x,lpt.x,tvr.x,lpb.y,bvr.y)
        let colOffset = rnd(-15,15)
        //let colOffset = 15 * noise(xoff)
        let nCol = color(col[0]+colOffset,col[1]+colOffset,col[2]+colOffset)
        if (type === 'nightsky'){nCol.setAlpha(60)}
        //buff.stroke(nCol)
        //buff.strokeWeight(w(.001))
        if (type === 'bld') {
          if (y2 < (bvl.y+bvr.y)/2) {
            //buff.line(x,y1,x2,y2)
            geomPaint(buff, x,y1,x2,y2, w(.0005), nCol[0], nCol[1], nCol[2])
          }
        }else{
          if (x >= -w(.5) && x <= w(.5)){
            //buff.line(x,y1,x2,y2)
            geomPaint(buff, x,y1,x2,y2, w(.0005), nCol[0], nCol[1], nCol[2])
          }
        }
        //xoff += .1
      }
    }else{
      let rpt = p5.Vector.lerp(tvl,tvr,t_split)
      let rpb = p5.Vector.lerp(bvl,bvr,t_split)
      for (let x = tvl.x; x < rpt.x; x += w(.001)) {
        let x2 = map(x,tvl.x,rpt.x,bvl.x,rpb.x)
        let y1 = map(x,tvl.x,rpt.x,tvl.y,rpt.y)
        let y2 = map(x,tvl.x,rpt.x,bvl.y,rpb.y)
        let colOffset = rnd(-15,15)
        //let colOffset = 30 * noise(xoff)
        let nCol = color(col[0]+colOffset,col[1]+colOffset,col[2]+colOffset)
        if (type === 'nightsky'){nCol.setAlpha(60)}
        //buff.stroke(nCol)
        //buff.strokeWeight(w(.001))
        if (type === 'bld') {
          if (y2 < (bvl.y+bvr.y)/2) {
            //buff.line(x,y1,x2,y2)
            geomPaint(buff, x,y1,x2,y2, w(.005), nCol[0], nCol[1], nCol[2])
          }
        }else{
          if (x >= -w(.5) && x <= w(.5)){
            //buff.line(x,y1,x2,y2)
            geomPaint(buff, x,y1,x2,y2, w(.005), nCol[0], nCol[1], nCol[2])
          }
        }
        //xoff += .1
      }
    }
    lerpCounter += addLerp
  }
  buff.pop()
}

function areaLinearDev(buff,numSecs,tl,tr,br,bl,pal,minSpl,maxSpl,type) {
  buff.push()
  //buff.blendMode(SOFT_LIGHT)
  let lerpCounter = 0
  for (let i = 0; i < numSecs; i++) { // WAS SET TO NUMSECS-1
    let col = color(chCol(pal))
    //let addLerp = rnd((1/numSecs))
    //let addLerp = 1/i
    //let lerpVal1 = lerpCounter
    //let lerpVal2 = lerpCounter + addLerp
    let lerpVal1 = i/numSecs
    let lerpVal2 = (i+1)/numSecs
    let tvl = p5.Vector.lerp(tl,bl,lerpVal1)
    let tvr = p5.Vector.lerp(tr,br,lerpVal1)
    let bvl = p5.Vector.lerp(tl,bl,lerpVal2)
    let bvr = p5.Vector.lerp(tr,br,lerpVal2)
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
      let lpt = p5.Vector.lerp(tvl,tvr,t_split)
      let lpb = p5.Vector.lerp(bvl,bvr,t_split)
      let numLines = floor(map(dist(tvl.x,tvl.y,tvr.x,tvr.y),0,w(.3),0,100))
      //for (let x = lpt.x; x < tvr.x; x += w(.002)) {
      for (let j = 0; j < numLines; j++) {
        let x = map(j,0,numLines,lpt.x,tvr.x)
        let x2 = map(j,0,numLines,lpb.x,bvr.x)
        let y1 = map(j,0,numLines,lpt.y,tvr.y)
        let y2 = map(j,0,numLines,lpb.y,bvr.y)
        //let x2 = map(x,lpt.x,tvr.x,lpb.x,bvr.x)
        //let y1 = map(x,lpt.x,tvr.x,lpt.y,tvr.y)
        //let y2 = map(x,lpt.x,tvr.x,lpb.y,bvr.y)
        let colOffset = rnd(-15,15)
        //let nCol = [col[0]+colOffset,col[1]+colOffset,col[2]+colOffset,bldAlpha]
        let nCol = [red(col)+colOffset, green(col)+colOffset, blue(col)+colOffset, bldAlpha]
        //blobStr(buff, x, y1, x2, y2, w(.01), nCol[0], nCol[1], nCol[2], 150, 'none') 
        //blobStr(buff, x, y1, x2, y2, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'devBlend')
        buff.stroke(nCol)
        buff.line(x,y1,x2,y2)
      }
    }else{
      let rpt = p5.Vector.lerp(tvl,tvr,t_split)
      let rpb = p5.Vector.lerp(bvl,bvr,t_split)
      let numLines = floor(map(dist(tvl.x,tvl.y,rpt.x,rpt.y),0,w(.3),0,100))
      //for (let x = tvl.x; x < rpt.x; x += w(.002)) {
      for (let j = 0; j < numLines; j++) {
        let x = map(j,0,numLines,tvl.x,rpt.x)
        let x2 = map(j,0,numLines,bvl.x,rpb.x)
        let y1 = map(j,0,numLines,tvl.y,rpt.y)
        let y2 = map(j,0,numLines,bvl.y,rpb.y)
        //let x2 = map(x,tvl.x,rpt.x,bvl.x,rpb.x)
        //let y1 = map(x,tvl.x,rpt.x,tvl.y,rpt.y)
        //let y2 = map(x,tvl.x,rpt.x,bvl.y,rpb.y)
        let colOffset = rnd(-15,15)
        //let nCol = [col[0]+colOffset,col[1]+colOffset,col[2]+colOffset,bldAlpha]
        let nCol = [red(col)+colOffset, green(col)+colOffset, blue(col)+colOffset, bldAlpha]
        //blobStr(buff, x, y1, x2, y2, w(.01), nCol[0], nCol[1], nCol[2], 150, 'none') 
        buff.stroke(nCol)
        buff.line(x,y1,x2,y2)
      }
    }
    //lerpCounter += addLerp
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
  //let numLines = floor(map(yH,0,h(.5),0,250))
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
    //buff.stroke(col)
    //buff.strokeWeight(w(.001))
    //buff.blendMode(HARD_LIGHT)
    //buff.line(xL,y,xR,y)
    if (style === 'dev') {
      pstr4(buff,xL,y,xR,y,w(.005),w(.002),1,col,30,OVERLAY)
    }else if (style === 'orig') {
      blobStr(buff, xL,y,xR,y, w(.05), red(col), green(col), blue(col), alpha(col), 'none')
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
  //let xEnd = xB + xLength;
  let xSplitVal = rnd(.3,.7);
  let xSplit = lerp(xB,xEnd,xSplitVal);
  let ySplit = y;
  let h_or_v = rnd()
  let dir = rnd()
  //let numLinesV = floor(map(xLength,0,w(1),0,500))
  //let numLinesH = floor(map(yS,0,w(1),0,800))

  if (style === 'dev') {
    buff.push()
    let detail = rnd()
    //dCol = color(red(col),green(col),blue(col))
    dCol = color(chCol(pal.suns))
    dCol.setAlpha(255)
    if (detail < .3) {
      let pt1 = createVector(xB,y2)
      let pt2 = createVector(xSplit,ySplit)
      pstr4(buff,pt1.x,pt1.y,pt2.x,pt2.y,w(.015),w(.006),1,dCol,30,BLEND)
    }else if (detail < .6) {
      let pt1 = createVector(xEnd,y1)
      let pt2 = createVector(xB,y1)
      pstr4(buff,pt1.x,pt1.y,pt2.x,pt2.y,w(.015),w(.006),1,dCol,30,BLEND)
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
          //console.log(col)
          dotBlobStr(buff, x,yT,x,yB, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
        }else if (style === 'orig') {
          blobStr(buff, x,yT,x,yB, w(.05), red(col), green(col), blue(col), alpha(col))
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
          dotBlobStr(buff, x,yT,x,yB, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
        }else if (style === 'orig') {
          blobStr(buff, x,yT,x,yB, w(.05), red(col), green(col), blue(col), alpha(col))
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
        if (y < horizon) {
          if (style === 'dev') {
            pstr4(buff,xL,y,xR,y,w(.005),w(.003),1,col,300,blendType)
          }else if (style === 'neat') {
            dotBlobStr(buff, xL,y,xR,y, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
          }else if (style === 'orig') {
            blobStr(buff, xL,y,xR,y, w(.05), red(col), green(col), blue(col), alpha(col))
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
        if (y < horizon) {
          if (style === 'dev') {
            pstr4(buff,xL,y,xR,y,w(.005),w(.003),1,col,300,blendType)
          }else if (style === 'neat') {
            dotBlobStr(buff, xL,y,xR,y, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
          }else if (style === 'orig') {
            //console.log(col)
            blobStr(buff, xL,y,xR,y, w(.05), red(col), green(col), blue(col), alpha(col))
          }
        }
      }
    }
  }
}

// VERTICAL DOT FILLS

function fillShape(buff, tl, tr, br, bl, st, col, bMode, numDots) {
  buff.push()
  for (let i = 0; i < numDots; i++) {
    let x = rnd(tl.x,tr.x)
    let y_top = map(x,tl.x,tr.x,tl.y,tr.y)
    let y_bot = map(x,tl.x,tr.x,bl.y,br.y)
    let y = rnd(y_top,y_bot)
    let size = w(.001)
    let colAlpha = map(y,y_top,y_bot,90,0)
    fillShapeArr.push({buff,x,y,size,bMode,col,colAlpha,st})
  }
  buff.pop()
}

function fillShapeDots(buff,numDots,x,y,size,col,bMode) {
  buff.push()
  let blendType = bMode ? bMode : OVERLAY
  buff.blendMode(blendType)
  let yColEndLval = rnd(.5,1)
  let yColEnd = lerp(y1,y2,yColEndLval)
  let startOpa = 165
  let xPos = x//+xOffset
  if (style === 'neat') {startOpa = 25}
  //console.log('shape fill opacity: '+ startOpa, 'num dots: ' + numDots)
  for (let i = 0; i < numDots; i++) {
    let yPos = rnd(y1,y2)
    buff.noStroke()
    let adjCol = color(col)
    let opa = map(yPos,y1,yColEnd,startOpa,0)
    adjCol.setAlpha(opa)
    buff.fill(adjCol)
    buff.ellipse(xPos,yPos,size)
  }
  buff.pop()
}

function fillInShapeDots() {
  let total = fillShapeArr.length-1
  if (frameCount*150 < total + 150) {
    let i = frameCount
    for (let j = i; j < i + 149; j++) {
      let buff = fillShapeArr[j].buff
      let x = fillShapeArr[j].x
      let y = fillShapeArr[j].y
      let size = fillShapeArr[j].size
      let col = fillShapeArr[j].col
      let colAlpha = fillShapeArr[j].colAlpha
      let bMode = fillShapeArr[j].bMode
      buff.noStroke()
      buff.fill(red(col),green(col),blue(col),colAlpha)
      buff.blendMode(bMode)
      buff.ellipse(x,y,size)
    }
  }
}

//////////////////////////////////////////////////////////
////////////////////// house types ///////////////////////

function sanGmHouse1(buff, style, pal, xM, yB, xW, yH, dir, time, type) {
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
  if (horizon == -h(.2)) {hTrans = h(.5)}
  if (horizon == 0) {hTrans = h(.5)}
  if (horizon == h(.32)) {hTrans = h(.8)}

  let dD = map(yB,-h(.4),h(.5),70,10)
  let yDiff = yH/dD
  if (type === 'tower') {yDiff = yH/(dD*5)}
  let yth = yB - yH - yDiff
  let ytl = yB - yH + yDiff
  let refl_dist_yth = horizon - dist(0,horizon,0,yth)
  let refl_dist_ytl = horizon - dist(0,horizon,0,ytl)
  let refl_dist_yB = horizon - dist(0,horizon,0,yB)
  let refl_yth = map(refl_dist_yth,horizon,-h(.5),horizon,hTrans)
  let refl_ytl = map(refl_dist_ytl,horizon,-h(.5),horizon,hTrans)
  let refl_yB = map(refl_dist_yB,horizon,-h(.5),horizon,hTrans)
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
    stl = createVector(x1,ytl)
    sbl = createVector(x1,yB)
    tl = createVector(x3,yth)
    tr = createVector(x2,ytl)
    br = createVector(x2,yB)
    bl = createVector(x3,yB)
    r_tl = createVector(x3,refl_yth)
    r_tr = createVector(x2,refl_ytl)
    r_br = createVector(x2,refl_yB)
    r_bl = createVector(x3,refl_yB)
  }else if (dir === 'r') {
    str = createVector(x2,ytl)
    sbr = createVector(x2,yB)
    tl = createVector(x1,ytl)
    tr = createVector(x3,yth)
    br = createVector(x3,yB)
    bl = createVector(x1,yB)
    r_tl = createVector(x1,refl_ytl)
    r_tr = createVector(x3,refl_yth)
    r_br = createVector(x3,refl_yB)
    r_bl = createVector(x1,refl_yB)
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
    buff.vertex(x1,horizon)
    buff.vertex(x1,ytl)
    buff.vertex(x3,yth)
    buff.vertex(x2,ytl)
    buff.vertex(x2,horizon)
  buff.endShape(CLOSE)

  let num_lines = 120;
  if (type === 'tower') {num_lines = 65}

  let drkCol = chCol(pal.drk)

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
      blobStr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
      let xOffset = rnd(-w(.002),w(.002))
      blobStr(p2, x + xOffset, y, x + xOffset, yB, w(.02), col[0]-cD, col[1]-cD, col[2]-cD, 125)
      // WINDOWS
      let numWindows = 4
      if (wrr - wrl > width/8) {numWindows = 5}
      let win_cD = 4
      //let drkCol = [col[0]/win_cD, col[1]/win_cD, col[2]/win_cD]
      let ywt = y + yH/8
      let ywb = ywt + yH/12
      if (type === 'tower') {
        wPos = lerp(wrl,wrr,.5)
        if (x > wPos - xW/8 && x < wPos + xW/8) {
          let numLines = 4
          for (let j = 0; j < numLines; j++) {
            let winX = map(j,0,numLines,wPos-xW/8,wPos+xW/8)
            blobStr(buff, winX, ywt, winX, ywb, w(.05), drkCol[0]/2, drkCol[1]/2, drkCol[2]/2, 90)
          }
        }
      }else if (type === 'sanGm' || type === 'cqtr'){
        for (let i = 1; i < numWindows; i++) {
          wPos = lerp(wrl,wrr,.2*i)
          let numLines = 3
          for (let j = 0; j < numLines; j++) {
            let winX = map(j,0,numLines,wPos-xW/32,wPos+xW/32)
            blobStr(buff, winX, ywt, winX, ywb, w(.05), drkCol[0]/2, drkCol[1]/2, drkCol[2]/2, 90)
            blobStr(buff, winX, ywt + yH/5, winX, ywb + yH/5, w(.05), drkCol[0]/2, drkCol[1]/2, drkCol[2]/2, 90)
          }
        }
      }
      // REFLECTIONS
      if (type === 'metro') {
        let minY = horizon
        let maxY = map(dist(x,y,x,horizon),0,dist(x,-h(.5),0,horizon),horizon,h(.5))
        let reflY = rnd(minY,maxY)
        let reflY2 = reflY + rnd(dist(x,y,x,horizon))
        let vStrW = rnd(w(.02),w(.05))
        blobStr(buff, x, reflY, x, reflY2, vStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
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
        let hStrW = rnd(w(.02),w(.05))
        let hY = map(y,horizon,-h(.5),horizon,h(.5))
        let hY2 = rnd(horizon,hY)
        blobStr(buff, x, hY, x + rnd(-reflLMain,reflLMain), hY, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(90,185)) // DRAWS THICK LINES
        blobStr(buff, x, hY2, x + rnd(-reflLMain,reflLMain), hY2, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(90,185))
      }
    }else if (style === 'neat') {
      dotBlobStr(buff, x, y, x, horizon, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      if (type === 'cqtr' || type === 'metro') {
        let reflDist = dist(x,horizon,x,y)
        let reflDistMin = dist(x,horizon,x,yB)
        let maxReflY = horizon - reflDist
        let minReflY = horizon - reflDistMin
        let adjReflY = map(maxReflY,horizon,-h(.5),horizon,hTrans)
        let adjReflYMin = map(minReflY,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,adjReflY)
        //console.log(horizon, reflY, adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8
        //blobStr(buff, x, reflY, x + reflWidth, reflY, w(.01), col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'overlay')
        //blobStr(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), w(.01), col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'overlay')
      }
    }else if (style === 'dev') {
      pstr4(buff, x, y, x, horizon, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 190], 200, OVERLAY)
      numSecs = rnd(3,10)
      //areaLinearDev(buff,numSecs,tl,tr,br,bl,pal.bld,0,1)
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
          wPos = lerp(wrl,wrr,.2*i)
          if (x > wPos - xW/32 && x < wPos + xW/32) {
            pstr4(buff, x, ywt, x, ywb, w(.002), w(.0005), 1, [drkCol[0], drkCol[1], drkCol[2]], 100, BLEND)
            pstr4(buff, x, ywt + yH/4, x, ywb + yH/4, w(.002), w(.0005), 1, [drkCol[0], drkCol[1], drkCol[2]], 100, BLEND)
          }
        }
      }
      if (type === 'cqtr' || type === 'metro') {
        let reflDist = dist(x,horizon,x,y)
        let reflDistMin = dist(x,horizon,x,yB)
        let maxReflY = horizon - reflDist
        let minReflY = horizon - reflDistMin
        let adjReflY = map(maxReflY,horizon,-h(.5),horizon,hTrans)
        let adjReflYMin = map(minReflY,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,adjReflY)
        //console.log(horizon, reflY, adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }
    }
  }
  // DETAIL
  if (style === 'dev') {
    for (let i = 0; i < 5; i++) {
      areaLinearDev(buff,numSecs,tl,tr,br,bl,pal.bld,0,1,'metroBuilding')
    }
  }
  if (style === 'dev' || style === 'orig') {
    let detail = rnd()
    strW_dev = rnd(w(.001),w(.01)) // upper value may be too high / lines too heavy
    strW_orig = rnd(w(.04),w(.08))
    strCol = color(chCol(pal.accents))
    strCol.setAlpha(155)
    if (detail < .2) {
      newPt = p5.Vector.lerp(tl,tr,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(tl,bl,rnd(.6,1.5))
      if (style === 'dev') {
        pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,strW_dev,w(.001),1,strCol,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_dev,w(.001),1,strCol,300,OVERLAY)
        if (type === 'metro') {
          fillShape(p3, tl, tr, br, bl, rnd(60), strCol, BLEND, 320)
        }else if (type === 'cqtr' || type === 'sanGm'){
          if (dir === 'l') {
            fillShape(p3, stl, tl, bl, sbl, rnd(60), strCol, BLEND, 25)
          }else if (dir === 'r') {
            fillShape(p3, tr, str, sbr, br, rnd(60), strCol, BLEND, 25)
          }
        }
      }else if (style === 'orig') {
        blobStr(p3,tl.x,tl.y,newPt.x,newPt.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        blobStr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
      }
    }else if (detail < .4) {
      newPt = p5.Vector.lerp(tr,br,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(tl,bl,rnd(.5,2.5))
      newPt3 = p5.Vector.lerp(tl,tr,rnd(1,2.5))
      if (style === 'dev') {
        pstr4(p3,tr.x,tr.y,newPt.x,newPt.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt3.x,newPt3.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        if (type === 'metro') {
          fillShape(p3, tl, tr, br, bl, rnd(60), strCol, BLEND, 320)
        }else if (type === 'cqtr' || type === 'sanGm'){
          fillShape(p3, tl, tr, br, bl, rnd(60), strCol, HARD_LIGHT, 60)
        }
      }else if (style === 'orig') {
        blobStr(p3,tr.x,tr.y,newPt.x,newPt.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        blobStr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        blobStr(p3,tl.x,tl.y,newPt3.x,newPt3.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
      }
    }else if (detail < .6) {
      newPt = p5.Vector.lerp(bl,tl,rnd(1,15))
      newPt2 = p5.Vector.lerp(tr,br,rnd(1,15))
      newPt3 = p5.Vector.lerp(tr,tl,rnd(1,2.5))
      if (style === 'dev') {
        pstr4(p3,bl.x,bl.y,newPt.x,newPt.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        pstr4(p3,tr.x,tr.y,newPt2.x,newPt2.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        pstr4(p3,tr.x,tr.y,newPt3.x,newPt3.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
      }else if (style === 'orig') {
        blobStr(p3,bl.x,bl.y,newPt.x,newPt.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        blobStr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        blobStr(p3,tl.x,tl.y,newPt3.x,newPt3.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
      }
      // REFL 
      if (type === 'cqtr' || type === 'metro') {
        reflPt = p5.Vector.lerp(r_bl,r_tl,rnd(1,15))
        reflPt2 = p5.Vector.lerp(r_tr,r_br,rnd(1,15))
        reflPt3 = p5.Vector.lerp(r_tr,r_tl,rnd(1,2.5))
        reflCol = chCol(pal.bld)
        r_strW_dev = rnd(w(.001),w(.003))
        r_strW_orig = rnd(w(.03),w(.07))
        if (style === 'dev') {
          pstr4(p3,r_bl.x,r_bl.y,reflPt.x,reflPt.y,r_strW_dev,strW_dev/3,1,reflCol,300,OVERLAY)
          pstr4(p3,r_tr.x,r_tr.y,reflPt2.x,reflPt2.y,r_strW_dev,strW_dev/3,1,reflCol,300,OVERLAY)
          pstr4(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_dev,strW_dev/3,1,reflCol,300,OVERLAY)
        }else if (style === 'orig') {
          blobStr(p3,r_bl.x,r_bl.y,reflPt.x,reflPt.y,r_strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
          blobStr(p3,r_tr.x,r_tr.y,reflPt2.x,reflPt2.y,r_strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
          blobStr(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        }
      }
    }
    else if (detail < .9) {
      newPt = p5.Vector.lerp(br,tr,rnd(1,25))
      newPt2 = p5.Vector.lerp(tl,tr,rnd(1,5))
      newPt3 = p5.Vector.lerp(tr,br,rnd(1,2.5))
      if (style === 'dev') {
        pstr4(p3,br.x,br.y,newPt.x,newPt.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        pstr4(p3,tr.x,tr.y,newPt3.x,newPt3.y,strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
      }else if (style === 'orig') {
        blobStr(p3,br.x,br.y,newPt.x,newPt.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        blobStr(p3,tl.x,tl.y,newPt2.x,newPt2.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        blobStr(p3,tr.x,tr.y,newPt3.x,newPt3.y,strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
      }
      // REFL 
      if (type === 'cqtr' || type === 'metro') {
        reflPt = p5.Vector.lerp(r_br,r_tr,rnd(1,25))
        reflPt2 = p5.Vector.lerp(r_tl,r_tr,rnd(1,5))
        reflPt3 = p5.Vector.lerp(r_tr,r_br,rnd(1,2.5))
        reflCol = chCol(pal.bld)
        r_strW_dev = rnd(w(.001),w(.003))
        r_strW_orig = rnd(w(.03),w(.07))
        if (style === 'dev') {
          pstr4(p3,r_br.x,r_br.y,reflPt.x,reflPt.y,r_strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
          pstr4(p3,r_tl.x,r_tl.y,reflPt2.x,reflPt2.y,r_strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
          pstr4(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_dev,strW_dev/3,1,strCol,300,OVERLAY)
        }else if (style === 'orig') {
          blobStr(p3,r_br.x,r_br.y,reflPt.x,reflPt.y,r_strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
          blobStr(p3,r_tl.x,r_tl.y,reflPt2.x,reflPt2.y,r_strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
          blobStr(p3,r_tr.x,r_tr.y,reflPt3.x,reflPt3.y,r_strW_orig,red(strCol),green(strCol),blue(strCol),rnd(100,225),'down','overlay')
        }
      }
    }
  }else if (style === 'neat') {
    let st = rnd(60)
    let fCol_d = [col[0]-25,col[1]-25,col[2]-25,65]
    if (dir === 'l') {
      fillShape(blds3, stl, tl, bl, sbl, st, fCol_d, BLEND, 150) // last argument was spacing was w(.002), replaced with num lines
    }
    if (dir === 'r') {
      fillShape(blds3, tr, str, sbr, br, st, fCol_d, BLEND, 150)
    }
  }
}

function sanGmTower(buff, style, pal, xM, yB, xW, yH, time) {
  sanGmHouse1(buff, style, pal, xM, yB, xW, yH, dir, time, 'tower')
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
  if (horizon == -h(.2)) {hTrans = h(.5)}
  if (horizon == 0) {hTrans = h(.5)}
  if (horizon == h(.32)) {hTrans = h(.8)}

  let dD = map(yB,-h(.4),h(.5),70,10)
  let yDiff = yH/dD
  if (type === 'tower') {yDiff = yH/(dD*5)}
  let yth = yB - yH - yDiff
  let ytl = yB - yH + yDiff
  let r_yth = map(yth,horizon,-h(.5),horizon,hTrans)
  let r_ytl = map(ytl,horizon,-h(.5),horizon,hTrans)
  let col = chCol(pal.bld)

  let side_tl = createVector(x1,ytl)
  let side_tr = createVector(xT,yth)
  let side_br = createVector(xT,yB)
  let side_bl = createVector(x1,yB)

  let xBr1Y = lerp(yth,ytl,lVal1)
  let xBr2Y = lerp(yth,ytl,lVal2)

  let r_xBr1Y = map(xBr1Y,horizon,-h(.5),horizon,hTrans)
  let r_xBr2Y = map(xBr2Y,horizon,-h(.5),horizon,hTrans)

  let sec1_tl = createVector(xT,yth)
  let sec1_tr = createVector(xBr1,xBr1Y)
  let sec1_br = createVector(xBr1,lerp(yB,xBr1Y,.8))
  let sec1_bl = createVector(xT,lerp(yB,yth,.8))

  let sec2_tl = createVector(xT,sec1_bl.y)
  let sec2_tr = createVector(xBr2,lerp(yB,xBr2Y,.8))
  let sec2_br = createVector(xBr2,lerp(yB,xBr2Y,.5))
  let sec2_bl = createVector(xT,lerp(yB,yth,.5))

  let sec3_tl = createVector(xT,sec2_bl.y)
  let sec3_tr = createVector(x2,lerp(yB,ytl,.5))
  let sec3_br = createVector(x2,yB)
  let sec3_bl = createVector(xT,yB)

  let r_sec1_tl = createVector(xT,r_yth)
  let r_sec1_tr = createVector(xBr1,r_xBr1Y)
  let r_sec1_br = createVector(xBr1,lerp(horizon,r_xBr1Y,.8))
  let r_sec1_bl = createVector(xT,lerp(horizon,r_yth,.8))

  let r_sec2_tl = createVector(xT,r_sec1_bl.y)
  let r_sec2_tr = createVector(xBr2,lerp(horizon,r_xBr2Y,.8))
  let r_sec2_br = createVector(xBr2,lerp(horizon,r_xBr2Y,.5))
  let r_sec2_bl = createVector(xT,lerp(horizon,r_yth,.5))

  let r_sec3_tl = createVector(xT,r_sec2_bl.y)
  let r_sec3_tr = createVector(x2,lerp(horizon,r_ytl,.5))
  let r_sec3_br = createVector(x2,horizon)
  let r_sec3_bl = createVector(xT,horizon)

  if (dir === 'r') {
    xT = x2 - xW/sideWidth
    xBr1 = lerp(xT,x1,lVal1)
    xBr2 = lerp(xT,x1,lVal2)

    let side_tl = createVector(xT,yth)
    let side_tr = createVector(x2,ytl)
    let side_br = createVector(x2,yB)
    let side_bl = createVector(xT,yB)

    sec1_tr = createVector(xT,yth)
    sec1_tl = createVector(xBr1,xBr1Y)
    sec1_bl = createVector(xBr1,lerp(yB,xBr1Y,.8))
    sec1_br = createVector(xT,lerp(yB,yth,.8))

    sec2_tr = createVector(xT,sec1_bl.y)
    sec2_tl = createVector(xBr2,lerp(yB,xBr2Y,.8))
    sec2_bl = createVector(xBr2,lerp(yB,xBr2Y,.5))
    sec2_br = createVector(xT,lerp(yB,yth,.5))

    sec3_tr = createVector(xT,sec2_bl.y)
    sec3_tl = createVector(x1,lerp(yB,ytl,.5))
    sec3_bl = createVector(x1,yB)
    sec3_br = createVector(xT,yB)

    r_sec1_tr = createVector(xT,r_yth)
    r_sec1_tl = createVector(xBr1,r_xBr1Y)
    r_sec1_bl = createVector(xBr1,lerp(yB,r_xBr1Y,.8))
    r_sec1_br = createVector(xT,lerp(yB,r_yth,.8))

    r_sec2_tr = createVector(xT,r_sec1_bl.y)
    r_sec2_tl = createVector(xBr2,lerp(yB,r_xBr2Y,.8))
    r_sec2_bl = createVector(xBr2,lerp(yB,r_xBr2Y,.5))
    r_sec2_br = createVector(xT,lerp(yB,r_yth,.5))

    r_sec3_tr = createVector(xT,r_sec2_bl.y)
    r_sec3_tl = createVector(x1,lerp(yB,r_ytl,.5))
    r_sec3_bl = createVector(x1,yB)
    r_sec3_br = createVector(xT,yB)
  }

  buff.noStroke()
  buff.fill(baseCol)
  /*buff.beginShape()
    buff.vertex(sec1_tl.x,sec1_tl.y)
    buff.vertex(sec1_tr.x,sec1_tr.y)
    buff.vertex(sec1_br.x,sec3_br.y)
    buff.vertex(sec1_bl.x,sec3_br.y)
  buff.endShape(CLOSE)
  buff.beginShape()
    buff.vertex(sec2_tl.x,sec2_tl.y)
    buff.vertex(sec2_tr.x,sec2_tr.y)
    buff.vertex(sec2_br.x,sec3_br.y)
    buff.vertex(sec2_bl.x,sec3_br.y)
  buff.endShape(CLOSE)
  buff.beginShape()
    buff.vertex(sec3_tl.x,sec3_tl.y)
    buff.vertex(sec3_tr.x,sec3_tr.y)
    buff.vertex(sec3_br.x,sec3_br.y)
    buff.vertex(sec3_bl.x,sec3_bl.y)
  buff.endShape(CLOSE)*/
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
    areaLinearDev(buff,12,sec1_tl,sec1_tr,sec1_br,sec1_bl,pal.bld,0,1,'metroBuilding')
    areaLinearDev(buff,15,sec2_tl,sec2_tr,sec2_br,sec2_bl,pal.bld,0,1,'metroBuilding')
    areaLinearDev(buff,20,sec3_tl,sec3_tr,sec3_br,sec3_bl,pal.bld,0,1,'metroBuilding')
  }

  let xStep = w(.001);
  if (style === 'orig') {xStep = w(.0003)}
  if (style === 'dev') {xStep = w(.0006)}

  let num_lines = 75
  if (style === 'neat') {num_lines = 120}

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
        blobStr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // REFLS
        let minY = horizon
        let maxY = map(dist(x,y,x,horizon),0,dist(x,-h(.5),0,horizon),horizon,h(.5))
        let reflY = rnd(minY,maxY)
        let reflY2 = reflY + rnd(dist(x,y,x,horizon))
        blobStr(buff, x, reflY, x, reflY2, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
        reflXMain = rnd(xT,x2)
        reflXSide = rnd(x1,xT)
        reflLMain = rnd(x2-xT)
        relfLSide = rnd(xT-x1)
        hStrW = rnd(w(.02),w(.05))

        let hY = map(y,horizon,-h(.5),horizon,h(.5))
        let hY2 = rnd(horizon,hY)
        blobStr(buff, x, hY, x + rnd(-reflLMain,reflLMain), hY, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85)) // DRAWS THICK LINES
        blobStr(buff, x, hY2, x + rnd(-reflLMain,reflLMain), hY2, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
      }else if (style === 'dev') {
        pstr4(buff, x, y, x, yB, w(.003), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 100], 200, HARD_LIGHT)
        //blobStr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let reflDistMin = dist(x,horizon,x,yB)
        let maxReflY = horizon - reflDist
        let minReflY = horizon - reflDistMin
        let adjReflY = map(maxReflY,horizon,-h(.5),horizon,hTrans)
        let adjReflYMin = map(minReflY,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,adjReflY)
        console.log(horizon, reflY, adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }else if (style === 'neat') {
        //blobStr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 225)
        dotBlobStr(buff, x, y, x, yB, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')

        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let reflDistMin = dist(x,horizon,x,yB)
        let maxReflY = horizon - reflDist
        let minReflY = horizon - reflDistMin
        let adjReflY = map(maxReflY,horizon,-h(.5),horizon,hTrans)
        let adjReflYMin = map(minReflY,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,adjReflY)
        //console.log(horizon, reflY, adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.03)
        let strW = rnd(w(.005),maxWeight)
        let yOff = reflDist/8

        //blobStr(buff, x, reflY, x + reflWidth, reflY, strW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'overlay')
        //blobStr(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'overlay')
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
        blobStr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)

        // REFLS
        let minY = horizon
        let maxY = map(dist(x,y,x,horizon),0,dist(x,-h(.5),0,horizon),horizon,h(.5))
        let reflY = rnd(minY,maxY)
        let reflY2 = reflY + rnd(dist(x,y,x,horizon))
        blobStr(buff, x, reflY, x, reflY2, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
        reflXMain = rnd(xT,x2)
        reflXSide = rnd(x1,xT)
        reflLMain = rnd(x2-xT)
        relfLSide = rnd(xT-x1)
        hStrW = rnd(w(.02),w(.05))

        let hY = map(y,horizon,-h(.5),horizon,h(.5))
        let hY2 = rnd(horizon,hY)
        blobStr(buff, x, hY, x + rnd(-reflLMain,reflLMain), hY, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85)) // DRAWS THICK LINES
        blobStr(buff, x, hY2, x + rnd(-reflLMain,reflLMain), hY2, hStrW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(40,85))
      }else if (style === 'dev') {
        //blobStr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        pstr4(buff, x, y, x, yB, w(.003), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 100], 200, HARD_LIGHT)

        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let reflDistMin = dist(x,horizon,x,yB)
        let maxReflY = horizon - reflDist
        let minReflY = horizon - reflDistMin
        let adjReflY = map(maxReflY,horizon,-h(.5),horizon,hTrans)
        let adjReflYMin = map(minReflY,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,adjReflY)
        //console.log(horizon, reflY, adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8

        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }else if (style === 'neat') {
        //blobStr(buff, x, y, x, yB, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 225)
        dotBlobStr(buff, x, y, x, yB, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')

        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let reflDistMin = dist(x,horizon,x,yB)
        let maxReflY = horizon - reflDist
        let minReflY = horizon - reflDistMin
        let adjReflY = map(maxReflY,horizon,-h(.5),horizon,hTrans)
        let adjReflYMin = map(minReflY,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,adjReflY)
        //console.log(horizon, reflY, adjReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8

        //blobStr(buff, x, reflY, x + reflWidth, reflY, strW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'overlay')
        //blobStr(buff, x, adjReflYMin + rnd(-yOff,yOff), x, adjReflY + rnd(-yOff,yOff), strW, col[0]-cD, col[1]-cD, col[2]-cD, rnd(150), 'none', 'overlay')
      }
    }
  }
  // DETAIL
  if (style === 'orig') {
    let strWmult = map(horizon,-h(.4),h(.4),1,2)
    strW = rnd(w(.03),w(.06)) * strWmult
    let detail = rnd()
    if (detail < .2) {
      newPt = p5.Vector.lerp(sec1_tl,sec1_tr,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(sec1_tr,sec1_br,rnd(.6,2.5))
      strCol = chCol(pal.accents)
      blobStr(p3,sec1_tl.x,sec1_tl.y,newPt.x,newPt.y,strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
    }else if (detail < .4) {
      newPt = p5.Vector.lerp(sec1_tr,sec1_tl,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(sec1_tr,sec1_br,rnd(1,3.5))
      newPt3 = p5.Vector.lerp(sec2_tr,sec1_br,rnd(1,1.5))
      newPt4 = p5.Vector.lerp(sec2_tr,sec1_br,rnd(1,1.5))
      strCol = chCol(pal.accents)
      blobStr(p3,sec1_tr.x,sec1_tr.y,newPt.x,newPt.y,strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,sec1_tr.x,sec1_tr.y,newPt2.x,newPt2.y,strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,sec2_tr.x,sec2_tr.y,newPt3.x,newPt3.y, strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,sec2_tr.x,sec2_tr.y,newPt4.x,newPt4.y,strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
    }else if (detail < .6) {
      strCol = chCol(pal.accents)
      newPt = p5.Vector.lerp(sec1_tl,sec1_tr,rnd(.6,1.5))
      blobStr(p3,x1,yB,x1,lerp(yB,ytl,rnd(.8,2)),strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,xT,yth,xT,lerp(yth,yB,rnd(.5,1.5)),strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,sec1_tl.x,sec1_tl.y,newPt.x,newPt.y, strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      // REFL
      reflPt = p5.Vector.lerp(r_sec1_tl,r_sec1_tr,rnd(.6,1.5))
      r_strW = rnd(w(.03),w(.06))
      blobStr(p3,x1,yB,x1,lerp(yB,r_ytl,rnd(.8,2)),r_strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,xT,r_yth,xT,lerp(r_yth,yB,rnd(.5,1.5)),r_strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,r_sec1_tl.x,r_sec1_tl.y,reflPt.x,reflPt.y, r_strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
    }else if (detail < .8) {
      newPt = p5.Vector.lerp(sec3_tr,sec3_br,rnd(1,2.5))
      newPt2 = p5.Vector.lerp(sec3_tr,sec3_tl,rnd(.3,1.5))
      newPt3 = p5.Vector.lerp(sec2_tr,sec2_br,rnd(1,1.5))
      newPt4 = p5.Vector.lerp(sec2_tr,sec2_tl,rnd(1,1.5))
      strCol = chCol(pal.accents)
      blobStr(p3,sec3_tr.x,sec3_tr.y,newPt.x,newPt.y,strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,sec3_tr.x,sec3_tr.y,newPt2.x,newPt2.y,strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,sec2_tr.x,sec2_tr.y,newPt3.x,newPt3.y, strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,sec2_tr.x,sec2_tr.y,newPt4.x,newPt4.y,strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      // REFL
      reflPt = p5.Vector.lerp(r_sec3_tr,r_sec3_br,rnd(1,2.5))
      reflPt2 = p5.Vector.lerp(r_sec3_tr,r_sec3_tl,rnd(.3,1.5))
      reflPt3 = p5.Vector.lerp(r_sec2_tr,r_sec2_br,rnd(1,1.5))
      reflPt4 = p5.Vector.lerp(r_sec2_tr,r_sec2_tl,rnd(1,1.5))
      reflMinimalPt4 = p5.Vector.lerp(r_sec2_tr,r_sec2_tl,rnd(1,1.5))
      r_strW = rnd(w(.03),w(.06))
      blobStr(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt.x,reflPt.y,r_strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt2.x,reflPt2.y,r_strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt3.x,reflPt3.y, r_strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
      blobStr(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt4.x,reflPt4.y,r_strW, strCol[0], strCol[1], strCol[2], rnd(100,225), 'down', 'overlay')
    }
  }else if (style === 'dev') {
    let strWmult = map(horizon,-h(.4),h(.4),1,2)
    strW = rnd(w(.001),w(.003)) * strWmult
    let detail = rnd()
    if (detail < .2) {
      newPt = p5.Vector.lerp(sec1_tl,sec1_tr,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(sec1_tr,sec1_br,rnd(.6,2.5))
      strCol = chCol(pal.accents)
      pstr4(p3,sec1_tl.x,sec1_tl.y,newPt.x,newPt.y,strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec1_tr.x,sec1_tr.y,newPt2.x,newPt2.y,strW,strW/3,1,strCol,30,OVERLAY)
      // FILL
      fillShape(buff, sec1_tl, sec1_tr, sec1_br, sec1_bl, rnd(60), strCol, BLEND, 250)
    }else if (detail < .4) {
      newPt = p5.Vector.lerp(sec1_tr,sec1_tl,rnd(.6,1.5))
      newPt2 = p5.Vector.lerp(sec1_tr,sec1_br,rnd(1,3.5))
      newPt3 = p5.Vector.lerp(sec2_tr,sec1_br,rnd(1,1.5))
      newPt4 = p5.Vector.lerp(sec2_tr,sec1_br,rnd(1,1.5))
      strCol = chCol(pal.accents)
      pstr4(p3,sec1_tr.x,sec1_tr.y,newPt.x,newPt.y,strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec1_tr.x,sec1_tr.y,newPt2.x,newPt2.y,strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec2_tr.x,sec2_tr.y,newPt3.x,newPt3.y,strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec2_tr.x,sec2_tr.y,newPt4.x,newPt4.y,strW,strW/3,1,strCol,30,OVERLAY)
      // FILLS
      fillShape(buff, sec1_tl, sec1_tr, sec1_br, sec1_bl, rnd(60), strCol, BLEND, 250)
      fillShape(buff, sec2_tl, sec2_tr, sec2_br, sec2_bl, rnd(60), strCol, BLEND, 375)
      fillShape(buff, sec3_tl, sec3_tr, sec3_br, sec3_bl, rnd(60), strCol, BLEND, 500)
    }else if (detail < .6) {
      strCol = chCol(pal.accents)
      newPt = p5.Vector.lerp(sec1_tl,sec1_tr,rnd(.6,1.5))
      pstr4(p3,x1,yB,x1,lerp(yB,ytl,rnd(.8,2)),strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,xT,yth,xT,lerp(yth,yB,rnd(.5,1.5)),strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec1_tl.x,sec1_tl.y,newPt.x,newPt.y,strW,strW/3,1,strCol,30,OVERLAY)
      // FILL - SIDE
      fillShape(buff, side_tl, side_tr, side_br, side_bl, rnd(60), strCol, BLEND, 150)
      // REFL
      reflPt = p5.Vector.lerp(r_sec1_tl,r_sec1_tr,rnd(.6,1.5))
      r_strW = rnd(w(.001),w(.003))
      pstr4(p3,x1,yB,x1,lerp(yB,r_ytl,rnd(.8,2)),r_strW,r_strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,xT,r_yth,xT,lerp(r_yth,yB,rnd(.5,1.5)),r_strW,r_strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,r_sec1_tl.x,r_sec1_tl.y,reflPt.x,reflPt.y,r_strW,r_strW/3,1,strCol,30,OVERLAY)
    }else if (detail < .8) {
      newPt = p5.Vector.lerp(sec3_tr,sec3_br,rnd(1,2.5))
      newPt2 = p5.Vector.lerp(sec3_tr,sec3_tl,rnd(.3,1.5))
      newPt3 = p5.Vector.lerp(sec2_tr,sec2_br,rnd(1,1.5))
      newPt4 = p5.Vector.lerp(sec2_tr,sec2_tl,rnd(1,1.5))
      strCol = chCol(pal.accents)
      pstr4(p3,sec3_tr.x,sec3_tr.y,newPt.x,newPt.y,strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec3_tr.x,sec3_tr.y,newPt2.x,newPt2.y,strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec2_tr.x,sec2_tr.y,newPt3.x,newPt3.y,strW,strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,sec2_tr.x,sec2_tr.y,newPt4.x,newPt4.y,strW,strW/3,1,strCol,30,OVERLAY)
      // REFL
      reflPt = p5.Vector.lerp(r_sec3_tr,r_sec3_br,rnd(1,2.5))
      reflPt2 = p5.Vector.lerp(r_sec3_tr,r_sec3_tl,rnd(.3,1.5))
      reflPt3 = p5.Vector.lerp(r_sec2_tr,r_sec2_br,rnd(1,1.5))
      reflPt4 = p5.Vector.lerp(r_sec2_tr,r_sec2_tl,rnd(1,1.5))
      reflMinimalPt4 = p5.Vector.lerp(r_sec2_tr,r_sec2_tl,rnd(1,1.5))
      r_strW = rnd(w(.001),w(.003))
      pstr4(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt.x,reflPt.y,r_strW,r_strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,r_sec3_tr.x,r_sec3_tr.y,reflPt2.x,reflPt2.y,r_strW,r_strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt3.x,reflPt3.y,r_strW,r_strW/3,1,strCol,30,OVERLAY)
      pstr4(p3,r_sec2_tr.x,r_sec2_tr.y,reflPt4.x,reflPt4.y,r_strW,r_strW/3,1,strCol,30,OVERLAY)
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

  console.log(yth3,ytl3)

  let lb = createVector(xL,yB)
  let lt = createVector(xL,yth3)
  let lb2 = createVector(xL2,lerp(yth3,ytl3,.2))
  let lt2 = createVector(xL2,lerp(yth2,ytl2,.2))
  let lb3 = createVector(xL3,lerp(yth2,ytl2,.4))
  let lt3 = createVector(xL3,lerp(yth,ytl,.4))

  let rb = createVector(xR,yB)
  let rt = createVector(xR,ytl3)
  let rb2 = createVector(xR2,lerp(yth3,ytl3,.8))
  let rt2 = createVector(xR2,lerp(yth2,ytl2,.8))
  let rb3 = createVector(xR3,lerp(yth2,ytl2,.6))
  let rt3 = createVector(xR3,lerp(yth,ytl,.6))

  if (dir === 'l') {
    db_tl = createVector(xL-xW/4,ytl3)
    db_tr = createVector(xL,yth3)
    db_br = createVector(xL,yB)
    db_bl = createVector(xL-xW/4,yB)

    dm_tl = createVector(xL,lt2.y+yDiff)
    dm_tr = createVector(xL2,lt2.y)
    dm_br = createVector(xL2,lb2.y)
    dm_bl = createVector(xL,lt.y)

    dt_tl = createVector(xL2,lt3.y+yDiff*1.5)
    dt_tr = createVector(xL3,lt3.y)
    dt_br = createVector(xL3,lb3.y)
    dt_bl = createVector(xL2,lt2.y)
  }else if (dir === 'r') {
    db_tl = createVector(xR,ytl3)
    db_tr = createVector(xR+xW/4,yth3+yDiff)
    db_br = createVector(xR+xW/4,yB)
    db_bl = createVector(xR,yB)

    dm_tl = createVector(xR2,rt2.y)
    dm_tr = createVector(xR,rt2.y+yDiff)
    dm_br = createVector(xR,rt.y)
    dm_bl = createVector(xR2,rb2.y)

    dt_tl = createVector(xR3,rt3.y)
    dt_tr = createVector(xR2,rt3.y+yDiff*1.5)
    dt_br = createVector(xR2,rt2.y)
    dt_bl = createVector(xR3,rb3.y)
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
    // DARK SIDE
    //buff.stroke(baseCol)
    //buff.strokeWeight(w(.002))
    //buff.line(x,y,x,horizon)
    if (style === 'neat') {
      dotBlobStr(buff, x, y, x, horizon, w(.003), col[0], col[1], col[2], 225, 'none')
    }else if (style === 'orig') {
      blobStr(buff, x, y, x, yB, w(.03), col[0], col[1], col[2], 125)
      let xOffset = rnd(-w(.002),w(.002))
      blobStr(buff, x + xOffset, y, x + xOffset, yB, w(.02), col[0], col[1], col[2], 125)
    }else if (style === 'dev') {
      pstr4(buff, x, y, x, horizon, w(.005), w(.001), 1, [col[0], col[1], col[2], 125], 200, HARD_LIGHT)
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
          blobStr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'overlay')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dotBlobStr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }else if (dx > xL && dx < xL2) {
        //dyt = map(dx,xL,xL2,ytl2,yth2)
        dyt = map(dx,xL,xL2,dm_tl.y,dm_tr.y)
        //dyb = map(dx,xL,xL2,lt.y,lb2.y)
        dyb = map(dx,xL,xL2,dm_bl.y,dm_br.y)
        if (style === 'orig') {
          blobStr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'overlay')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dotBlobStr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
      else if (dx > xL2 && dx < xL3) {
        //dyt = map(dx,xL2,xL3,lt3.y+yDiff,lt3.y)
        dyt = map(dx,xL2,xL3,dt_tl.y,dt_tr.y)
        //dyb = map(dx,xL,xL2,lt2.y,lb3.y)
        dyb = map(dx,xL2,xL3,dt_bl.y,dt_br.y)
        if (style === 'orig') {
          blobStr(buff, dx, dyb, dx, dyt, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'overlay')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dotBlobStr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
    }else if (dir === 'r') {
      if (dx > xR3 && dx < xR2) {
        //dyt = map(dx,xR3,xR2,rt3.y,rt3.y+yDiff)
        dyt = map(dx,xR3,xR2,dt_tl.y,dt_tr.y)
        //dyb = map(dx,xR3,xR2,rb3.y,rt2.y)
        dyb = map(dx,xR3,xR2,dt_bl.y,dt_br.y)
        if (style === 'orig') {
          blobStr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'overlay')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dotBlobStr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }else if (dx > xR2 && dx < xR) {
        //dyt = map(dx,xR2,xR,rt2.y,ytl2)
        dyt = map(dx,xR2,xR,dm_tl.y,dm_tr.y)
        //dyb = map(dx,xR2,xR,rb2.y,rt.y)
        dyb = map(dx,xR2,xR,dm_bl.y,dm_br.y)
        if (style === 'orig') {
          blobStr(buff, dx, dyt, dx, dyb, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'overlay')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dotBlobStr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
      else if (dx > xR && dx < xR + xW/4) {
        //dyt = map(dx,xR,xR+xW/4,rt.y,ytl3)
        dyt = map(dx,xR,xR+xW/4,db_tl.y,db_tr.y)
        dyb = yB
        if (style === 'orig') {
          blobStr(buff, dx, dyb, dx, dyt, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125, 'none', 'overlay')
        }else if (style === 'dev') {
          pstr4(buff, dx, dyt, dx, dyb, w(.005), w(.001), 1, [col[0]-cD, col[1]-cD, col[2]-cD, 125], 30, HARD_LIGHT)
        }else if (style === 'neat') {
          dotBlobStr(buff, dx, dyt, dx, dyb, w(.003), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
        }
      }
    }
  }
  // DETAILS
  if (style === 'dev') {
    areaLinearDev(buff,12,lt3,rt3,rb3,lb3,pal.bld,0,1,'metroBuilding')
    areaLinearDev(buff,15,lt2,rt2,rb2,lb2,pal.bld,0,1,'metroBuilding')
    areaLinearDev(buff,20,lt,rt,rb,lb,pal.bld,0,1,'metroBuilding')
  }
  if (style === 'orig' || style === 'dev') {
    let strWmult = map(horizon,-h(.4),h(.4),1,2)
    strW = rnd(w(.03),w(.06)) * strWmult
    dev_strW = rnd(w(.001),w(.003)) * strWmult
    let strCol = chCol(pal.accents)
    let detail = rnd()
    if (detail < .3) {
      newPt = p5.Vector.lerp(lt,lb,rnd(.6,2.5))
      newPt2 = p5.Vector.lerp(lt,lb2,rnd(1,1.4))
      newPt3 = p5.Vector.lerp(lt2,lb2,rnd(1,3))
      if (style === 'orig') {
        blobStr(buff, lt.x, lt.y, newPt.x, newPt.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, lt.x, lt.y, newPt2.x, newPt2.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, lt2.x, lt2.y, newPt3.x, newPt3.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
      }else if (style === 'dev') {
        pstr4(p3, lt.x, lt.y, newPt.x, newPt.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, lt.x, lt.y, newPt2.x, newPt2.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, lt2.x, lt2.y, newPt3.x, newPt3.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
      }
    }else if (detail < .6) {
      newPt = p5.Vector.lerp(lt3,lb3,rnd(.6,2.5))
      newPt2 = p5.Vector.lerp(lt3,rt3,rnd(1,1.3))
      newPt3 = p5.Vector.lerp(rt3,rb3,rnd(1,3))
      newPt4 = p5.Vector.lerp(rt2,rb3,rnd(1,3))
      newPt5 = p5.Vector.lerp(rt2,rb2,rnd(1,3))
      if (style === 'orig') {
        blobStr(buff, lt3.x, lt3.y, newPt.x, newPt.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, lt3.x, lt3.y, newPt2.x, newPt2.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rt3.x, rt3.y, newPt3.x, newPt3.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rt2.x, rt2.y, newPt4.x, newPt4.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rt2.x, rt2.y, newPt5.x, newPt5.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
      }else if (style === 'dev') {
        pstr4(p3, lt3.x, lt3.y, newPt.x, newPt.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, lt3.x, lt3.y, newPt2.x, newPt2.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rt3.x, rt3.y, newPt3.x, newPt3.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rt2.x, rt2.y, newPt4.x, newPt4.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rt2.x, rt2.y, newPt5.x, newPt5.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
      }
    }else if (detail < .9) {
      newPt = p5.Vector.lerp(lt3,lb3,rnd(.6,5))
      newPt2 = p5.Vector.lerp(rt3,lt3,rnd(1,3))
      newPt3 = p5.Vector.lerp(rt3,rb3,rnd(.6,5))
      newPt4 = p5.Vector.lerp(rt2,rb3,rnd(1,3))
      newPt5 = p5.Vector.lerp(rt2,rb2,rnd(1,5))
      newPt6 = p5.Vector.lerp(rb,rt,rnd(1,8))
      if (style === 'orig') {
        blobStr(buff, lt3.x, lt3.y, newPt.x, newPt.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rt3.x, rt3.y, newPt2.x, newPt2.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rt3.x, rt3.y, newPt3.x, newPt3.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rt2.x, rt2.y, newPt4.x, newPt4.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rt2.x, rt2.y, newPt5.x, newPt5.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
        blobStr(buff, rb.x, rb.y, newPt6.x, newPt6.y, strW, strCol[0], strCol[1], strCol[2], 125, 'up', 'overlay')
      }else if (style === 'dev') {
        pstr4(p3, lt3.x, lt3.y, newPt.x, newPt.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rt3.x, rt3.y, newPt2.x, newPt2.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rt3.x, rt3.y, newPt3.x, newPt3.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rt2.x, rt2.y, newPt4.x, newPt4.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rt2.x, rt2.y, newPt5.x, newPt5.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        pstr4(p3, rb.x, rb.y, newPt6.x, newPt6.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
      }
    }
    if (detail < .7) {
      if (dir === 'l') {
        newPt = p5.Vector.lerp(db_tl,db_bl,rnd(1,5))
        newPt2 = p5.Vector.lerp(db_tr,db_tl,rnd(1,2.5))
        newPt3 = p5.Vector.lerp(dm_tl,dm_bl,rnd(1,2.5))
        newPt4 = p5.Vector.lerp(dm_tr,dm_tl,rnd(1,3.5))
        newPt5 = p5.Vector.lerp(dt_bl,dt_tl,rnd(1,5))
        newPt6 = p5.Vector.lerp(dt_tr,dt_tl,rnd(1,2.5))
        if (style === 'orig') {
          blobStr(buff, db_tl.x, db_tl.y, newPt.x, newPt.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, db_tr.x, db_tr.y, newPt2.x, newPt2.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dm_tl.x, dm_tl.y, newPt3.x, newPt3.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dm_tr.x, dm_tr.y, newPt4.x, newPt4.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dt_bl.x, dt_bl.y, newPt5.x, newPt5.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dt_tr.x, dt_tr.y, newPt6.x, newPt6.y, strW, strCol[0], strCol[1], strCol[2], 125, 'up', 'overlay')
        }else if (style === 'dev') {
          pstr4(p3, db_tl.x, db_tl.y, newPt.x, newPt.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, db_tr.x, db_tr.y, newPt2.x, newPt2.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dm_tl.x, dm_tl.y, newPt3.x, newPt3.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dm_tr.x, dm_tr.y, newPt4.x, newPt4.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dt_bl.x, dt_bl.y, newPt5.x, newPt5.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dt_tr.x, dt_tr.y, newPt6.x, newPt6.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
        }
      }else if (dir === 'r') {
        newPt = p5.Vector.lerp(db_tr,db_br,rnd(1,5))
        newPt2 = p5.Vector.lerp(db_tl,db_tr,rnd(1,2.5))
        newPt3 = p5.Vector.lerp(dm_tr,dm_br,rnd(1,2.5))
        newPt4 = p5.Vector.lerp(dm_tl,dm_tr,rnd(1,3.5))
        newPt5 = p5.Vector.lerp(dt_br,dt_tr,rnd(1,5))
        newPt6 = p5.Vector.lerp(dt_tl,dt_tr,rnd(1,2.5))
        if (style === 'orig') {
          blobStr(buff, db_tr.x, db_tr.y, newPt.x, newPt.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, db_tl.x, db_tl.y, newPt2.x, newPt2.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dm_tr.x, dm_tr.y, newPt3.x, newPt3.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dm_tl.x, dm_tl.y, newPt4.x, newPt4.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dt_br.x, dt_br.y, newPt5.x, newPt5.y, strW, strCol[0], strCol[1], strCol[2], 125, 'down', 'overlay')
          blobStr(buff, dt_tl.x, dt_tl.y, newPt6.x, newPt6.y, strW, strCol[0], strCol[1], strCol[2], 125, 'up', 'overlay')
        }else if (style === 'dev') {
          pstr4(p3, db_tr.x, db_tr.y, newPt.x, newPt.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, db_tl.x, db_tl.y, newPt2.x, newPt2.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dm_tr.x, dm_tr.y, newPt3.x, newPt3.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dm_tl.x, dm_tl.y, newPt4.x, newPt4.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dt_br.x, dt_br.y, newPt5.x, newPt5.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
          pstr4(p3, dt_tl.x, dt_tl.y, newPt6.x, newPt6.y, dev_strW, dev_strW/3, 1, strCol, 30, OVERLAY)
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
  if (horizon == -h(.2)) {hTrans = h(.5)}
  if (horizon == 0) {hTrans = h(.5)}
  if (horizon == h(.32)) {hTrans = h(.8)}

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
    let wPos = createVector(topPoint,yBr);
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
          //console.log(wt,wb)
          pstr4(buff, x, wt, x, wb, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND, 'none')
          pstr4(buff, x, wt2, x, wb2, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND, 'none')
        }
        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let maxReflY = map(y,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        //let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY, 'none')
        pstr4(buff, x, reflY + rnd(-yOff,yOff), x, maxReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY, 'none')
      }else if (style === 'neat') {
        dotBlobStr(buff, x, y, x, horizon, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      }else if (style === 'orig') {
        blobStr(buff, x, y, x, horizon, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        let xOffset = rnd(-w(.002),w(.002))
        blobStr(p2, x + xOffset, y, x + xOffset, horizon, w(.02), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // WINDOWS
        if (x > wPos.x - winW/2 && x < wPos.x + winW/2) {
          let wt = y+yH/6
          console.log(wt,wb)
          blobStr(p2, x, wt, x, wb, w(.02), wCol[0], wCol[1], wCol[2], 125)
          blobStr(p2, x, wt2, x, wb2, w(.02), wCol[0], wCol[1], wCol[2], 125)
        }
        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let maxReflY = map(y,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let yOff = reflDist/8
        blobStr(buff, x, reflY, x + reflWidth, reflY, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(85))
      }
    }
    // DETAILS
    let bt_l = createVector(x1,yB)
    let top_l = createVector(x1,ytl)
    let corner_t = createVector(xT,yth)
    let topPt = createVector(topPoint,yTopPt)
    let mid_t = createVector(xBr,ytl)
    let mid_b = createVector(xBr,yBr)
    let mid_r = createVector(x2,yBr)
    let bt_r = createVector(x2,yB)
    let corner_b = createVector(xT,yB)
    let details = rnd()
    let strW = rnd(w(.001),w(.004))
    let strW_dev = rnd(w(.001),w(.01)) // upper value may be too high / lines too heavy
    let strW_orig = rnd(w(.04),w(.08))
    if (style === 'dev' || style === 'orig') {
      if (details < .2) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(topPt,corner_t,rnd(1,2.5))
        let pt2 = p5.Vector.lerp(corner_t,topPt,rnd(1,2.5))
        if (style === 'dev') {
          pstr4(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          blobStr(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        }
      }else if (details < .4) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(mid_t,mid_b,rnd(1,5))
        let pt2 = p5.Vector.lerp(topPt,mid_t,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(150,225)], 300, SOFT_LIGHT)
          pstr4(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          blobStr(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
          blobStr(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        }
      }else if (details < .6) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(mid_r,bt_l,rnd(1,3))
        let pt2 = p5.Vector.lerp(mid_r,mid_b,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(150,225)], 300, SOFT_LIGHT)
          pstr4(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          blobStr(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
          blobStr(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        } // ADD REFLS
      }else if (details < .8) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(corner_t,corner_b,rnd(1,3))
        let pt2 = p5.Vector.lerp(corner_t,top_l,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(150,225)], 300, SOFT_LIGHT)
          pstr4(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(150,225)], 300, SOFT_LIGHT)
        }else if (style === 'orig') {
          blobStr(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
          blobStr(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        } // ADD REFLS
      }
    }else if (style === 'neat') {
      let st = rnd(60)
      let fCol_d = [col[0]-25,col[1]-25,col[2]-25,65]
      fillShape(buff, top_l, corner_t, corner_b, bt_l, st, fCol_d, HARD_LIGHT, 35)
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
    //console.log(x1,xBr,topPoint,xT,x2)
    let wPos = createVector(topPoint,yBr);
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
      //console.log(cD)
      if (style === 'dev') {
        pstr4(buff, x, y, x, yB, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, 150], 200, BLEND)
        pstr4(buff, x, y, x, yB, strW*1.5, strW*.8, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 200, OVERLAY)
        // WINDOWS
        if (x > wPos.x - winW/2 && x < wPos.x + winW/2) {
          let wt = y+yH/6
          //console.log(wt,wb)
          pstr4(buff, x, wt, x, wb, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND)
          pstr4(buff, x, wt2, x, wb2, strW, strW/3, 1, [wCol[0], wCol[1], wCol[2], 225], 200, BLEND)
        }
        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let maxReflY = map(y,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let maxWeight = w(.005)
        //let strW = rnd(w(.001),maxWeight)
        let yOff = reflDist/8
        pstr4(buff, x, reflY, x + reflWidth, reflY, strW*2, strW, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(150)], 30, OVERLAY)
        pstr4(buff, x, reflY + rnd(-yOff,yOff), x, maxReflY + rnd(-yOff,yOff), strW, strW/3, 1, [col[0]-cD, col[1]-cD, col[2]-cD, rnd(85)], 30, OVERLAY)
      }else if (style === 'neat') {
        dotBlobStr(buff, x, y, x, horizon, w(.005), col[0]-cD, col[1]-cD, col[2]-cD, 225, 'none')
      }else if (style === 'orig') {
        blobStr(buff, x, y, x, horizon, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        let xOffset = rnd(-w(.002),w(.002))
        blobStr(p2, x + xOffset, y, x + xOffset, horizon, w(.02), col[0]-cD, col[1]-cD, col[2]-cD, 125)
        // WINDOWS
        if (x > wPos.x - winW/2 && x < wPos.x + winW/2) {
          let wt = y+yH/6
          //console.log(wt,wb)
          blobStr(p2, x, wt, x, wb, w(.02), wCol[0], wCol[1], wCol[2], 125)
          blobStr(p2, x, wt2, x, wb2, w(.02), wCol[0], wCol[1], wCol[2], 125)
        }
        // REFLS
        let reflDist = dist(x,horizon,x,y)
        let maxReflY = map(y,horizon,-h(.5),horizon,hTrans)
        let reflY = rnd(horizon,maxReflY)
        let reflWidth = rnd(-w(.03),w(.03))
        let yOff = reflDist/8
        blobStr(buff, x, reflY, x + reflWidth, reflY, w(.03), col[0]-cD, col[1]-cD, col[2]-cD, rnd(85))
      }
    }
    // DETAILS
    let bt_l = createVector(x1,yB)
    let mid_l = createVector(x1,yBr)
    let mid_b = createVector(xBr,yBr)
    let mid_t = createVector(xBr,ytl)
    let topPt = createVector(topPoint,yTopPt)
    let corner_t = createVector(xT,yth)
    let mid_r = createVector(x2,ytl)
    let bt_r = createVector(x2,yB)
    let corner_b = createVector(xT,yB)
    let details = rnd()
    let strW = rnd(w(.001),w(.004))
    let strW_dev = rnd(w(.001),w(.01)) // upper value may be too high / lines too heavy
    let strW_orig = rnd(w(.03),w(.06))
    if (style === 'dev' || style === 'orig') {
      if (details < .2) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(topPt,corner_t,rnd(1,2.5))
        let pt2 = p5.Vector.lerp(corner_t,topPt,rnd(1,2.5))
        if (style === 'dev') {
          pstr4(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          blobStr(p2, pt1.x, pt1.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        }
      }else if (details < .4) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(mid_t,mid_b,rnd(1,5))
        let pt2 = p5.Vector.lerp(topPt,mid_t,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(180,255)], 300, OVERLAY)
          pstr4(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          blobStr(p2, mid_t.x, mid_t.y, pt1.x, pt1.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
          blobStr(p2, topPt.x, topPt.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        }
      }else if (details < .6) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(mid_r,bt_r,rnd(1,3))
        let pt2 = p5.Vector.lerp(mid_r,mid_b,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(180,255)], 300, OVERLAY)
          pstr4(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          blobStr(p2, mid_r.x, mid_r.y, pt1.x, pt1.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
          blobStr(p2, mid_r.x, mid_r.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        } // ADD REFLS
      }else if (details < .8) {
        let strCol = chCol(pal.accents)
        let pt1 = p5.Vector.lerp(corner_t,corner_b,rnd(1,3))
        let pt2 = p5.Vector.lerp(corner_t,topPt,rnd(1,1.5))
        if (style === 'dev') {
          pstr4(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(180,255)], 300, OVERLAY)
          pstr4(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_dev, strW_dev/3, 1, [strCol[0], strCol[1], strCol[2], rnd(180,255)], 300, OVERLAY)
        }else if (style === 'orig') {
          blobStr(p2, corner_t.x, corner_t.y, pt1.x, pt1.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
          blobStr(p2, corner_t.x, corner_t.y, pt2.x, pt2.y, strW_orig, strCol[0], strCol[1], strCol[2], rnd(100,225))
        } // ADD REFLS
      }
    }else if (style === 'neat') {
      let st = rnd(60)
      let fCol_d = [col[0]-25,col[1]-25,col[2]-25,65]
      fillShape(buff, corner_t, mid_r, bt_r, corner_b, st, fCol_d, HARD_LIGHT, 35)
    }
  }
  buff.pop()
}

function sanGmTerr(buff, style, horizon, pal, style, time) {
  let numSecs = map(horizon,-h(.4),h(.4),6,3)
  let yStep = dist(0,horizon,0,h(.7))/numSecs
  let ptsWrap = []
  let stepDiv = 3
  for (let i = 0; i < numSecs; i++) {
    stepDiv -= .45
    let baseY = horizon + yStep*i/stepDiv
    let points = []
    let xLimL = map(baseY,horizon,h(.6),-w(.7),-w(5))
    let xLimR = map(baseY,horizon,h(.6),w(.9),w(5))
    for (let j = 0; j < 6; j++) {
      //let yDiff = rnd(-yStep/i,yStep/i)
      let yDiff = rnd(-w(.05),0)
      let x = map(j,0,6,xLimL,xLimR) + rnd(-width/8,width/8)
      let y = baseY + yDiff
      let vec = createVector(x,y)
      points.push(vec)
    }
    ptsWrap.push(points)
  }
  for (let i = 0; i < ptsWrap.length-1; i++) {
    let num_lines = 250 + 500*i;
    for (let j = 0; j < ptsWrap[i].length-1; j++) {
      let col = chCol(pal.veg)
      let strCol = chCol(pal.veg)
      let tl = createVector(ptsWrap[i][j].x,ptsWrap[i][j].y)
      let tr = createVector(ptsWrap[i][j+1].x,ptsWrap[i][j+1].y)
      let bl = createVector(ptsWrap[i+1][j].x,ptsWrap[i+1][j].y)
      let br = createVector(ptsWrap[i+1][j+1].x,ptsWrap[i+1][j+1].y)
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
          dotBlobStr(buff, x, y1 - yOffset, x2, y2, w(.005), strCol[0], strCol[1], strCol[2], 155, 'none')
        }else if (style === 'orig') {
          blobStr(buff, x, y1 - yOffset, x2, y2, w(.09), col[0]+orig_cD/3, col[1]+orig_cD/3, col[2]+orig_cD/3, 100)
          let xOffset = rnd(-w(.002),w(.002))
          blobStr(p3, x + xOffset, y1 - yOffset, x2 + xOffset, y2, w(.03), col[0]-orig_cD, col[1]-orig_cD, col[2]-orig_cD, 100)
          buff.push()
          buff.stroke(col[0]-orig_cD, col[1]-orig_cD, col[2]-orig_cD, 50)
          let strW = rnd(w(.0005),w(.001))
          buff.strokeWeight(strW)
          buff.line(x + xOffset*2, y1 - yOffset/2, x2 + xOffset*2, y2)
          buff.pop()
        }else if (style === 'dev') {
          pstr4(p3, x, y1 - yOffset, x2, y2, w(.02), w(.003), 1, [strCol[0]-20, strCol[1]-20, strCol[2]-20, rnd(10)], 200, BLEND)
          pstr4(p3, x, y1 - yOffset, x2, y2, w(.01), w(.003), 1, [strCol[0], strCol[1], strCol[2], rnd(30)], 200, SOFT_LIGHT)
        }
      }
      // DETAILS
      if (style === 'neat') {
        // ONLY RENDER SOME ADD RND 
        //fillShape(buff, tl, tr, br, bl, rnd(45,90), col, SOFT_LIGHT, w(.003))
      }else if (style === 'dev' || style === 'orig') {
        if (style === 'dev') {
          let numSecs = rnd(12,24)
          areaLinearDev(buff,numSecs,tl,tr,br,bl,pal.veg,-.5,1.5)
        }
        let detail = rnd()
        ov_strCol = chCol(pal.veg)
        if (detail < .2) {
          newPt = p5.Vector.lerp(tl,tr,rnd(.7,1.5))
          newPt2 = p5.Vector.lerp(tl,bl,rnd(.7,1.5))
          ov_strW = rnd(w(.005),w(.01))
          ov_strW_orig = ov_strW*10
          if (style === 'dev') {
            pstr4(p3,tl.x,tl.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,tl.x,tl.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
          }else if (style === 'orig') {
            blobStr(p3,tl.x,tl.y,newPt.x,newPt.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,tl.x,tl.y,newPt2.x,newPt2.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
          }
        }else if (detail < .4) {
          newPt = p5.Vector.lerp(tr,br,rnd(.7,1.5))
          newPt2 = p5.Vector.lerp(bl,br,rnd(.7,1.5))
          ov_strW = rnd(w(.005),w(.01))
          ov_strW_orig = ov_strW*10
          if (style === 'dev') {
            pstr4(p3,tr.x,tr.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,bl.x,bl.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
          }else if (style === 'orig') {
            console.log(tr.x)
            blobStr(p3,tr.x,tr.y,newPt.x,newPt.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,bl.x,bl.y,newPt2.x,newPt2.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
          }
        }
        else if (detail < .6) {
          newPt = p5.Vector.lerp(tr,br,rnd(1,1.5))
          newPt2 = p5.Vector.lerp(br,tr,rnd(1,1.5))
          newPt3 = p5.Vector.lerp(tl,bl,rnd(.7,1.5))
          newPt4 = p5.Vector.lerp(tr,br,rnd(.7,1.5))
          ov_strW = rnd(w(.005),w(.01))
          ov_strW_orig = ov_strW*10
          if (style === 'dev') {
            pstr4(p3,newPt2.x,newPt2.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,tl.x,tl.y,newPt3.x,newPt3.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,tr.x,tr.y,newPt4.x,newPt4.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
          }else if (style === 'orig') {
            console.log(tr.x)
            blobStr(p3,newPt2.x,newPt2.y,newPt.x,newPt.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,tl.x,tl.y,newPt3.x,newPt3.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,tr.x,tr.y,newPt4.x,newPt4.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
          }
        }else if (detail < .9) {
          if (style === 'dev') {
            fillShape(p3, tr, br, bl, tl, rnd(60), ov_strCol, SOFT_LIGHT, 750)
          }
        }
        // SECOND SEQUENCE
        let weightMult = map(tl.y,horizon,h(.5),.7,1.2)
        if (detail < .3) {
          let lCutVal1 = rnd(.1,.3)
          let lCutVal2 = rnd(.1,.3)
          tlCutTop = p5.Vector.lerp(tl,tr,lCutVal1)
          tlCutBot = p5.Vector.lerp(bl,br,lCutVal1)
          tlCutLeft = p5.Vector.lerp(tl,bl,lCutVal2)
          tlCutRight = p5.Vector.lerp(tr,br,lCutVal2)
          tlCutCut = p5.Vector.lerp(tlCutTop,tlCutBot,lCutVal2)

          newPt = p5.Vector.lerp(tlCutCut,tlCutLeft,rnd(1,1.5))
          newPt2 = p5.Vector.lerp(tlCutCut,tlCutBot,rnd(1,1.5))

          ov_strW = rnd(w(.005),w(.01)) * weightMult
          ov_strW_orig = ov_strW*10

          if (style === 'dev') {
            pstr4(p3,tlCutCut.x,tlCutCut.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,tlCutCut.x,tlCutCut.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
          }else if (style === 'orig') {
            blobStr(p3,tlCutCut.x,tlCutCut.y,newPt.x,newPt.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,tlCutCut.x,tlCutCut.y,newPt2.x,newPt2.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
          }
        }else if (detail < .6) {
          let lCutVal1 = rnd(.1,.3)
          let lCutVal2 = rnd(.6,1.1)
          tlCutTop = p5.Vector.lerp(tl,tr,lCutVal1)
          tlCutBot = p5.Vector.lerp(bl,br,lCutVal1)
          tlCutTop2 = p5.Vector.lerp(tl,tr,lCutVal1*2)
          tlCutBot2 = p5.Vector.lerp(bl,br,lCutVal1*2)
          tlCutLeft = p5.Vector.lerp(tl,bl,lCutVal2)
          tlCutRight = p5.Vector.lerp(tr,br,lCutVal2)
          tlCutCut1 = p5.Vector.lerp(tlCutTop,tlCutBot,lCutVal2)
          tlCutCut2 = p5.Vector.lerp(tlCutTop2,tlCutBot2,lCutVal2)

          newPt = p5.Vector.lerp(tlCutCut1,tlCutLeft,rnd(1,1.5))
          newPt2 = p5.Vector.lerp(tlCutCut1,tlCutTop,rnd(1,1.5))
          newPt3 = p5.Vector.lerp(tlCutCut2,tlCutTop2,rnd(1,1.5))

          ov_strW = rnd(w(.005),w(.01)) * weightMult
          ov_strW_orig = ov_strW*10

          if (style === 'dev') {
            pstr4(p3,tlCutCut2.x,tlCutCut2.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,tlCutCut1.x,tlCutCut1.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,tlCutCut2.x,tlCutCut2.y,newPt3.x,newPt3.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
          }else if (style === 'orig') {
            blobStr(p3,tlCutCut2.x,tlCutCut2.y,newPt.x,newPt.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,tlCutCut1.x,tlCutCut1.y,newPt2.x,newPt2.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,tlCutCut2.x,tlCutCut2.y,newPt3.x,newPt3.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
          }
        }else if (detail < .9) {
          let rCutVal1 = rnd(.05,.2)
          let rCutVal2 = rnd(.05,.2)
          rCutRight = p5.Vector.lerp(tr,br,rCutVal1)
          rCutLeft = p5.Vector.lerp(tl,bl,rCutVal1)
          rCutRight2 = p5.Vector.lerp(tr,br,rCutVal1*2)
          rCutLeft2 = p5.Vector.lerp(tl,bl,rCutVal1*2)
          rCutRight3 = p5.Vector.lerp(tr,br,rCutVal1*3)
          rCutLeft3 = p5.Vector.lerp(tl,bl,rCutVal1*3)
          rCutTop = p5.Vector.lerp(tr,tl,rCutVal2)
          rCutBot = p5.Vector.lerp(br,bl,rCutVal2)
          rCutCut1 = p5.Vector.lerp(rCutRight,rCutLeft,rCutVal2)
          rCutCut2 = p5.Vector.lerp(rCutRight2,rCutLeft2,rCutVal2)
          rCutCut3 = p5.Vector.lerp(rCutRight3,rCutLeft3,rCutVal2)

          newPt = p5.Vector.lerp(rCutCut3,rCutTop,rnd(1,1.5))
          newPt2 = p5.Vector.lerp(rCutCut1,rCutLeft,rnd(1,1.5))
          newPt3 = p5.Vector.lerp(rCutCut2,rCutLeft2,rnd(1,1.5))
          newPt4 = p5.Vector.lerp(rCutCut3,rCutLeft3,rnd(1,1.5))

          ov_strW = rnd(w(.005),w(.01)) * weightMult
          ov_strW_orig = ov_strW*10

          
          if (style === 'dev') {
            pstr4(p3,rCutCut1.x,rCutCut1.y,newPt.x,newPt.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,rCutCut1.x,rCutCut1.y,newPt2.x,newPt2.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,rCutCut2.x,rCutCut2.y,newPt3.x,newPt3.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
            pstr4(p3,rCutCut3.x,rCutCut3.y,newPt4.x,newPt4.y,ov_strW,ov_strW/2,1,ov_strCol,300,OVERLAY)
          }else if (style === 'orig') {
            blobStr(p3,rCutCut1.x,rCutCut1.y,newPt.x,newPt.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,rCutCut1.x,rCutCut1.y,newPt2.x,newPt2.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,rCutCut2.x,rCutCut2.y,newPt3.x,newPt3.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
            blobStr(p3,rCutCut3.x,rCutCut3.y,newPt4.x,newPt4.y, ov_strW_orig, ov_strCol[0], ov_strCol[1], ov_strCol[2], 200)
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

function cqtrTerr(buff, style, horizon, pal, time, xMid) {

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

  let bankHeight = dist(0,-h(.5),0,horizon)/8
  let lxt = -w(.5)
  let bHL = horizon - bankHeight*rnd(1,1.3)
  let ObHL = horizon - bankHeight*rnd(.9,1.5)
  let bBL = horizon + bankHeight*rnd(.1,.3)
  let ObBL = horizon + bankHeight*rnd(.4)
  let lxt2val = rnd(.3,.6)
  let lxt2 = lerp(-w(.5),xMid,lxt2val)
  let lxb2 = lxt2 + rnd(w(.15))
  let bHL2 = horizon - bankHeight*rnd(.7,1)
  let bBL2 = horizon + bankHeight*rnd(.1)
  let lxt3val = rnd(.7,.9)
  let lxt3 = lerp(lxt2,xMid,lxt3val)
  let lxb3 = lxt3 + rnd(w(.03),w(.08))
  let bHL3 = horizon - bankHeight*rnd(.25,.6)
  let bBL3 = horizon + bankHeight*rnd(.1)

  let rxt = w(.5)
  let bHR = horizon - bankHeight*rnd(1,1.3)
  let ObHR = horizon - bankHeight*rnd(.9,1.5)
  let bBR = horizon + bankHeight*rnd(.1,.3)
  let ObBR = horizon + bankHeight*rnd(.4)
  let rxt2val = rnd(.3,.6)
  let rxt2 = lerp(w(.5),xMid,rxt2val)
  let rxb2 = rxt2 - rnd(w(.15))
  let bHR2 = horizon - bankHeight*rnd(.7,1)
  let bBR2 = horizon + bankHeight*rnd(.1)
  let rxt3val = rnd(.7,.9)
  let rxt3 = lerp(rxt2,xMid,rxt3val)
  let rxb3 = rxt3 - rnd(w(.03),w(.08))
  let bHR3 = horizon - bankHeight*rnd(.25,.6)
  let bBR3 = horizon + bankHeight*rnd(.1)

  let bgbHL = horizon - bankHeight*rnd(.2,.5)
  let bgbHM = horizon - bankHeight*rnd(.1)
  let bgbHR = horizon - bankHeight*rnd(.2,.5)
  let bgbLL = horizon + bankHeight*rnd(.1,.3)
  let bgbLM = horizon + bankHeight*rnd(.1,.3)
  let bgbLR = horizon + bankHeight*rnd(.1,.3)
  let mx = xMid + rnd(-w(.1),w(.1))

  let vl1 = createVector(lxt,bHL)
  let vl2 = createVector(lxt2,bHL2)
  let vl3 = createVector(lxb2,bBL2)
  let vl4 = createVector(lxt,bBL)

  let Ovl1 = createVector(lxt,ObHL)
  let Ovl4 = createVector(lxt,ObBL)

  let vl5 = createVector(lxt3,bHL3)
  let vl6 = createVector(lxb3,bBL3)

  let vr1 = createVector(rxt,bHR)
  let vr2 = createVector(rxt2,bHR2)
  let vr3 = createVector(rxb2,bBR2)
  let vr4 = createVector(rxt,bBR)

  let Ovr1 = createVector(rxt,ObHR)
  let Ovr4 = createVector(rxt,ObBR)
  
  let vr5 = createVector(rxt3,bHR3)
  let vr6 = createVector(rxb3,bBR3)

  let vm1 = createVector(lxt,bgbHL)
  let vm2 = createVector(xMid,bgbHM)
  let vm3 = createVector(rxt,bgbHR)
  let vm4 = createVector(rxt,bgbLR)
  let vm5 = createVector(mx,bgbLM)
  let vm6 = createVector(lxt,bgbLL)

  let col1 = chCol(pal.accents)
  let col2 = chCol(pal.accents)
  let col3 = chCol(pal.accents)
  let col4 = chCol(pal.accents)
  let col5 = chCol(pal.accents)

  let colOver1 = chCol(pal.accents)
  let colOver2 = chCol(pal.accents)
  let colOver3 = chCol(pal.accents)
  let colOver4 = chCol(pal.accents)
  let colOver5 = chCol(pal.accents)

  makePoly6(buff,lxt,bgbHL,mx,bgbHM,rxt,bgbHR,rxt,bgbLR,mx,bgbLM,lxt,bgbLL,baseCol,pal,'bg',style)

  makePoly4(buff,lxt,bHL,lxt2,bHL2,lxb2,bBL2,lxt,bBL,baseCol,pal,'bg',style)
  makePoly6(buff,lxt,ObHL,lxt2,bHL2,lxt3,bHL3,lxb3,bBL3,lxb2,bBL2,lxt,ObBL,baseCol,pal,'bg',style)

  //makePoly4(buff,rxt,bHR,rxt2,bHR2,rxb2,bBR2,rxt,bBR,baseCol,pal,'bg')
  makePoly4(buff,rxt2,bHR2,rxt,bHR,rxt,bBR,rxb2,bBR2,baseCol,pal,'bg',style)
  makePoly6(buff,rxt,ObHR,rxt2,bHR2,rxt3,bHR3,rxb3,bBR3,rxb2,bBR2,rxt,ObBR,baseCol,pal,'bg',style)

  //OVERLAY

  makePoly4(buff,lxt,bHL,lxt2,bHL2,lxb2,bBL2,lxt,bBL,col1,pal,'overlay',style)
  makePoly6(buff,lxt,ObHL,lxt2,bHL2,lxt3,bHL3,lxb3,bBL3,lxb2,bBL2,lxt,ObBL,col2,pal,'overlay',style)

  //makePoly4(buff,rxt,bHR,rxt2,bHR2,rxb2,bBR2,rxt,bBR,col3,pal,'overlay')
  makePoly4(buff,rxt2,bHR2,rxt,bHR,rxt,bBR,rxb2,bBR2,col3,pal,'overlay',style)
  //makePoly6(buff,rxt,ObHR,rxt2,bHR2,rxt3,bHR3,rxb3,bBR3,rxb2,bBR2,rxt,ObBR,col4,pal,'overlay')
  makePoly6(buff,rxt3,bHR3,rxt2,bHR2,rxt,ObHR,rxt,ObBR,rxb2,bBR2,rxb3,bBR3,col4,pal,'overlay',style)

  makePoly6(buff,lxt,bgbHL,mx,bgbHM,rxt,bgbHR,rxt,bgbLR,mx,bgbLM,lxt,bgbLL,col5,pal,'overlay',style)

  /*if (style === 'neat') {
    fillShape(buff, vl1, vl2, vl3, vl4, rnd(60), colOver1, HARD_LIGHT, w(.003))
    fillShape(buff, Ovl1, vl2, vl3, Ovl4, rnd(60), colOver2, HARD_LIGHT, w(.003))
    fillShape(buff, vl2, vl5, vl6, vl3, rnd(60), colOver2, HARD_LIGHT, w(.003))
  
    fillShape(buff, vr2, vr1, vr4, vr3, rnd(60), colOver3, HARD_LIGHT, w(.003))
    fillShape(buff, vr2, Ovr1, Ovr4, vr3, rnd(60), colOver4, HARD_LIGHT, w(.003))
    fillShape(buff, vr5, vr2, vr3, vr6, rnd(60), colOver4, HARD_LIGHT, w(.003))
  
    fillShape(buff, vm1, vm2, vm5, vm6, rnd(60), colOver5, HARD_LIGHT, w(.003))
    fillShape(buff, vm2, vm3, vm4, vm5, rnd(60), colOver5, HARD_LIGHT, w(.003))
  }else if (style === 'geom') {
    let numSecs = rnd(6,15)
    staticFillPoly(buff, vl1, vl2, vl3, vl4, colOver1, HARD_LIGHT)
    areaLinear(buff,numSecs,vl1, vl2, vl3, vl4,pal.veg,.1,.9,'terrain') 
    staticFillPoly(buff, Ovl1, vl2, vl3, Ovl4, colOver2, HARD_LIGHT)
    staticFillPoly(buff, vl2, vl5, vl6, vl3, colOver2, HARD_LIGHT)

    staticFillPoly(buff, vr2, vr1, vr4, vr3, colOver3, HARD_LIGHT)
    areaLinear(buff,numSecs,vr2, vr1, vr4, vr3,pal.veg,.1,.9,'terrain') 
    staticFillPoly(buff, vr2, Ovr1, Ovr4, vr3, colOver4, HARD_LIGHT)
    staticFillPoly(buff, vr5, vr2, vr3, vr6, colOver4, HARD_LIGHT)

    staticFillPoly(buff, vm1, vm2, vm5, vm6, colOver5, HARD_LIGHT)
    staticFillPoly(buff, vm2, vm3, vm4, vm5, colOver5, HARD_LIGHT)
  }else if (style === 'orig') {

  }*/
}


//////////////////////////////////////////////////////////
///////////////////// little boats ///////////////////////

function cqtrBoat(buff,horizon,pal,style,boatDir) {
  let x = rnd(-w(.43),w(.43))
  let yMin = lerp(horizon,h(.5),.05)
  let yMax = lerp(horizon,h(.5),.5)
  let y = rnd(yMin,yMax)
  let size = map(y,horizon,yMax,w(.025),w(.15))
  let mastWeight_mult = map(y,horizon,yMax,.5,1.2);
  let col = chCol(pal.bld)

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

  let tl = createVector(txl,ytl)
  let tr = createVector(txr,ytr)
  let br = createVector(bxr,y)
  let bl = createVector(bxl,y)
  let r_tl = createVector(txl,r_ytl)
  let r_tr = createVector(txr,r_ytr)

  let sail_t = createVector(sail_main, mastTop)
  let sail_m = createVector(sail_end, lerp(mastTop,yMast,.9))
  let sail_b = createVector(sail_main, yMast)

  console.log(time)

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
  buff.strokeWeight(w(.01))
  buff.stroke(255,0,0,255)
  buff.fill(255,0,0,255)
  buff.beginShape()
    buff.vertex(tl.x,tl.r)
    buff.vertex(tr.x,tr.r)
    buff.vertex(br.x,br.r)
    buff.vertex(bl.x,bl.r)
  buff.endShape(CLOSE)

  buff.beginShape()
    buff.vertex(sail_t.x,sail_t.r)
    buff.vertex(sail_m.x,sail_m.r)
    buff.vertex(sail_b.x,sail_b.r)
  buff.endShape(CLOSE)

  let r_sail_t = createVector(sail_main, r_mastTop)
  let r_sail_m = createVector(sail_end, lerp(r_mastTop,r_yMast,.9))
  let r_sail_b = createVector(sail_main, r_yMast)

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
        blobStr(buff, x1, y1, x2, y2, w(.03)*mastWeight_mult, col2[0], col2[1], col2[2], 255)
      }
      blobStr(buff, x1, y1, x2, y2, w(.03)*mastWeight_mult, col1[0], col1[1], col1[2], 255)
    }else if (style === 'neat') {
      if (i < 16){
        dotBlobStr(buff, x1, y1, x2, y2, w(.004)*mastWeight_mult, col2[0], col2[1], col2[2], 225, 'none')
      }
      dotBlobStr(buff, x1, y1, x2, y2, w(.004)*mastWeight_mult, col1[0], col1[1], col1[2], 225, 'none')
    }else if (style === 'dev') {
      if (i < 16){
        pstr4(buff, x1, y1, x2, y2, w(.005)*mastWeight_mult, w(.001)*mastWeight_mult, 1, col2, 200, BLEND)
      }
      pstr4(buff, x1, y1, x2, y2, w(.005)*mastWeight_mult, w(.001)*mastWeight_mult, 1, col1, 200, BLEND)
    }
  }
  // MAIN BODY REFLS
  let numRefls;
  if (style === 'neat'){numRefls = 300}
  if (style === 'orig'){numRefls = 300}
  if (style === 'dev'){numRefls = 200}
  console.log('boat num refls: ' + numRefls)
  for (let i = 0; i < numRefls; i++) {
    let y1g = map(i,0,numRefls,tl.y,bl.y)
    let y2g = map(i,0,numRefls,tr.y,br.y)
    let y1 = map(i,0,numRefls,r_tl.y,bl.y)
    let y2 = map(i,0,numRefls,r_tr.y,br.y)
    let x1 = map(i,0,numRefls,r_tl.x,bl.x)
    let x2 = map(i,0,numRefls,r_tr.x,br.x)
    let refl_col = color(col1[0]-50,col1[1]-50,col1[2]-50)
    if (style === 'neat') {
      let x = rnd(x1,x2)
      let y = rnd(y1,y2)
      refl_col.setAlpha(25)
      //let refl_xOff = map(y,horizon,yMax,w(.005),w(.015))
      let refl_xOff = (size/2) * map(y,horizon,yMax,.5,1.5)
      let weight_mult = map(y,horizon,yMax,.5,1.5)
      let yOff = rnd(w(.01)) // *(weight_mult*map(i,0,numRefls,1,2))
      dotBlobStr(buff, x, y + yOff, x + rnd(-refl_xOff,refl_xOff), y + yOff, w(.003)*weight_mult, red(refl_col)-cD, green(refl_col)-cD, blue(refl_col)-cD, alpha(refl_col), 'none')
    }else if (style === 'orig') {
      let x = rnd(x1,x2)
      let y = rnd(y1,y2)
      refl_col.setAlpha(125)
      //let refl_xOff = map(y,horizon,yMax,w(.005),w(.015))
      let refl_xOff = (size/2) * map(y,horizon,yMax,.5,1.5)
      let weight_mult = map(y,horizon,yMax,.5,1.5)
      let yOff = rnd(w(.01)) // *(weight_mult*map(i,0,numRefls,1,2))
      blobStr(buff, x, y + yOff, x + rnd(-refl_xOff,refl_xOff), y + yOff, w(.03)*weight_mult, red(refl_col)-cD, green(refl_col)-cD, blue(refl_col)-cD, alpha(refl_col))
    }else if (style === 'dev') {
      let yg = rnd(y1g,y2g)
      let x = rnd(x1,x2)
      let y = rnd(y1,y2)
      //let reflCol = get(x,yg)
      //let refl_col = color(col1[0]-50,col1[1]-50,col1[2]-50)
      refl_col.setAlpha(160)
      console.log('boat refl reflCol: ' + red(reflCol))
      let refl_xOff = map(y,horizon,yMax,w(.005),w(.015))
      let weight_mult = map(y,horizon,yMax,.5,1.5)
      pstr4(p3, x, y, x + rnd(-refl_xOff,refl_xOff), y, w(.006)*weight_mult, w(.002)*weight_mult, 1, refl_col, 25, OVERLAY)
    }
  }
  if (style === 'orig') {
    blobStr(buff, mastX, yMast, mastX, yMast-size, w(.1)*mastWeight_mult, col2[0], col2[1], col2[2], 255)
    blobStr(buff, bl.x - rnd(w(.2)), bl.y, br.x + rnd(w(.2)), br.y, w(.1), col3[0], col3[1], col3[2], 255)
  }else if (style === 'neat') {
    dotBlobStr(buff, mastX, yMast, mastX, yMast-size, w(.005)*mastWeight_mult, col2[0], col2[1], col2[2], 225, 'none')
    dotBlobStr(buff, bl.x - rnd(w(.2)), bl.y, br.x + rnd(w(.2)), br.y, w(.005), col3[0], col3[1], col3[2], 225, 'none')
  }else if (style === 'dev') {
    pstr4(buff, mastX, yMast, mastX, yMast-size, w(.02)*mastWeight_mult, w(.007)*mastWeight_mult, 1, col2, 25, BLEND)
    pstr4(buff, bl.x - rnd(w(.2)), bl.y, br.x + rnd(w(.2)), br.y, w(.008), w(.005), 1, col3, 25, HARD_LIGHT)
  }
  let hasSails = rnd()
  if (hasSails < .5) {
    //let xR = x+size/8 - size/15
    //let mastTop = yMast - size
    //let ls_t = createVector(xR, mastTop)
    //let ls_bl = createVector(x-size/3, lerp(mastTop,yMast,.9))
    //let ls_br = createVector(xR, yMast)
    let numLines = 90
    for (let i = 0; i < numLines; i++) {
      let y = map(i,0,numLines,sail_t.y,sail_b.y)
      if (y < sail_m.y) {
        x = map(y,sail_t.y,sail_m.y,sail_t.x,sail_m.x)
      }else{
        x = map(y,sail_m.y,sail_b.y,sail_m.x,sail_b.x)
      }
      if (style === 'orig') {
        blobStr(buff, x, y, sail_main, y, w(.03), col2[0], col2[1], col2[2], 255)
      }else if (style === 'neat') {
        dotBlobStr(buff, x, y, sail_main, y, w(.003), col2[0], col2[1], col2[2], 225, 'none')
      }else if (style === 'dev') {
        pstr4(buff, x, y, sail_main, y, w(.005), w(.001), 1, col2, 200, BLEND)
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
        //let refl_xOff = map(y,horizon,yMax,w(.005),w(.015))
        let refl_xOff = (size/2) * map(y,horizon,yMax,.5,1.5)
        let weight_mult = map(y,horizon,yMax,.5,1.5)
        let alphaDim = map(i,0,sailRefls,1,.1)
        refl_col.setAlpha(65*alphaDim)
        dotBlobStr(buff, xPos, yPos, xPos + rnd(-refl_xOff,refl_xOff), yPos, w(.003)*weight_mult, red(refl_col), green(refl_col), blue(refl_col), alpha(refl_col), 'none')
      }else if (style === 'orig') {
        let xOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.003))*rnd(1,1.1)
        let xPos = rnd(x1,x2) + rnd(-xOff,xOff)
        let yOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.004))
        let yPos = y + rnd(-yOff,yOff)
        let refl_xOff = (size/5) * map(y,horizon,yMax,.5,1)
        let weight_mult = map(y,horizon,yMax,.5,1)
        blobStr(buff, xPos, yPos, xPos + rnd(-refl_xOff,refl_xOff), yPos, w(.03)*weight_mult, red(refl_col)-50, green(refl_col)-50, blue(refl_col)-50, alpha(refl_col)/2)
      }else if (style === 'dev') {
        let xOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.003))*rnd(1,3)
        let xPos = rnd(x1,x2) + rnd(-xOff,xOff)
        let yOff = map(y,r_sail_b.y,r_sail_t.y,w(.001),w(.004))*rnd(1,3)
        let yPos = y + rnd(-yOff,yOff)
        //let reflCol = get(x,yg)
        //let refl_col = color(col2[0]-50,col2[1]-50,col2[2]-50)
        refl_col.setAlpha(65)
        console.log('boat refl reflCol: ' + red(reflCol))
        let refl_xOff = map(y,horizon,yMax,w(.005),w(.015))
        let weight_mult = map(y,horizon,yMax,.5,1.5)
        pstr4(p3, xPos, yPos, xPos + rnd(-refl_xOff,refl_xOff), yPos, w(.006)*weight_mult, w(.002)*weight_mult, 1, refl_col, 25, OVERLAY)
      }
    }
  }
}

function sailBoat(buff,horizon,pal,style,boatDir) {
  let x = rnd(-w(.43),w(.43))
  let yMax = lerp(horizon,h(.5),.65)
  let y = rnd(horizon,yMax)
}

//////////////////////////////////////////////////////////
//////////////////// overlay funcs ///////////////////////

function twilightSkyOverlay(style, horizon, pal) {
  //let numTwilightDots = 100000
  let numTwilightDots = floor(map(horizon,-h(.2),h(.32),50000,125000))
  if (style === 'orig') {numTwilightDots = floor(map(horizon,-h(.2),h(.32),20000,60000))}
  if (style === 'dev') {numTwilightDots = floor(map(horizon,-h(.2),h(.32),5000,15000))}
  for (let i = 0; i < numTwilightDots; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = rnd(-h(.5),horizon)
    let h1 = horizon
    let h2 = horizon - rnd(w(.05),w(.2))
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
    let dotAlpha = map(y,horizon,-h(.5),255,50) * alphaMultVal
    col.setAlpha(dotAlpha)
    yPos = y + yOffset
    let xS = rnd(w(.03))
    let yS = rnd(h(.03))
    twilight_dots.push({x,yPos,col,xS,yS})
  }
  shuffleArray(twilight_dots)
  console.log(twilight_dots)
}

function drawTwilight(buff,ptsArray,style,time) {
  buff.push()
  //shuffleArray(ptsArray)
  //for (let i = 0; i < ptsArray.length/10; i++) {
  let delay = 0 //100
  let maxDist = dist(0,-h(.5),0,horizon)
  if (frameCount > delay && frameCount < delay + floor(ptsArray.length/50)) { // /10 for geom
    let numToDraw = floor(ptsArray.length/50)
    let i = frameCount * numToDraw;
    if (i < ptsArray.length-numToDraw) {
      for (let j = i; j < i + numToDraw; j++) {
        //console.log(j)
      //for (let i = frameCount; i < ptsArray.length; i += floor(ptsArray.length/50)) {
        //buff.ellipse(ptsArray[i].x,ptsArray[i].yPos,w(.005))
        if (style === 'orig') {
          //buff.fill(ptsArray[i].col)
          //buff.noStroke()
          let x = ptsArray[j].x
          let y1 = ptsArray[j].yPos
          let y2 = y1 + rnd(w(.002),w(.01))
          //buff.ellipse(ptsArray[j].x,ptsArray[j].yPos,ptsArray[j].xS/8)
          buff.stroke(ptsArray[j].col)
          let thisDist = dist(0,y1,0,horizon)
          let strW = map(thisDist,0,maxDist,w(.005),w(.001))
          buff.strokeWeight(strW)
          //buff.blendMode(SOFT_LIGHT)
          buff.line(x,y1,x,y2)
          /*buff.noStroke()
          buff.fill(ptsArray[j].col)
          buff.blendMode(HARD_LIGHT)
          buff.rect(ptsArray[j].x,ptsArray[j].yPos,ptsArray[j].xS,ptsArray[j].yS)*/
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
            //console.log(xPos,yPos)
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

function sun(style,horizon,pal,type) {
  let xPos = rnd(-w(.45),w(.45))
  let hLerpVal = map(horizon,-h(.2),h(.32),.35,.65)
  if (layout === renderMetro) {hLerpVal = map(horizon,-h(.2),h(.32),.25,.45)}
  let yPos = rnd(-h(.42),lerp(-h(.5),horizon,hLerpVal))
  let sizes = [[w(.03),'small',12000],[w(.06),'medium',24000],[w(.09),'large',36000]]
  let chSize = sizes[floor(rnd()*sizes.length)]
  let size = chSize[0]
  console.log(w(.5), 'sun position: ' + xPos,yPos, 'sun size: ' + chSize[1])
  let numDots = chSize[2]
  let normalCols = [[255,217,85],[255,210,136],[241,231,243]]
  let redCols = [[255,234,104],[255,114,70],[218,47,32],[192,83,102]]
  if (style === 'dev') {numDots = 100}
  if (style === 'orig') {numDots = 300}
  for (let i = 0; i < numDots; i++) {
    let col = color(normalCols[floor(rnd()*normalCols.length)])
    if (type === 'redSun') {
      col = redCols[floor(rnd()*redCols.length)]
      bMode = HARD_LIGHT
    }
    if (style === 'dev') {
      //let numLines = 100;
      let radius = size;
      y = map(i,0,numDots,yPos-radius,yPos+radius);
      angle = map(i,0,numDots,0,PI)
      angleYL = map(i,0,numDots,0,PI)
      angleYR = map(i,0,numDots,PI,TWO_PI)
      let bMode = HARD_LIGHT
      yl = yPos - cos(angleYL)*radius
      yr = yPos - cos(angleYL)*radius
      x1 = xPos - sin(angle)*radius
      x2 = xPos + sin(angle)*radius
      if (type === 'redSun') {
        col = color(redCols[floor(rnd()*redCols.length)])
        bMode = HARD_LIGHT
      }
      let strW = map(size,w(.03),w(.09),w(.01),w(.015)) * map(abs(x2-x1),0,size,.5,1.25)
      col.setAlpha(200)
      if (i % 2) {
        pstr4(moonBuff, x1, yl, x2, yr, strW, strW/3, 1, col, 30, bMode)
      }else{
        pstr4(moonBuff, x2, yl, x1, yr, strW, strW/3, 1, col, 30, bMode)
      }
    }else if (style === 'neat') {
      let angle = rnd(0,TWO_PI)
      let bMode = HARD_LIGHT
      let r = rnd(size)
      let x = xPos + r * cos(angle)
      let y = yPos + r * sin(angle)
      let dotSize = w(.004) * map(r,0,size,.6,1)
      sun_dots.push({x,y,dotSize,col,bMode})
    }else if (style === 'orig') {
      let radius = size;
      x = map(i,0,numDots,xPos-radius,xPos+radius);
      angle = map(i,0,numDots,0,PI)
      angleXT = map(i,0,numDots,0,PI)
      angleXB = map(i,0,numDots,PI,TWO_PI)
      let bMode = SCREEN
      x = xPos - cos(angleXT)*radius
      y1 = yPos - sin(angle)*radius
      y2 = yPos + sin(angle)*radius
      if (type === 'redSun') {
        col = color(redCols[floor(rnd()*redCols.length)])
        bMode = HARD_LIGHT
      }
      let strW = map(size,w(.03),w(.09),w(.03),w(.09)) * map(dist(x,0,xPos,0),0,size,1.5,.75)
      col.setAlpha(200)
      blobStr(moonBuff, x, y1, x, y2, strW, red(col), green(col), blue(col), alpha(col)/1.5)
    }
  }
  // sun refls
  console.log(layout)
  if (layout !== renderSanGm) {
    let levelMult = map(horizon,-h(.2),h(.32),.5,1.5)
    if (style === 'neat'){sunRefls = 1000*levelMult}
    if (style === 'orig'){sunRefls = 300*levelMult}
    if (style === 'dev'){sunRefls = 250*levelMult}
    for (let i = 0; i < sunRefls; i++) {
      //col = color(normalCols[floor(rnd()*normalCols.length)])
      let rCol = color(normalCols[floor(rnd()*normalCols.length)])
      let yMin = lerp(horizon,h(.5),.2)
      //let yOff = 
      let y = rnd(yMin,h(.5))
      let xOff = size * map(y,horizon,h(.5),.3,3)
      let x = xPos + rnd(-xOff,xOff)
      let bMode = SCREEN
      let weightMult = map(y,yMin,h(.5),1,3)
      if (type === 'redSun') {
        rCol = color(redCols[floor(rnd()*redCols.length)])
        bMode = HARD_LIGHT
      }
      rCol.setAlpha(rnd(25,90)*map(y,yMin,h(.5),.1,1))
      if (style === 'dev') {
        pstr4(p3, x, y, x + rnd(-xOff,xOff), y, w(.02), w(.006), 1, rCol, 15, bMode)
      }else if (style === 'neat') {
        dotBlobStr(p3, x, y, x + rnd(-xOff,xOff), y, w(.003)*weightMult, red(rCol), green(rCol), blue(rCol), alpha(rCol), 'none')
      }else if (style === 'orig') {
        blobStr(p3, x, y, x + rnd(-xOff,xOff), y, w(.1)*weightMult, red(rCol), green(rCol), blue(rCol), alpha(rCol))
      }
    }
  }
}

function solarEclipse() {
  let xPos = rnd(-w(.45),w(.45))
  let hLerpVal = map(horizon,-h(.2),h(.32),.35,.65)
  //let sizeMultVal = map(horizon,-h(.2),h(.32),.5,1)
  let yPos = rnd(-h(.42),lerp(-h(.5),horizon,hLerpVal))
  let sizes = [[w(.03),'small',800,8000],[w(.06),'medium',1600,16000],[w(.09),'large',2400,24000]]
  let chSize = sizes[floor(rnd()*sizes.length)]
  let size = chSize[0] // * sizeMultVal
  console.log(w(.5), 'moon position: ' + xPos,yPos, 'moon size: ' + chSize[1])
  let numDots = chSize[2]
  let numDotsInside = chSize[3]
  let normalCols = [[255,217,85],[255,210,136],[241,231,243]]
  for (let i = 0; i < numDotsInside; i++) {
    let angle = rnd(0,TWO_PI)
    col = [0,0,0,255]
    bMode = BLEND
    let r = rnd(size)
    let x = xPos + r * cos(angle)
    let y = yPos + r * sin(angle)
    let dotSize = w(.002)
    sun_dots.push({x,y,dotSize,col,bMode})
  }
  for (let i = 0; i < numDots; i++) {
    let angle = rnd(TWO_PI)
    r1 = size
    let sizeMult = rnd(.95,1.2)
    r2 = size*sizeMult
    let r = r2
    let x = xPos + r * cos(angle)
    let y = yPos + r * sin(angle)
    if (r < r1) {
      dotAlpha = map(r,r1,r1*.95,255,0)
    }else{
      dotAlpha = map(r,r1,r1*1.2,255,0)
    }
    let dotSize = w(.003) * map(r,0,size,.6,1)
    let col = color(normalCols[floor(rnd()*normalCols.length)])
    //let col = [255,255,255,dotAlpha]
    col.setAlpha(dotAlpha)
    bMode = BLEND
    sun_dots.push({x,y,dotSize,col,bMode})
  }
}

function moon(style, horizon, pal, type) {
  let xPos = rnd(-w(.45),w(.45))
  let hLerpVal = map(horizon,-h(.2),h(.32),.35,.65)
  if (layout === renderMetro) {hLerpVal = map(horizon,-h(.2),h(.32),.25,.45)}
  let yPos = rnd(-h(.42),lerp(-h(.5),horizon,hLerpVal))
  let sizes = [[w(.03),'small',8000],[w(.06),'medium',16000],[w(.09),'large',24000]]
  let chSize = sizes[floor(rnd()*sizes.length)]
  let size = chSize[0]
  console.log(w(.5), 'moon position: ' + xPos,yPos, 'moon size: ' + chSize[1])
  let numDots = chSize[2]
  let col = color(255,255,255,65)
  pinkCols = [[241,231,243],[226,144,195],[220,109,154],[192,83,102]]
  if (style === 'neat') {
    for (let i = 0; i < numDots; i++) {
      let angle = rnd(0,TWO_PI)
      let bMode = SCREEN
      if (type === 'pinkMoon') {
        col = color(pinkCols[floor(rnd()*pinkCols.length)])
        bMode = HARD_LIGHT
      }
      let r = rnd(size)
      let x = xPos + r * cos(angle)
      let y = yPos + r * sin(angle)
      let dotSize = w(.002) * map(r,0,size,.6,1)
      //console.log(x,y,dotSize,col)
      moon_dots.push({x,y,dotSize,col,bMode})
    }
    console.log(moon_dots)
  }else if (style === 'dev') {
    let numLines = 100;
    let radius = size;
    for (let i = 0; i < numLines; i++) {
      y = map(i,0,numLines,yPos-radius,yPos+radius);
      angle = map(i,0,numLines,0,PI)
      angleYL = map(i,0,numLines,0,PI)
      angleYR = map(i,0,numLines,PI,TWO_PI)
      let bMode = SCREEN
      yl = yPos - cos(angleYL)*radius
      yr = yPos - cos(angleYL)*radius
      x1 = xPos - sin(angle)*radius
      x2 = xPos + sin(angle)*radius
      if (type === 'pinkMoon') {
        col = color(pinkCols[floor(rnd()*pinkCols.length)])
        bMode = HARD_LIGHT
      }
      let strW = map(size,w(.03),w(.09),w(.007),w(.021))
      col.setAlpha(200)
      if (i % 2) {
        pstr4(moonBuff, x1, yl, x2, yr, strW, strW/3, 1, col, 30, bMode)
      }else{
        pstr4(moonBuff, x2, yl, x1, yr, strW, strW/3, 1, col, 30, bMode)
      }
    }
  }else if (style === 'orig') {
    let numLines = 150;
    let radius = size;
    for (let i = 0; i < numLines; i++) {
      x = map(i,0,numLines,xPos-radius,xPos+radius);
      angle = map(i,0,numLines,0,PI)
      angleXT = map(i,0,numLines,0,PI)
      angleXB = map(i,0,numLines,PI,TWO_PI)
      let bMode = SCREEN
      x = xPos - cos(angleXT)*radius
      console.log(xPos,x,yPos,y1)
      //xb = yPos + cos(angleXB)*radius
      y1 = yPos - sin(angle)*radius
      y2 = yPos + sin(angle)*radius
      if (type === 'pinkMoon') {
        col = color(pinkCols[floor(rnd()*pinkCols.length)])
        bMode = HARD_LIGHT
      }
      let strW = map(size,w(.03),w(.09),w(.03),w(.09)) * map(dist(x,0,xPos,0),0,size,1.5,.75)
      col.setAlpha(200)
      blobStr(skyBuff, x, y1, x, y2, strW, red(col), green(col), blue(col), alpha(col)/1.5)
    }
  }
  console.log(moon_dots)
  // moon refls
  if (layout !== renderSanGm) {
    let levelMult = map(horizon,-h(.2),h(.32),.5,1.5)
    let rCol = color(255,255,255)
    if (style === 'neat'){moonRefls = 600*levelMult}
    if (style === 'orig'){moonRefls = 600*levelMult}
    if (style === 'dev'){moonRefls = 250*levelMult}
    for (let i = 0; i < moonRefls; i++) {
      let yMin = lerp(horizon,h(.5),.1)
      let y = rnd(yMin,h(.5))
      let xOff = size * map(y,horizon,h(.5),.7,3)
      let yOff = map(y,horizon,h(.5),w(.003),w(.01))
      let weightMult = map(y,yMin,h(.5),1,3)
      if (style === 'neat') {weightMult = map(y,yMin,h(.5),1,1.25)}
      let x = xPos + rnd(-xOff,xOff)
      let bMode = SCREEN
      if (type === 'pinkMoon') {
        rCol = color(pinkCols[floor(rnd()*pinkCols.length)])
        bMode = HARD_LIGHT
      }
      //rCol.setAlpha(rnd(60,90))
      rCol.setAlpha(rnd(0,65)*map(y,yMin,h(.5),.1,1))
      if (style === 'neat') {
        dotBlobStr(p3, x, y, x + rnd(-xOff,xOff), y, w(.01)*(weightMult), red(rCol), green(rCol), blue(rCol), alpha(rCol), 'none')
      }else if (style === 'dev') {
        pstr4(p3, x, y+rnd(-yOff,yOff), x + rnd(-xOff,xOff), y+rnd(-yOff,yOff), w(.01)*weightMult, w(.003)*weightMult, 1, rCol, 15, bMode)
      }else if (style === 'orig') {
        blobStr(p3, x, y+rnd(-yOff,yOff), x + rnd(-xOff,xOff), y+rnd(-yOff,yOff), w(.1)*weightMult, red(rCol), green(rCol), blue(rCol), alpha(rCol))
      }
    }
  }
}

function crescent(style, horizon, pal) {
  let xPos = rnd(-w(.45),w(.45))
  let hLerpVal = map(horizon,-h(.2),h(.32),.35,.65)
  //let sizeMultVal = map(horizon,-h(.2),h(.32),.5,1)
  let yPos = rnd(-h(.42),lerp(-h(.5),horizon,hLerpVal))
  let sizes = [[w(.03),'small',3000],[w(.06),'medium',6000],[w(.09),'large',12000]]
  let chSize = sizes[floor(rnd()*sizes.length)]
  let size = chSize[0] // * sizeMultVal
  console.log(w(.5), 'moon position: ' + xPos,yPos, 'moon size: ' + chSize[1])
  let numDots = chSize[2]
  console.log(numDots)
  if (style === 'orig' || style === 'dev') {numDots = 100}
  let col = color(255,255,255)
  //p4.ellipse(xPos,yPos,w(.1))
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
      //col.setAlpha(225)
      //console.log(i,x,y,alpha(col))
      //skyBuff.ellipse(x,y,dotSize)
      moon_dots.push({x,y,dotSize,col,bMode})
    }else if (style === 'orig') {
      let xOut = xPos + r1*cos(angle)
      let xIn = xPos + r2*cos(angle)
      let y = yPos + r1*sin(angle)
      let strW = map(size,w(.03),w(.09),w(.03),w(.09)) * map(abs(xOut-xIn),0,size/5,.6,1.2)
      blobStr(skyBuff, xIn, y, xOut, y, strW, red(col), green(col), blue(col), alpha(col)/2)
    }else if (style === 'dev') {
      let xOut = xPos + r1*cos(angle)
      let xIn = xPos + r2*cos(angle)
      let y = yPos + r1*sin(angle)
      bMode = SCREEN
      let strW = map(size,w(.03),w(.09),w(.003),w(.009)) * map(abs(xOut-xIn),0,size/5,.3,1.5)
      if (numDots % 2) {
        pstr4(skyBuff, xIn, y, xOut, y, strW, strW/3, 1, col, 15, bMode)
      }else{
        pstr4(skyBuff, xOut, y, xIn, y, strW, strW/3, 1, col, 15, bMode)
      }
    }
  }
  //console.log(moon_dots)
  // refls
  if (layout !== renderSanGm) {
    let levelMult = map(horizon,-h(.2),h(.32),.5,1.5)
    let rCol = color(255,255,255)
    if (style === 'neat'){moonRefls = 1000*levelMult}
    if (style === 'orig'){moonRefls = 200*levelMult}
    if (style === 'dev'){moonRefls = 250*levelMult}
    for (let i = 0; i < moonRefls; i++) {
      let yMin = lerp(horizon,h(.5),.1)
      let y = rnd(yMin,h(.5))
      let xOff = size * map(y,horizon,h(.5),.7,3)
      let yOff = map(y,horizon,h(.5),w(.003),w(.01))
      let x = xPos + rnd(-xOff,xOff)
      let x2 = x + rnd(-xOff,xOff)
      let bMode = SCREEN
      let weightMult = map(y,yMin,h(.5),.7,2.1)
      rCol.setAlpha(rnd(0,65)*map(y,yMin,h(.5),.1,1))
      /*if (type === 'pinkMoon') {
        col = color(pinkCols[floor(rnd()*pinkCols.length)])
        bMode = HARD_LIGHT
      }*/
      col.setAlpha(rnd(0,65)*map(y,yMin,h(.5),.1,1))
      if (style === 'dev') {
        pstr4(p3, x, y, x + rnd(-xOff,xOff), y, w(.02), w(.006), 1, col, 15, bMode)
      }else if (style === 'neat') {
        dotBlobStr(p3, x, y, x2, y, w(.01), red(col), green(col), blue(col), alpha(col), 'none')
      }else if (style === 'orig') {
        blobStr(p3, x, y+rnd(-yOff,yOff), x + rnd(-xOff,xOff), y+rnd(-yOff,yOff), w(.1)*weightMult, red(rCol), green(rCol), blue(rCol), alpha(rCol))
      }
    }
  }
}

function eclipse(style, horizon, pal) {
  let xPos = rnd(-w(.45),w(.45))
  let hLerpVal = map(horizon,-h(.2),h(.32),.35,.65)
  //let sizeMultVal = map(horizon,-h(.2),h(.32),.5,1)
  let yPos = rnd(-h(.42),lerp(-h(.5),horizon,hLerpVal))
  let sizes = [[w(.03),'small',800,8000],[w(.06),'medium',1600,16000],[w(.09),'large',2400,24000]]
  let chSize = sizes[floor(rnd()*sizes.length)]
  let size = chSize[0] // * sizeMultVal
  console.log(w(.5), 'moon position: ' + xPos,yPos, 'moon size: ' + chSize[1])
  let numDots = chSize[2]
  let numDotsInside = chSize[3]
  /*for (let i = 0; i < numDots; i++) {
    let angle = rnd(TWO_PI)
    r1 = size
    let sizeMult = rnd(.95,1.2)
    r2 = size*sizeMult
    let r = r2
    let x = xPos + r * cos(angle)
    let y = yPos + r * sin(angle)
    if (r < r1) {
      dotAlpha = map(r,r1,r1*.95,255,0)
    }else{
      dotAlpha = map(r,r1,r1*1.2,255,0)
    }
    let dotSize = w(.002) * map(r,0,size,.6,1)
    let col = [255,255,255,dotAlpha]
    bMode = SCREEN
    moon_dots.push({x,y,dotSize,col,bMode})
  }*/
  if (style === 'neat') {
    for (let i = 0; i < numDotsInside; i++) {
      let angle = rnd(0,TWO_PI)
      col = [0,0,3,225]
      bMode = BLEND
      let r = rnd(size)
      let x = xPos + r * cos(angle)
      let y = yPos + r * sin(angle)
      let dotSize = w(.002)
      moon_dots.push({x,y,dotSize,col,bMode})
    }
  }else{
    let numLines = 150*(floor(numDots/1000));
    let radius = size;
    console.log(xPos,yPos)
    let angoff = 0
    for (let i = 0; i < numLines; i++) {
      let angle = rnd(0,TWO_PI)
      let angle2 = angle + radians(3)
      //col = [0,0,3,225]
      col = color(255,255,255,255)
      bMode = BLEND
      let r = size*rnd(.99,1.01)
      let r2 = size*(1.01+(noise(sin(angoff))/10))
      let r3 = size*(1.01+(noise(sin(angoff))/3))
      let x1 = xPos + r * cos(angle)
      let y1 = yPos + r * sin(angle)
      let x2 = xPos + r2 * cos(angle)
      let x3 = xPos + r2 * cos(angle2)
      let x4 = xPos + r3 * cos(angle2)
      let y2 = yPos + r2 * sin(angle)
      let y3 = yPos + r * sin(angle2)
      let y4 = yPos + r3 * sin(angle2)
      console.log(x1,y1,x2,y2)
      //skyBuff.ellipse(x1,y1,w(.01))
      let dotSize = w(.002)
      if (style === 'orig') {
        blobStr(skyBuff, x1, y1, x2, y2, w(.05), red(col), green(col), blue(col), alpha(col))
        blobStr(skyBuff, x3, y3, x4, y4, w(.05), red(col), green(col), blue(col), alpha(col)/3)
      }else if (style === 'dev') {
        let sCol1 = color(red(col),green(col),blue(col),alpha(col))
        pstr4(skyBuff, x1, y1, x2, y2, w(.005), w(.003), 1, sCol1, 30, SCREEN)
        let sCol2 = color(red(col),green(col),blue(col),alpha(col)/3)
        pstr4(skyBuff, x3, y3, x4, y4, w(.005), w(.003), 1, sCol2, 30, SCREEN)
      }
      angoff += .01
    }
  }
}

function drawMoon(buff,ptsArray,style) {
  buff.push()
  let delay = 100
  let numToDraw = floor(ptsArray.length/50)
  if (frameCount > delay && frameCount < delay + numToDraw) {
    let i = (frameCount-delay) * numToDraw;
    if (i < ptsArray.length - numToDraw) {
      for (let j = i; j < i + numToDraw; j++) {
        //for (let i = frameCount; i < ptsArray.length; i += floor(ptsArray.length/50)) {
        buff.fill(ptsArray[j].col)
        buff.noStroke()
        buff.blendMode(ptsArray[j].bMode)
        if (style === 'neat') {
          //console.log(ptsArray[j].x,ptsArray[j].y,ptsArray[j].col)
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

function drawSun(buff,ptsArray,style) {
  buff.push()
  let delay = 100;
  if (frameCount > delay && frameCount < delay + floor(ptsArray.length/50)) {
    for (let i = frameCount; i < ptsArray.length; i += floor(ptsArray.length/50)) {
      buff.fill(ptsArray[i].col)
      buff.noStroke()
      buff.blendMode(ptsArray[i].bMode)
      buff.ellipse(ptsArray[i].x,ptsArray[i].y,ptsArray[i].dotSize)
    }
  }
  buff.pop()
}

function starryNight(style, horizon, pal) {
  let numStars = 50;
  for (let i = 0; i < numStars; i++) {
    let starSize = rnd(w(.002),w(.01))
    let numDots = 120
    let xPos = rnd(-w(.5),w(.5))
    let yPos = rnd(-h(.5),horizon)
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
  shuffleArray(star_dots)
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

function cqtrRefls(buff,style,time) {
  buff.push()
  buff.blendMode(HARD_LIGHT)
  let horizMult = map(horizon,-h(.2),h(.32),1.2,.5)
  let numPoints = floor(map(horizon,-h(.8),h(.8),20000,10000)*horizMult)
  let delay = 250
  if (style === 'neat') {
    numPoints = floor(map(horizon,-h(.8),h(.8),60000,30000)*horizMult);
    delay = 500;
  }else if (style === 'dev') {
    numPoints = floor(map(horizon,-h(.8),h(.8),20000,10000)*horizMult)
    delay = 100
  }
  //console.log(numPoints)
  //if (horizon = -h(.2)) {hTransfer = }
  let hTrans;
  if (horizon == -h(.2)) {hTrans = h(.5)}
  if (horizon == 0) {hTrans = h(.5)}
  if (horizon == h(.32)) {hTrans = h(.8)}
  if (frameCount > delay && frameCount < delay + floor(numPoints/100)) {
    let numToDraw = 400;
    if (style === 'dev'){numToDraw = 90}
    for (let i = 0 ; i < numToDraw; i++) {
      let xPos = rnd(-w(.5),w(.5))
      let yPosGet = rnd(-h(.5),horizon)
      let yPos = map(yPosGet,horizon,-h(.5),horizon,hTrans)
      let col = color(get(xPos + width/2, yPosGet + height/2))
      /*console.log(col)
      buff.fill(col)
      buff.noStroke()
      buff.ellipse(xPos,yPosGet,w(.01))
      buff.ellipse(xPos,yPos,w(.01))*/
      let reflAlpha_mult = map(yPos,horizon,h(.5),1,.1)
      let reflAlpha = rnd(165) * reflAlpha_mult
      if (style === 'dev') {reflAlpha = rnd(125) * reflAlpha_mult}
      col.setAlpha(reflAlpha)
      let size = map(yPos,horizon,h(.5),w(.002),w(.03))
      if (style === 'dev') {
        let xOff = map(yPos,horizon,h(.5),w(.05),w(.3))
        let strW_mult = map(yPos,horizon,h(.5),1,2)
        if (i % 2) {
          pstr4(buff, xPos + rnd(-size,size)+rnd(-xOff,xOff), yPos, xPos+rnd(-xOff,xOff), yPos, w(.006) * strW_mult, w(.002) * strW_mult, 1, col, 15, HARD_LIGHT,'refl')
        }else{
          pstr4(buff, xPos+rnd(-xOff,xOff),yPos,xPos + rnd(-size,size)+rnd(-xOff,xOff),yPos, w(.006) * strW_mult, w(.002) * strW_mult, 1, col, 15, HARD_LIGHT,'refl')
        }
      }else if (style === 'orig') {
        buff.noStroke()
        buff.fill(col)
        let xOff = map(yPos,horizon,h(.5),w(.001),w(.1))
        let size = map(yPos,horizon,h(.5),w(.002),w(.007)) * rnd(.3,2)
        let sizeY = map(yPos,horizon,h(.5),w(.002),w(.01)) * rnd(.3,2)
        //buff.blendMode(HARD_LIGHT)
        buff.ellipse(xPos+rnd(-xOff,xOff),yPos,size,sizeY)
        //buff.line(xPos,yPos,xPos + rnd(-size,size),yPos)
      }else if (style === 'neat') {
        buff.noStroke()
        buff.fill(col)
        let size = map(yPos,horizon,h(.5),w(.002),w(.007))
        let sizeY = map(yPos,horizon,h(.5),w(.002),w(.01))
        buff.ellipse(xPos,yPos,size)
      }
    }
  }
  buff.pop()
}

function newRefls(buff,style,time) {
  buff.push()
  let num;
  let delay;
  let hMult = map(horizon,-h(.2),h(.32),1.2,.5);
  let hTrans;
  if (horizon == -h(.2)) {hTrans = h(.5)}
  if (horizon == 0) {hTrans = h(.5)}
  if (horizon == h(.32)) {hTrans = h(.8)}
  if (style === 'neat') {num = floor(200000*hMult), delay = 300, numToDraw = 2000}
  if (style === 'dev') {num = floor(16000*hMult), delay = 150, numToDraw = 200}
  if (style === 'orig') {num = floor(120000*hMult), delay = 500, numToDraw = 600}
  let i = frameCount
  if (i > delay && i < delay+(num/numToDraw)) {
    for (let j = i; j < i + numToDraw; j++) {
      let xPos = rnd(-w(.475),w(.475))
      let yPosGet = rnd(-h(.475),horizon)
      let yPos = map(yPosGet,horizon,-h(.475),horizon,hTrans)
      let col = color(get(xPos + width/2, yPosGet + height/2))
      let reflAlpha_mult = map(yPos,horizon,h(.5),1,.1)
      let baseAlpha;
      if (time === 'day') {baseAlpha=150}else if(time === 'twilight') {baseAlpha=180}else if(time === 'night') {baseAlpha=210}
      let reflAlpha = rnd(baseAlpha) * reflAlpha_mult
      col.setAlpha(reflAlpha)
      if (style === 'neat') {
        buff.noStroke()
        buff.fill(col)
        let size = map(yPos,horizon,h(.5),w(.004),w(.002))
        buff.ellipse(xPos,yPos,size)
      }else if (style === 'dev') {
        let xOff = map(yPos,horizon,h(.5),w(.01),w(.2))
        let strW_mult = map(yPos,horizon,h(.5),.7,1.6)
        let size = map(yPos,horizon,h(.5),w(.002),w(.03))
        if (i % 2) {
          pstr4(buff, xPos + rnd(-size,size)+rnd(-xOff,xOff), yPos, xPos+rnd(-xOff,xOff), yPos, w(.006) * strW_mult, w(.002) * strW_mult, 1, col, 15, HARD_LIGHT,'refl')
        }else{
          pstr4(buff, xPos+rnd(-xOff,xOff),yPos,xPos + rnd(-size,size)+rnd(-xOff,xOff),yPos, w(.006) * strW_mult, w(.002) * strW_mult, 1, col, 15, HARD_LIGHT,'refl')
        }
      }else if (style === 'orig') {
        buff.noStroke()
        buff.fill(col)
        let xOff = map(yPos,horizon,h(.5),w(.001),w(.1))
        let size = map(yPos,horizon,h(.5),w(.002),w(.007)) * rnd(.3,2)
        let sizeY = map(yPos,horizon,h(.5),w(.002),w(.01)) * rnd(.3,2)
        buff.ellipse(xPos+rnd(-xOff,xOff),yPos,size,sizeY)
      }
    }
    if (i === delay+(num/numToDraw)-1) {
      console.log(millis())
    }
  }
  buff.pop()
}

function arrayRefls(horizon,style) {
  let hTrans;
  if (horizon == -h(.2)) {hTrans = h(.5)}
  if (horizon == 0) {hTrans = h(.5)}
  if (horizon == h(.32)) {hTrans = h(.8)}
  if (frameCount == 500) {
    loadPixels()
    let d = pixelDensity()
    console.log(pixelDensity())
    let topHalf = 4 * floor((width*d)*((horizon+h(.5))*d));
    console.log(topHalf)
    console.log(pixels.length)
    let min_inc = 5;
    let max_inc = 12;
    if (style === 'orig' || style === 'dev'){
      min_inc = 120;
      max_inc = 250;
    }
    for (let i = 0; i < topHalf; i += floor(rnd(min_inc,max_inc))) {
      let x = rnd(-w(.5),w(.5));
      let yGet = rnd(-h(.5),horizon)
      let y = map(yGet,horizon,-h(.5),horizon,hTrans)
      let col = color(get(x+width/2,yGet+height/2))
      if (red(col) !== 0 && green(col) !== 0 && blue(col) !== 0) {
        reflsArray.push({x,y,col})
      }
    }
    console.log(reflsArray)
    console.log(reflsArray.length)
  }
}

function drawRefls() {
  push()
  p3.blendMode(BLEND)
  if (frameCount > 500) {
    let numDots = floor(reflsArray.length/250);
    //let size = w(.002)
    let i = (frameCount-500)*250
    //console.log(i)
    if (i < reflsArray.length - numDots) {
    //for (let i = 0; i < reflsArray.length; i += numDots -1 ) {
      for (let j = i; j < i + numDots; j++) {
        let x = reflsArray[j].x
        let y = reflsArray[j].y
        let col = reflsArray[j].col
        let reflAlpha_mult = map(y,horizon,h(.5),1,.3)
        let reflAlpha = rnd(165) * reflAlpha_mult
        col.setAlpha(reflAlpha)
        //console.log(j,col)
        /*
        p3.noStroke()
        p3.fill(col)
        p3.ellipse(x,y,size)*/
        if (style === 'dev') {
          p3.stroke(col)
          let size = map(yPos,horizon,h(.5),w(.002),w(.03))
          let strW_mult = map(y,horizon,h(.5),1,3)
          p3.strokeWeight(rnd(w(.001),w(.003))) * strW_mult
          p3.line(x,y,x + rnd(-size,size),y)
        }else if (style === 'orig') {
          p3.noStroke()
          p3.fill(col)
          let xOff = map(y,horizon,h(.5),w(.001),w(.03))
          let sizeOrig = map(y,horizon,h(.5),w(.002),w(.007)) * rnd(.3,2)
          let sizeY = map(y,horizon,h(.5),w(.002),w(.01)) * rnd(.3,2)
          p3.ellipse(x+rnd(-xOff,xOff),y,sizeOrig,sizeY)
        }else if (style === 'neat') {
          p3.noStroke()
          p3.fill(col)
          //size = w(.004)
          //let size = map(y,horizon,h(.5),w(.002),w(.007))
          let size = map(yPos,horizon,h(.5),w(.003),w(.005))
          p3.ellipse(x,y,size)
        }
      }
    }
  }
  pop()
}

function devSky(buff,style,time,pal,bMode) {
  buff.push()
  let numLines_h = 50
  let numLines_v = 150
  let numRects = 500
  let sections = makeSections(3,-w(.5),w(.5),.8,1.2)
  if (time === 'day') {a = 125, aL = 125}
  if (time === 'twilight') {a = 35, aL = 65}
  if (time === 'night') {a = 25, aL = 15}
  for (let i = 0; i < numRects; i++) {
    rectMode(CENTER)
    let x = rnd(-w(.55),w(.55))
    let y = rnd(-h(.55),horizon)
    let maxS = dist(0,-h(.5),0,horizon)
    let xS = rnd(maxS/5)
    let yS = rnd(maxS/5)
    fillCol = color(chCol(pal.sky))
    if (time === 'twilight') {
      let adjA = map(y,horizon,-h(.5),45,10) + rnd(-10,10)
      fillCol.setAlpha(adjA)
    }else if (time === 'night') {
      let adjA = map(y,horizon,-h(.5),10,0) + rnd(-5,5)
      fillCol.setAlpha(adjA)
    }else{
      fillCol.setAlpha(a)
    }
    buff.fill(fillCol)
    buff.noStroke()
    let sqBlend;
    if (time === 'day'){sqBlend = HARD_LIGHT}else if(time === 'twilight'){sqBlend = SOFT_LIGHT}else if(time === 'night'){sqBlend = OVERLAY}
    //buff.blendMode(HARD_LIGHT)
    buff.blendMode(sqBlend)
    buff.rect(x,y,xS,yS)
    if (style === 'orig') {
      let tl = createVector(x-xS/2,y-yS/2)
      let tr = createVector(x+xS/2,y-yS/2)
      let bl = createVector(x-xS/2,y+yS/2)
      let br = createVector(x+xS/2,y+yS/2)
      if (i % 25) {
        let newPt = p5.Vector.lerp(tl,bl,rnd(1,30))
        let accCol = chCol(pal.suns)
        let strW = rnd(w(.002),w(.01))
        blobStr(buff,tl.x,tl.y,newPt.x,newPt.y,strW*10, accCol[0],accCol[1],accCol[2],85)
      }else if (i % 35) {
        let newPt = p5.Vector.lerp(br,bl,rnd(1,30))
        let accCol = chCol(pal.suns)
        let strW = rnd(w(.002),w(.01))
        blobStr(buff,br.x,br.y,newPt.x,newPt.y,strW*10, accCol[0],accCol[1],accCol[2],85)
      }else if (i % 45) {
        let newPt = p5.Vector.lerp(tr,bl,rnd(1,30))
        let accCol = chCol(pal.suns)
        let strW = rnd(w(.002),w(.01))
        blobStr(buff,br.x,br.y,newPt.x,newPt.y,strW*10, accCol[0],accCol[1],accCol[2],85)
      }
    }
  }
  for (let j = 0; j < sections.length-1; j++) {
    for (let i = 0; i < numLines_h; i++) {
      let x1options = [sections[j][0],sections[j][1]]
      let x1 = x1options[floor(rnd()*x1options.length)]
      let xLength = rnd(width)
      if (x1 = sections[j][0]) {x2 = x1 + xLength}
      if (x1 = sections[j][1]) {x2 = x1 - xLength}
      //let x1 = rnd(sections[j][0],sections[j][1])
      //let x2 = rnd(sections[j][0],sections[j][1])
      let lL = dist(x1,0,x2,0)
      let lH = lL/20
      let y = rnd(-h(.5),horizon)
      let strW = rnd(w(.002),w(.006))
      //let strCol = color(chCol(pal.sky))
      let strCol = chCol(pal.sky)
      let cD = 0;
      if (time === 'twilight') {cD = 15}
      if (time === 'night') {cD = 30}
      //strCol.setAlpha(a)
      //dotStr(buff,x1,y,x2,y+(rnd(-lH,lH)),strW,strW/3,col,bMode)
      if (style === 'dev') {
        pstr4(buff,x1,y,x2,y+(rnd(-lH,lH)),strW,strW/3,1,[strCol[0]-cD,strCol[1]-cD,strCol[2]-cD,aL],120,bMode)
      }else if (style === 'neat') {
        dotBlobStr(buff, x1,y,x2,y+(rnd(-lH,lH)), strW, strCol[0]-cD, strCol[1]-cD, strCol[2]-cD, aL, 'none')
      }else if (style === 'orig') {
        blobStr(buff,x1,y,x2,y+(rnd(-lH,lH)),strW*20, strCol[0]-cD,strCol[1]-cD,strCol[2]-cD,aL)
      }
    }
  }
  for (let i = 0; i < numLines_v; i++) {
    let y1 = rnd(-h(.55),horizon)
    //let y2 = rnd(-h(.55),horizon)
    let y2 = horizon
    let lL = dist(0,y1,0,y2)
    let lW = lL/20
    let x = rnd(-w(.5),w(.5))
    let strW = rnd(w(.002),w(.015))
    //let dotStrW = rnd(w(.002),w(.01))
    let strCol = color(chCol(pal.sky))
    strCol.setAlpha(30)
    let cD = 0;
    if (time === 'twilight') {cD = 30}
    if (time === 'night') {cD = 60}
    //strCol.setAlpha(a)
    //dotStr(buff,x,y1,x+(rnd(-lW,lW)),y2,dotStrW,dotStrW,col,bMode)
    //pstr4(buff,x,y1,x+(rnd(-lW,lW)),y2,strW,strW/3,1,[strCol[0]-cD,strCol[1]-cD,strCol[2]-cD,aL],120,bMode)
    if (style === 'dev') {
      pstr4(buff,x,y1,x+(rnd(-lW,lW)),y2,strW,strW/3,1,[red(strCol)-cD,green(strCol)-cD,blue(strCol)-cD,alpha(strCol)],120,bMode)
    }else if (style === 'neat') {
      dotBlobStr(buff, x,y1,x+(rnd(-lW,lW)),y2, strW, red(strCol)-cD,green(strCol)-cD,blue(strCol)-cD,alpha(strCol), 'none')
    }else if (style === 'orig') {
      blobStr(buff,x,y1,x+(rnd(-lW,lW)),y2,strW*20, red(strCol)-cD,green(strCol)-cD,blue(strCol)-cD,alpha(strCol))
    }
  }
  buff.pop()
}

function stripedBg(buff,horizon,pal,style) {
  let numSections = 10
  let sections = makeSections(numSections,-w(.55),w(.55),.8,1.5)
  for (let i = 0; i < numSections; i++) {
    x1 = sections[i][0]
    x2 = sections[i][1]
    let numLines = floor(map(x2-x1,0,w(1),0,2500)*rnd(.5,1.5))
    let yT = -h(.5);
    let yB = horizon;
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
        dotBlobStr(buff, x,yT,x,yB, w(.005), red(col), green(col), blue(col), alpha(col), 'none')
      }else if (style === 'orig') {
        blobStr(buff, x,yT,x,yB, w(.05), red(col), green(col), blue(col), alpha(col))
      }
    }
  }
}

function crissCrossSky(buff,horizon,pal,style,num,bMode,time) {
  let numWedges = num;
  //let skySegmentHeight = dist(0,horizon,0,-h(.5));
  let skySegmentHeight = horizon+h(.5)
  stripedBg(buff,horizon,pal,style);
  for (let i = 0; i < numWedges; i++) {
    //let xB = -w(.5)
    let y = rnd(-h(.5),horizon)
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
        nCol.setAlpha(rnd(7,21))
      }else if (time === 'night') {
        nCol = color(red(col)-50, green(col)-50, blue(col)-50, alpha(col))
        nCol.setAlpha(rnd(3,9))
      }
      /*}else if (time === 'twilight') {
        col.setAlpha(rnd(7,21))
      }else if (time === 'night') {
        col.setAlpha(rnd(3,9))
      }*/
    }
    let orientation = rnd()
    wedge_H(buff,style,pal,y,yS,xLength,nCol,orientation,bMode)
  }
  let numSecs = 7;
  for (let i = 0; i < numSecs; i++) {
    let x = rnd(-w(.5),w(.5))
    let xW = rnd(w(.003),w(.01))
    //let numL = map(xW,0,width,0,1000)
    numL = 20
    x1 = x - xW/2
    x2 = x + xW/2
    let col = color(chCol(pal.sky))
    col.setAlpha(rnd(10,30))
    for (let j = 0; j < numL; j++) {
      xPos = map(j,0,numL,x1,x2)
      pstr4(buff,xPos,-h(.5),xPos,horizon,w(.005),w(.003),1,col,300,SOFT_LIGHT)
    }
  }
}

//////////////////////////////////////////////////////////
/////////////////// assembly funcs ///////////////////////

function sanGm(buff, hrz, numSecs, pal, style, time, bMode, type) {
  buff.push()
  buff.blendMode(bMode)
  sections = bldSections(numSecs,-w(.5),w(.5),.8,1.2)
  let houseTypes = [sanGmHouse1]
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
      let yOffset = dist(0,horizon,0,-h(.5))/8 * rnd(.7)
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
      let yOffset = dist(0,horizon,0,-h(.5))/8 * rnd(.7)
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
    //rectMode(CENTER)
    let numBlocks = 60
    let maxHeight = map(horizon,-h(.2),h(.32),h(.05),h(.15))
    for (let i = 0; i < numBlocks; i++) {
      buff.blendMode(BURN)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(horizon,horizon-h(.05))
      let xS = rnd(w(.05))
      //let yS = rnd(h(.15))
      let yS = rnd(-maxHeight)
      buff.noStroke()
      let rectCol = color(chCol(pal.bld))
      let rectAlpha = rnd(75,175)
      rectCol.setAlpha(rectAlpha)
      buff.fill(rectCol)
      buff.rect(xPos,yPos,xS,yS)
    }
    buff.pop()
  }
  if (style === 'dev') {
    let numWedges = 20;
    for (let i = 0; i < numWedges; i++) {
      let x = rnd(-w(.5),w(.5))
      console.log(x)
      let yB = rnd(horizon,hrz)
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
  let houseTypes = [sanGmHouse1,building,skyScraper] //sanGmHouse1,building,
  let dirs = ['l','r']
  let sections = bldSections(numSecs+1,-w(.52),w(.55),.7,1.2)
  let minWidth = width/numSecs/2.5
  let maxWidth = width/numSecs/.5
  console.log(sections,minWidth,maxWidth)
  for (let i = 0; i < sections.length; i++) {
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    let xM = (x1+x2)/2
    let xW = x2 - x1
    //let maxH = map(hrz,-h(.4),h(.4),)
    //let hH = rnd
    let hMult = map(dist(xM,0,0,0),0,w(.5),1.2,.6)
    let hH = xW * rnd(2,3.3) * hMult
    //console.log(xW,hH)
    dir = dirs[floor(rnd()*dirs.length)]
    houseType = houseTypes[floor(rnd()*houseTypes.length)]
    /*let type = 'smooth'
    let typeChoose = rnd()
    if (typeChoose < .5) {
      type = 'metro'
    }*/
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
    let yPosMax = map(horizon,-h(.2),h(.32),h(.03),h(.1))
    for (let i = 0; i < numBlocks; i++) {
      blds2.blendMode(SOFT_LIGHT)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(horizon,horizon-yPosMax)
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
  let houseTypes = [cqtrHouse,sanGmHouse1] // sanGmHouse1
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
    let ratio = hH/xW
    //console.log(xW, hH, ratio.toFixed(2), minWidth, maxWidth)
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
  /*if (style === 'orig') {
    buff.push()
    rectMode(CENTER)
    let numBlocks = 90
    for (let i = 0; i < numBlocks; i++) {
      buff.blendMode(BURN)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(hrz,hrz-h(.1))
      let xS = rnd(w(.05))
      let yS = rnd(h(.1))
      let xDist = dist(xPos,hrz,xMid,hrz)
      let yOff = map(xDist,0,w(.7),h(.001),h(.06))*rnd(.1,1.8)
      buff.noStroke()
      let rectCol = chCol(pal.bld)
      buff.fill(rectCol)
      buff.rect(xPos,yPos-yOff,xS,yS)
    }
    buff.pop()
  }*/
  if (style === 'orig') {
    blds3.push()
    //rectMode(CENTER)
    let numBlocks = 30
    let maxHeight = map(horizon,-h(.2),h(.32),h(.05),h(.15))
    for (let i = 0; i < numBlocks; i++) {
      blds3.blendMode(SOFT_LIGHT)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(horizon,horizon-h(.05))
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
      console.log(x)
      let yB = rnd(horizon,hrz)
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

  if (type === 'basic') {
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
      frameSection(buff,pal,style,time,1,1,-h(.5),-h(.475),baseCol,'h','b')
      frameSection(buff,pal,style,time,1,1,h(.475),h(.5),baseCol,'h','b')
      frameSection(buff,pal,style,time,1,1,-h(.5),-h(.475),baseCol,'v','b')
      frameSection(buff,pal,style,time,1,1,h(.475),h(.5),baseCol,'v','b')
    }else{
      //let col = chCol(pal.sky)
      let numLines = 12;
      let frameAlpha = 165;
      let bMode = HARD_LIGHT
      for (let i = 0; i < numLines; i++) {
        let lW = map(i,0,numLines,w(.1),w(.05))
        let y = map(i,0,numLines,-h(.5),-h(.475))
        if (style === 'orig') {
          blobStr(buff, -w(.5), y, w(.5), y, lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, -w(.5), y, w(.5), y, w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
      for (let i = 0; i < numLines; i++) {
        let y = map(i,0,numLines,h(.475),h(.5))
        let lW = map(i,0,numLines,w(.05),w(.1))
        if (style === 'orig') {
          blobStr(buff, -w(.5), y, w(.5), y, lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, -w(.5), y, w(.5), y, w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
      for (let i = 0; i < numLines; i++) {
        let x = map(i,0,numLines,-w(.5),-w(.475))
        let lW = map(i,0,numLines,w(.1),w(.05))
        if (style === 'orig') {
          blobStr(buff, x, -h(.5), x, h(.5), lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, x, -h(.5), x, h(.5), w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
      for (let i = 0; i < numLines; i++) {
        let x = map(i,0,numLines,w(.475),w(.5))
        let lW = map(i,0,numLines,w(.05),w(.1))
        if (style === 'orig') {
          blobStr(buff, x, -h(.5), x, h(.5), lW, baseCol[0], baseCol[1], baseCol[2], frameAlpha, 'none', 'frame_long')
        }else{
          pstr4(buff, x, -h(.5), x, h(.5), w(.008), w(.003), 1, baseCol, frameAlpha, bMode)
        }
      }
    }
  }

  if (type === 'quilted') {
    frameSection(buff,pal,style,time,5,8,-h(.5),-h(.475),pal.bld,'h','q')
    frameSection(buff,pal,style,time,5,8,h(.475),h(.5),pal.bld,'h','q')
    frameSection(buff,pal,style,time,5,8,-h(.5),-h(.475),pal.bld,'v','q')
    frameSection(buff,pal,style,time,5,8,h(.475),h(.5),pal.bld,'v','q')
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
    console.log(numLines)
    for (let j = 0; j < numLines; j++) {
      let x = map(j,0,numLines,x1,x2)
      if (dir === 'h') {
        if (style === 'neat') {
          dotBlobStr(buff, x, a, x, b, w(.005), sCol[0], sCol[1], sCol[2], frameAlpha, 'none')
        }else if (style === 'orig') {
          blobStr(buff, x, a, x, b, lW, sCol[0], sCol[1], sCol[2], frameAlpha)
        }else if (style === 'dev') {
          pstr4(buff, x, a, x, b, w(.005), w(.002), 1, sCol, 90, bMode)
        }
      }else if (dir === 'v') {
        if (style === 'neat') {
          dotBlobStr(buff, a, x, b, x, w(.005), sCol[0], sCol[1], sCol[2], frameAlpha, 'none')
        }else if (style === 'orig') {
          blobStr(buff, a, x, b, x, lW, sCol[0], sCol[1], sCol[2], frameAlpha)
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

function renderSanGm(pal, horizon, sky, style, time, sunmoon) {

  let hStep = map(horizon,-h(.4),h(.5),h(.02),h(.07))

  //sky(skyBuff, style, time, horizon, pal, 'moon')
  //sky(skyBuff, style, time, horizon, pal, 'moon')

  let numSecs;
  if (horizon == -h(.2)) {numSecs = 15}
  if (horizon == 0) {numSecs = 11}
  if (horizon == h(.32)) {numSecs = 8}

  //floor(map(horizon,-h(.4),h(.4),17,7))

  sanGm(blds, horizon-hStep*2.5, numSecs, pal, style, time, BLEND, 'towers')
  sanGm(blds2, horizon-hStep*2, numSecs, pal, style, time, BLEND, 'sanGm')
  sanGm(blds2, horizon-hStep, numSecs, pal, style, time, BLEND, 'sanGm')
  sanGm(blds3, horizon, numSecs, pal, style, time, BLEND, 'sanGm')

  sanGmTerr(p2, style, horizon, pal, style, time) // SHOULD PROBABLY BE P3

  /*if (style === 'orig') {
    let skyType = rnd()
    if (skyType < .5) {
      devSky(skyBuff,style,time,pal,SOFT_LIGHT)
      devSky(skyBuff,style,time,pal,OVERLAY)
    }else if (skyType < .8) {
      quilting(skyBuff, style, time, horizon, pal, 'overlay')
      quilting(skyBuff, style, time, horizon, pal, 'overlay')
    }else{
      crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
    }
  }else if (style === 'neat') {
    let skyType = rnd()
    if (skyType < .5) {
      devSky(skyBuff,style,time,pal,SOFT_LIGHT)
      devSky(skyBuff,style,time,pal,OVERLAY)
    }else if (skyType < .8) {
      quilting(skyBuff, style, time, horizon, pal, 'overlay')
      quilting(skyBuff, style, time, horizon, pal, 'overlay')
    }else{
      crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
    }
  }else if (style === 'dev') {
    if (time === 'day') {
      let skyType = rnd()
      if (skyType < .5) {
        devSky(skyBuff,style,time,pal,SOFT_LIGHT)
        devSky(skyBuff,style,time,pal,OVERLAY)
      }else if (skyType < .8) {
        quilting(skyBuff, style, time, horizon, pal, 'overlay')
        quilting(skyBuff, style, time, horizon, pal, 'overlay')
      }else{
        crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
      }
    }else if (time === 'twilight') {
      let skyType = rnd()
      if (skyType < .5) {
        devSky(skyBuff,style,time,pal,SOFT_LIGHT)
        devSky(skyBuff,style,time,pal,SOFT_LIGHT)
      }else if (skyType < .8) {
        quilting(skyBuff, style, time, horizon, pal, 'overlay')
        quilting(skyBuff, style, time, horizon, pal, 'overlay')
      }else{
        crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
      }
    }else if (time === 'night') {
      let skyType = rnd()
      if (skyType < .5) {
        devSky(skyBuff,style,time,pal,SOFT_LIGHT)
        devSky(skyBuff,style,time,pal,SOFT_LIGHT)
      }else if (skyType < .8) {
        quilting(skyBuff, style, time, horizon, pal, 'overlay')
        quilting(skyBuff, style, time, horizon, pal, 'overlay')
      }else{
        crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
      }
    }
  }*/

  if (sky === 'open') {
    let bMode2 = OVERLAY
    if (style === 'dev' && time !== 'day') {bMode2 = SOFT_LIGHT}
    devSky(skyBuff,style,time,pal,SOFT_LIGHT)
    devSky(skyBuff,style,time,pal,bMode2)
  }else if (sky === 'quilted') {
    quilting(skyBuff, style, time, horizon, pal, 'overlay')
    quilting(skyBuff, style, time, horizon, pal, 'overlay')
  }else if (sky === 'soaring') {
    crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
  }

  if (time !== 'day') {
    twilightSkyOverlay(style, horizon, pal)
  }

  function chSunMoon(time) {
    const sunMoonV = map(decPairs[6],0,255,0,1);
    if (time === 'night') {
      if (sunMoonV < .35) {
        chSM = 'none'
      }else if(sunMoonV < .7) {
        chSM = 'moon'
      }else if (sunMoonV < .88) {
        chSM = 'crescent'
      }else if (sunMoonV < .99) {
        chSM = 'pink moon'
      }else{
        chSM = 'eclipse'
      }
    }else if (time === 'twilight') {
      if (sunMoonV < .3) {
        chSM = 'none'
      }else if(sunMoonV < .6) {
        chSM = 'moon'
      }else if (sunMoonV < .74) {
        chSM = 'crescent'
      }else if (sunMoonV < .81) {
        chSM = 'pink moon'
      }else if (sunMoonV < .86) {
        chSM = 'sun and moon'
      }else if (sunMoonV < .9) {
        chSM = 'sun and crescent'
      }else if (sunMoonV < .93) {
        chSM = 'sun and pink moon'
      }else if (sunMoonV < .95) {
        chSM = 'red sun and moon' 
      }else if (sunMoonV < .97) {
        chSM = 'red sun and crescent'
      }else if (sunMoonV < .99) {
        chSM = 'red sun pink moon'
      }else{
        chSM = 'eclipse'
      }
    }else{
      if (sunMoonV < .44) {
        chSM = 'none'
      }else if(sunMoonV < .88) {
        chSM = 'sun'
      }else if (sunMoonV < .93) {
        chSM = 'sun and moon'
      }else if (sunMoonV < .98) {
        chSM = 'red sun'
      }else{
        chSM = 'red sun and moon'
      }
    }
    return chSM;
  }

  if (sunMoon === 'none') {

  }else if (sunMoon === 'moon') {
    moon(style, horizon, pal)
  }else if (sunMoon === 'crescent') {
    crescent(style, horizon, pal)
  }else if (sunMoon === 'pink moon') {
    moon(style,horizon,pal,'pinkMoon')
  }else if (sunMoon === 'eclipse') {
    eclipse(style, horizon, pal)
  }else if (sunMoon === 'sun and moon') {
    sun(style,horizon,pal)
    moon(style, horizon, pal)
  }else if (sunMoon === 'sun and crescent') {
    sun(style,horizon,pal)
    crescent(style, horizon, pal)
  }else if (sunMoon === 'sun and pink moon') {
    sun(style,horizon,pal)
    moon(style, horizon, pal,'pinkMoon')
  }else if (sunMoon === 'red sun and moon') {
    sun(style,horizon,pal,'redSun')
    moon(style, horizon, pal)
  }

  if (time === 'night') {
    let stars = rnd()
    if (stars < .5) {
      starryNight(style, horizon, pal)
    }
    let moonType = rnd()
    if (moonType < .2) {
      crescent(style, horizon, pal)
    }else if (moonType < .4) {
      moon(style, horizon, pal)
    }else if (moonType < .6) {
      eclipse(style, horizon, pal)
    }else if (moonType < .8) {
      moon(style,horizon,pal,'pinkMoon')
    }
  }else if (time === 'twilight') {
    let stars = rnd()
    if (stars < .25) {
      starryNight(style, horizon, pal)
    }
    let moonType = rnd()
    if (moonType < .15) {
      crescent(style, horizon, pal)
    }else if (moonType < .3) {
      moon(style, horizon, pal)
    }else if (moonType < .45) {
      eclipse(style, horizon, pal)
    }else if (moonType < .6) {
      moon(style,horizon,pal,'pinkMoon')
    }else if (moonType < .75) {
      sun(style,horizon,pal)
      moon(style, horizon, pal)
    }else if (moonType < .9) {
      sun(style,horizon,pal)
      crescent(style, horizon, pal)
    }else{
      solarEclipse(style,horizon,pal)
    }
  }else{
    let sunChance = rnd()
    console.log(sunChance)
    console.log('sun rnd val: ' + sunChance)
    if (sunChance < .5) {
      sun(style,horizon,pal)
    }
  }
}

function renderCqtr(pal, horizon, sky, style, time, sunmoon) {

  let hStep = map(horizon,-h(.4),h(.5),h(.01),h(.04))
  let xMid = rnd(-w(.15),w(.15))

  if (sky === 'open') {
    let bMode2 = OVERLAY
    if (style === 'dev' && time !== 'day') {bMode2 = SOFT_LIGHT}
    devSky(skyBuff,style,time,pal,SOFT_LIGHT)
    devSky(skyBuff,style,time,pal,bMode2)
  }else if (sky === 'quilted') {
    quilting(skyBuff, style, time, horizon, pal, 'overlay')
    quilting(skyBuff, style, time, horizon, pal, 'overlay')
  }else if (sky === 'soaring') {
    crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
  }

  if (time !== 'day') {
    twilightSkyOverlay(style, horizon, pal)
  }

  console.log('rnd calls: ' + callCount)

  let numSecs;
  if (horizon == -h(.2)) {numSecs = 24}
  if (horizon == 0) {numSecs = 18}
  if (horizon == h(.32)) {numSecs = 12}

  //floor(map(horizon,-h(.4),h(.4),30,10))

  cqtr(blds, horizon-hStep*3, numSecs, pal, style, time, BLEND, xMid)
  cqtr(blds2, horizon-hStep*2, numSecs, pal, style, time, BLEND, xMid)
  cqtr(blds2, horizon-hStep, numSecs, pal, style, time, BLEND, xMid)
  cqtr(blds3, horizon, numSecs, pal, style, time, BLEND, xMid)

  console.log('rnd calls: ' + callCount)

  quilting_water(p1, style, time, horizon, pal)
  quilting_water(p1, style, time, horizon, pal)

  console.log('rnd calls: ' + callCount)

  cqtrTerr(p3, style, horizon, pal, time, xMid) 
  cqtrTerr(p3, style, horizon, pal, time, xMid) 

  console.log('rnd calls: ' + callCount)

  if (time === 'night') {
    let stars = rnd()
    if (stars < .5) {
      starryNight(style, horizon, pal)
    }
    let moonType = rnd()
    if (moonType < .2) {
      crescent(style, horizon, pal)
    }else if (moonType < .4) {
      moon(style, horizon, pal)
    }else if (moonType < .6) {
      eclipse(style, horizon, pal)
    }else if (moonType < .8) {
      moon(style,horizon,pal,'pinkMoon')
    }
  }else if (time === 'twilight') {
    let stars = rnd()
    if (stars < .25) {
      starryNight(style, horizon, pal)
    }
    let moonType = rnd()
    if (moonType < .15) {
      crescent(style, horizon, pal)
    }else if (moonType < .3) {
      moon(style, horizon, pal)
    }else if (moonType < .45) {
      eclipse(style, horizon, pal)
    }else if (moonType < .6) {
      moon(style,horizon,pal,'pinkMoon')
    }else if (moonType < .75) {
      sun(style,horizon,pal)
      moon(style, horizon, pal)
    }else if (moonType < .9) {
      sun(style,horizon,pal)
      crescent(style, horizon, pal)
    }else{
      solarEclipse(style,horizon,pal)
    }
  }else{
    let sunChance = rnd()
    console.log(sunChance)
    console.log('sun rnd val: ' + sunChance)
    if (sunChance < .5) {
      sun(style,horizon,pal)
    }
  }

  //let boatDir = 'r'
  let hasBoats = rnd()
  if (hasBoats < .5) {
    let numBoats = floor(rnd(1,5))
    for (let i = 0; i < numBoats; i++) {
      let boatDirs = ['r','l']
      let boatDir = boatDirs[floor(rnd()*boatDirs.length)]
      cqtrBoat(p4,horizon,pal,style,boatDir)
    }
  }

  console.log('rnd calls: ' + callCount)

}

function renderMetro(pal, horizon, sky, style, time, sunmoon) {
  let hStep = map(horizon,-h(.4),h(.5),h(.005),h(.02))

  let numSecs;
  if (horizon == -h(.2)) {numSecs = 16}
  if (horizon == 0) {numSecs = 12}
  if (horizon == h(.32)) {numSecs = 8}

  metropolis(blds, horizon-hStep, floor(map(horizon,-h(.4),h(.4),18,6)), pal, style, time, BLEND)
  metropolis(blds2, horizon, floor(map(horizon,-h(.4),h(.4),18,6)), pal, style, time, BLEND)

  console.log('rnd calls: ' + callCount)

  quilting_water(p1, style, time, horizon, pal)
  console.log('rnd calls: ' + callCount)
  quilting_water(p1, style, time, horizon, pal)

  console.log('rnd calls: ' + callCount)

  if (sky === 'open') {
    let bMode2 = OVERLAY
    if (style === 'dev' && time !== 'day') {bMode2 = SOFT_LIGHT}
    devSky(skyBuff,style,time,pal,SOFT_LIGHT)
    devSky(skyBuff,style,time,pal,bMode2)
  }else if (sky === 'quilted') {
    quilting(skyBuff, style, time, horizon, pal, 'overlay')
    quilting(skyBuff, style, time, horizon, pal, 'overlay')
  }else if (sky === 'soaring') {
    crissCrossSky(skyBuff,horizon,pal,style,30,HARD_LIGHT,time)
  }

  console.log('rnd calls: ' + callCount)

  if (time !== 'day') {
    twilightSkyOverlay(style, horizon, pal)
  }

  console.log('rnd calls: ' + callCount)

  if (time === 'night') {
    let stars = rnd()
    if (stars < .5) {
      starryNight(style, horizon, pal)
    }
    let moonType = rnd()
    if (moonType < .2) {
      crescent(style, horizon, pal)
    }else if (moonType < .4) {
      moon(style, horizon, pal)
    }else if (moonType < .6) {
      eclipse(style, horizon, pal)
    }else if (moonType < .8) {
      moon(style,horizon,pal,'pinkMoon')
    }
  }else if (time === 'twilight') {
    let stars = rnd()
    if (stars < .25) {
      starryNight(style, horizon, pal)
    }
    let moonType = rnd()
    if (moonType < .15) {
      crescent(style, horizon, pal)
    }else if (moonType < .3) {
      moon(style, horizon, pal)
    }else if (moonType < .45) {
      eclipse(style, horizon, pal)
    }else if (moonType < .6) {
      moon(style,horizon,pal,'pinkMoon')
    }else if (moonType < .75) {
      sun(style,horizon,pal)
      moon(style, horizon, pal)
    }else if (moonType < .9) {
      sun(style,horizon,pal)
      crescent(style, horizon, pal)
    }else{
      solarEclipse(style,horizon,pal)
    }
  }else{
    let sunChance = rnd()
    console.log(sunChance)
    console.log('sun rnd val: ' + sunChance)
    if (sunChance < .5) {
      sun(style,horizon,pal)
    }
  }

  let hasBoats = rnd()
  if (hasBoats < .5) {
    let numBoats = floor(rnd(1,5))
    for (let i = 0; i < numBoats; i++) {
      let boatDir = 'r'
      cqtrBoat(p4,horizon,pal,style,boatDir)
    }
  }

  console.log('rnd calls: ' + callCount)
}