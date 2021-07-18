
window.addEventListener('load', function(){
    //Переход по ссылкам меню 
    document.querySelector('.menu-list').addEventListener('click',function(e){
        e.preventDefault();
        let target = document.querySelector(e.target.hash);
        window.scrollTo({
            top: target.offsetTop - 120,
            behavior: 'smooth'
        })
        let activeLink = document.querySelector('.menu-list li.current-menu-item');
        if(activeLink){
            activeLink.classList.remove('current-menu-item');
        }
        e.target.parentNode.classList.add('current-menu-item');
    });


    //Раскрытие мобильного меню
    let list = document.querySelectorAll('.menu .menu-list ul li');
    document.querySelector('.menu-btn').addEventListener('click',function(){
        if(!this.classList.contains('btn-active')){
            for(let i = 0; i<list.length; i++){
                list[i].classList.add('li-visible');
                this.classList.add('btn-active');
                this.innerHTML = '<i class="fas fa-times"></i>'             
            } 
        } else {
             for(let i = 0; i<list.length; i++){
                list[i].classList.remove('li-visible');
                this.classList.remove('btn-active');
                this.innerHTML = '<i class="fas fa-bars"></i'             
            }
        }
        
    });

    //Слайдер
    let closing = document.querySelectorAll('.js .js-level .js-level-item')
    document.querySelector('.js .js-level').addEventListener('click',function(e){
        for(let i = 0; i<closing.length; i++){
            if(closing[i] !== e.target){
                if(closing[i].classList.contains('js-closed')){
                    closing[i].classList.remove('js-closed');
                }                
            } else {
                let index = i;
                while(closing[index]){
                    closing[index].classList.add('js-closed');
                    index++;
                }
                if(e.target.classList.contains('js-closed')){
                    e.target.classList.remove('js-closed');
                }               
                break;
            }
        }
        for(let i = 0; i<closing.length; i++){
           if(closing[i].firstChild){
                closing[i].innerHTML = " ";
           } 
        }
         e.target.innerHTML = '<img class="thumb" src="img/round.png" alt="">';

    });

    function checkInp(){
        let inps = document.querySelectorAll('.personal form input');
        for(let i = 0; i<inps.length; i++){
            if(inps[i].value == " " && inps[i].classList.contains('active-inp')){
                inps[i].classList.remove('active-inp');
                inps[i].value = inps[i].nextElementSibling.innerHTML;
                inps[i].nextElementSibling.remove();                
            }
        }
    }

    document.querySelector('.personal form').addEventListener('click', function(e){
            if(e.target.type == 'text'){
                checkInp();
                let span = document.createElement('span');
                span.innerHTML = e.target.getAttribute("placeholder");
                e.target.classList.add('active-inp');
                e.target.value = " ";
                if(!e.target.nextElementSibling){
                    e.target.parentElement.appendChild(span);
                }
            }             
                     
    });

    document.querySelector('.personal-form-select').addEventListener('click', function(e){
        this.classList.toggle('active');
    });

    let options = document.querySelectorAll('.personal-form-select .personal-form-dropdown p');
    for(let i = 0; i < options.length; i++){
        options[i].addEventListener('click', function(e){
            console.log(this.innerHTML);
            document.querySelector('.personal-form-select span').innerHTML = this.innerHTML;
        })
    }
    
});


jQuery(function($) {
    "use strict"
   
    

});