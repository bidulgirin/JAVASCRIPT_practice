// 강의주소: https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/lecture/20300?tab=curriculum
var memberArray = ['egoing', 'graphittie', 'leezhc'];

console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop'); // console.group -- console..groupEnd를 쓰면 콘솔창에 결과가 들여쓰기로 보여진다


var memberObject = {
    manager: 'egoing',
    developer:'graphittie',
    designer:'leezhc'
}

console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]); // .뒤에는 변수가 올수 없다. 배열에서사용하는 []를 사용하도록하자 
}
console.groupEnd('object loop');
