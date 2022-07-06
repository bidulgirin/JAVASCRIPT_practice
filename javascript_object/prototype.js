//https://opentutorials.org/module/4047/24610
//------주제 : prototype 으로 재사용성 높이기!

function Person(name, first, second, third){
    this.name = name;
    this.first =  first;
    this.second = second;
    this.third = third;

    //메서드 안에서 함수를 사용하면 계속 호출되므로 생산성이 떨어짐, 성능면에서도 효율적이지 못함

    //this.sum = function(){ 
    //    return this.first + this.second + this.third; 
    //}   
}   
    //그렇다고 밖에다가 써주면? 

    // kim.sum = function(){ 
    //     return this.first + this.second + this.third; 
    // } // -> 이런식으로 하나하나 함수를 불러올수도 없는 것이다.. 1억개가 있으면 1억개 써줘야함...



Person.prototype.sum = function(){ 
     return 'prototype : ' + (this.first + this.second + this.third); 
} // 한번만 정의됨 prototype으로 성능도 메모리도 절약

kim.sum = function(){
    return 'this : '+ (this.firist + this.second);
}
// 자바스크립트는 kim이라는 객체에 sum이라는 메서드를 호출할때, 그 객체 자신이 sum이라는 속성을 가지고 있는지 먼저 찾는다.
// 없으면 그 생성자인 Person의 prototype의 sum을 찾는다. 
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

//콘솔 호출
console.log("kim.sum" , kim.sum());
console.log("lee.sum" , lee.sum());





/*
    정리: 데이터들은 객체 안에 쓰고 함수는 특별한 이유가 없다면 객체.prototype를 이용해 함수를 적어준다 
    프로토 타입의 의미: 
    객체가 생성될때마다 해당 객체의 메소드를 만들어 메모리에 할당을 해야 하는데 
    그렇게 하지않고 생성자의 프로토타입에 정의함으로서 다른 모든 객체들이 참조하여 사용할 수 있도록 하여 
    메모리를 효율적으로 사용할 수 있도록 하는 장점과 
    메소드의 재정의가 필요한 객체들은 상황에 맞게 자신만 사용가능한 메소드를 재정의 할수 있어 유지보수에도 많은 도움이 됨
*/