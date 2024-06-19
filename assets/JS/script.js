document.addEventListener('DOMContentLoaded', function() {
    const typed = document.querySelector('.typed');

    if(typed){
        let typed_string = typed.getAttribute('data-typed-items');
        typed_string = typed_string.split(',');

      
        
        new Typed('.typed', {
            strings: typed_string,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        });
   
    }






    

});

function toggleMenu() {
    const profile = document.getElementById('profile');
    const links = document.getElementById('links');
    const navBar = document.getElementById('nav-bar');
    
    profile.style.display = profile.style.display === 'flex' ? 'none' : 'flex';
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    navBar.style.display = navBar.style.display === 'flex' ? 'none' : 'flex';
}