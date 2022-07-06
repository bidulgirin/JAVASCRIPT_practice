//https://opentutorials.org/module/4047/24616
//------주제 : class에서 method 만들기


//Person 이라는 객체 생성
class Person{
    constructor(name, first, second){ 

       //초기값 생성
        this.name = name;
        this.first = first;
        this.second = second;

    }
    // 보통 class 안쪽에 쓰는게 권장됨
    sum(){
        return 'this : '+ (this.first + this.second);
    }
}
/*
 class 밖에 냅다 프로토타입 써도 된다!
Person.prototype.sum = function(){ 
    return 'prototype : ' + (this.first + this.second + this.third); 
}*/



var kim = new Person('kim' ,10, 20);
console.log('kim', kim);

