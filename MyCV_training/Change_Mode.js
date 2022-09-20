const buttonChange = document.getElementById('change-mode')
buttonChange.addEventListener('click',changeModo)

function changeModo() {
   let body= document.querySelector('body');
   body.classList.toggle('changeColor');

   let links= document.querySelectorAll('a');
   links.forEach(element =>{
      element.classList.toggle('colorwhite');
   })

   let boxes= document.querySelectorAll('.works');
   boxes.forEach(element =>{
      element.classList.toggle('works-change');
   })
}

