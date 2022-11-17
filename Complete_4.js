//tokenData.hash = '0x0b7bf0834d0faa15bc65a2baa045a146990335587ea023f1d154c9b15c19d52f'
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
    bld: {
      c1: [203,162,101],
      c2: [200,169,140],
      c3: [233,195,99],
      c4: [127,90,60]
    },
    drk: {
      c1: [10,10,10]
    },
    sky: {
      c1: [189,198,221],
      c2: [47,119,191],
      c3: [37,134,231],
      c4: [210,237,247]
    },
    wtr: {
      c1: [60,60,60]
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
    str: {
      c1: [11,12,31],
      c2: [200,124,55],
      c3: [149,126,131],
      c4: [73,45,66]
    },
    suns: {
      c1: [237,142,105],
      c2: [246,209,166],
      c3: [199,169,162]
    }
  },
  umbrian: {
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
      c1: [60,60,60]
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
    str: {
      c1: [88,51,69],
      c2: [170,122,115],
      c3: [182,104,16],
      c4: [159,138,82]
    },
    suns: {
      c1: [255,210,136],
      c2: [255,161,96],
      c3: [116,177,211]
    }
  },
  charcoal: {
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
    str: {
      c1: [30,30,30],
      c2: [5,5,5],
      c3: [225,225,225],
    }
  }
}

let p1;
let p2;
let blds;
let grid;

let gPts = [];

let rfd_pos = [];
let rfd_pos2 = [];
let dotsToFill = [];

let pointsToPaint = [];
let shuffled_pTp = [];

let twilight_dots = [];

let style;
let time;

//const skies = [linearSky,lumSky,quilt]


//////////////////////////////////////////////////////////
///////////////////// setup & draw ///////////////////////


function setup() {
  noiseSeed(seed)
  const smD = windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(smD, smD);

  grid = createGraphics(smD, smD)
  skyBuff = createGraphics(smD, smD)
  p1 = createGraphics(smD, smD)
  blds = createGraphics(smD, smD)
  p2 = createGraphics(smD, smD)

  //canvas.getContext("2d", { willReadFrequently: true })

  translate(width/2,height/2)
  skyBuff.translate(width/2,height/2)
  blds.translate(width/2,height/2)
  p1.translate(width/2,height/2)
  p2.translate(width/2,height/2)

  style = chStyle()
  console.log(style)
  //style = 'geom'

  time = chTime()
  //const time = 'night'

  const pal = chPal(newPals,style)
  console.log(pal)
  hrzOptions = [-h(.2),0,h(.32)]
  horizon = hrzOptions[floor(rnd()*hrzOptions.length)]

  setGrid(30,horizon,pal)
  drawGrid(time)

  //let chooseSky = skies[floor(rnd()*skies.length)]
  console.log(time)
  //console.log(`${chooseSky}`)

  renderSanGm(pal, horizon, quilt, style, time)
  drawTwilightSetup(skyBuff,twilight_dots,style)
  if (style === 'orig') {
    pushToPaint(p2,-w(.5),w(.5),-h(.5),h(.5),map(frameCount,0,400,w(.03),w(.0005)),0,w(.005),w(.015),HARD_LIGHT,15000)
    pushToPaint(p2,-w(.5),w(.5),-h(.5),h(.5),0,map(frameCount,0,400,w(.05),w(.001)),w(.005),w(.015),SOFT_LIGHT,15000)
  }
  console.log(millis())
  shuffled_pTp = shuffleArray(pointsToPaint)
  console.log(pointsToPaint.length)
  //renderAmst(pal, horizon, chooseSky)
  //renderNyc(pal, horizon, chooseSky)
  //renderCqtr(pal, horizon, chooseSky)

  //console.log(dotsToFill)

  //const renderOptions  = [renderSanGm,renderAmst,renderNyc,renderCqtr]
  //const renderResult = renderOptions[floor(rnd()*renderOptions.length)]
  //renderResult(pal, horizon, chooseSky, style)
  //fillOutDots(dotsToFill)
}

function draw() {
  image(grid, 0, 0)
  image(skyBuff, 0, 0)
  image(p1, 0, 0)
  image(p2, 0, 0)

  //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),map(frameCount,0,300,w(.03),w(.001)),0,w(.005),w(.015),BLEND)
  //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),0,map(frameCount,0,300,w(.03),w(.001)),w(.005),w(.015),BLEND)
  
  //fillInDots()
  //fillInDots2()
  //if (frameCount < 500) {
  //drawTwilight(skyBuff,twilight_dots,style)
  //}
  if (style === 'orig') {
    //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),map(frameCount,0,200,w(.015),w(.0005)),0,w(.005),w(.015),HARD_LIGHT,300)
    //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),0,map(frameCount,0,200,w(.03),w(.001)),w(.005),w(.015),BLEND,300)
  }
  fillInDots()
  oilPaint_fine_setup(p2,shuffled_pTp,400)
}


//////////////////////////////////////////////////////////
//////////////////// chooser funcs ///////////////////////

function chPal(obj,style) {
  let keys = Object.keys(obj);
  let palName = keys[floor(rnd()*(keys.length-1))]
  if (style === 'neat') {
    palName = keys[floor(rnd()*keys.length)]
  }
  return obj[palName];
}

function chCol(obj) {
  let keys = Object.keys(obj);
  let palName = keys[floor(rnd()*keys.length)]
  return obj[palName];
}

function chTime() {
  let times = ['day','night','twilight']
  let time = times[floor(rnd()*times.length)]
  return time
}

function chStyle() {
  let styles = ['neat','orig','geom']
  let style = styles[floor(rnd()*styles.length)]
  return style
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
      //col = chCol(pal.sky)
      col = rnd(155,255)
      if (y2 > horizon + h(.5) - dist(0,-h(.5),0,horizon)/7) {col = rnd(155,255)}
      if (y2 > horizon + h(.5)) {col = rnd(155,255)}
      gPts.push({x1,y1,x2,y2,col})
    }
  }
}

