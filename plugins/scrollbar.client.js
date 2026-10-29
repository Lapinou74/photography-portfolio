// Floating page scrollbar: it takes no width, shows while scrolling,
// fades out after HIDE_DELAY, and can be dragged.
const HIDE_DELAY = 1000
const MIN_THUMB_HEIGHT = 40

export default () => {
  const root = document.documentElement
  const thumb = document.createElement('div')
  thumb.className = 'page-scrollbar'
  thumb.setAttribute('aria-hidden', 'true')
  document.body.appendChild(thumb)

  let timer = null
  let hovering = false
  let drag = null

  const sizes = () => {
    const viewHeight = window.innerHeight
    const maxScroll = root.scrollHeight - viewHeight
    const height = Math.max(MIN_THUMB_HEIGHT, viewHeight * viewHeight / root.scrollHeight)
    return { viewHeight, maxScroll, height }
  }

  const update = () => {
    const { viewHeight, maxScroll, height } = sizes()
    if (maxScroll <= 0) {
      thumb.style.display = 'none'
      return
    }
    thumb.style.display = ''
    thumb.style.height = `${height}px`
    thumb.style.transform = `translateY(${(window.scrollY / maxScroll) * (viewHeight - height)}px)`
  }

  const hide = () => {
    if (!hovering && !drag) thumb.classList.remove('is-visible')
  }

  const show = () => {
    thumb.classList.add('is-visible')
    clearTimeout(timer)
    timer = setTimeout(hide, HIDE_DELAY)
  }

  window.addEventListener('scroll', () => {
    update()
    show()
  }, { passive: true })
  window.addEventListener('resize', update)
  new ResizeObserver(update).observe(document.body)

  thumb.addEventListener('pointerenter', () => { hovering = true })
  thumb.addEventListener('pointerleave', () => {
    hovering = false
    show()
  })

  thumb.addEventListener('pointerdown', (event) => {
    event.preventDefault()
    drag = { startY: event.clientY, startScroll: window.scrollY }
    thumb.setPointerCapture(event.pointerId)
    thumb.classList.add('is-dragging')
  })
  thumb.addEventListener('pointermove', (event) => {
    if (!drag) return
    const { viewHeight, maxScroll, height } = sizes()
    const ratio = maxScroll / (viewHeight - height)
    window.scrollTo(0, drag.startScroll + (event.clientY - drag.startY) * ratio)
  })
  const endDrag = () => {
    drag = null
    thumb.classList.remove('is-dragging')
    show()
  }
  thumb.addEventListener('pointerup', endDrag)
  thumb.addEventListener('pointercancel', endDrag)

  update()
}
