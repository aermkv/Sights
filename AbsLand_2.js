//tokenData.hash = '0xa1e1ea513a91cfa1635bb705095c336d1e209c7cdbd410609995bd1294a1144d' //hash that juliana likes
//tokenData.hash = '0x3023056bdd2502a704ad6d2418d8856edf0e1aaf0a9786e2a76d087333f7a4e3
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

let rfd_pos = []
let refl_pos = []
let relfSky_pos = []

let horizon;

let palettes = {
  c1: [211,48,38],
  c2: [137,56,74],
  c3: [223,156,72],
  c4: [221,93,58],
  c5: [134,136,111],
  c6: [229,193,145]
}

let water = {
  c1: [22,33,62],
  c2: [15,52,96],
  c3: [83,52,131],
  c4: [233,69,96],
  c5: [0,43,91],
  c6: [43,72,101]
}

const randomPalette = function (palettes) {
  let keys = Object.keys(palettes);
  //const paletteName = keys[floor(map(decPairs[0],0,255,0,keys.length-0.001))];
  let paletteName = keys[floor(rnd()*keys.length)]
  return palettes[paletteName];
};

function setup() {
  noiseSeed(seed)
  const smD = windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(smD, smD);
  horizon = rnd(h(.25),h(.75))
  //splitBG()
  aboveHorizon()
  belowHorizon()
  cqtr_row2()
  rand_vL()
  randDotFills_H(0,30)
  randDotFills_V(0,30)
  randDotFills_V(30,60)
  randDotFills_H(30,60)
  randDotFills_V(60,90)
  randDotFills_H(60,90)
  randDotFills_V(90,120)
  randDotFills_H(180,210)
  //rowHouses()
  //rowHouses()
  cqtr_row3()
  randDotFills_V(120,150)
  randDotFills_V(150,180)
  randDotFills_V(180,210)
  if (frameCount = 50) {
    skyRefl_set()
  }
  if (frameCount = 100) {
    cqtr_townRefl_set(horizon) 
  }

  granulate(10)
}

function draw() {
  //translate(width/2,height/2)
  //vertBG()
  //texStr(0, -h(.5), 0, h(.5), w(.1), 212, 115, 190, 35)
  //ribbedLine(-w(.33), w(.47), -h(.23), -h(.05), w(.005), w(.01), 60)
  //basicHouse(0,0)
  //setLines()
  //bends()
  //rowHouses()
  //randomRect()
  //randDotFills()
  skyRefl_fill()
  cqtr_townRefl_fill()
  fillInDots()
  //noLoop()
}

function granulate(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
      const grainAmount = random(-amount/2, amount*2);
      pixels[i] = pixels[i] + grainAmount;
      pixels[i+1] = pixels[i+1] + grainAmount;
      pixels[i+2] = pixels[i+2] + grainAmount;
      // comment in, if you want to granulate the alpha value
      // pixels[i+3] = pixels[i+3] + grainAmount;
  }
  updatePixels();
}

function texStr(x1, y1, x2, y2, weight, r, g, b, alpha) {
  stroke(r, g, b, alpha)
  for (let i = 0; i < weight*5; i++){
    var theta = random(TWO_PI);
    var nx1 = x1 + 0.5*random(weight/2)*cos(theta);
    var ny1 = y1 + 0.35*random(weight/2)*sin(theta);
    var nx2 = x2 + 0.5*random(weight/2)*cos(theta);
    var ny2 = y2 + 0.35*random(weight/2)*sin(theta);
    strokeWeight(0.5);
    line(nx1, ny1, nx2, ny2)
  }
}

