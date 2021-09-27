export default function getAlbumDuration (trackList){
  if(!Array.isArray(trackList)) 
  {
    if(!trackList.duration_ms){
      return ''
    }
    return trackList.duration_ms
  }
  const reducerFunc = (prevDuration, currentTrack) => {
    return prevDuration + currentTrack.duration_ms
  }
  const totalDurationInMs = trackList.reduce(reducerFunc, 0);
  const totalSeconds = Math.floor(totalDurationInMs / 1000);
  const totalFullMinutes = Math.floor(totalSeconds / 60);
  const totalFullHours = Math.floor(totalFullMinutes / 60);
  const remainderSeconds = totalSeconds - (totalFullMinutes * 60)
  
  const remainderMinutes = totalFullMinutes - (totalFullHours * 60) 

  if(totalFullHours >= 1 ){
    return `${totalFullHours} hr, ${remainderMinutes} min`
  }

  return `${totalFullMinutes}min ${remainderSeconds}s`
}