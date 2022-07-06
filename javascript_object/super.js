//https://opentutorials.org/module/4047/24620
//------주제 : super/ constructor 안에 데이터를 추가하기


// Person 이라는 객체 생성
class Person{
    constructor(name, first, second){ 

       //초기값 생성
        this.name = name;
        this.first = first;
        this.second = second;

    }
    // 보통 class 안쪽에 쓰는게 권장됨
    sum(){
        return this.first + this.second;
    }
}

class PersonPlus extends Person{

    constructor(name, first, second, third){ 

        super(name, first, second); //부모에 있는 코드를 받아온다

         this.third = third;
 
     }

    sum(){
        return super.sum() + this.third;
    }

    avg(){
        return (this.first + this.second + this.third)/3;
    }

}
var kim = new PersonPlus('kim' ,10, 20, 30);
var lee = new PersonPlus('lee' ,10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("kim.sum()", kim.avg());

//정리
/*
    super의 두가지 용법
    1. super(): 부모-class의 생성자(constructor)를 참조한다.
    2. super.method() : 부모-class의 prototype-method를 참조한다.
*/