function drawGrid(time) {
  for (let i = 0; i < gPts.length; i++) {
    let x = gPts[i].x1
    let y = gPts[i].y1
    let size = width/(sqrt(gPts.length))
    //grid.fill(gPts[i].col)
    grid.noStroke()
    if (time === 'day') {
      grid.fill(255)
      //grid.stroke(rnd(30))
    }else if (time === 'twilight') {
      grid.fill(100)
      //grid.stroke(rnd(10))
    }else if (time === 'night') {
      grid.fill(0)
      grid.stroke(rnd(200))
    }
    //grid.noStroke()
    //grid.noFill()
    //grid.stroke(gPts[i].col)
    grid.strokeWeight(w(.0001))
    grid.rect(x,y,size,size)
  }
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
  for (let i = 0; i < sectionWidths.length; i++) {
    const begin = sections[i-1] ? sections[i-1][1] : sectionWidths[i];
    const end = sectionWidths[i+2] ? begin + sectionWidths[i+1] : sectionWidths[i+1]// Or sectionsWidths[i]?
    sections.push([begin,end])
  }
  return sections
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = floor(rnd() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

function dotLine(buff,x1,y1,x2,y2,thickness,weight,density,col) {
  buff.push()
  let dir = 'h'
  buff.fill(col)
  buff.noStroke() // use stroke for striped style
  let lerpVal = 0;
  let dotsVal = map(thickness,w(.0001),w(.1),1,300)
  let numDots = dotsVal*density
  if (y2-y1 > x2-x1) {dir = 'v'}
  if (dir === 'h') {
    for (let x = x1; x < x2; x += w(.001)) {
      //let numDots = map(thickness,w(.001),w(.01),5*density,30*density)
      for (let i = 0; i < numDots; i++) {
        let xPos = rnd(x1,x2)
        let yt = map(xPos,x1,x2,y1,y2)
        //lerpVal += 1/numDots
        //let yt = lerp(y1,y2,lerpVal)
        let yb = yt + thickness
        let yPos = rnd(yt,yb)
        buff.ellipse(xPos,yPos,w(.001)*rnd(weight))
        //dotsToFill.push([buff,xPos,yPos,w(.001)*rnd(weight),col])
      }
    }
  }
  if (dir === 'v') {
    for (let y = y1; y < y2; y += h(.001)) {
      //let numDots = map(thickness,w(.001),w(.01),5*density,30*density)
      for (let i = 0; i < numDots; i++) {
        let yPos = rnd(y1,y2)
        let xl = map(yPos,y1,y2,x1,x2)
        let xr = xl + thickness
        let xPos = rnd(xl,xr)
        buff.ellipse(xPos,yPos,w(.001)*rnd(weight))
        //dotsToFill.push([buff,xPos,yPos,w(.001)*rnd(weight),col])
      }
    }
  }
  buff.pop()
}

function blobStr(buff, x1, y1, x2, y2, weight, r, g, b, a, dir) {
  buff.noStroke()
  let adjAlpha = a
  //let dirs = ['up','down'] // add 'down'
  //dir = dirs[floor(rnd()*dirs.length)]
  for (let i = 0; i < weight*25; i++){
    let theta = rnd(TWO_PI);
    let nx1 = x1 + 0.3*rnd(weight/2)*cos(theta);
    let ny1 = y1 + 0.3*rnd(weight/2)*sin(theta);
    let nx2 = x2 + 0.3*rnd(weight/2)*cos(theta);
    let ny2 = y2 + 0.3*rnd(weight/2)*sin(theta);
    let lerpVal = rnd()
    let px1 = lerp(nx1,nx2, lerpVal)
    let py1 = lerp(ny1, ny2, lerpVal)
    let size = rnd(weight/4)
    if (dir === 'up') {adjAlpha = map(py1,ny1,ny2,a,a/3)}
    if (dir === 'down') {adjAlpha = map(py1,ny2,ny1,a,a/3)}
    //if (dir === 'none') {adjAlpha = a}
    buff.fill(r, g, b, adjAlpha)
    buff.ellipse(px1, py1, size)
    //rfd_pos2.push([px1,py1,r,g,b,a,buff,size])
  }
}

function subDivArea(buff,lt,rt,rb,lb,numDivs,col) {
  for (let i = 0; i < numDivs; i++) {
    let stepLerp = i/numDivs
    let stepLerp2 = (i+1)/numDivs
    let l1 = p5.Vector.lerp(lt,lb,stepLerp)
    let l2 = p5.Vector.lerp(lt,lb,stepLerp2)
    let r1 = p5.Vector.lerp(rt,rb,stepLerp)
    let r2 = p5.Vector.lerp(rt,rb,stepLerp2)
    /*let lxOffset = dist(lb.x,0,lt.x,0)/numDivs
    let lyOffset = dist(lb.y,0,lt.y,0)/numDivs
    let l1x = map(i, 0, numDivs, lt.x, lb.x - lxOffset)
    let l2x = map(i, 0, numDivs, lt.x + lxOffset, lb.x)
    let l1y = map(i, 0, numDivs, lt.y, lb.y - lyOffset)
    let l2y = map(i, 0, numDivs, lt.y + lyOffset, lb.y)
    let rxOffset = dist(rb.x,0,rt.x,0)/numDivs
    let ryOffset = dist(rb.y,0,rt.y,0)/numDivs
    let r1x = map(i, 0, numDivs, rt.x, rb.x - rxOffset)
    let r2x = map(i, 0, numDivs, rt.x + rxOffset, rb.x)
    let r1y = map(i, 0, numDivs, rt.y, rb.y - ryOffset)
    let r2y = map(i, 0, numDivs, rt.y + ryOffset, lb.y)
    let topLeft = createVector(l1x,l1y)
    let topRight = createVector(r1x,r1y)
    let botLeft = createVector(l2x,l2y)
    let botRight = createVector(r2x,r2y)*/
    let numLines = 10
    for (let j = 0; j < numLines; j++) {
      let lerpVal_L = rnd()
      let lerpVal_R = rnd()
      let v1 = p5.Vector.lerp(l1,l2,lerpVal_L)
      let v2 = p5.Vector.lerp(r1,r2,lerpVal_R)
      let nAlpha = rnd(65,200)
      let nCol = [col[0],col[1],col[2],nAlpha]
      pstr4(buff,v1.x,v1.y,v2.x,v2.y,w(.001),w(.0001),.3,nCol,1000)
    }
  }
}

function fillShape(buff,pal,lt,rt,rb,lb) {
  let baseCol = chCol(pal.veg)
  buff.noStroke()
  buff.fill(baseCol)
  buff.beginShape()
    buff.vertex(lt.x,lt.y)
    buff.vertex(rt.x,rt.y)
    buff.vertex(rb.x,rb.y)
    buff.vertex(lb.x,lb.y)
  buff.endShape(CLOSE)
}

function recSubDivArea(buff,lt,rt,rb,lb,pal,level) {
  let col = chCol(pal.veg)
  let dirs = ['h','v']
  splitDir = dirs[floor(rnd()*dirs.length)]
  let randLerp1 = rnd(.25,.75)
  //buff.stroke(255)
  if (level > 0) {
    level = level - 1
    if (splitDir = 'v') {
      let midPoint1 = p5.Vector.lerp(lt,lb,randLerp1)
      let midPoint2 = p5.Vector.lerp(rt,rb,randLerp1)
      let numLines = map(dist(lt.x,lt.y,midPoint2.x,midPoint2.y),0,w(.5),1,15)
      for (let i = 0; i < numLines; i++) {
        let stepLerp = i/numLines
        let v1 = p5.Vector.lerp(lt,midPoint1,stepLerp)
        let v2 = p5.Vector.lerp(rt,midPoint2,stepLerp)
        //pstr4(buff,v1.x,v1.y,v2.x,v2.y,w(.005),w(.001),.3,col,50)
        buff.fill([col[0]-5*level,col[1]-5*level,col[2]-5*level,30])
        buff.beginShape()
          buff.vertex(lt.x,lt.y)
          buff.vertex(rt.x,rt.y)
          buff.vertex(v2.x,v2.y)
          buff.vertex(v1.x,v1.y)
        buff.endShape(CLOSE)
        //pstr4(buff,v1.x,v1.y,v2.x,v2.y,w(.01),w(.001),.6,col,50)
      }
      if (dist(midPoint2.x,midPoint2.y,lt.x,lt.y) > w(.3)){
        recSubDivArea(buff,midPoint1,midPoint2,rb,lb,pal)
      }
    }
    if (splitDir = 'h') {
      let midPoint1 = p5.Vector.lerp(lt,rt,randLerp1)
      let midPoint2 = p5.Vector.lerp(lb,rb,randLerp1)
      let numLines = map(dist(lt.x,lt.y,midPoint2.x,midPoint2.y),0,w(.5),1,15)
      for (let i = 0; i < numLines; i++) {
        let stepLerp = i/numLines
        let v1 = p5.Vector.lerp(lt,midPoint1,stepLerp)
        let v2 = p5.Vector.lerp(lb,midPoint2,stepLerp)
        //pstr4(buff,v1.x,v1.y,v2.x,v2.y,w(.005),w(.001),.3,col,50)
        buff.fill([col[0]-5*level,col[1]-5*level,col[2]-5*level,30])
        buff.beginShape()
          buff.vertex(lt.x,lt.y)
          buff.vertex(lb.x,lb.y)
          buff.vertex(v2.x,v2.y)
          buff.vertex(v1.x,v1.y)
        buff.endShape(CLOSE)
        //pstr4(buff,v1.x,v1.y,v2.x,v2.y,w(.01),w(.001),.6,col,10)
      }
      if (dist(midPoint2.x,midPoint2.y,lt.x,lt.y) > w(.3)){
        recSubDivArea(buff,midPoint1,midPoint2,rt,rb,pal)
      }
    }
  }
}

function fillOutDots(sourceArray) {
  newDots = shuffleArray(sourceArray)
  //console.log(newDots) 
  if (frameCount < newDots.length/100) {
    let first = frameCount*100
    for (let i = newDots[first]; i < newDots[first+99]; i++) {
      let thisBuff = newDots[i][0]
      thisBuff.ellipse(newDots[i][1],newDots[i][2],newDots[i][3],newDots[i][4])
    }
  }
}

function pstr4(buff,x1,y1,x2,y2,thickness,weight,density,col,lenDiv,bMode) {
  let num = (thickness/w(.0005)) * density;
  let v1 = createVector(x1,y1)
  let v2 = createVector(x2,y2)
  let cv1 = p5.Vector.lerp(v1,v2,.3)
  let cv2 = p5.Vector.lerp(v1,v2,.7)
  let dir = 'h'
  if (y2-y1 > x2-x1) {dir = 'v'}
  
  let strLength = dist(x1,y1,x2,y2)
  let thisBlend = bMode ? bMode : BLEND
  buff.blendMode(thisBlend)
  
  xStep = 0
  yStep = 0
  
  buff.noFill();

  if (dir === 'h') {
    for (let i = thickness; i > 0; i -= thickness/num) {
    
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
        
      buff.bezier(  v1.x + xDiff,  v1.y + yStep,  cv1.x,  cv1.y + yStep + rnd(-yOffset,yOffset),  cv2.x,  cv2.y + yStep + rnd(-yOffset,yOffset),  v2.x - xDiff/3,  v2.y + yStep )
      
      yStep += thickness/num
    }
  }
  if (dir === 'v') {
    for (let i = thickness; i > 0; i -= thickness/num) {
    
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
        
      buff.bezier(  v1.x + xStep,  v1.y + yDiff,  cv1.x + xStep + rnd(-xOffset,xOffset),  cv1.y,  cv2.x + xStep + rnd(-xOffset,xOffset),  cv2.y,  v2.x + xStep,  v2.y - yDiff/3 )
      
      xStep += thickness/num
    }
  }
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
      xW = rnd(w(.002),w(.01))
      x2 = x1 + xW
      y1 = rnd(-h(.5),h(.5))
      y2 = rnd(-h(.45),h(.45))
    }
    if (dir === 'h'){
      x1 = rnd(-w(.5),w(.5))
      x2 = rnd(-w(.45),w(.45))
      y1 = rnd(-h(.5),h(.5))
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

function randDotFills_bld(buff,sBuff,numRects,xMin,xMax,yMin,yMax,dir,st,en) {
  buff.push()
  //let numRects = 15
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

function areaLinear(buff,numSecs,tl,tr,br,bl,pal,minSpl,maxSpl,type) { // DESCRIBE type/STYLE
  buff.push()
  buff.blendMode(SOFT_LIGHT)
  if (type === 'nightsky'){buff.blendMode(BURN)}
  let lerpCounter = 0
  for (let i = 0; i < numSecs; i++) {
    let col = chCol(pal)
    let addLerp = rnd((1/numSecs)*2)
    let lerpVal1 = lerpCounter
    let lerpVal2 = lerpCounter + addLerp
    let tvl = p5.Vector.lerp(tl,bl,lerpVal1)
    let tvr = p5.Vector.lerp(tr,br,lerpVal1)
    let bvl = p5.Vector.lerp(tl,bl,lerpVal2)
    let bvr = p5.Vector.lerp(tr,br,lerpVal2)
    //let t_split = rnd(.3,.7)
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
        buff.stroke(nCol)
        buff.strokeWeight(w(.001))
        buff.line(x,y1,x2,y2)
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
        //console.log(nCol)
        buff.stroke(nCol)
        buff.strokeWeight(w(.001))
        buff.line(x,y1,x2,y2)
        //xoff += .1
      }
    }
    lerpCounter += addLerp
  }
  buff.pop()
}

function skyStrokes(buff,pal,horizon,bMode,style) {
  buff.push()
  buff.translate(width/2,height/2)
  buff.blendMode(bMode)
  let num_lines = 20
  if (style === 'geom') {num_lines = 60}
  let x_break_L = rnd(0,w(.25))
  let x_break_R = rnd(-w(.25),0)
  for (let i = 0; i < num_lines; i++) {
    let dir = rnd()
    if (dir < .5) {
      y1 = rnd(-h(.5),horizon)
      y2 = y1 + rnd(-h(.01),h(.01))
      x1 = rnd(-w(.5),w(.5))
      x2 = rnd(-w(.5),w(.5))
    }else{
      y1 = rnd(-h(.5),horizon)
      y2 = rnd(-h(.5),horizon)
      x1 = rnd(-w(.5),w(.5))
      x2 = x1 + rnd(-w(.01),w(.01))
    }
    strCol = chCol(pal.sky)
    strThick = rnd(w(.002),w(.03))
    if (style === 'orig') {
      pstr4(buff,x1,-h(.5),x2,horizon,strThick,1,strCol,rnd(5,25))
      pstr4(buff,-w(.5),y1,x_break_L,y2,strThick,1,strCol,rnd(5,25))
      pstr4(buff,x_break_R,y1,w(.5),y2,strThick,1,strCol,rnd(5,25))
    }else if (style === 'geom') {
      let r = strCol[0]
      let g = strCol[1]
      let b = strCol[2]
      let start = rnd(30)
      let numDots = rnd(100,500)
      rfd_pos.push([x1,y1,x2,y2,numDots,r,g,b,start,buff])
    }
  }
  buff.pop()
}

function oilPaint_fine(buff,xMin,xMax,yMin,yMax,maxL,maxH,minTh,maxTh,blendType,fC) {
  buff.push()
  buff.translate(-width/2,-height/2)
  if (frameCount < fC) {
    let numDaubs = floor(map(dist(0,yMin,0,yMax),h(.15),h(.75),5,20));
    for (let i = 0; i < numDaubs; i++) {
      let xD = rnd(maxL)
      let yD = rnd(maxH)
      let x1 = rnd(xMin,xMax) + width/2
      let y1 = rnd(yMin,yMax) + height/2
      let x2 = x1 + rnd(-xD,xD)
      let y2 = y1 + rnd(-yD,yD)
      strokeLength = rnd(w(.01))
      strokeColor = color(get(x1,y1))
      strokeThickness = rnd(minTh,maxTh) // was rnd(w(.002),w(.015))
      //if (y1 > horizon+height/2) {strokeThickness = rnd(w(.002),w(.015)) * map(dist(0,horizon+height/2,0,y1),0,h(.65),1,8)}
      if (xD > yD){dir = 'h'}
      if (yD > xD){dir = 'v'}
      buff.blendMode(blendType)
      strokeColor.setAlpha(rnd(100))
      pstr4(buff,x1,y1,x2,y2,strokeThickness,strokeThickness/2,.5,strokeColor,20)
      //pointsToPaint.push(buff,x1,y1,x2,y2,strokeThickness,strokeThickness/2,.5,strokeColor,20)
      //blobStr_live(buff, x1, y1, x2, y2, strokeLength*3.5, strokeColor[0], strokeColor[1], strokeColor[2], 15, frameCount)
    }
  }
  buff.pop()
}

function pushToPaint(buff, xMin, xMax, yMin, yMax, maxLength, maxHeight, minTh, maxTh, bMode, number) {
  for (let i = 0; i < number; i++) {
    let xD = rnd(maxLength)
    let yD = rnd(maxHeight)
    let x1 = rnd(xMin,xMax) + width/2
    let y1 = rnd(yMin,yMax) + height/2
    let x2 = x1 + rnd(-xD,xD)
    let y2 = y1 + rnd(-yD,yD)
    strokeLength = rnd(w(.01))
    strokeColor = color(get(x1,y1))
    strokeThickness = rnd(minTh,maxTh)
    weight = strokeThickness/2
    density = .5
    lenDiv = 20
    strokeColor.setAlpha(rnd(100))
    pointsToPaint.push({buff,x1,y1,x2,y2,strokeThickness,weight,density,strokeColor,bMode,lenDiv})
  }
}

function oilPaint_fine_setup(buff,arr,max_fC) {
  buff.push()
  //buff.translate(-width/2,-height/2)
  let averageNum = floor(arr.length/max_fC)
  //for (let i = 0; i < max_fC; i++) {
  if (frameCount < max_fC) {
    //let numToDraw = floor(map(i,0,max_fC,averageNum*5,averageNum/5))
    for (let j = frameCount * averageNum; j < frameCount * averageNum + averageNum; j++) {
      let thisCol = color(get(arr[j].x1, arr[j].y1))
      thisCol.setAlpha(rnd(65,165))
      //blendMode(arr[j].bMode)
      //pstr4(arr[j].buff,arr[j].x1 - width/2,arr[j].y1 - height/2, arr[j].x2 - w(.5),arr[j].y2 - h(.5),arr[j].strokeThickness,arr[j].weight,arr[j].density,thisCol,arr[j].lenDiv,arr[j].bMode)
      buff.noStroke()
      buff.fill(thisCol)
      buff.ellipse(arr[j].x1 - width/2, arr[j].y1 - height/2 - arr[j].strokeThickness/3, arr[j].strokeThickness/3)
      buff.ellipse(arr[j].x1 - width/2, arr[j].y1 - height/2, arr[j].strokeThickness/2)
      buff.ellipse(arr[j].x1 - width/2, arr[j].y1 - height/2 + arr[j].strokeThickness/3, arr[j].strokeThickness/3)
      buff.ellipse(arr[j].x1 - width/2, arr[j].y1 - height/2 + arr[j].strokeThickness/2, arr[j].strokeThickness/4)
    }
  //}
  }
  buff.pop()
}



//////////////////////////////////////////////////////////
/////////////////////// sky types ////////////////////////

function quilt(buff, style, time, horizon, pal, features) {
  buff.push()
  buff.blendMode(BLEND)
  let yPos = [-h(.5)]
  let xPos = [-w(.5)]
  let types = []
  let type;
  let areaLinearType = 'none'
  if (style === 'geom') {
    let stl = createVector(-w(.5),-h(.5))
    let str = createVector(w(.5),-h(.5))
    let sbr = createVector(w(.5),horizon)
    let sbl = createVector(-w(.5),horizon)
    let numSecs = rnd(7,15)
    if (time === 'night'){areaLinearType = 'nightsky'}

    areaLinear(buff,numSecs,stl,str,sbr,sbl,pal.sky,-2,2,areaLinearType)
  }
  let upSections = rnd(8,16);
  let upSections_H = rnd(6,24);
  let avgSH = dist(0,-h(.5),0,horizon)/upSections
  for (let j = 0; j < upSections; j++) {
    let sectionHeight = rnd(avgSH*.75,avgSH*2)
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
      let sectionWidth = rnd(avgSW*.75,avgSW*2);
      xPos.push(sectionWidth)
    }
    xPos.push(w(.5))
    let xPosArray = []
    for (let i = 0; i < xPos.length-1; i++) {
      let x1 = xPosArray[i-1] ? xPosArray[i-1][1] : xPos[i]
      let x2 = xPos[i+2] ? x1 + xPos[i+1] : xPos[i+1]
      xPosArray.push([x1,x2]);
      let col = chCol(pal.sky)
      nCol = [col[0]/2,col[1]/2,col[2]/2]
      selectCol = col
      if (time === 'night') {selectCol = nCol}
      //let stDirs = ['up','down','none']
      //let stDir  = stDirs[floor(rnd()*stDirs.length)]
      let xStep = w(.008)
      if (style === 'neat') {xStep = w(.005)} // was w(.003)
      if (style === 'geom') {xStep = w(.002)}

      let xoff = 0

      for (let x = x1; x < x2; x += xStep) {
        let y1 = yPosArray[j][0]
        let y2 = yPosArray[j][1]
        if (y1 < horizon) {
          if (y2 > horizon) {
            y2 = horizon
          }
          if (style === 'neat') {
            dotLine(buff, x, y1, x, y2, w(.001), w(.001), .01, selectCol)
          }else if (style === 'orig') {
            origCol = color(col)
            if (time === 'night') {origCol.setAlpha(30)}
            if (time === 'twilight') {origCol.setAlpha(60)}
            //origCol.setAlpha(80)
            pstr4(buff, x, y1, x, y2, w(.005), w(.001), .5, [origCol[0]/2,origCol[1]/2,origCol[2]/2], rnd(10,50)) 
            pstr4(buff, x, y1, x, y2, w(.005), w(.001), .5, origCol, rnd(10,50)) 
          }/*else if (style === 'geom') {
            buff.push()
            //buff.blendMode(SOFT_LIGHT)
            geomCol = color(col)
            yOffset = noise(xoff) * h(.01)
            geomCol.setAlpha = 60 * noise(xoff)
            buff.line(x, y1 - yOffset, x, y2 + yOffset)
            buff.pop()
            xoff += .05
          }*/
        }
      }

      if (style === 'orig') {
        let projection = rnd()
        if (projection < .05) {
          pstr4(buff, x1, y1, x1, y1 + rnd(w(.25)), w(.005), w(.001), .8, col, rnd(10,50)) 
        }else if (projection < .1) {
          pstr4(buff, x2, y1, x2 + rnd(w(.25)), y1, w(.005), w(.001), .8, col, rnd(10,50)) 
        }else if (projection < .15) {
          pstr4(buff, x1, y2 - rnd(w(.25)), x1, y2 + rnd(w(.25)), w(.005), w(.001), .8, col, rnd(10,50)) 
        }else if (projection < .15) {
          pstr4(buff, x1 - rnd(w(.25)), y1, x1 + rnd(w(.25)), y1, w(.005), w(.001), .8, col, rnd(10,50)) 
        }
      }
      if (style === 'geom') {
        let tl = createVector(x1,y1)
        let tr = createVector(x2,y1)
        let br = createVector(x2,y2)
        let bl = createVector(x1,y2)
        let numSecs = rnd(3,10)
        areaLinear(buff,numSecs,tl,tr,br,bl,pal.sky,-2,2,areaLinearType)
      }
      
      /*else if (style === 'geom') {
        buff.push()
        buff.stroke(col)
        let strW = rnd(w(.002),w(.005))
        buff.strokeWeight(strW)
        let projection = rnd()
        if (projection < .2) {
          buff.line(x1, y1, x1, y1 + rnd(w(.25))) 
        }else if (projection < .4) {
          buff.line(x2, y1, x2 + rnd(w(.25)), y1) 
        }else if (projection < .6) {
          buff.line(x1, y2 - rnd(w(.25)), x1, y2 + rnd(w(.25))) 
        }else if (projection < .8) {
          buff.line(x1 - rnd(w(.25)), y1, x1 + rnd(w(.25)), y1) 
        }
        buff.pop()
      }*/
    } // ADD HORIZONTAL OPTION
  }
  buff.pop()
}

function twilightSkyOverlay(style, horizon, pal) {
  let numTwilightDots = 20000
  for (let i = 0; i < numTwilightDots; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = rnd(-h(.5),horizon)
    let h1 = horizon
    let h2 = horizon - rnd(w(.05),w(.2))
    let h3 = h2 - rnd(w(.05),w(.2))
    let yOffset = rnd(-w(.05),w(.05))
    if (y >= h2) {
      col1 = pal.suns.c1
      col2 = pal.suns.c2
      col = color(map(y,h1,h2,col1[0],col2[0]), map(y,h1,h2,col1[1],col2[1]), map(y,h1,h2,col1[2],col2[2]))
    }else{
      col1 = pal.suns.c2
      col2 = pal.suns.c3
      col = color(map(y,h2,h3,col1[0],col2[0]), map(y,h2,h3,col1[1],col2[1]), map(y,h2,h3,col1[2],col2[2]))
    }
    let dotAlpha = map(y,horizon,-h(.5),185,15)
    col.setAlpha(dotAlpha)
    yPos = y + yOffset
    let xS = rnd(w(.03))
    let yS = rnd(h(.03))
    twilight_dots.push({x,yPos,col,xS,yS})
  }
  console.log(twilight_dots)
  shuffleArray(twilight_dots)
  console.log(twilight_dots)
}

function drawTwilight(buff,ptsArray,style) {
  buff.push()
  //shuffleArray(ptsArray)
  //for (let i = 0; i < ptsArray.length/10; i++) {
  if (frameCount < ptsArray.length/50) { // /10 for geom
    for (let i = frameCount; i < ptsArray.length; i += ptsArray.length/50) {
      //buff.ellipse(ptsArray[i].x,ptsArray[i].yPos,w(.005))
      if (style === 'orig') {
        buff.noStroke()
        buff.fill(ptsArray[i].col)
        buff.blendMode(HARD_LIGHT)
        buff.rect(ptsArray[i].x,ptsArray[i].yPos,ptsArray[i].xS,ptsArray[i].yS)
      }else if (style === 'geom') {
        let xPos = ptsArray[i].x
        let yPos = ptsArray[i].y
        let xW = rnd(w(.1),w(.35))
        let yH = rnd(h(.003),h(.01))
        let xoff = 0
        for (let x = xPos - xW/2; x < x + xW/2; x += w(.001)) {
          let y1 = yPos - yH/2 - yH/5 * noise(xoff)
          let y2 = yPos + yH/2 - yH/5 * noise(xoff)
          let lineAlpha = 60*noise(xoff)
          let lineCol = ptsArray[i].col
          console.log(lineCol)
          if (x < xPos - xW/2.5){
            lineAlpha = 60*noise(xoff) * map(x,x-xW/2,x-xW/2.5,0,1)
          }else if (x < xPos + xW/2.5) {
            lineAlpha = 60*noise(xoff) * map(x,x+xW/2.5,x+xW/2,1,0)
          }
          lineCol.setAlpha(lineAlpha)
          buff.stroke(lineCol)
          buff.strokeWeight(w(.001))
          buff.line(x,y1,x,y2)
          xoff += .01
        }
      }
    }
  }
  buff.pop()
}

function drawTwilightSetup(buff,ptsArray,style) {
  buff.push()
  //shuffleArray(ptsArray)
  //for (let i = 0; i < ptsArray.length/10; i++) {
  //if (frameCount < ptsArray.length/50) { // /10 for geom
    for (let i = frameCount; i < ptsArray.length; i ++) {
      //buff.ellipse(ptsArray[i].x,ptsArray[i].yPos,w(.005))
      if (style === 'orig') {
        buff.noStroke()
        buff.fill(ptsArray[i].col)
        buff.blendMode(HARD_LIGHT)
        buff.rect(ptsArray[i].x,ptsArray[i].yPos,ptsArray[i].xS,ptsArray[i].yS)
      }else if (style === 'geom') {
        let xPos = ptsArray[i].x
        let yPos = ptsArray[i].y
        let xW = rnd(w(.1),w(.35))
        let yH = rnd(h(.003),h(.01))
        let xoff = 0
        for (let x = xPos - xW/2; x < x + xW/2; x += w(.001)) {
          let y1 = yPos - yH/2 - yH/5 * noise(xoff)
          let y2 = yPos + yH/2 - yH/5 * noise(xoff)
          let lineAlpha = 60*noise(xoff)
          let lineCol = ptsArray[i].col
          console.log(lineCol)
          if (x < xPos - xW/2.5){
            lineAlpha = 60*noise(xoff) * map(x,x-xW/2,x-xW/2.5,0,1)
          }else if (x < xPos + xW/2.5) {
            lineAlpha = 60*noise(xoff) * map(x,x+xW/2.5,x+xW/2,1,0)
          }
          lineCol.setAlpha(lineAlpha)
          buff.stroke(lineCol)
          buff.strokeWeight(w(.001))
          buff.line(x,y1,x,y2)
          xoff += .01
        }
      }
    }
  //}
  buff.pop()
}


//////////////////////////////////////////////////////////
/////////////////// trees & plants ///////////////////////

function cypress(buff,pal,xTr,y,xW,yH,style,time) {
  let top = y - yH
  let base = lerp(y,top,.15)
  let mid = lerp(y,top,.3)
  let midTop  = lerp(y,top,.65)
  let xbL = xTr - xW/3
  let xbR = xTr + xW/3
  let xL = xTr - xW/2
  let xR = xTr + xW/2
  let xtL = xTr - xW/7
  let xtR = xTr + xW/7

  trunkCol = chCol(pal.drk)
  fCol = color(chCol(pal.veg))
  grCol = chCol(pal.veg)
  trTh = map(y,-h(.4),h(1),w(.001),w(.01))
  numDots = map(yH,h(.01),h(.2),300,1200)
  numLines = numDots/4

  let xOffset = rnd(-trTh,trTh)
  let yOffset = rnd(-trTh,trTh)

  pstr4(buff, xTr + xOffset, top + yH/5, xTr + xOffset, y + yOffset, trTh, trTh/10, 1, trunkCol, 25)
  if (style === 'graphic') {
    for (let i = 0 ; i < numDots*2; i++) {
      fCol.setAlpha(rnd(125,255))
      let yPos = rnd(top,base)
      if (yPos < mid) {
        x = rnd(map(yPos,top,mid,xtL,xL), map(yPos,top,mid,xtR,xR))
      }else{
        x = rnd(map(yPos,mid,base,xL,xbL), map(yPos,mid,base,xbR,xR))
      }
      buff.noStroke()
      ellSize = rnd(yH/30)/2
      fCol.setAlpha(rnd(125,255))
      xRand = rnd(-xW/15,xW/15)
      yRand = rnd(-yH/30,yH/30)
      buff.fill(fCol)
      buff.ellipse(x+xRand,yPos+yRand,ellSize)
      if (dist(x+xRand,yPos+yRand,xTr,mid) > yH/2) {
        let colAdd = map(dist(x+xRand,yPos+yRand,xTr,mid),yH/2,yH,0,60)
        let nightCol = [fCol.levels[0]+colAdd,fCol.levels[1]+colAdd,fCol.levels[2]+colAdd]
        buff.fill(nightCol)
        buff.ellipse(x+xRand,yPos+yRand,ellSize)
      }
    }
  }else if (style === 'painterly') {
    for (let i = 0 ; i < numLines; i++) {
      fCol.setAlpha(rnd(15,65))
      let yPos = rnd(top,base)
      if (yPos < mid) {
        x = rnd(map(yPos,top,mid,xtL,xL), map(yPos,top,mid,xtR,xR))
      }else{
        x = rnd(map(yPos,mid,base,xL,xbL), map(yPos,mid,base,xbR,xR))
      }
      lineW = rnd(-xW/8,xW/8)
      lineH = rnd(-yH/10,yH/10) * map(dist(x,y,xTr,base),0,yH,1,.2)
      pstr4(buff, x + lineW, yPos + lineH, x, yPos, trTh*1.5, trTh/2, 1, fCol, 60)
    }
    randDotFills_bld(p1,p1,5,xL,xR,base,top,'v',30,60)
  }else if (style === 'orig') {
    for (let x = xbL; x < xbR; x += xW/50) {
      let dCol = chCol(pal.trees)
      let yBot = base + rnd(-xW/6,xW/6)
      let xMid = rnd(xL,xR) + rnd(-xW/6,xW/6)
      let yMid = mid + rnd(-xW/6,xW/6)
      let xTop = rnd(xtL,xtR) + rnd(-xW/6,xW/6)
      let yTop = rnd(midTop,top) + rnd(-xW/6,xW/6)
      pstr4(buff, x + rnd(-xW/8,xW/8), yBot, xMid, yMid, trTh*3, trTh/3, .3, dCol, 25)
      pstr4(buff, xMid + rnd(-xW/8,xW/8), yMid, xTop, yTop, trTh*3, trTh/3, .3, dCol, 25)
    }
    //randDotFills_bld(p1,p1,2,xL,xR,base,top,'v',30,60)
    //oilPaint_fine(buff,xL,xR,y,top,w(.01),h(.01),w(.003),w(.006),OVERLAY,100)
    pushToPaint(buff, xL, xR, y, top, w(.01), h(.01), w(.003), w(.006), OVERLAY, 25)
  }
}



//////////////////////////////////////////////////////////
////////////////////// house types ///////////////////////

function sanGmTower(buff, style, pal, xM, yB, xW, yH, time) {
  sanGmHouse1(buff, style, pal, xM, yB, xW, yH, dir, time, 'tower')
}

function sanGmHouse1(buff, style, pal, xM, yB, xW, yH, dir, time, type) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let sideWidth = rnd(3,6)
  let x3 = x1 + xW/sideWidth
  if (dir === 'r') {x3 = x2 - xW/sideWidth}
  let dD = map(yB,-h(.4),h(.5),70,10)
  let yDiff = yH/dD
  if (type === 'tower') {yDiff = yH/(dD*5)}
  let yth = yB - yH - yDiff
  let ytl = yB - yH + yDiff

  let col = chCol(pal.bld)

  //ROOF
  let vMid = createVector(x3,yth)
  let vLeft = createVector(x1,ytl)
  let vRight = createVector(x2,ytl)
  let roofLeft = p5.Vector.lerp(vMid,vLeft,1.1)
  let roofRight = p5.Vector.lerp(vMid,vRight,1.1)

  //WINDOWS
  if (x3 - x1 > x2 - x3) {wrl = x1, wrr = x3}else{wrl = x3, wrr = x2}
  let numWindows = 4
  if (wrr - wrl > width/8) {numWindows = 5}
  let win_cD = 3
  let drkCol = [col[0]/win_cD, col[1]/win_cD, col[2]/win_cD]
  //let ywt = y + yH/8   // THESE Y VALUES MOVED INTO LOOPV
  //let ywb = ywt + yH/12


  //let cntrOpts = [0,1,2]
  //let cntr = cntrOpts[floor(rnd()*cntrOpts.length)]

  //let strCol = chCol(pal.str)

  let stDirs = ['none','up','down'] 
  stDir = stDirs[floor(rnd()*stDirs.length)]

  if (style === 'neat' || style === 'orig' || style === 'geom') {
    if (time === 'day') {
      baseCol = [235,235,235]
    }else if (time === 'twilight') {
      baseCol = [125,125,125]
    }else if (time === 'night') {
      baseCol = [15,15,15]
    }
  }
  buff.fill(baseCol)
  //buff.stroke(20)
  buff.noStroke()
    buff.beginShape()
      buff.vertex(x1,yB)
      buff.vertex(x1,ytl)
      buff.vertex(x3,yth)
      buff.vertex(x2,ytl)
      buff.vertex(x2,yB)
    buff.endShape(CLOSE)

  let xStep = w(.002)
  if (style === 'geom') {xStep = w(.001)}

  for (let x = x1; x <= x2; x += xStep) {
    if (x < x3) {
      y = map(x,x1,x3,ytl,yth)
      if (dir === 'l'){cD = 100; cD2 = 0}else{cD = 0; cD2 = 30}
    }else{
      y = map(x,x3,x2,yth,ytl)
      if (dir === 'r'){cD = 100; cD2 = 0}else{cD = 0; cD = 30}
    }
    let ywt = y + yH/8 
    let ywb = ywt + yH/12
    if (style === 'neat') { /////////////////////////////// NEAT
      dotLine(buff,x,y,x,yB,w(.001),w(.0005),.5,[col[0]-cD, col[1]-cD, col[2]-cD])
    }else if (style === 'orig') { /////////////////////////////// ORIG
      pstr4(buff, x, y, x, yB, w(.005), w(.001), 1.3, [col[0]-cD/2-cD2, col[1]-cD/2-cD2, col[2]-cD/2-cD2], 50) // not strictly necessary
      pstr4(buff, x, y, x, yB, w(.003), w(.001), .7, [col[0]-cD, col[1]-cD, col[2]-cD], 50)
      if (type === 'tower') {
        wPos = lerp(wrl,wrr,.5)
        if (x > wPos - xW/8 && x < wPos + xW/8) {
          pstr4(buff, x, ywt, x, ywb, w(.005), w(.001), 1, [drkCol[0], drkCol[1], drkCol[2]], 50)
        }
      }else{
        for (let i = 1; i < numWindows; i++) {
          wPos = lerp(wrl,wrr,.2*i)
          if (x > wPos - xW/32 && x < wPos + xW/32) {
            pstr4(buff, x, ywt, x, ywb, w(.005), w(.001), 1, [drkCol[0], drkCol[1], drkCol[2]], 50)
            pstr4(buff, x, ywt + yH/5, x, ywb + yH/5, w(.005), w(.001), 1, [drkCol[0], drkCol[1], drkCol[2]], 50)
          }
        }
      }
    }else if (style === 'geom') {
      buff.push()
      buff.blendMode(HARD_LIGHT)
      //buff.strokeCap(SQUARE)

      p1.stroke(col[0]-cD, col[1]-cD, col[2]-cD)
      let strW = rnd(w(.0005),w(.003))
      p1.strokeWeight(strW)
      p1.line(x, y, x, yB)
      buff.pop()
      if (type === 'tower') {
        wPos = lerp(wrl,wrr,.5)
        if (x > wPos - xW/8 && x < wPos + xW/8) {
          p1.stroke(col[0]/4, col[1]/4, col[2]/4)
          p1.line(x, ywt, x, ywb)
        }
      }else{
        for (let i = 1; i < numWindows; i++) {
          wPos = lerp(wrl,wrr,.2*i)
          if (x > wPos - xW/32 && x < wPos + xW/32) {
            p1.stroke(col[0]/4, col[1]/4, col[2]/4)
            p1.line(x, ywt, x, ywb)
            p1.line(x, ywt + yH/5, x, ywb + yH/5)
          }
        }
      }
    }
  }

  // DETAILS
  if (style === 'orig') {
    let overline = rnd()
    let ovlCol = chCol(pal.str)
    let ovlWidth = rnd(w(.003))
    if (overline < .1) {
      pstr4(p2, x1, ytl, x1, ytl + rnd(yH/3,yH*2), ovlWidth, ovlWidth/3, .7, ovlCol, 50) 
    }else if (overline < .2) {
      let vec_mid = createVector(x3,yth)
      let vec_tr = createVector(x2,ytl)
      let lerpVal = rnd(1,3)
      let newRightPoint = p5.Vector.lerp(vec_mid,vec_tr,lerpVal)
      pstr4(p2, x3, yth, newRightPoint.x, newRightPoint.y, ovlWidth, ovlWidth/4, .7, ovlCol, 50) 
      pstr4(p2, x2, ytl - rnd(yH/5), x2, ytl + rnd(2*yH), ovlWidth, ovlWidth/4, .7, ovlCol, 50) 
    }else if (overline < .5) {
      //pstr4(p2, x3, yth, x3, yth + rnd(yH/2,yH*1.5), ovlWidth, ovlWidth/4, 1, ovlCol, 50) 
      //dotLine(p2, x3, yth, x3, yth + rnd(yH/2,yH*1.5), ovlWidth, ovlWidth/4, 1, [ovlCol[0], ovlCol[1], ovlCol[2]])
      buff.push()
      buff.blendMode(HARD_LIGHT)
      p1.stroke(col)
      p1.strokeWeight(w(.005))
      p1.line(x2, yB, x2, -h(.5))
      buff.pop()
    }else if (overline < .7) {
      //let hereCol = p1.get(x1-w(.002)+w(.5),yB-yH+h(.5))
      //console.log(hereCol)
      console.log(col)
      //dotLine(p2, x2, yB, x2, -h(.5), w(.003), w(.001), 1, col)
      buff.push()
      buff.blendMode(HARD_LIGHT)
      p1.stroke(col)
      p1.strokeWeight(w(.005))
      p1.line(x2, yB, x2, -h(.5))
      buff.pop()
    }
  }else if (style === 'geom') {
    buff.push()
    let overline = rnd()
    if (overline < .5) {
      let vec_tl = createVector(x1,ytl)
      let vec_mid = createVector(x3,yth)
      let vec_tr = createVector(x2,ytl)
      let vec_bl = createVector(x1,yB)
      let vec_bmid = createVector(x3,yB)
      let vec_br = createVector(x2,yB)
      let numSecs = rnd(6,15)
      areaLinear(buff,numSecs,vec_tl,vec_mid,vec_bmid,vec_bl,pal.bld,.1,.9) 
      areaLinear(buff,numSecs,vec_mid,vec_tr,vec_br,vec_bmid,pal.bld,.4,.6) 
    }
    if (overline < .3) {
      buff.blendMode(HARD_LIGHT)
      p1.stroke(col)
      let strW = rnd(w(.001),w(.005))
      p1.strokeWeight(strW)
      p1.line(x2, yB, x2, -h(.5))
    }else if (overline < .5) {
      p2.push()
      p2.blendMode(SOFT_LIGHT)
      p2.strokeCap(SQUARE)
      p2.stroke(col)
      let strW = rnd(w(.001),w(.005))
      p2.strokeWeight(strW)
      p2.line(x3, yB, x3, -h(.5))
      p2.pop()
    }else if (overline < .7) {
      p2.push()
      p2.blendMode(SOFT_LIGHT)
      //p2.strokeCap(SQUARE)
      p2.stroke(col)
      buff.stroke(col)
      let strW = rnd(w(.001),w(.005))
      p2.strokeWeight(strW)
      buff.strokeWeight(strW)
      p2.line(x1, ytl, x1, h(.5))
      buff.line(x3,yB + rnd(yH*2.5),x3,yth)
      buff.line(x1,ytl,x3,yth)
      p2.pop()
    }else if (overline < .9 && type !== 'tower') {
      buff.stroke(col)
      let strW = rnd(w(.001),w(.003))
      buff.strokeWeight(strW)
      let v1 = createVector(x1,ytl)
      let v2 = createVector(x3,yth)
      let lerpVal = rnd(1.1,3)
      let vExt = p5.Vector.lerp(v1,v2,lerpVal)
      buff.line(x1,ytl,vExt.x,vExt.y)
      buff.line(x1,yB + rnd(yH*1.5),x1,ytl)
    }else if (overline < 1 && type !== 'tower') {
      buff.stroke(col)
      let strW = rnd(w(.001),w(.004))
      buff.strokeWeight(strW)
      let v1 = createVector(x2,ytl)
      let v2 = createVector(x3,yth)
      let lerpVal = rnd(1.1,10)
      let vExt = p5.Vector.lerp(v2,v1,lerpVal)
      buff.line(x3,yth,vExt.x,vExt.y)
      buff.line(x3,yB + rnd(yH*1.5),x3,yth)
    }
    buff.pop()
  }

  if (style === 'orig') {
    let rCol = chCol(pal.str)
    pstr4(buff, roofLeft.x, roofLeft.y, vMid.x, vMid.y, w(.003), w(.001), 1, rCol, 50) 
    pstr4(buff, vMid.x, vMid.y, roofRight.x, roofRight.y, w(.003), w(.001), 1, rCol, 50)
  }


  /*for (let x = x1; x < x2; x += w(.0005)) {
    if (x < x3) {
      y = map(x,x1,x3,ytl,yth)
      if (dir === 'l'){cD = 100}else{cD = 0}
    }else{
      y = map(x,x3,x2,yth,ytl)
      if (dir === 'r'){cD = 100}else{cD = 0}
    }
    if (x3 - x1 > x2 - x3) {wrl = x1, wrr = x3}else{wrl = x3, wrr = x2}




    //  ROOF

    if (type !== 'tower') {
      let roofY = y - yH/20
      let roofX1 = x1 + xW/12
      let roofX3 = x3
      let roofX2 = x2 - xW/12
      let vMid = createVector(x3,yth)
      let vLeft = createVector(x1,ytl)
      let vRight = createVector(x2,ytl)
      let roofLeft = p5.Vector.lerp(vMid,vLeft,1.1)
      let roofRight = p5.Vector.lerp(vMid,vRight,1.1)

      if (x >= roofX1 && x <= roofX3) {
        xrb = map(x,roofX1,roofX3,roofLeft.x,x3)
        yrb = map(xrb,roofLeft.x,x3,roofLeft.y,yth)
        let roofCol = [col[0]/.8,col[1]/.8,col[2]/.8]
        if (style === 'graphic') {
          dotLine(buff,x,roofY,xrb,yrb,w(.001),1,1,roofCol)
        }else if (style === 'painterly') {
          pstr4(buff, xrb, yrb, x, roofY, xW/60, xW/30, 1, strCol, 60)
        }
      }else if(x >= roofX3 && x <= roofX2) {
        xrb = map(x,roofX3,roofX2,x3,roofRight.x)
        yrb = map(xrb,x3,roofRight.x,yth,roofRight.y)
        let roofCol = [col[0]/1.5,col[1]/1.5,col[2]/1.5]
        if (style === 'graphic') {
          dotLine(buff,x,roofY,xrb,yrb,w(.001),1,1,roofCol)
        }else if (style === 'painterly') {
          pstr4(buff, xrb, yrb, x, roofY, xW/60, xW/30, 1, strCol, 60)
        }
      }
    }

    //WINDOWS

    let numWindows = 4
    if (wrr - wrl > width/8) {numWindows = 5}
    let win_cD = 3
    let drkCol = [col[0]/win_cD, col[1]/win_cD, col[2]/win_cD]
    let ywt = y + yH/8
    let ywb = ywt + yH/12
    if (style === 'graphic') {
      // ACTUAL FILL
      blobStr(buff, x, y, x, yB, w(.002), col[0]-cD, col[1]-cD, col[2]-cD, 225, stDir)
      if (type === 'tower') {
        wPos = lerp(wrl,wrr,.5)
        if (x > wPos - xW/8 && x < wPos + xW/8) {
          blobStr(buff, x, ywt, x, ywb, w(.002), drkCol[0], drkCol[1], drkCol[2], 225, stDir)
        }
      }else{
        for (let i = 1; i < numWindows; i++) {
          wPos = lerp(wrl,wrr,.2*i)
          if (x > wPos - xW/32 && x < wPos + xW/32) {
            blobStr(buff, x, ywt, x, ywb, w(.002), drkCol[0], drkCol[1], drkCol[2], 225, stDir)
            blobStr(buff, x, ywt + yH/5, x, ywb + yH/5, w(.002), drkCol[0], drkCol[1], drkCol[2], 225, stDir)
          }
        }
      }
    }else if (style === 'painterly') {
      // ACTUAL FILL
      pstr4(buff, x, y, x, yB, xW/50, xW/500, 1, [col[0]-cD, col[1]-cD, col[2]-cD], random(25,60))
      if (type === 'tower') {
        wPos = lerp(wrl,wrr,.5)
        if (x > wPos - xW/8 && x < wPos + xW/8) {
          pstr4(buff, x, ywt, x, ywb, xW/50, xW/500, 1, [drkCol[0], drkCol[1], drkCol[2]], 30)
        }
      }else{
        for (let i = 1; i < numWindows; i++) {
          wPos = lerp(wrl,wrr,.2*i)
          if (x > wPos - xW/32 && x < wPos + xW/32) {
            pstr4(buff, x, ywt, x, ywb, xW/50, xW/500, 1, [drkCol[0], drkCol[1], drkCol[2]], 30)
            pstr4(buff, x, ywt + yH/5, x, ywb + yH/5, xW/50, xW/500, 1, [drkCol[0], drkCol[1], drkCol[2]], 30)
          }
        }
      }
    }
  }

  // OVERLAY FILLS 
  if (style === 'painterly') {
    randDotFills_bld(p1,p1,5,x1,x2,yB,yB - yH - yH/4,'h',0,30)
    randDotFills_bld(p1,p1,5,x1,x2,yB,yB - yH - yH/4,'v',30,60)
    let strW = rnd(w(.0005),w(.002))
    if (cntr = 1) {
      pstr4(buff, x1, ytl, x1, yB, strW, strW/3, 1, strCol, random(25,60))
    }
    if (cntr = 2) {
      pstr4(p2, x1, ytl, x3, yth, strW, strW/3, 1, strCol, random(25,60))
      pstr4(p2, x3, yth, x3, yB, strW, strW/3, 1, strCol, random(25,60))
    }
    if (type === 'tower') {
      pstr4(p2, x3, yth, x2, ytl, strW, strW/3, 1, strCol, random(25,60))
      pstr4(p2, x3, ytl, x3, yB, strW, strW/3, 1, strCol, random(25,60))
    }
  }*/
  if (style === 'geom') {
    randDotFills_bld(p1,p1,4,x1,x2,yB,yB - yH - yH/6,'h',0,30)
    randDotFills_bld(p1,p1,4,x1,x2,yB,yB - yH - yH/6,'v',30,60)
  }else if (style === 'orig') {
    //pushToPaint(p2,x1,x2,yB,yB - yH - yH/6,(w(.001)),w(.005),w(.005),w(.015),HARD_LIGHT,60)
    //pushToPaint(p2,x1,x2,yB,yB - yH - yH/6,(w(.001)),w(.005),w(.005),w(.015),BLEND,30)
    // IF POINTILLISM: 
    pushToPaint(p2,x1,x2,yB,yB - yH - yH/6,(w(.001)),w(.005),w(.001),w(.005),HARD_LIGHT,60)
    pushToPaint(p2,x1,x2,yB,yB - yH - yH/6,(w(.001)),w(.005),w(.001),w(.005),BLEND,30)
  }
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
    //yDiff = rnd(-yStep/i,yStep/i)
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
    //console.log(ptsWrap[i][0].x,ptsWrap[i][0].y)
    for (let j = 0; j < ptsWrap[i].length-1; j++) {
      let col = chCol(pal.veg)
      let strCol = chCol(pal.veg)
      let tl = createVector(ptsWrap[i][j].x,ptsWrap[i][j].y)
      let tr = createVector(ptsWrap[i][j+1].x,ptsWrap[i][j+1].y)
      let bl = createVector(ptsWrap[i+1][j].x,ptsWrap[i+1][j].y)
      let br = createVector(ptsWrap[i+1][j+1].x,ptsWrap[i+1][j+1].y)
      //let baseCol = [col[0]*3,col[1]*3,col[2]*3]
      if (style === 'neat' || style === 'orig') {
        if (time === 'day') {
          baseCol = [250,250,250];
          cD = 0;
          orig_cD = -20;
        }else if (time === 'twilight') {
          baseCol = [85,85,85];
          cD = 30;
          orig_cD = -30;
        }else if (time === 'night') {
          baseCol = [5,5,5];
          cD = 70;
          orig_cD = -50;
        }
      }

      buff.fill(baseCol)
      //buff.stroke(rnd(20,60))
      buff.noStroke()
      buff.beginShape()
        buff.vertex(tl.x,tl.y)
        buff.vertex(tr.x,tr.y)
        buff.vertex(br.x,br.y)
        buff.vertex(bl.x,bl.y)
      buff.endShape(CLOSE)

      let maxL = tl.x, maxR = tr.x

      //let neatCol = [col[0]-cD, col[1]-cD, col[2]-cD]
      let step = w(.006)
      if (style === 'neat'){step = w(.004)}
      if (style === 'geom'){step = w(.002)}

      for (let x = maxL; x < maxR; x += step) {
        let y1 = map(x,  maxL,  maxR,  tl.y,  tr.y)
        let x2 = map(x,  maxL,  maxR,  bl.x,  br.x)
        let y2 = map(x,  maxL,  maxR,  bl.y,  br.y)
        let yOffset = rnd(-h(.001),h(.005))
        if (style === 'neat') {
          dotLine(buff, x, y1 - yOffset, x2, y2, w(.005), w(.0015), .03, strCol)
        }else if (style === 'orig') {
          pstr4(buff, x, y1 - yOffset, x2, y2, w(.015), w(.001), 1, [col[0]+orig_cD/3, col[1]+orig_cD/3, col[2]+orig_cD/3], 50) 
          pstr4(buff, x, y1 - yOffset, x2, y2, w(.01), w(.0005), .3, [col[0]-orig_cD, col[1]-orig_cD, col[2]-orig_cD], 60) 
        }else if (style === 'geom') {
          buff.push()
          buff.stroke(strCol)
          let strW = rnd(w(.0015),w(.003))
          buff.strokeWeight(strW)
          buff.line(x, y1 - yOffset/2, x2, y2)
          buff.pop()
        }
      }

      // DETAILS
      if (style === 'orig') {
        let overline = rnd()
        let ovlCol = chCol(pal.veg)
        if (overline < .3) {
          pstr4(p1, tl.x, tl.y, tr.x, tr.y, w(.005), w(.002), .7, [ovlCol[0]/2, ovlCol[1]/2, ovlCol[2]/2], 50) 
        }else if (overline < .9) {
          let lerpVal = rnd(.6,1.5)
          let newBl = p5.Vector.lerp(bl,tl,lerpVal)
          //pstr4(p2, tl.x, tl.y, newBl.x, newBl.y, w(.005), w(.002), .7, [ovlCol[0]/2, ovlCol[1]/2, ovlCol[2]/2], 50)
          dotLine(buff, tl.x, tl.y, newBl.x, newBl.y, w(.01), w(.003), 1, [ovlCol[0], ovlCol[1], ovlCol[2]])
          dotLine(buff, tl.x + w(.01), tl.y, newBl.x + w(.01), newBl.y, w(.01), w(.003), 1, [ovlCol[0], ovlCol[1], ovlCol[2]])
        }
      }else if (style === 'geom') {
        buff.push()
        let overline = rnd()
        let ovlCol = chCol(pal.veg)
        buff.stroke(ovlCol)
        let strW = rnd(w(.003),w(.006))
        buff.strokeWeight(strW)
        if (overline < .1) {
          buff.line(tl.x, tl.y, tr.x, tr.y)
          let numSecs = rnd(6,15)
          areaLinear(buff,numSecs,tl,tr,br,bl,pal.veg,.3,.7) 
        }else if (overline < .3) {
          let lerpVal = rnd(.8,1.25)
          let newBl = p5.Vector.lerp(bl,tl,lerpVal)
          buff.line(bl.x, bl.y, newBl.x, newBl.y)
          let numSecs = rnd(6,15)
          areaLinear(buff,numSecs,tl,tr,br,bl,pal.veg,.3,.7) 
        }else if (overline < .5) {
          let lerpVal = rnd(.8,1.25)
          let newBr = p5.Vector.lerp(br,tr,lerpVal)
          buff.line(br.x, br.y, newBr.x, newBr.y)
        }else if (overline < .7) {
          buff.line(tl.x, tl.y, tr.x, tr.y)
          let numLines = rnd(200)
          for (let i = 0; i < numLines; i++) {
            lVal = rnd()
            let dir = rnd()
            let colOffset = rnd(-20,20)
            let v1 = p5.Vector.lerp(tl,bl,lVal)
            let v2 = p5.Vector.lerp(tr,br,lVal)
            dVal = rnd(.5,1.25)
            let strW = rnd(w(.003))
            buff.strokeWeight(strW)
            buff.stroke([ovlCol[0]+colOffset,ovlCol[1]+colOffset,ovlCol[2]+colOffset])
            if (dir < .5) {
              buff.blendMode(HARD_LIGHT)
              let ePt = p5.Vector.lerp(v1,v2,dVal)
              buff.line(v1.x,v1.y,ePt.x,ePt.y)
            }else{
              buff.blendMode(OVERLAY)
              let ePt = p5.Vector.lerp(v2,v1,dVal)
              buff.line(v2.x,v2.y,ePt.x,ePt.y)
            }
          }
        }else if (overline < 1) {
          let numSecs = rnd(6,15)
          areaLinear(buff,numSecs,tl,tr,br,bl,pal.veg,.1,.9) 
        }
        buff.pop()
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
            cypress(buff,pal,x,y,xW,yH,style,time)
          }
        }
      }

      //let dirs = ['up','down','none'] 
      //dir = dirs[floor(rnd()*dirs.length)]
      //let strW = rnd(w(.008),w(.018))

      //if ((br.x-bl.x) > (tr.x-tl.x)) {maxL = bl.x, maxR = br.x}

      /*for (let x = maxL; x < maxR; x += w(.006)) {
        let y1 = map(x,  maxL,  maxR,  tl.y,  tr.y)
        let x2 = map(x,  maxL,  maxR,  bl.x,  br.x)
        let y2 = map(x,  maxL,  maxR,  bl.y,  br.y)
        let yOffset = rnd(-h(.001),h(.005))
        if (style === 'graphic') {
          blobStr(buff, x, y1 - yOffset, x2, y2, strW, strCol[0],strCol[1],strCol[2], 60, dir)
        }else if (style === 'painterly') {
          pstr4(buff, x, y1 - yOffset, x2, y2, w(.01), w(.001), 1, [strCol[0], strCol[1], strCol[2]], 30)
        }
      }*/

      /*if (detailType < .3) {
        // CYPRESSES
        let numTrees = map(tr.x-tl.x,w(.1),w(2),10,45)
        for (let x = tl.x; x < tr.x; x += (tr.x-tl.x)/numTrees) {
          let mult = map(tl.y,-h(.4),h(1),.6,1.5)
          let y = map(x,tl.x,tr.x,tl.y,tr.y)
          xW = ((tr.x-tl.x)/numTrees) * mult
          yH = (xW*rnd(4,6)) * mult
          cypress(buff,pal,x,y,xW,yH,style,time)
        }
      }*/
      //let numDots = 500
      //let upLim = map()

      /*buff.fill(col)
      buff.beginShape()
        buff.vertex(ptsWrap[i][j].x,ptsWrap[i][j].y)
        buff.vertex(ptsWrap[i][j+1].x,ptsWrap[i][j+1].y)
        buff.vertex(ptsWrap[i+1][j+1].x,ptsWrap[i+1][j+1].y)
        buff.vertex(ptsWrap[i+1][j].x,ptsWrap[i+1][j].y)
      buff.endShape(CLOSE)*/
      //let strTh = w(.025)

      /*for (let x = ptsWrap[i][j].x; x < ptsWrap[i][j+1].x; x += w(.006)) {
        let y1 = map(x,  ptsWrap[i][j].x,  ptsWrap[i][j+1].x,  ptsWrap[i][j].y,  ptsWrap[i][j+1].y)
        let x2 = map(x,  ptsWrap[i][j].x,  ptsWrap[i][j+1].x,  ptsWrap[i+1][j].x,  ptsWrap[i+1][j+1].x)
        let y2 = map(x,  ptsWrap[i][j].x,  ptsWrap[i][j+1].x,  ptsWrap[i+1][j].y,  ptsWrap[i+1][j+1].y)
        pStr2(buff, x, y1, x2, y2, dist(x, y1, x2, y2), col, strTh, 'v', 100)
      }
      pStr2(buff, tl.x, tl.y, tr.x, tr.y, dist(tl.x, tl.y, tr.x, tr.y), strCol, strTh/2, 'h', 65)
      pStr2(buff, tl.x, tl.y, bl.x, bl.y, dist(tl.x, tl.y, tr.x, tr.y), strCol, strTh/2, 'h', 65) */
      
      /*if (detailType < .3) {
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
      } // if statements */

    } //inner array

  } //wrap array

}



