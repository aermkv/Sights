function calculateFeatures(tokenData) {
  const hashPairs = [];
  for (let j = 0; j < 32; j++) {
    hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
  }
  const decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
  });

  const map = function(n, start1, stop1, start2, stop2, withinBounds) {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (!withinBounds) {
      return newval;
    }
    if (start2 < stop2) {
      return constrain(newval, start2, stop2);
    } else {
      return constrain(newval, stop2, start2);
    }
  };

  function constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
  };

  const newPals = {
    tuscan: {
      name: 'Tuscan',
    },
    umbrian: {
      name: 'Umbrian',
    },
    amsterdam: {
      name: 'Dutch',
    },
    cinqueterre: {
      name: 'Coastal',
    },
    yorktown: {
      name: 'Eastern',
    },
    grace: {
      name: 'Grace',
    },
    charcoal: {
      name: 'Charcoal',
    }
  }

  const style = chStyle()

  function chPal(style) {
    const pP = map(decPairs[1],0,255,0,1);
    if (pP < .3) {
      chP = newPals.tuscan.name
    }else if (pP < .55){
      chP = newPals.umbrian.name
    }else if (pP < .7){
      chP = newPals.amsterdam.name
    }else if (pP < .85){
      chP = newPals.cinqueterre.name
    }else if (pP < .95){
      chP = newPals.yorktown.name
    }else{
      chP = newPals.grace.name
    }
    if (style === 'neat') {
      if (pP < .27) {
        chP = newPals.tuscan.name
      }else if (pP < .51){
        chP = newPals.umbrian.name
      }else if (pP < .65){
        chP = newPals.amsterdam.name
      }else if (pP < .79){
        chP = newPals.cinqueterre.name
      }else if (pP < .88){
        chP = newPals.yorktown.name
      }else if (pP < .94){
        chP = newPals.grace.name
      }else{
        chP = newPals.charcoal.name
      }
    }
    return chP
  }
  
  function chTime() {
    const tT = map(decPairs[2],0,255,0,1);
    if (tT < .5) {
      chT = 'Day'
    }else if (tT < .85) {
      chT = 'Night'
    }else{
      chT = 'Twilight'
    }
    return chT
  }
  
  function chStyle() {
    const stV = map(decPairs[3],0,255,0,1);
    if (stV < .5) {
      chS = 'Original'
    }else if (stV < .85) {
      chS = 'Heavy Paint'
    }else{
      chS = 'Stippling'
    }
    return chS
  }
  
  function chLayout() {
    const layV = map(decPairs[4],0,255,0,1);
    if (layV < .33) {
      chL = 'San Gimignano'
    }else if (layV < .66) {
      chL = 'Cinqueterre'
    }else{
      chL = 'Metropolis'
    }
    return chL
  }
  
  function chSky() {
    const layV = map(decPairs[4],0,255,0,1);
    if (layV < .5) {
      chosenSky = 'Open'
    }else if (layV < .85) {
      chosenSky = 'Quilted'
    }else{
      chosenSky = 'Soaring'
    }
    return chosenSky
  }

  return {
    "Color Palette": chPal(style),
    "Time of Day": chTime(),
    "Rendering Style": chStyle(),
    "Location": chLayout(),
    "Sky Type": chSky(),
   }  
}

console.log(calculateFeatures(tokenData));