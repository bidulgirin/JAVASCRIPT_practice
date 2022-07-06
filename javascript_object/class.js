//https://opentutorials.org/module/4047/24614
//------주제 : class(객체만드는공장)


/* 
Person 이라는 함수에 new 가 붙으면서 
construct가 만들어지고 두가지 역할을 하게 되는데
첫번째는 객체를 생성하고 두번째는 데이터의 초기값을 설정한다
class에서는 어떻게 설정할까?
*/ 

//Person 이라는 객체 생성
class Person{
    constructor(name, first, second){ 
        /*
            consturctor은 예약된, 지정된 함수다. 
            호출안해도 자동으로 실행됨
            객체가 생성될때 실행된다는 것을 알수있다
        */

       //초기값 생성
        this.name = name;
        this.first = first;
        this.second = second;

        console.log('자동발싸!');
    }
}

var kim = new Person('kim' , 10, 20);
console.log('kim', kim);

// function Person(name, first, second, third){
//     this.name = name;
//     this.first =  first;
//     this.second = second;
//     this.third = third;
// }   