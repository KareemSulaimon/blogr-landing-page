const contentContainer = document.getElementsByClassName('content-container')
const x = window.matchMedia("(max-width: 1440px)")
const menuIcon = document.querySelector('.menu-icon')
const navContainer = document.querySelector('.navbar-container')
const firstContainer = document.querySelector('.first-container')
const dropdown = document.querySelector('.dropdown')

for (i = 0; i < contentContainer.length; i++){
    
    contentContainer[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}



     
        menuIcon.addEventListener('click', function () {
          menuIcon.classList.toggle('active')
          navContainer.classList.toggle('active')
        });
        
        
       
        
        
    


