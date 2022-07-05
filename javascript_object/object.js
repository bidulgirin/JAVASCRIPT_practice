// 강의주소: https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/lecture/20300?tab=curriculum
var memberArray = ['egoing', 'graphittie', 'leezhc'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    manager: 'egoing',
    developer:'graphittie',
    designer:'leezhc'
}
//업데이트
memberObject.designer = 'leezche'
console.log("memberObject.designer" , memberObject.designer);
console.log("memberObject['designer']//대괄호로 접근도 가능하다" , memberObject['designer']);

//삭제
console.log("memberObject 매니저삭제전" , memberObject['manager']);
delete memberObject.manager
console.log("memberObject 매니저삭제후" , memberObject['manager']);