//////////////////////////////////////////////////////////
/////////////////// assembly funcs ///////////////////////

function sanGm(buff, hrz, numSecs, pal, style, time, bMode, towers) {
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
      sanGmTower(buff, style, pal, xD, hrz, xW, hH, time)
    }
  }else{
    for (let i = 0; i < sections.length-1; i++) {
      let x1 = sections[i][0]
      let x2 = sections[i][1]
      let xD = (x1+x2)/2
      let xW = x2 - x1
      let hH = xW*rnd(.5,1.3)
      dir = dirs[floor(rnd()*dirs.length)]
      houseType = houseTypes[floor(rnd()*houseTypes.length)]
      houseType(buff, style, pal, xD, hrz, xW, hH, dir, time, 'house')
    }
  }
  buff.pop()
  if (style === 'orig') {
    buff.push()
    rectMode(CENTER)
    let numBlocks = 90
    for (let i = 0; i < numBlocks; i++) {
      buff.blendMode(BURN)
      let xPos = rnd(-w(.5),w(.5))
      let yPos = rnd(horizon,horizon-h(.1))
      let xS = rnd(w(.05))
      let yS = rnd(h(.15))
      buff.noStroke()
      let rectCol = chCol(pal.bld)
      buff.fill(rectCol)
      buff.rect(xPos,yPos,xS,yS)
    }
    buff.pop()
  }
}



