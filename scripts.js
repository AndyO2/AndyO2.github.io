let aboutMeButton = document.querySelector('.aboutMeScrollLink');
aboutMeButton.addEventListener('click', ()=>{
    window.scroll({
        top:900,
        behavior: 'smooth'
    })
})

let personalProjectsButton = document.querySelector('.personalProjectsScrollLink');
personalProjectsButton.addEventListener('click', ()=>{
    window.scroll({
        top:1300,
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