function oneLine(side) {
  x1 = side
  x2 = rnd(w(.1),w(.9))
  y1 = rnd(h(.1),h(.7))
  y2 = y1 + rnd(h(.05),h(.25))
  y3 = h(1)
  let redVal = rnd(255)
  let blueVal = rnd(255)
  if (side === 0) {
    for (let x = x1; x < x2; x += w(.01)) {
      let yIn = map(x,x1,x2,y1,y2)
      texStr(x, yIn, x, y3, w(.05), redVal, blueVal, 60, 10)
    }
  }
  if (side === width) {
    for (let x = x1; x > x2; x -= w(.01)) {
      let yIn = map(x,x1,x2,y1,y2)
      texStr(x, yIn, x, y3, w(.05), redVal, blueVal, 60, 10)
    }
  }
  texStr(x1, y1, x2, y2, w(.02), 120, 60, 60, 60)
  texStr(x2, y2, x2, y3, w(.02), 120, 60, 60, 35)
  texStr(x1, y1, x2, y2, w(.01), 60, 60, 60, 60)
  texStr(x2, y2, x2, y3, w(.01), 60, 60, 60, 60)
}

function setLines() {
  push()
  let sides = [0,width]
  let num = 15
  for (let i = 0; i < num; i++) {
    let side = sides[Math.floor(rnd()*sides.length)]
    oneLine(side)
  }
  pop()
}

function vertBG() {
  let sectionsWidths = [0]
  for (let i = 0; i < 12; i++) {
    let sectionWidth = rnd(w(.13),w(.3))
    sectionsWidths.push(sectionWidth)
  }
  let sections = []
  for (let i = 0; i < 10; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionsWidths[i];
    const end = begin + sectionsWidths[i+1]; // Or sectionsWidths[i]?
    sections.push([begin,end])
    //let begin = sectionsWidths[i];
    //let end = sectionsWidths[i+1];
    //sections.push([begin,end])
  }
  console.log(sectionsWidths)
  console.log(sections)
  for (let i = 0; i < sections.length; i++) {
    for (let x = sections[i][0]; x < sections[i][1]; x += w(.03)) {
      let r = rnd(155,255)
      let g = rnd(155,255)
      let b = rnd(155,255)
      texStr(x, 0, x, height, w(.3), r, g, b, 50)
    }
  }
}

function bend(dir,x1,x2,y1,y2,y3) {
  texStr(x1, y1, x1, y3, w(.02), 120, 60, 60, 60)
  texStr(x1, y1, x2, y2, w(.02), 120, 60, 60, 35)
  let r = rnd(55,255)
  let g = rnd(55,255)
  let b = rnd(55,255)
  let numLines = rnd(6,24)
  if (dir == 'right'){
    for (let i = 0; i < numLines; i++) {
      let x = x1 + w(.003)*i
      let y = map(x,x1,x2,y1,y2)
      texStr(x, y, x, y3, w(.02), r, g, b, 35)
    }
    for (let i = numLines; i < numLines*2; i++) {
      let x = x1 + w(.003)*i
      let y = map(x,x1,x2,y1,y2)
      texStr(x, y, x, y3, w(.02), r, g, b, 35)
    }
  }
  if (dir == 'left'){
    for (let i = 0; i < numLines; i ++) {
      let x = x1 - w(.003)*i
      let y = map(x,x1,x2,y1,y2)
      texStr(x, y, x, y3, w(.02), r, g, b, 35)
    }
  }
}

function bends() {
  let dirs = ['left','right']
  let gSq = []
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let dir = dirs[floor(rnd()*dirs.length)]
      let xMin = w(.2)*i + w(.02)
      let xMax = xMin + w(.2) - w(.02)
      let yMin = h(.2)*j + h(.02)
      let yMax = yMin + h(.2) - h(.02)
      gSq.push({dir,xMin,yMin,xMax,yMax})
    }
  }
  console.log(gSq)
  for (let i = 0; i < gSq.length; i++) {
    //let dir = dirs[floor(rnd()*dirs.length)]
    let x1 = rnd(gSq[i].xMin,gSq[i].xMax)
    if (gSq[i].dir === 'left') {x2 = x1 - rnd(w(.15),w(.35))}
    if (gSq[i].dir === 'right') {x2 = x1 + rnd(w(.15),w(.35))}
    let y1 = rnd(gSq[i].yMin,gSq[i].yMax)
    let y2 = y1 - rnd(h(.05),h(.15))
    let y3 = y2 + rnd (h(.25),h(.65))
    bend(gSq[i].dir,x1,x2,y1,y2,y3)
  }
}

