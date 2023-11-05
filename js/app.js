const body = document.querySelector('body')
function scrollToTop() {
   const btn = document.querySelector('.footer__burger')
   if (btn) {
      btn.addEventListener("click", () => {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
         })
      })
   }
}



function burgerWork() {
   const burger = document.querySelector('.header__burger')
   const menu = document.querySelector('.header-mobile')
   burger.addEventListener("click", () => {
      burger.classList.toggle("active")
      menu.classList.toggle("active")
      body.classList.toggle("lock")
   })
}


document.addEventListener("DOMContentLoaded", () => {
   scrollToTop()
   burgerWork()
})