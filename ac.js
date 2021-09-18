function ac(amplitude=110,frequency=60,phase=3,phaseDegrees=120){

  const timeStamp = Date.now()
  const positionOfSecond = (timeStamp / 1000) - parseInt(timeStamp / 1000)
  
  const phaseRadians = phaseDegrees * (Math.PI / 180)

  const points = []

  for(phase of new Array(phase).keys()){
    points.push(amplitude * (Math.sin(2 * Math.PI * positionOfSecond * frequency + (phase * phaseRadians))))
  }

  return points
  
}
const canvas = document.getElementById("canvas")

canvas.width = "1000"
canvas.height = "1000"

const startY = 500

const ctx = canvas.getContext('2d')
ctx.strokeStyle = "#000100"

ctx.beginPath()
ctx.lineWidth = "3"

const drawWave = (prevX, ms) => {
  const [y] = ac(100, 1, 1)
  const x = prevX + 2
  ctx.lineTo(x, startY - y)
  ctx.stroke()
  if(x > 1000) return
  setTimeout(() => drawWave(x), 0)
}

drawWave(0)