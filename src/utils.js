import sectionStyles from './components/section.module.css'

export function checkAndFixSection(sectionName, side, fixed) {
  var contentArea, contentTitle, fixedClass
  let section = document.getElementById(sectionName)
  if (side === 'left') {
    contentTitle = section.children[0].children[0]
    contentArea = section.children[1]
    fixedClass = sectionStyles.sectionFeatureFixedLeft
  }
  else if (side === 'right') {
    let isMobile = window.matchMedia("(max-width: 640px)")
    if (isMobile.matches)
      contentTitle = section.children[0].children[0]
    else
      contentTitle = section.children[2].children[0]
    contentArea = section.children[1]
    fixedClass = sectionStyles.sectionFeatureFixedRight
  }

  let sectionRect = section.getBoundingClientRect()
  let contentRect = contentArea.getBoundingClientRect()
  let top = Math.ceil(sectionRect.top)
  let bottom = Math.ceil(contentRect.bottom)

  if (fixed === false && top < window.screenX) {
    fixed = true;
    contentTitle.classList.toggle(fixedClass)
  }

  if (fixed === true && top > window.screenX) {
    fixed = false
    contentTitle.classList.toggle(fixedClass)
  }

  if (fixed === true && bottom < window.innerHeight) {
    if (bottom < window.screenX) {
      contentTitle.classList.toggle(fixedClass)
      fixed = false
    }
  }

  return fixed
}