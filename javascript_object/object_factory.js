//https://opentutorials.org/module/4047/24608
//------주제 : construct function

function Person(name, first, second, third){
    this.name = name;
    this.first =  first;
    this.second = second;
    this.third = third;
    this.sum = function(){ //이미 return할 값이 정해져 있기때문에 인자값 2개가 필요없다.
        return this.first + this.second + this.third; //this로 객체의이름 kim을 가져올수있다!
    }
}
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

console.log("kim.sum" , kim.sum());
console.log("lee.sum" , lee.sum());

//공장예시 
//var d1 = new Date('2022-07-06');
//console.log("d1.getfullYear", d1.getFullYear()); //d1년도를 물어봄
//console.log("d1.getMonth", d1.getMonth()); //d1 월을 물어봄

//console.log('Date', Date); //[Function: Date] -> Date는 함수이고 내장된 함수다


//console.log("Person()",Person()); // undefined
//constructor 
//console.log("new Person()", new Person()); // new 라는 키워드로 Person 객체가 만들어짐(Person은 생성자가 됨) -> 생성자 함수 라고 부름