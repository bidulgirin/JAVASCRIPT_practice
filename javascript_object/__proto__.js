// https://opentutorials.org/module/4047/24626
//------주제: construct로 객체상속을 이용

var superObj = { superVal:'super'} //부모
var subObj = Object.create(superObj); // 부모랑 자식이랑 연결
subObj.subVal = 'ssuubb'; // 자식의 값 할당 
debugger; //디버거
console.log('subObj.subVal=>' , subObj.subVal); // 자식의 값 출력
console.log('subObj.superVal=>' , subObj.superVal);  // 자식과 연결된 부모의 값 출력
console.log("superObj.superVal=>", superObj.superVal); // 부모의 값 출력

//kim 객체 생성
kim = {
    name:'kim',
    first: 10, second:20,
    sum : function(){
        return this.first + this.second
    }
}

//lee 객체 생성
lee = {
    name: 'lee',
    first:10, second:10,
    avg:function(){
        return (this.first+this.second)/2;
    }
}
lee.__proto__ = kim;

// kim의 sum메서드 출력실행
console.log('kim.sum() =>', kim.sum());
console.log('lee.sum() =>', lee.sum());
console.log('lee.avg() =>', lee.avg());