function rowHouses() {
  let leftEnd = rnd(w(.35))
  let rightEnd = rnd(w(.65),w(1))
  console.log(leftEnd)
  console.log(rightEnd)
  let sectionWidths = [leftEnd]
  let numSecs = 10
  for (let i = 0; i < numSecs; i++) {
    let division = rnd(w(.03),w(.15))
    sectionWidths.push(division)
  }
  sectionWidths.push(rightEnd)
  let sections = [];
  for (let i = 0; i < sectionWidths.length-1; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    const end = sectionWidths[i+2] ? begin + sectionWidths[i+1] : sectionWidths[i+1]// Or sectionsWidths[i]?
    sections.push([begin,end])
  }
  for (let i = 0; i < sections.length-2; i++) {
    let x1 = sections[i][0]
    let x2 = sections[i][1]
    let y1 = rnd(h(.35),h(.45))
    let y2 = y1 + rnd(-h(.03),h(.03))
    let houseHeight = rnd(h(.05),h(.2))
    let r = rnd(15,155)
    let g = rnd(15,155)
    let b = rnd(15,155)
    let p = randomPalette(palettes)
    for (let x = x1; x < x2; x+= w(.006)) {
      let yTop = map(x,x1,x2,y1,y2)
      let yBot = yTop + houseHeight
      texStr(x, yTop, x, yBot, w(.02), p[0], p[1], p[2], 35)
    }
  }
  console.log(sections)
}

function splitBG() {
  cs1 = [255,216,169]
  cs2 = [241,166,97]
  cs3 = [227,139,41]
  cs4 = [155,216,169]
  cs5 = [141,166,97]
  cs6 = [127,139,41]
  /*let x_left = 0
  let x_right = width
  let x_left_m = rnd(w(0.3),w(0.45))
  let x_right_m = rnd(w(0.55),w(0.8))
  let y_top = 0
  let y_b = height
  let y_l_split = rnd(w(0.3),w(0.7))
  let y_r_split = rnd(w(0.3),w(0.7))
  let y_diff = rnd(h(0.05),h(0.2))
  let n_l = 200
  for (let i = 0; i < n_l; i++){
    let x = map(i, 0, n_l, x_left, x_right)
    if(x < x_left_m){
      let y_mid = map(x,x_left,x_left_m,y_l_split-y_diff,y_l_split+y_diff)
      texStr(x, y_top, x, y_mid, w(0.023), cs1[0], cs1[1], cs1[2], 60)
      texStr(x, y_mid, x, y_b, w(0.023), cs2[0], cs2[1], cs2[2], 60)
    }else if(x >= x_left_m && x <= x_right_m){
      let y_mid = map(x,x_left_m,x_right_m,y_l_split+y_diff,y_r_split-y_diff)
      texStr(x, y_top, x, y_mid, w(0.023), cs3[0], cs3[1], cs3[2], 60)
      texStr(x, y_mid, x, y_b, w(0.023), cs1[0], cs1[1], cs1[2], 60)
    }else{
      let y_mid = map(x,x_right_m,x_right,y_r_split-y_diff,y_r_split+y_diff)
      texStr(x, y_top, x, y_mid, w(0.023), cs2[0], cs2[1], cs2[2], 60)
      texStr(x, y_mid, x, y_b, w(0.023), cs3[0], cs3[1], cs3[2], 60)
    }
  }*/
  let xDivs = rnd(3,12)
  let yDivs = rnd(3,12)
  let xPos = [0]
  let yPos = [0]
  for (let j = 0; j < yDivs; j++) {
    let yH = rnd(h(.05), height/yDivs*1.5)
    yPos.push(yH)
  }
  yPos.push(height)
  let yPosArray = []
  for (let j = 0; j < yPos.length-1; j++) {
    let y1 = yPosArray[j-1] ? yPosArray[j-1][1] : yPos[j]
    let y2 = yPos[j+2] ? y1 + yPos[j+1] : yPos[j+1]
    yPosArray.push([y1,y2])
    for (let i = 0; i < xDivs; i++) {
      let xW = rnd(w(.05), width/xDivs*1.5)
      xPos.push(xW)
    }
    xPos.push(width)
    let xPosArray = []
    for (let i = 0; i < xPos.length-1; i++) {
      let x1 = xPosArray[i-1] ? xPosArray[i-1][1] : xPos[i]
      let x2 = xPos[i+2] ? x1 + xPos[i+1] : xPos[i+1]
      xPosArray.push([x1,x2])
      let cols = [cs1,cs2,cs3,cs4,cs5,cs6]
      let col = cols[floor(rnd()*cols.length)]
      for (let x = x1; x < x2; x += w(.008)) {
        let y1 = yPosArray[j][0]
        let y2 = yPosArray[j][1]
        texStr(x, y1, x, y2, w(0.03), col[0], col[1], col[2], 60)
      }
    }
  }
  console.log(yPosArray)
  console.log(width)
}

