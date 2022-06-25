(function(){

    //const introElem = document.querySelector('.char');
   let maxScrollValue = document.body.offsetHeight - window.innerHeight;
    const heightElem = document.querySelector('.innerHeight');
    const intro_title = document.querySelector('.intro_title');


    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
     }
   
    document.addEventListener("mousemove", resizeHandler);

   
    function height(){
        
        heightElem.innerHTML = window.pageYOffset;
        
    }
    function text_change(){
        const intro_top = intro_title.getBoundingClientRect().top;
        if(intro_top < window.innerHeight/3.4){
            intro_title.classList.add('animation');    
        }else{
            intro_title.classList.remove('animation');
        }
       
    }
    window.addEventListener('scroll',function(){
        height();
        text_change();
       
    }); 
  
    
})();