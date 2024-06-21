document.addEventListener('DOMContentLoaded', function() {
  const op_All = document.querySelector('.op_All');
  const op_App = document.querySelector('.op_App');
  const allElements_all = document.querySelectorAll('.all');
  const allElements_app = document.querySelectorAll('.app');

  op_All.addEventListener('click', function() {
    allElements_all.forEach(function(element) {
          if (element.style.display === 'none') {
              element.style.display = '';
          } else {
              element.style.display = 'block';
          }
      });
  });
  
  op_App.addEventListener('click', ()=>{
    allElements_app.forEach((element)=>{
      if(element.style.display === 'none'){
        element.style.display = '';
      } else{
        element.style.display = 'none'
      }
    })
  })



});