function aboveHorizon() {

  cs1 = [252,226,219]
  cs2 = [255,143,177]
  cs3 = [178,112,162]
  cs4 = [122,68,149]
  cs5 = [171,201,255]
  cs6 = [255,222,222]

  let yPos = [0]
  let xPos = [0]
  //let horizon = rnd(h(.25),h(.75))
  let upSections = rnd(3,12);
  let upSections_H = rnd(6,24);
  let avgSH = horizon/upSections
  for (let j = 0; j < upSections; j++) {
    let sectionHeight = avgSH + rnd(-avgSH*.9,avgSH*.9);
    yPos.push(sectionHeight)
  }
  yPos.push(horizon)
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
      let cols = [cs1,cs2,cs3,cs4,cs5,cs6]
      let col = cols[floor(rnd()*cols.length)]
      for (let x = x1; x < x2; x += w(.008)) {
        let y1 = yPosArray[j][0]
        let y2 = yPosArray[j][1]
        texStr(x, y1, x, y2, w(0.03), col[0], col[1], col[2], 60)
      }
    }
  }
}

function belowHorizon() {

  cs1 = [255,216,169]
  cs2 = [241,166,97]
  cs3 = [227,139,41]
  cs4 = [155,216,169]
  cs5 = [141,166,97]
  cs6 = [127,139,41]

  let p = randomPalette(water)

  let yPos = [horizon]
  let xPos = [0]
  let upSections = rnd(3,12);
  let upSections_H = rnd(6,24);
  let avgSH = horizon/upSections
  for (let j = 0; j < upSections; j++) {
    let sectionHeight = avgSH + rnd(-avgSH*.9,avgSH*.9);
    yPos.push(sectionHeight)
  }
  yPos.push(height)
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
      //let cols = [cs1,cs2,cs3,cs4,cs5,cs6]
      //let col = cols[floor(rnd()*cols.length)]
      let p = randomPalette(water)
      for (let x = x1; x < x2; x += w(.008)) {
        let y1 = yPosArray[j][0]
        let y2 = yPosArray[j][1]
        texStr(x, y1, x, y2, w(0.03), p[0], p[1], p[2], 60)
      }
    }
  }


}

function randomRect() {
  let x = rnd(width)
  let y = rnd(height)
  rectMode(CENTER)
  let rectSize = w(.1)
  let c = get(x,y)
  stroke(15)
  fill(c)
  rect(x,y,rectSize,rectSize)
}

function vL(x, y, line_width, weight) {
  let hereCol = get(x,y)
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
    texStr(x1, y, x2, y, weight, r, g, b, alpha)
  }
}

function rand_vL() {
  let num_lines = 12;
  for (let i = 0; i < num_lines; i++) {
    let x = rnd(width)
    let y = rnd(height)
    let line_width = rnd(w(.005),w(.05))
    let weight = rnd(w(.007),w(.015))
    vL(x, y, line_width, weight)
  }
}

function fillDots(x1,y1,x2,y2,numDots,r,g,b) {
  for (let i = 0; i < numDots; i++) {
    let x = rnd(x1,x2)
    let y = rnd(y1,y2)
    let size = w(sqrt(x2-x1)*.0003)*rnd(.3,.8)
    let alpha = rnd(75)
    fill(r,g,b,alpha)
    noStroke()
    ellipse(x,y,size)
  }
}

