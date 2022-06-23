let homeButton = document.querySelector('.homeScrollLink');
homeButton.addEventListener('click', ()=>{
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
})
let aboutMeButton = document.querySelector('.aboutMeScrollLink');
aboutMeButton.addEventListener('click', ()=>{
    window.scroll({
        top:800,
        behavior: 'smooth'
    })
})

let personalProjectsButton = document.querySelector('.personalProjectsScrollLink');
personalProjectsButton.addEventListener('click', ()=>{
    window.scroll({
        top:1600,
        behavior: 'smooth'
    })
})

let contactButton = document.querySelector('.contactScrollLink');
contactButton.addEventListener('click', ()=>{
    window.scroll({
        top:1000,
        behavior: 'smooth'
    })
})