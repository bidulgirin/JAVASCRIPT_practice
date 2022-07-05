//https://opentutorials.org/module/4047/24604 
// 주제 -- 내장된 객체 함수, 자바스크립트 사용범위 , 객체 만들어 보기


console.log('Math.PI', Math.PI); //파이 값
console.log('Math.random()', Math.random()); //랜덤한 값을 출력 // 객체를 포함해서 함수를 표현할때 '메소드'라고 한다
console.log("Math.floor(3.9)",Math.floor(3.9)); // 내림 값을 출력

//객체 만들기
var MyMath ={
    PI: Math.PI,
    random : function(){
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val);
    }
}
//콘솔 출력문
console.log("MayMath.Pi", MyMath.PI); 
console.log("MayMath.random", MyMath.random()); // 뒤에 () 붙는거 까먹지 말긔
console.log("MayMath.floor", MyMath.floor(3.9)); 

//와우 객체를 통해 정리정돈했다!


//객체를 안썼다면 이런식으로 코드를 작성해야한다
var MyMath_PI = Math.PI; // ← 객체 변수이름 지정할때 중복될 확률을 낮추기위해 'MyMath_PI(접두사_기능)' 이런식으로 지정하는게 좋다! 
function MyMath_random(){
    return Math.random();
}

function MyMath_floor(val){
    return Math.floor(val);
}