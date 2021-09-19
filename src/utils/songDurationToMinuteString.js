export default function songDurationToMinuteString(duration){
  if(typeof(duration) !== 'number') return ''
  const totalSeconds = duration / 1000;
  const amountFullMinutes = Math.floor(totalSeconds / 60)
  const secondsLeft = Math.round(totalSeconds - (amountFullMinutes * 60))
  const paddedSecondsLeft = secondsLeft.toString().padStart(2, '0')
  return `${amountFullMinutes}:${paddedSecondsLeft}`
}