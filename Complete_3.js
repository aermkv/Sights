tokenData.hash = '0xeac573b7c8086af7df8b3e500f71b8deb73afcbc99a288be1169997c44f95de6'
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
    str: {
      c1: [30,30,30],
      c2: [5,5,5],
      c3: [225,225,225],
    }
  },
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
    str: {
      c1: [11,12,31],
      c2: [200,124,55],
      c3: [149,126,131],
      c4: [73,45,66]
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
      c3: [172,114,53]
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
    str: {
      c1: [88,51,69],
      c2: [170,122,115],
      c3: [182,104,16],
      c4: [159,138,82]
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

const skies = [linearSky,lumSky,quilt]


//////////////////////////////////////////////////////////
///////////////////// setup & draw ///////////////////////


function setup() {
  noiseSeed(seed)
  const smD = windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(smD, smD);

  grid = createGraphics(smD, smD)
  p1 = createGraphics(smD, smD)
  blds = createGraphics(smD, smD)
  p2 = createGraphics(smD, smD)

  //canvas.getContext("2d", { willReadFrequently: true })

  translate(width/2,height/2)
  blds.translate(width/2,height/2)
  p1.translate(width/2,height/2)
  p2.translate(width/2,height/2)

  const time = chTime()
  //const time = 'night'

  const pal = chCol(newPals)
  //const style = chStyle()
  const style = 'graphic'
  hrzOptions = [-h(.2),0,h(.32)]
  horizon = hrzOptions[floor(rnd()*hrzOptions.length)]

  setGrid(30,horizon,pal)
  drawGrid(time)

  let chooseSky = skies[floor(rnd()*skies.length)]
  console.log(time)
  //console.log(`${chooseSky}`)

  renderSanGm(pal, horizon, quilt, style, time)
  //renderAmst(pal, horizon, chooseSky)
  //renderNyc(pal, horizon, chooseSky)
  //renderCqtr(pal, horizon, chooseSky)

  //const renderOptions  = [renderSanGm,renderAmst,renderNyc,renderCqtr]
  //const renderResult = renderOptions[floor(rnd()*renderOptions.length)]
  //renderResult(pal, horizon, chooseSky, style)

}

function draw() {
  image(grid, 0, 0)
  image(p1, 0, 0)
  image(p2, 0, 0)

  //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),map(frameCount,0,300,w(.03),w(.001)),0,w(.005),w(.015),BLEND)
  //oilPaint_fine(p2,-w(.5),w(.5),-h(.5),h(.5),0,map(frameCount,0,300,w(.03),w(.001)),w(.005),w(.015),BLEND)
  
  fillInDots()
  fillInDots2()
}


//////////////////////////////////////////////////////////
//////////////////// chooser funcs ///////////////////////

function chCol(obj) {
  let keys = Object.keys(obj);
  let palName = keys[floor(rnd()*keys.length)]
  return obj[palName];
}

function chTime() {
  let times = ['day','night']
  let time = times[floor(rnd()*times.length)]
  return time
}

function chStyle() {
  let styles = ['graphic','painterly']
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
    if (time === 'day'){
      grid.fill(245)
      grid.stroke(rnd(30))
    }else if (time === 'night'){
      grid.fill(30)
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
  for (let i = 0; i < sectionWidths.length-1; i++) {
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

function blobStr2(buff, x1, y1, x2, y2, weight, r, g, b, a, dir) {
  buff.noStroke()
  //let dirs = ['up','down'] // add 'down'
  //dir = dirs[floor(rnd()*dirs.length)]
  for (let i = 0; i < weight*10; i++){
    let lerpVal = rnd()
    if (lerpVal < .3) {
      adjW = map(lerpVal,0,.3,weight/4,weight*2) 
    }else if (lerpVal > .7) {
      adjW = map(lerpVal,.7,1,weight*2,weight/4) 
    }else{
      adjW = weight*2
    }
    let theta = rnd(TWO_PI);
    let nx1 = x1 + 0.5*rnd(weight/2)*cos(theta);
    let ny1 = y1 + 0.35*rnd(weight/2)*sin(theta);
    let nx2 = x2 + 0.5*rnd(weight/2)*cos(theta);
    let ny2 = y2 + 0.35*rnd(weight/2)*sin(theta);
    let px1 = lerp(nx1,nx2, lerpVal)
    let py1 = lerp(ny1, ny2, lerpVal)
    let size = rnd(weight/8)
    if (dir === 'up') {adjAlpha = map(py1,ny1,ny2,a,a/3)}
    if (dir === 'down') {adjAlpha = map(py1,ny2,ny1,a,a/3)}
    if (dir === 'none') {adjAlpha = a}
    buff.fill(r, g, b, adjAlpha)
    buff.ellipse(px1, py1, size)
  }
}

function dotLine(buff,x1,y1,x2,y2,thickness,weight,density,col) {
  buff.push()
  let dir = 'h'
  buff.fill(col)
  if (y2-y1 > x2-x1) {dir = 'v'}
  if (dir === 'h') {
    for (let x = x1; x < x2; x += w(.001)) {
      let numDots = map(thickness,w(.001),w(.01),5*density,30*density)
      for (let i = 0; i < numDots; i++) {
        let xPos = rnd(x1,x2)
        let yt = map(xPos,x1,x2,y1,y2)
        let yb = yt + thickness
        let yPos = rnd(yt,yb)
        buff.ellipse(xPos,yPos,w(.001)*rnd(weight))
      }
    }
  }
  if (dir === 'v') {
    for (let y = y1; y < y2; y += h(.001)) {
      let numDots = map(thickness,w(.001),w(.01),5*density,30*density)
      for (let i = 0; i < numDots; i++) {
        let yPos = rnd(y1,y2)
        let xl = map(yPos,y1,y2,x1,x2)
        let xr = xl + thickness
        let xPos = rnd(xl,xr)
        buff.ellipse(xPos,yPos,w(.001)*rnd(weight))
      }
    }
  }
  buff.pop()
}

function pstr4(buff,x1,y1,x2,y2,thickness,weight,density,col,lenDiv) {
  let num = (thickness/w(.0005)) * density;
  let v1 = createVector(x1,y1)
  let v2 = createVector(x2,y2)
  let cv1 = p5.Vector.lerp(v1,v2,.3)
  let cv2 = p5.Vector.lerp(v1,v2,.7)
  let dir = 'h'
  if (y2-y1 > x2-x1) {dir = 'v'}
  
  let strLength = dist(x1,y1,x2,y2)
  
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


//////////////////////////////////////////////////////////
/////////////////////// sky types ////////////////////////

function lumSky(buff, style, time, horizon, pal, features) {
  buff.push()
  buff.blendMode(HARD_LIGHT)
  let num = 20000
  for (let i = 0; i < num; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = rnd(-h(.5),horizon)
    let multY = map(dist(0,y,0,horizon),dist(0,-h(.5),0,horizon),0,1.5,.5)
    let multX = map(dist(x,0,0,0),w(.5),0,1.5,.5)
    let size = w(.002) * multY * multX
    let col = color(chCol(pal.sky))
    col.setAlpha(rnd(125,255))
    if (time === 'night') {col.setAlpha(rnd(10,45))}
    if (style === 'graphic') {
      buff.noStroke()
      buff.fill(col)
      buff.ellipse(x,y,size)
    }else if(style === 'painterly') {
      xW = rnd(-w(.01),w(.01))
      yH = rnd(-h(.005),h(.005))
      th = rnd(w(.01))
      we = rnd(w(.005))
      pstr4(buff,x,y,x+xW,y+yH,th,we,1,col,3)
    }
  }
  let col = color(chCol(pal.sky))
  let adjCol = [col[0]/.9,col[1]/.9,col[2]/.9]
  buff.noStroke()
  buff.fill(adjCol)
  for (let i = 0; i < num; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = rnd(-h(.5),horizon)
    let multY = map(dist(0,y,0,horizon),dist(0,-h(.5),0,horizon),0,1.5,.5)
    let size = w(.002) * multY
    col.setAlpha(rnd(125,255))
    if (style === 'graphic') {
      buff.ellipse(x,y,size)
    }else if(style === 'painterly') {
      xW = rnd(-w(.01),w(.01))
      yH = rnd(-h(.005),h(.005))
      th = rnd(w(.03))
      we = rnd(w(.001))
      col.setAlpha(rnd(30,100))
      if (time === 'night') {col.setAlpha(rnd(5,30))}
      pstr4(buff,x,y,x+xW,y+yH,th,we,1,col,3)
    }
  }
  if (features.includes('moon')) {
    let sizes = [['small',w(.02)],['large',w(.04)],['gigantic',w(.06)]]
    let size = sizes[floor(rnd()*sizes.length)]
    console.log(`moonsize: ${size}`)
    let moonX = rnd(-w(.45),w(.45))
    let moonY = rnd(-h(.5),lerp(-h(.5),horizon,.5))
    let moonRadius = size[1]
    let haloRadius = moonRadius*3.5
    for (let i = 0; i < 1500; i++) {
      let angle = rnd(TWO_PI);
      let rad = rnd(moonRadius)
      let haloRad = rnd(moonRadius,haloRadius)
      let x = moonX + sin(angle) * rad
      let y = moonY + cos(angle) * rad
      let xHalo = moonX + sin(angle) * haloRad
      let yHalo = moonY + cos(angle) * haloRad
      buff.noStroke()
      buff.fill(225,map(dist(x,y,moonX,moonY),moonRadius,haloRadius,255,0))
      if (time === 'day') {buff.fill(252, 243, 217,map(dist(x,y,moonX,moonY),moonRadius,haloRadius,255,0))}
      buff.ellipse(xHalo,yHalo,haloRadius/60)
      buff.fill(255)
      if (time === 'day') {buff.fill(250, 227, 160)}
      buff.ellipse(x,y,moonRadius/10)
    }
  }
  if (features.includes('stars')) {
    let numClouds = rnd(5,10)
    for (let i = 0; i < numClouds; i++) {
      let cloudSize = rnd(width/numClouds)
      let x = rnd(-w(.5),w(.5))
      let y = rnd(-h(.5),horizon)
      let numParts = rnd(5,15)
      for (let j = 0 ; j < numParts; j++) {
        let numDots = 100
        let maxW = cloudSize/(j*2)
        let maxH = maxW/2
        for (let k = 0; k < numDots; k++) {
          let angle = rnd(TWO_PI)
          xPos = x + rnd(maxW) * cos(angle)
          yPos = y + rnd(maxH) * sin(angle)
          buff.noStroke()
          buff.fill(255,255)
          let ellSize = cloudSize/30 * map(dist(xPos,yPos,x,y),0,cloudSize,1,.1)
          buff.ellipse(xPos,yPos,ellSize)
        }
      }
    }
  }
  buff.pop()
}

function linearSky(buff, style, time, horizon, pal, features) {
  buff.push()
  //drawingContext.filter = 'sepia(65%)'
  let num = 3000
  dirs = ['up','down','none']
  for (let i = 0; i < num; i++) {
    let x = rnd(-w(.55),w(.55))
    let xW = rnd(w(.005),w(.25))
    x1 = x - xW/2
    x2 = x + xW/2
    let y = rnd(-h(.5),horizon)
    weight = rnd(w(.005),w(.02)) * map(dist(0,y,0,horizon),dist(0,-h(.5),0,horizon),0,2.5,1)
    col = chCol(pal.sky)
    a = rnd(15,90)
    if (time === 'night') {a = rnd(5,30)}
    dir = dirs[floor(rnd()*dirs.length)]
    if (style === 'graphic') {
      blobStr2(buff, x1, y, x2, y, weight, col[0], col[1], col[2], a, dir)
    }else if (style === 'painterly'){
      //col.setAlpha(rnd(50,150))
      pstr4(buff, x1, y, x2, y, weight/5, weight/30, 1, col, rnd(3,10))
      /*if (i < 90) {
        let lineCol = chCol(pal.sky)
        let xDot1 = rnd(-w(.55),w(.55))
        let xDotW = rnd(w(.25),w(.5))
        let yDot1 = rnd(-h(.5),horizon)
        let yDotH = rnd(-h(.1),h(.1))
        lineTh = rnd(w(.005),w(.03))
        dotLine(buff,xDot1,yDot1,xDot1+xDotW,yDot1+yDotH,lineTh,1,1,lineCol)
      }else if (i < 180){
        lineCol = chCol(pal.sky)
        xDot1 = rnd(-w(.5),w(.5))
        xDotW = rnd(-w(.1),w(.1))
        yDot1 = rnd(-h(.5),horizon)
        yDotH = rnd(h(.1),h(.35))
        lineTh = rnd(w(.005),w(.03))
        dotLine(buff,xDot1,yDot1,xDot1+xDotW,yDot1+yDotH,lineTh,1,1,lineCol)
      }*/
    }
  }
  if (features.includes('moon')) {
    let sizes = [['small',w(.02)],['large',w(.04)],['gigantic',w(.06)]]
    let size = sizes[floor(rnd()*sizes.length)]
    console.log(`moonsize: ${size}`)
    let moonX = rnd(-w(.45),w(.45))
    let moonY = rnd(-h(.5),lerp(-h(.5),horizon,.5))
    let moonRadius = size[1]
    let haloRadius = moonRadius*3.5
    for (let yM = moonY - moonRadius; yM <= moonY + moonRadius; yM += moonRadius/10) {
      angleL = map(yM, moonY - moonRadius, moonY + moonRadius, 0, TWO_PI)
      angleR = map(yM, moonY - moonRadius, moonY + moonRadius, TWO_PI, 0)
      xl = moonX + sin(angleL) * moonRadius
      yl = moonY + cos(angleL) * moonRadius
      xr = moonX + sin(angleR) * moonRadius
      yr = moonY + cos(angleR) * moonRadius
      xhl = moonX + sin(angleL) * haloRadius
      yhl = moonY + cos(angleL) * haloRadius
      xhr = moonX + sin(angleR) * haloRadius
      yhr = moonY + cos(angleR) * haloRadius
      mdir = dirs[floor(rnd()*dirs.length)]
      mdirH = dirs[floor(rnd()*dirs.length)]
      blobStr2(buff, xhl, yhl, xhr, yhr, haloRadius, 255, 255, 255, rnd(map(dist(yhl,0,moonY,0),0,haloRadius,15,2)), mdirH)
      if (time === 'day') {blobStr2(buff, xhl, yhl, xhr, yhr, haloRadius, 252, 243, 217, rnd(map(dist(yhl,0,moonY,0),0,haloRadius,15,2)), mdirH)}
      blobStr2(buff, xl, yl, xr, yr, moonRadius, 255, 255, 255, rnd(125,255), mdir)
      if (time === 'day') {blobStr2(buff, xhl, yhl, xhr, yhr, haloRadius, 255, 228, 150, rnd(map(dist(yhl,0,moonY,0),0,haloRadius,15,2)), mdirH)}
    }
  }
  buff.pop()
}

function paintedSky(buff, horizon, pal) {

}

function quilt(buff, style, time, horizon, pal, features) {
  buff.push()
  buff.blendMode(BLEND)
  let yPos = [-h(.5)]
  let xPos = [-w(.5)]
  let types = []
  let type;
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
      if (style === 'graphic') {xStep === 'w(.002'}
      for (let x = x1; x < x2; x += xStep) {
        let y1 = yPosArray[j][0]
        let y2 = yPosArray[j][1]
        if (y1 < horizon) {
          if (y2 > horizon) {
            y2 = horizon
          }
          if (style === 'abstract') {
            types = [texStr, blobStr] // blobStr
            type = types[floor(rnd()*types.length)]
            type(buff, x, y1, x, y2, w(0.03), selectCol[0], selectCol[1], selectCol[2], 60, 'none') /// weidht was .03
          }else if (style === 'graphic') {
            //types = [texStr, blobStr] // blobStr
            //type = types[floor(rnd()*types.length)]
            blobStr(buff, x, y1, x, y2, w(.01), selectCol[0], selectCol[1], selectCol[2], 60, 'none')
          }else if (style === 'painterly') {
            types = [dotLine,pstr4]
            type = types[floor(rnd()*types.length)]
            type(buff, x, y1, x, y2, w(.01), w(.001), 1, selectCol, 20)
          }
        }
      } // ADD HORIZONTAL OPTION
    }
  }
  buff.pop()
}


//////////////////////////////////////////////////////////
//////////////////// overlay funcs ///////////////////////

function reflStrokes(buff,horizon,bMode) {
  buff.push()
  buff.blendMode(bMode)
  let num_lines = map(horizon,-h(.5),h(.5),4800,2400)
  for (let i = 0; i < num_lines; i++) {
    let x = rnd(-w(.5),w(.5))
    let y = map(i,0,num_lines,horizon,h(.5))
    xW = rnd(w(.003),w(.03)) * map(dist(x,horizon,x,y),0,h(.75),2,1)
    //if (y < horizon) {y = horizon}
    strCol = p1.get(x+width/2,rnd(-h(.5),horizon)+height/2) // previously horizon -rnd(.25) // change to make more precise refls with vertical mirroring
    if (strCol[0] == 0 && strCol[2] == 0) {
      strCol = grid.get(x+width/2,horizon-rnd(h(.25))+height/2)
    }
    strThick = rnd(w(.003),w(.015)) * map(dist(0,horizon,0,y),0,h(.75),2,.5)
    let dirs = ['none','up','down'] 
    dir = dirs[floor(rnd()*dirs.length)]
    //pStr2(buff,x-xW/2,y,x+xW/2,y,dist(x-xW/2,y,x+xW/2,y), strCol, strThick, 'h', 50)
    blobStr2(buff, x-xW/2, y, x+xW/2, y, strThick, strCol[0], strCol[1], strCol[2], 135, dir)
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

function fillDots2(buff,x,y,r,g,b,a,size) {
  buff.push()
  //for (let i = 0; i < numDots; i++) {
    //let size = w(sqrt(x2-x1)*.0003)*rnd(.3,.8)
    //let size = rnd(w(.002))
    buff.blendMode(OVERLAY)
    buff.fill(r,g,b,a)
    buff.noStroke()
    buff.ellipse(x,y,size)
  //}
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

function fillInDots2() {
  shuffleArray(rfd_pos2)
  if (frameCount < rfd_pos2.length/100) {
    for (let i = rfd_pos2[frameCount]; i < rfd_pos2[frameCount+100]; i++) {
      console.log(i)
      let x = i[0]
      let y = i[1]
      let r = i[2]
      let g = i[3]
      let b = i[4]
      let a = i[5]
      let buff = i[6]
      let size = i[7]
      fillDots2(buff,x,y,r,g,b,a,size)
    }
  }
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
    pstr4(buff,x1,-h(.5),x2,horizon,strThick,1,strCol,rnd(5,25))
    pstr4(buff,-w(.5),y1,x_break_L,y2,strThick,1,strCol,rnd(5,25))
    pstr4(buff,x_break_R,y1,w(.5),y2,strThick,1,strCol,rnd(5,25))
  }
  buff.pop()
}

function oilPaint_fine(buff,xMin,xMax,yMin,yMax,maxL,maxH,minTh,maxTh,blendType) {
  buff.push()
  buff.translate(-width/2,-height/2)
  if (frameCount < 300) {
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
      strokeColor.setAlpha(rnd(200))
      pstr4(buff,x1,y1,x2,y2,strokeThickness,strokeThickness/2,.5,strokeColor,20)
      //blobStr_live(buff, x1, y1, x2, y2, strokeLength*3.5, strokeColor[0], strokeColor[1], strokeColor[2], 15, frameCount)
    }
  }
  buff.pop()
}


//////////////////////////////////////////////////////////
/////////////////// trees & plants ///////////////////////

function cypress(buff,pal,xTr,y,xW,yH,style,time) {
  let top = y - yH
  let base = lerp(y,top,.15)
  let mid = lerp(y,top,.3)
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
  }else{
    for (let i = 0 ; i < numDots; i++) {
      let yPos = rnd(top,base)
      if (yPos < mid) {
        x = rnd(map(yPos,top,mid,xtL,xL), map(yPos,top,mid,xtR,xR))
      }else{
        x = rnd(map(yPos,mid,base,xL,xbL), map(yPos,mid,base,xbR,xR))
      }
      buff.noStroke()
      buff.fill(fCol)
      ellSize = rnd(yH/30)
      fCol.setAlpha(rnd(125,255))
      buff.ellipse(x,yPos,ellSize)
    }
  }
}


//////////////////////////////////////////////////////////
////////////////////// house types ///////////////////////

function sanGmTower(buff, style, pal, xM, yB, xW, yH, time) {
  sanGmHouse1(buff, style, pal, xM, yB, xW, yH, dir, time, 'tower')
}

function sanGmHouseOld(buff, style, pal, xM, yB, xW, yH, dir, type) {
  let x1 = xM - xW/2
  let x2 = xM + xW/2
  let dD = map(yB,-h(.4),h(.5),70,10)
  let yDiff = yH/dD
  if (type === 'tower') { yDiff = yH/(dD*4.5)}
  let col = chCol(pal.bld)
  let cntrOpts = [0,1,2]
  let cntr = cntrOpts[floor(rnd()*cntrOpts.length)]
  let strCol = chCol(pal.str)
  buff.strokeWeight(rnd(w(.001),w(.003)))
  buff.noStroke()

  let stDirs = ['none','up','down'] 
  stDir = stDirs[floor(rnd()*stDirs.length)]

  if (dir === 'l') {
    yT1 = yB - yH - yDiff
    yT2 = yB - yH + yDiff
    sideWidth = rnd(2,4)
    x3 = x1 - xW/sideWidth
    
    buff.fill(col[0]/2,col[1]/2,col[2]/2)
    buff.beginShape()
      buff.vertex(x1,yT1)
      buff.vertex(x2,yT2)
      buff.vertex(x2,yB)
      buff.vertex(x1,yB)
    buff.endShape(CLOSE)
    buff.beginShape()
      buff.vertex(x1,yT1)
      buff.vertex(x3,yT2)
      buff.vertex(x3,yB)
      buff.vertex(x1,yB)
    buff.endShape(CLOSE)

    for (let x = x3; x < x2; x += xW/60) { // was xW/30 with texStr
      if (x < x1) {
        y = map(x,x3,x1,yT2,yT1)
        if (type === 'tower') {y = y = map(x,x3,x1,yT2+yH/7,yT1)}
        cD = 3
      }else{
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }
      if (cntr = 3 && x > x2 - xW/10) {
        //texStr(buff, x, y, x, yB+rnd(h(.5)), xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
      }
      if (style === 'graphic') {
        blobStr(buff, x, y, x, yB, w(.005), col[0]/cD, col[1]/cD, col[2]/cD, 225, stDir)
      }else if (style === 'painterly') {
        pstr4(buff, x, yB, x, y, xW/60, xW/30, 1, [col[0]/cD, col[1]/cD, col[2]/cD], rnd(20,35))
      }

      if (type === 'tower') {
        if (x > xM - xW/8 && x < xM + xW/8) {
          ywt = y + yH/8
          ywb = ywt + yH/12
          cD = 3
          texStr(buff, x, ywt, x, ywb, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 200)
        }
      }else{

        // ROOF
        let roofY = y - yH/20
        let roofX3 = x3 + xW/8
        let roofX1 = x1
        let roofX2 = x2 - xW/8
        let vMid = createVector(x1,yT1)
        let vLeft = createVector(x3,yT2)
        let vRight = createVector(x2,yT2)
        let roofLeft = p5.Vector.lerp(vMid,vLeft,1.1)
        let roofRight = p5.Vector.lerp(vMid,vRight,1.1)

        if (x >= roofX3 && x <= roofX1) {
          xrb = map(x,roofX3,roofX1,roofLeft.x,x1)
          yrb = map(xrb,roofLeft.x,x1,roofLeft.y,yT1)
          let roofCol = [col[0]/1.5,col[1]/1.5,col[2]/1.5]
          if (style === 'graphic') {
            dotLine(buff,x,roofY,xrb,yrb,w(.003),1,1,roofCol)
          }else if (style === 'painterly') {
            pstr4(buff, xrb, yrb, x, roofY, xW/60, xW/30, 1, strCol, 60)
          }
        }else if (x >= roofX1 && x <= roofX2) {
          xrb = map(x,roofX1,roofX2,x1,roofRight.x)
          yrb = map(xrb,x1,roofRight.x,yT1,roofRight.y)
          let roofCol = [col[0]/.8,col[1]/.8,col[2]/.8]
          if (style === 'graphic') {
            dotLine(buff,x,roofY,xrb,yrb,w(.003),1,1,roofCol)
          }else if (style === 'painterly') {
            pstr4(buff, xrb, yrb, x, roofY, xW/60, xW/30, 1, strCol, 60)
          }
        }

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

    //dotLine(buff,x1,y1,x2,y2,thickness,weight,density,col)

    if (cntr = 1) {
      dotLine(buff,x1,yT1,x1,yB,w(.001),1,1,strCol)
      dotLine(buff,x1,yT1,x2,yT2,w(.001),1,1,strCol)
    }
    if (cntr = 2) {
      dotLine(buff,x1,yT1,x2,yT2,w(.001),1,.5,strCol)
      dotLine(buff,x3,yT2,x3,yB-yH/rnd(2,4),w(.001),1,.5,strCol)
    }
  }

  if (dir === 'r') {
    yT1 = yB - yH + yDiff
    yT2 = yB - yH - yDiff
    x3 = x2 + xW/rnd(2,4)

    buff.fill(col[0]/5,col[1]/5,col[2]/5)
    buff.beginShape()
      buff.vertex(x1,yT1)
      buff.vertex(x2,yT2)
      buff.vertex(x2,yB)
      buff.vertex(x1,yB)
    buff.endShape(CLOSE)
    buff.beginShape()
      buff.vertex(x2,yT2)
      buff.vertex(x3,yT1)
      buff.vertex(x3,yB)
      buff.vertex(x2,yB)
    buff.endShape(CLOSE)

    let dirs = ['none','up','down'] 
    dir = dirs[floor(rnd()*dirs.length)]

    for (let x = x1; x < x3; x += xW/60) {
      if (x < x2) {
        y = map(x,x1,x2,yT1,yT2)
        cD = 1
      }else{
        y = map(x,x2,x3,yT2,yT1)
        if (type === 'tower') {map(x,x2,x3,yT2,yT1+yH/7)}
        cD = 3
      }
      if (cntr = 3 && x > x2 - xW/10) {
        //texStr(buff, x, y, x, yB+rnd(h(.5)), xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 100)
      }

      if (style === 'graphic') {
        blobStr(buff, x, y, x, yB, w(.005), col[0]/cD, col[1]/cD, col[2]/cD, 225, stDir)
      }else if (style === 'painterly') {
        pstr4(buff, x, yB, x, y, xW/60, xW/30, 1, [col[0]/cD, col[1]/cD, col[2]/cD], rnd(20,35))
      }

      if (type === 'tower') {
        if (x > xM - xW/8 && x < xM + xW/8) {
          ywt = y + yH/8
          ywb = ywt + yH/12
          cD = 3
          drkCol = [col[0]/cD, col[1]/cD, col[2]/cD]
          //texStr(buff, x, ywt, x, ywb, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 200)
          //dotLine(buff, x, ywt, x, ywb, w(.001), 1, 1, drkCol)
          pstr4(buff, x, ywt, x, ywb, xW/60, xW/30, 1, drkCol, 50)
        }
      }else{

        // ROOF
        let roofY = y - yH/20
        let roofX3 = x3 - xW/8
        let roofX2 = x2
        let roofX1 = x1 + xW/8
        let vMid = createVector(x2,yT2)
        let vLeft = createVector(x1,yT1)
        let vRight = createVector(x3,yT1)
        let roofLeft = p5.Vector.lerp(vMid,vLeft,1.1)
        let roofRight = p5.Vector.lerp(vMid,vRight,1.1)

        if (x >= roofX1 && x <= roofX2) {
          xrb = map(x,roofX1,roofX2,roofLeft.x,x2)
          yrb = map(xrb,roofLeft.x,x2,roofLeft.y,yT2)
          let roofCol = [col[0]/.8,col[1]/.8,col[2]/.8]
          if (style === 'graphic') {
            dotLine(buff,x,roofY,xrb,yrb,w(.003),1,1,roofCol)
          }else if (style === 'painterly') {
            pstr4(buff, xrb, yrb, x, roofY, xW/60, xW/30, 1, strCol, 60)
          }
        }else if (x >= roofX2 && x <= roofX3) {
          xrb = map(x,roofX2,roofX3,x2,roofRight.x)
          yrb = map(xrb,x2,roofRight.x,yT2,roofRight.y)
          let roofCol = [col[0]/1.5,col[1]/1.5,col[2]/1.5]
          if (style === 'graphic') {
            dotLine(buff,x,roofY,xrb,yrb,w(.003),1,1,roofCol)
          }else if (style === 'painterly') {
            pstr4(buff, xrb, yrb, x, roofY, xW/60, xW/30, 1, strCol, 60)
          }
        }

        let numWindows = 4
        if (xW > width/8) {numWindows = 5}
        for (let i = 1; i < numWindows; i++) {
          wPos = lerp(x1,x2,.2*i)
          if (x > wPos - xW/24 && x < wPos + xW/24) {
            ywt = y + yH/8
            ywb = ywt + yH/12
            cD = 4
            drkCol = [col[0]/cD, col[1]/cD, col[2]/cD]
            //texStr(buff, x, ywt, x, ywb, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 200)
            //texStr(buff, x, ywt + yH/5, x, ywb + yH/5, xW/10, col[0]/cD, col[1]/cD, col[2]/cD, 200)
            dotLine(buff, x, ywt, x, ywb, w(.001), 1, 1, drkCol)
            dotLine(buff, x, ywt + yH/5, x, ywb + yH/5, w(.001), 1, 1, drkCol)
          }
        }
      }
    }
    randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'h',0,30)
    randDotFills_bld(p1,p1,x1,x2,yB,yB - yH - yH/4,'v',30,60)
  }
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

  let cntrOpts = [0,1,2]
  let cntr = cntrOpts[floor(rnd()*cntrOpts.length)]

  let col = chCol(pal.bld)

  let strCol = chCol(pal.str)

  let stDirs = ['none','up','down'] 
  stDir = stDirs[floor(rnd()*stDirs.length)]

  buff.fill(250,250,250)
  if (time === 'night') {buff.fill(25,25,25)}
  if (style === 'painterly') {
    buff.fill(col)
    if (time === 'night') {
      buff.fill(col[0]/3,col[1]/3,col[2]/3)
    }
  }
  buff.noStroke()
    buff.beginShape()
      buff.vertex(x1,yB)
      buff.vertex(x1,ytl)
      buff.vertex(x3,yth)
      buff.vertex(x2,ytl)
      buff.vertex(x2,yB)
    buff.endShape(CLOSE)

  for (let x = x1; x < x2; x += w(.0005)) {
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
      //let baseCol = [col[0]*3,col[1]*3,col[2]*3]
      let baseCol = [250,250,250]
      if (time === 'night') {baseCol = [col[0]/3,col[1]/3,col[2]/3]}
      if (style === 'painterly') {
        baseCol = [col[0]/2,col[1]/2,col[2]/2]
        if (time === 'night') {
          baseCol = [col[0]/5,col[1]/5,col[2]/5]
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

      let dirs = ['up','down','none'] 
      dir = dirs[floor(rnd()*dirs.length)]
      let strW = rnd(w(.008),w(.018))

      let maxL = tl.x, maxR = tr.x
      //if ((br.x-bl.x) > (tr.x-tl.x)) {maxL = bl.x, maxR = br.x}

      for (let x = maxL; x < maxR; x += w(.006)) {
        let y1 = map(x,  maxL,  maxR,  tl.y,  tr.y)
        let x2 = map(x,  maxL,  maxR,  bl.x,  br.x)
        let y2 = map(x,  maxL,  maxR,  bl.y,  br.y)
        let yOffset = rnd(-h(.001),h(.005))
        /*if (maxL = bl.x) {
          y1 = map(x,  maxL,  maxR,  bl.y,  br.y)
          x2 = map(x,  maxL,  maxR,  tl.x,  tr.x)
          y2 = map(x,  maxL,  maxR,  tl.y,  tr.y)
        }*/
        //pStr2(buff, x, y1, x2, y2, dist(x, y1, x2, y2), col, strTh, 'v', 100)
        if (style === 'graphic') {
          blobStr(buff, x, y1 - yOffset, x2, y2, strW, strCol[0],strCol[1],strCol[2], 60, dir)
        }else if (style === 'painterly') {
          pstr4(buff, x, y1 - yOffset, x2, y2, w(.01), w(.001), 1, [strCol[0], strCol[1], strCol[2]], 30)
        }
      }

      if (detailType < .3) {
        // CYPRESSES
        let numTrees = map(tr.x-tl.x,w(.1),w(2),10,45)
        for (let x = tl.x; x < tr.x; x += (tr.x-tl.x)/numTrees) {
          let mult = map(tl.y,-h(.4),h(1),.6,1.5)
          let y = map(x,tl.x,tr.x,tl.y,tr.y)
          xW = ((tr.x-tl.x)/numTrees) * mult
          yH = (xW*rnd(4,6)) * mult
          cypress(buff,pal,x,y,xW,yH,style,time)
        }
      }
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
}



//////////////////////////////////////////////////////////
///////////////////// render funcs ///////////////////////

function renderSanGm(pal, horizon, sky, style, time) {

  let hStep = map(horizon,-h(.4),h(.5),h(.02),h(.07))

  sky(p1, style, time, horizon, pal, 'moon')

  //randDotFills(grid,p1,'h',0,30)
  //randDotFills(grid,p1,'v',30,60)

  sanGm(p1, horizon-hStep*2.5, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND, 'towers')
  sanGm(p1, horizon-hStep*2, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND)
  sanGm(p1, horizon-hStep, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND)
  sanGm(p1, horizon, floor(map(horizon,-h(.4),h(.4),17,7)), pal, style, time, BLEND)

  //skyStrokes_h(grid,pal,h(.45),BLEND)

  skyStrokes(p1,pal,h(.45),BLEND)

  //randStrokes(p1,SOFT_LIGHT,w(.05))

  //skyStrokes_h(grid,pal,h(.45),SOFT_LIGHT)

  //skyStrokes(grid,pal,h(.45),SOFT_LIGHT)

  //randStrokes(p2,SOFT_LIGHT,w(.02)) // was .03

  //sanGmTerr2(p1, horizon, pal)
  sanGmTerr(p1, style, horizon, pal, style, time)

  if (style === 'painterly' || style === 'abstract') {
    randDotFills(p1,grid,'h',0,40)
    randDotFills(p1,grid,'v',40,80)
    randDotFills(p2,p1,'h',80,120)
    randDotFills(p2,p1,'v',120,160)
  }
}