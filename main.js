const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
            if(nav.classList.contains('display-none')){
                nav.classList.remove('display-none')
            }
            else{
                nav.classList.add('display-none')
            }
        })
    }
}
showMenu('bars','nav-menu')