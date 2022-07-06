// https://opentutorials.org/module/4047/24626
//------주제: __proto__ 대신에 뭘써야할까

var superObj = { superVal:'super' } //부모가 될 객체

// var subObj = { subVal : 'sub' } //자식이 될 객체
// subObj.__proto__ = superObj; // __proto__ 로 link 해줌
// --> 위 주석처리 두줄과 바로아래코드가 동일함
var subObj = Object.create(superObj); // 형식: 자식 = Object.create(부모)
debugger; // 코드 실행이 멈추고 객체가 어떤 동작을 하는지 웹 브라우저 Sources 탭에서 자세히 볼수있다 

console.log('subObj.subVal=>' , subObj.subVal);
console.log('subObj.superVal=>' , subObj.superVal); // 자식이 부모 값을 가져왔네!

subObj.superVal = 'ssuubb'; // 객체를 바꾸는거지 그 객체에 proto를 바꾸는게 아님!!! 

console.log("superObj.superVal=>", superObj.superVal);