function randDotFills_H(st,en) {
  let numRects = 12
  for (let i = 0; i < numRects; i++) {
    let x1 = rnd(width)
    let x2 = rnd(w(.1),w(.9))
    let y1 = rnd(height)
    let yH = rnd(h(.005),h(.05))
    let y2 = y1 + yH
    let numDots = rnd(50,250)
    let col = get((x1+x2)/2,(y1+y2)/2)
    let r = col[0]
    let g = col[1]
    let b = col[2]
    let start = rnd(st,en)
    //if (frameCount < 30) {
      //fillDots(x1,y1,x2,y2,numDots/10,r,g,b) 
    //}
    rfd_pos.push([x1,y1,x2,y2,numDots,r,g,b,start])
  }
}

function randDotFills_V(st,en) {
  let numRects = 18
  for (let i = 0; i < numRects; i++) {
    let x1 = rnd(width)
    let xW = rnd(w(.005),w(.05))
    let x2 = x1 + xW
    let y1 = rnd(height)
    let y2 = rnd(h(.1),h(.9))
    let numDots = rnd(300,1500)
    let col = get((x1+x2)/2,(y1+y2)/2)
    let r = col[0]
    let g = col[1]
    let b = col[2]
    let start = rnd(st,en)
    rfd_pos.push([x1,y1,x2,y2,numDots,r,g,b,start])
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
    if (frameCount > start && frameCount < start + 40){
      fillDots(x1,y1,x2,y2,numDots,r,g,b)
    }
  }
}

function cqtr_row1() {
  let topArray = [
    [[0,329.5],
    [72.9,348.3]],

    [[67.5,341.7],
    [140.4,336]],

    [[141.1,341.7],
    [172.3,336]],

    [[173,341.7],
    [204.2,336]],

    [[209.8,354],
    [241,360.5]],

    [[241,360.5],
    [300.2,360.5]],

    [[302.4,372.8],
    [361.6,383.9]],

    [[366.2,402.3],
    [425.4,403.5]],

    [[427.5,365.5],
    [452.7,358.1]],

    [[452,392.5],
    [477.2,385.1]],

    [[476.6,385.1],
    [488.3,385.1]],

    [[490.1,385.1],
    [520.9,376.5]],

    [[526.9,404.7],
    [557.7,402.3]],

    [[556.3,383.9],
    [587.1,383.9]],

    [[599.5,366.7],
    [636.2,366.7]],

    [[636.3,340.9],
    [645.8,340.9]],

    [[646.1,366.7],
    [668,366.7]],

    [[668.2,363],
    [715.4,354.4]],

    [[717.3,309],
    [764.5,316.4]],

    [[766.3,318.8],
    [781.8,316.4]],

    [[783.5,311.5],
    [798.9,309]],

    [[799.5,356.9],
    [894.2,343.4]],

    [[893.9,322.5],
    [917.3,318.8]],

    [[929.5,322.5],
    [952.8,329.9]],

    [[955.3,404.7],
    [1000,399.8]]
  ]
  let botArray = [
    [[0,636.2],
    [72.9,630.5]],

    [[67.5,624],
    [140.4,618.2]],

    [[141.1,617.8],
    [172.3,618.2]],

    [[173,614.1],
    [204.2,610.9]],

    [[209.8,603.1],
    [241,599.8]],

    [[241,599.8],
    [300.2,599.8]],

    [[302.4,617],
    [361.6,617]],

    [[366.2,604.7],
    [425.4,604.7]],

    [[427.5,604.7],
    [452.7,604.7]],

    [[452,564.2],
    [477.2,560.5]],

    [[476.6,563],
    [488.3,560.5]],

    [[490.1,526.2],
    [520.9,528.6]],

    [[526.9,526.2],
    [557.7,518.8]],

    [[556.3,515.2],
    [587.1,507.8]],

    [[599.5,512.7],
    [636.2,507.8]],

    [[636.3,523.7],
    [645.8,521.3]],

    [[646.1,496.7],
    [668,494.3]],

    [[668.2,496.7],
    [715.4,488.2]],

    [[717.3,505.3],
    [764.5,505.3]],

    [[766.3,498],
    [781.8,498]],

    [[783.5,475.9],
    [798.9,475.9]],

    [[799.5,451.3],
    [894.2,451.3]],

    [[893.9,496.7],
    [917.3,496.7]],

    [[929.5,450.1],
    [952.8,450.1]],

    [[955.3,442.8],
    [1000,442.8]]

  ]
  let den = 1000;
  let topCoords = [];
  let botCoords = [];
  for (let i = 0 , j = 0; i < topArray.length, j < botArray.length; i += 2, j += 2) {
    topArray[i].forEach(k => topCoords.push([w(k[0]/den),h(k[1]/den)]))
    botArray[j].forEach(l => botCoords.push([w(l[0]/den),h(l[1]/den)]))
  }
  console.log(topCoords)
  console.log(botCoords)
  for (let i = 0; i < topCoords.length; i++) {
    let x1 = topCoords[i][0]
    let x2 = topCoords[i+1] ? topCoords[i+1][0] : topCoords[i][0]
    let y1t = topCoords[i-1] ? topCoords[i-1][1] : topCoords[i][1]
    let y2t = topCoords[i][1]
    let y1b = botCoords[i-1] ? botCoords[i-1][1] : botCoords[i][1]
    let y2b = botCoords[i][1]
    let r = rnd(15,155)
    let g = rnd(15,155)
    let b = rnd(15,155)
    for (let x = x1; x < x2; x += w(.003)) {
      let y1 = map(x,x1,x2,y1t,y2t)
      let y2 = map(x,x1,x2,y1b,y2b)
      texStr(x, y1, x, y2, w(.01), r, g, b, 35)
    }
  }
}



