(function(){
    const intro_title = document.querySelector('.intro_title');
    const background = document.querySelector('.studio');
    const portfolio_title = document.querySelector('.portfolio');
    function back_color_change(){

        const intro_top = intro_title.getBoundingClientRect().top;
        const portfolio_title_top = portfolio_title.getBoundingClientRect().top;

        if(intro_top < window.innerHeight/5){
            background.classList.add('white');
        }else{
            background.classList.remove('white');
        }
        
        if(portfolio_title_top < window.innerHeight/2.5){
            background.classList.add('black');
        }else{
            background.classList.remove('black');
        }
       
    } 
   
   
    window.addEventListener('scroll',back_color_change); 
  
    
})();