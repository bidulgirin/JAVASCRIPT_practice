// https://opentutorials.org/module/4047/24619
//------주제 : 객체 상속하기


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


/* 
    [하나의 class에 기능을 추가할때 중복되는 코드를 적지 않기위해서 상속이라는 것을 이용함]

    직접 쓴 함수가 아닌 다른 사람이 작성한 라이브러리를 가져다가 코드를 추가하는 것이라면? 
    
    나중에 업데이트 되었을때 하나하나 수정하기 힘들기 때문에 상속( 형식: class 상속받을함수 extends 상속하는함수)을 이용할것
 */

class PersonPlus extends Person{
    /*
        중복되는 코드 를 Person에서 상속 받는다
        constructor(name, first, second){ 

        
            this.name = name;
            this.first = first;
            this.second = second;

        }
        sum(){
            return 'this : '+ (this.first + this.second);
        
        }

    */

        avg(){
            return (this.first + this.second)/2;
        }

}




var kim = new Person('kim' ,10, 20);
console.log('kim', kim);

