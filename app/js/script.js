document.onload=(function(){

let btnHamburger=document.querySelector('.header__toggle')
let body = document.querySelector('body')
let header = document.querySelector(".header")
let overlay = document.querySelector(".overlay")
let Menu = document.querySelector(".header__menu")

btnHamburger.addEventListener('click',function(){
   
    if(header.classList.contains('open')){
      
           
            header.classList.remove('open')
            //close Hamburger Menu
            Menu.classList.remove('active')
            Menu.classList.add('activeout')
            body.classList.remove('noscroll')
         
    }else{
        header.classList.add('open') //open Hamburger Menu
        Menu.classList.add('active')
        Menu.classList.remove('activeout')
        body.classList.add('noscroll')



        
    }
   
   

})
/*-------------------------------------------------------------------------------------------*/
//Loading Lazy
let images = document.querySelectorAll('[data-src]');

let options={
    threshold:1,
    rootmargin: '0px 0px 300px 0px'
        


};
let observer = new IntersectionObserver((entries,observer)=>{
     entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            let imagesrc=entry.target.getAttribute('data-src');
            entry.target.style=imagesrc;
            observer.unobserve(entry.target);
        }

     })
},options);

images.forEach(image=>{observer.observe(image);})





})()