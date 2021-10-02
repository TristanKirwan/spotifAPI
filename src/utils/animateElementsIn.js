import anime from 'animejs'

export default function animateItems(itemClass, parentClass, isBigItem = false){
  const parentElement = document.querySelector(`.${parentClass}`)
  const allElements = document.querySelectorAll(`.${itemClass}`)
  // All elements returns a Nodelist Object, which is not an array.
  const allElementsArray = Array.from(allElements)
  const animateElements = allElementsArray.slice(5)

  const intialTranslation = isBigItem ? 250 : 100

  const tl = anime.timeline({
    easing: 'linear',
    duration: 200
  })

  for(let i = 0; i < animateElements.length; i++) {
    tl.add({
      targets: animateElements[i],
      translateY: [`${intialTranslation}px`,'0px'],
      opacity: '1',
      begin: function() {
        parentElement.classList.add('view-all')
      }
    }, '-=125')
  }
}