function cqtr_row2() {
  push()
  translate(0,-h(.5))
  blendMode(HARD_LIGHT)
  let topArray = [
    [[0,329.5,72.9,348.3]],

    [[67.5,341.7,140.4,336]],

    [[141.1,341.7,172.3,336]],

    [[173,341.7,204.2,336]],

    [[209.8,354,241,360.5]],

    [[241,360.5,300.2,360.5]],

    [[302.4,372.8,361.6,383.9]],

    [[366.2,402.3,425.4,403.5]],

    [[427.5,365.5,452.7,358.1]],

    [[452,392.5,477.2,385.1]],

    [[476.6,385.1,488.3,385.1]],

    [[490.1,385.1,520.9,376.5]],

    [[526.9,404.7,557.7,402.3]],

    [[556.3,383.9,587.1,383.9]],

    [[599.5,366.7,636.2,366.7]],

    [[636.3,340.9,645.8,340.9]],

    [[646.1,366.7,668,366.7]],

    [[668.2,363,715.4,354.4]],

    [[717.3,309,764.5,316.4]],

    [[766.3,318.8,781.8,316.4]],

    [[783.5,311.5,798.9,309]],

    [[799.5,356.9,894.2,343.4]],

    [[893.9,322.5,917.3,318.8]],

    [[929.5,322.5,952.8,329.9]],

    [[955.3,404.7,1000,399.8]]
  ]
  let botArray = [
    [[0,636.2,72.9,630.5]],

    [[67.5,624,140.4,618.2]],

    [[141.1,617.8,172.3,618.2]],

    [[173,614.1,204.2,610.9]],

    [[209.8,603.1,241,599.8]],

    [[241,599.8,300.2,599.8]],

    [[302.4,617,361.6,617]],

    [[366.2,604.7,425.4,604.7]],

    [[427.5,604.7,452.7,604.7]],

    [[452,564.2,477.2,560.5]],

    [[476.6,563,488.3,560.5]],

    [[490.1,526.2,520.9,528.6]],

    [[526.9,526.2,557.7,518.8]],

    [[556.3,515.2,587.1,507.8]],

    [[599.5,512.7,636.2,507.8]],

    [[636.3,523.7,645.8,521.3]],

    [[646.1,496.7,668,494.3]],

    [[668.2,496.7,715.4,488.2]],

    [[717.3,505.3,764.5,505.3]],

    [[766.3,498,781.8,498]],

    [[783.5,475.9,798.9,475.9]],

    [[799.5,451.3,894.2,451.3]],

    [[893.9,496.7,917.3,496.7]],

    [[929.5,450.1,952.8,450.1]],

    [[955.3,442.8,1000,442.8]]

  ]
  let den = 1000;
  let topCoords = [];
  let botCoords = [];
  for (let i = 0 , j = 0; i < topArray.length, j < botArray.length; i ++, j ++) {
    topArray[i].forEach(k => topCoords.push([w(k[0]/den),h(k[1]/den)+horizon,w(k[2]/den),h(k[3]/den)+horizon]))
    botArray[j].forEach(l => botCoords.push([w(l[0]/den),h(l[1]/den)+horizon,w(l[2]/den),h(l[3]/den)+horizon]))
  }
  for (let i = 0; i < topCoords.length; i++) {
    let x1 = topCoords[i][0]
    let x2 = topCoords[i][2]
    let y1t = topCoords[i][1]    
    let y2t = topCoords[i][3]
    let y1b = botCoords[i][1]
    let y2b = botCoords[i][3]
    let r = rnd(125,255)
    let g = rnd(125,255)
    let b = rnd(125,255)
    let p = randomPalette(palettes)
    let weight = rnd(w(.006),w(.016))
    let windDiv = floor(rnd(2,4))
    let windDiffOffset = floor(rnd(3))
    for (let x = x1; x < x2; x += w(.003)) {
      let y1 = map(x,x1,x2,y1t,y2t)
      let y2 = map(x,x1,x2,y1b,y2b)
      texStr(x, y1, x, y2, weight, p[0], p[1], p[2], 110)
      /*if (((i+windDiffOffset)%windDiv)){
        let winX1 = x1 + .25*((x1+x2)/2)
        let winX2 = x1 + .35*((x1+x2)/2)
        let winY1 = y1 + .15*((y1+y2)/2)
        let winY2 = y1 + .25*((y1+y2)/2)
        for (let winX = winX1; winX < winX2; winX += w(.003)) {
          texStr(winX, winY1, winX, winY2, weight/2, r/3, g/3, b/3, 90)
        }
      }*/
    }
    let xExtOff = rnd(w(.01))
    if (i % 2) {
      texStr(x1-xExtOff, y1b, x2+xExtOff, y2b, weight, 10, 10, 10, 110)
    }
    if (i % 3) {
      texStr(x2, (y1t+y1b)/2, x2, (y1t+y1b)/2 + rnd(h(.15)), weight, 10, 10, 10, 110)
    }
  }
  pop()
}

