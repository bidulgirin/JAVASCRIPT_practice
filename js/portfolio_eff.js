(function(){
    const elem = document.querySelector('.site_img_ul');
    const site_des_1= document.querySelector('.site_des_1');
    const site_des_2= document.querySelector('.site_des_2');
    const site_des_3 = document.querySelector('.site_des_3');
    const site_img_2= document.querySelector('.site_img_2');
    const site_img_3= document.querySelector('.site_img_3');
    //let child = elem.childNode;

    

    function hidden(){
        
        site_des_2.classList.add('opacity_0');
        site_des_3.classList.add('opacity_0');
    }
    function show(){
       const site_img_2_top = site_img_2.getBoundingClientRect().top;
       const site_img_3_top = site_img_3.getBoundingClientRect().top;
       if( site_img_2_top < window.innerHeight /10){
        site_des_1.classList.add('opacity_0');
        site_des_2.classList.remove('opacity_0');
       
       }else{
        site_des_2.classList.add('opacity_0');
       }
       if( site_img_3_top < window.innerHeight /12){
         
        site_des_2.classList.add('opacity_0');
        site_des_3.classList.remove('opacity_0');
       
       }else{
        site_des_1.classList.remove('opacity_0');  
        site_des_3.classList.add('opacity_0');
       }
    }
    window.addEventListener('scroll', function(){
        hidden();
        show();
    })
})();