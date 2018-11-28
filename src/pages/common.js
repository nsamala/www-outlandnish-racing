export function checkAndFixSection(sectionName, side, fixed) {
  var contentArea, contentTitle, fixedClass
  let section = document.getElementById(sectionName)
  if (side === 'left') {
    contentTitle = section.children[0].children[0]
    contentArea = section.children[1]
    fixedClass = 'chapter-title-fixed-left'
  }
  else if (side === 'right') {
    contentTitle = section.children[1].children[0]
    contentArea = section.children[0]
    fixedClass = 'chapter-title-fixed-right'
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