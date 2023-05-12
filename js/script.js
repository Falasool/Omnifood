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
const headerEl = document.querySelector('.header')
const btnNavEl = document.querySelector('.btn-mobile-nav')

// 给.btn-mobile-nav绑定一个点击事件，当被点击时toggle nav-open类。实现导航切入切出效果
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

// smooth scrolling animation
const allLinks = document.querySelectorAll('a:link')
// 给每个元素都添加一个给定的函数
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const href = link.getAttribute('href')
    console.log(href)

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href)
      console.log('sectionEl')
      sectionEl.scrollIntoView({ behavior: 'smooth' })
    }

    // Close mobile naviagtion
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open')
  })
})

// Sticky Nav
// IntersectionObserver 接口观察目标元素与视口viewpoint的交叉状态（用户能看到/看不到）

const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]
    console.log(ent)
    // 如果 目标元素与视口的交叉区域为false（不存在）
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky')
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky')
    }
  },
  {
    // root制定目标元素所在的容器节点, null = viewpoint
    root: null,
    // 决定什么时候触发回调函数：可见部分为0
    threshold: 0,
    // 改变root的margin值，影响交叉区域的检测大小，margin-top为负 && 向上滚动 == 提前触发
    rootMargin: '-80px',
  }
)
obs.observe(sectionHeroEl)

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
