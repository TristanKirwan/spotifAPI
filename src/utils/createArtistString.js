export default function createArtistString(artistsArray){
  if(!Array.isArray(artistsArray)){
    if(typeof(artistsArray) === 'string') return artistsArray
    return ''
  }
  if(artistsArray.length === 1) return artistsArray[0].name
  let artistString = ''
  for(let i = 0; i < artistsArray.length; i ++) {
    artistString += `${artistsArray[i].name} & `
  }
  const finalString = artistString.substr(0, artistString.length - 3)
  return finalString
}