function cqtr_row3() {
  push()
  blendMode(SOFT_LIGHT)
  translate(0,-h(.5))
  let topArray = [
    [[146.1,383.9,191.9,376.5]],
    [[195.2,383.9,218.1,380.2]],
    [[219.7,399.8,281.9,392.5]],
    [[284.6,399.8,331,409.6]],
    [[383.1,350.7,395.8,353.2]],
    [[440.8,412.1,464.6,412.1]],
    [[465.3,436.6,489.2,436.6]],
    [[499.7,445.2,520.9,445.2]],
    [[524.2,429.3,566.8,425.6]],
    [[585.6,355.6,606.9,352]],
    [[896,370.4,917.3,370.4]],
    [[957.3,379,978.6,376.5]],
    [[716.9,337.2,738.2,334.8]]
  ]
  let botArray = [
    [[146.1,531.1,191.9,528.6]],
    [[195.2,522.5,218.1,521.3]],
    [[219.7,522.5,281.9,517.6]],
    [[284.6,517.6,331,513.9]],
    [[383.1,515.2,395.8,513.9]],
    [[440.8,515.2,464.6,513.9]],
    [[465.3,542.1,489.2,539.7]],
    [[499.7,477.1,520.9,477.1]],
    [[524.2,477.1,566.8,477.1]],
    [[585.6,477.1,606.9,477.1]],
    [[896,451.3,917.3,451.3]],
    [[957.3,402.3,978.6,399.8]],
    [[716.9,479.6,738.2,479.6]]
  ]
  let den = 1000;
  let topCoords = [];
  let botCoords = [];
  for (let i = 0 , j = 0; i < topArray.length, j < botArray.length; i ++, j ++) {
    topArray[i].forEach(k => topCoords.push([w(k[0]/den),h(k[1]/den)+horizon,w(k[2]/den),h(k[3]/den)+horizon]))
    botArray[j].forEach(l => botCoords.push([w(l[0]/den),h(l[1]/den)+horizon,w(l[2]/den),h(l[3]/den)+horizon]))
  }
  for (let i = 0; i < topCoords.length; i++) {
    let x1 = topCoords[i][0]
    let x2 = topCoords[i][2]
    let y1t = topCoords[i][1]    
    let y2t = topCoords[i][3]
    let y1b = botCoords[i][1]
    let y2b = botCoords[i][3]
    let r = rnd(125,255)
    let g = rnd(125,255)
    let b = rnd(125,255)
    let p = randomPalette(palettes)
    let weight = rnd(w(.006),w(.016))
    let windDiv = floor(rnd(2,4))
    let windDiffOffset = floor(rnd(3))
    for (let x = x1; x < x2; x += w(.003)) {
      let y1 = map(x,x1,x2,y1t,y2t)
      let y2 = map(x,x1,x2,y1b,y2b)
      texStr(x, y1, x, y2, weight, p[0], p[1], p[2], 135)
      /*if (((i+windDiffOffset)%windDiv)){
        let winX1 = x1 + .25*((x1+x2)/2)
        let winX2 = x1 + .35*((x1+x2)/2)
        let winY1 = y1 + .15*((y1+y2)/2)
        let winY2 = y1 + .25*((y1+y2)/2)
        for (let winX = winX1; winX < winX2; winX += w(.003)) {
          texStr(winX, winY1, winX, winY2, weight/2, r/3, g/3, b/3, 90)
        }
      }*/
    }
    let xExtOff = rnd(w(.01))
    if (i % 3) {
      texStr(x1-xExtOff, y1b, x2+xExtOff, y2b, weight, 250, 250, 250, 110)
    }
    if (i % 5) {
      texStr(x2, (y1t+y1b)/2, x2, (y1t+y1b)/2 + rnd(h(.15)), weight, 250, 250, 250, 110)
    }
  }
  pop()
}

