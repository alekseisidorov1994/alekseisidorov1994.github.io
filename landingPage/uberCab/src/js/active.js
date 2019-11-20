window.addEventListener('DOMContentLoaded',()=>{
    
    const items = document.querySelectorAll('.head_menu_list');
    const hamburger = document.getElementById('hamburger');
    let menu = document.querySelector('.head_menu_nav');
    
    
    hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle('head_menu_hamburger_active');
        menu.classList.toggle('head_menu_nav_active');
        
    });
    
    items.forEach(item =>{
        item.addEventListener('click',()=>{
            hamburger.classList.toggle('head_menu_hamburger_active');
            menu.classList.toggle('head_menu_nav_active');
        });
    });

});