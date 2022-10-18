const homeIcon = document.querySelector('#home-icon')
const messageIcon = document.querySelector('#message-icon')
const videosIcon = document.querySelector('#videos-icon')
const notificationIcon = document.querySelector('#notification-icon')

const slider = document.querySelector('#slider')

const homePage = document.querySelector('#home-page')
const messagePage = document.querySelector('#message-page')
const videosPage = document.querySelector('#videos-page')
const notificationPage = document.querySelector('#notification-page')

const homePageShow = () => {
  slider.style.transform = `translateX(${homeIcon.offsetLeft}px)`
  
  homeIcon.classList.add('active')
  messageIcon.classList.remove('active')
  videosIcon.classList.remove('active')
  notificationIcon.classList.remove('active')
  
  homePage.style.transform = 'translateX(0%)'
  messagePage.style.transform = 'translateX(100%)'
  videosPage.style.transform = 'translateX(100%)'
  notificationPage.style.transform = 'translateX(100%)'
}
const messagePageShow = () => {
  slider.style.transform = `translateX(${messageIcon.offsetLeft}px)`
  
  homeIcon.classList.remove('active')
  messageIcon.classList.add('active')
  videosIcon.classList.remove('active')
  notificationIcon.classList.remove('active')
  
  homePage.style.transform = 'translateX(100%)'
  messagePage.style.transform = 'translateX(0%)'
  videosPage.style.transform = 'translateX(100%)'
  notificationPage.style.transform = 'translateX(100%)'
}
const videosPageShow = () => {
  slider.style.transform = `translateX(${videosIcon.offsetLeft}px)`
  
  homeIcon.classList.remove('active')
  messageIcon.classList.remove('active')
  videosIcon.classList.add('active')
  notificationIcon.classList.remove('active')
  
  homePage.style.transform = 'translateX(100%)'
  messagePage.style.transform = 'translateX(100%)'
  videosPage.style.transform = 'translateX(0%)'
  notificationPage.style.transform = 'translateX(100%)'
}
const notificationPageShow = () => {
  slider.style.transform = `translateX(${notificationIcon.offsetLeft}px)`
  
  homeIcon.classList.remove('active')
  messageIcon.classList.remove('active')
  videosIcon.classList.remove('active')
  notificationIcon.classList.add('active')
  
  homePage.style.transform = 'translateX(100%)'
  messagePage.style.transform = 'translateX(100%)'
  videosPage.style.transform = 'translateX(100%)'
  notificationPage.style.transform = 'translateX(0%)'
}

window.addEventListener('load', () => {
  homePageShow()
})

homeIcon.addEventListener('click', () => {
  homePageShow()
})

messageIcon.addEventListener('click', () => {
  messagePageShow()
})

videosIcon.addEventListener('click', () => {
  videosPageShow()
})

notificationIcon.addEventListener('click', () => {
  notificationPageShow()
})