(function(){
   
    function fixed(){
        // let ul = document.getElementsByTagName("ul")[0];
        // let list = ul.getElementsByTagName('li');
        let lists = document.querySelectorAll('.site_d');
        let imgs = document.querySelector('.site_img');

        for(i = 0 ; i < lists.length[i] ; i++){
            lists[i].style.opacity =  "0"; //기본값
            let list_h = lists[i].getBoundingClientRect().top;
            //배열을 만드는 법은??
            arq.forEach(function(e){ //forEach로 배열을 뽑아낼수있다
                console.log(n);
            });
            imgs.dataset.value = lists[i];
            if(i = 1){
                lists[i].style.opacity =  "1";
            }
            
             
        }
        

         
       }    
       
    window.addEventListener('scroll', function(){
        fixed();
    })



})();