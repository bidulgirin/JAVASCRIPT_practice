// https://opentutorials.org/module/4047/24626
//------주제: 정통적인 방법으로 부모와 자식관계를 맺어주기

var superObj = { superVal:'super' } //부모가 될 객체
var subObj = { subVal : 'sub' } //자식이 될 객체

subObj.__proto__ = superObj; // __proto__ 로 link 해줌

console.log('subObj.subVal=>' , subObj.subVal);
console.log('subObj.superVal=>' , subObj.superVal); // 자식이 부모 값을 가져왔네!

subObj.superVal = 'ssuubb'; // 객체를 바꾸는거지 그 객체에 proto를 바꾸는게 아님!!! 

console.log("superObj.superVal=>", superObj.superVal);
