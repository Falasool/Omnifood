// @ts-nocheck
console.log('Hello world')
// footer的copyright的年份，自动变化
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
console.log(currentYear)
// 防止yearEl为null
if (yearEl) {
  yearEl.textContent = currentYear
}

// 移动端nav nav-open

const btnNav = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

// 给.btn-mobile-nav绑定一个点击事件，当被点击时toggle nav-open类。实现导航切入切出效果
btnNav.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

// Fixing flex box gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  var isSupported = flex.scrollHeight === 1
  flex.parentNode.removeChild(flex)
  console.log(isSupported)

  if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()
