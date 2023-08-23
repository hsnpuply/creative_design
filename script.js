const storybtn = document.querySelectorAll('.story-btn');
const pics = document.querySelectorAll('.team-memeber-img');

var is_clicked = false;

storybtn.forEach((btn,index)=>{
  
    btn.addEventListener('click',()=>{

        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change');
    
        pics[index].classList.toggle('blury')

    })
})