function cqtr_townRefl_set(horizon) {
  let numRefls = 50;
  for (let i = 0; i < numRefls; i++) {
    let getX = rnd(width)
    let getY = horizon + rnd(-h(.02),h(.08))
    let col = get(getX,getY)
    let x = getX
    let y = getY + rnd(h(.03),h(.15))
    let xW = rnd(w(.01),w(.025))
    let yH = rnd(h(.05),h(.25))
    let x1 = x - xW/2
    let x2 = x + xW/2
    let y2 = y + yH
    refl_pos.push([x1,y,x2,y2,200,col[0],col[1],col[2]])
  }
}

function cqtr_townRefl_fill() {
  for (let i = 0; i < refl_pos.length; i++) {
    if (frameCount > 100 + i*10 && frameCount <  100 + i*10 + 120){
      push()
      blendMode(MULTIPLY)
      fillDots(refl_pos[i][0],refl_pos[i][1],refl_pos[i][2],refl_pos[i][3],refl_pos[i][4],refl_pos[i][5],refl_pos[i][6],refl_pos[i][7])
      pop()
    }
  }
}

function skyRefl_set() {
  let numRefls = 50;
  for (let i = 0; i < numRefls; i++) {
    let getX = rnd(width)
    let getY = rnd(h(.2))
    let col = get(getX,getY)
    let xW = rnd(w(.01),w(.03))
    let yH = rnd(h(.05),h(.25)) 
    let x1 = getX - xW/2
    let x2 = getX + xW/2
    let y = rnd(h(.9),h(1))
    let y2 = y - yH
    relfSky_pos.push([x1,y,x2,y2,200,col[0],col[1],col[2]])
  }
}

function skyRefl_fill() {
  for (let i = 0; i < relfSky_pos.length; i++) {
    if (frameCount > 50 + i*10 && frameCount <  50 + i*10 + 120){
      push()
      blendMode(SCREEN)
      fillDots(relfSky_pos[i][0],relfSky_pos[i][1],relfSky_pos[i][2],relfSky_pos[i][3],relfSky_pos[i][4],relfSky_pos[i][5],relfSky_pos[i][6],relfSky_pos[i][7]);
      pop()
    }
  }
}