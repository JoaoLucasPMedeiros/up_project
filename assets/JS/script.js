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