function ac(amplitude=9,frequency=60,phases=3,phaseDegrees=120){

  timeStamp = Date.now()
  positionOfSecond = (timeStamp / 1000) - parseInt(timeStamp / 1000)
  
  phaseRadians = phaseDegrees * (Math.PI / 180)

  points = []

  for(phase of new Array(phases).keys()){
    points.push(amplitude * (Math.sin(2 * Math.PI * positionOfSecond + (phase * phaseRadians))))
  }

  return points
  
}