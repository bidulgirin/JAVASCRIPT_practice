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
        return 'this : '+ (this.first + this.second);
    }
}

class PersonPlus extends Person{


        avg(){
            return (this.first + this.second)/2;
        }

}
var kim = new PersonPlus('kim' ,10, 20);
console.log('kim', kim);