//////////////////////////////////////////////////////////
///////////////////// render funcs ///////////////////////

function renderSanGm(pal, horizon, sky, style, time) {

  let hStep = map(horizon,-h(.4),h(.5),h(.02),h(.07))

  sky(skyBuff, style, time, horizon, pal, 'moon')
  sky(skyBuff, style, time, horizon, pal, 'moon')
  if (style === 'orig') {
    twilightSkyOverlay(style, horizon, pal)
  }
  

  //randDotFills(grid,p1,'h',0,30)
  //randDotFills(grid,p1,'v',30,60)

  sanGm(p1, horizon-hStep*2.5, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND, 'towers')
  sanGm(p1, horizon-hStep*2, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND)
  sanGm(p1, horizon-hStep, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND)
  sanGm(p1, horizon, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND)

  //skyStrokes_h(grid,pal,h(.45),BLEND)

  //skyStrokes(p1,pal,h(.45),BLEND)

  //randStrokes(p1,SOFT_LIGHT,w(.05))

  //skyStrokes_h(grid,pal,h(.45),SOFT_LIGHT)

  //skyStrokes(grid,pal,h(.45),SOFT_LIGHT)

  //randStrokes(p2,SOFT_LIGHT,w(.02)) // was .03

  sanGmTerr(p1, style, horizon, pal, style, time)

  if (style === 'orig') {
    //randDotFills(p1,grid,'h',0,40)
    //randDotFills(p1,grid,'v',40,80)
    //randDotFills(p2,p1,'h',80,120)
    //randDotFills(p2,p1,'v',120,160)

    /*randDotFills(grid,p1,'h',0,30)
    randDotFills(p2,p1,'h',0,30)
    randDotFills(p2,p1,'v',30,60)*/
  }else if (style === 'geom') {
    //randDotFills(p1,skyBuff,'h',0,30)
    skyStrokes(skyBuff,pal,horizon,HARD_LIGHT,style)
  }
}