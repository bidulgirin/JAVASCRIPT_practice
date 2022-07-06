var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){ //이미 return할 값이 정해져 있기때문에 인자값 2개가 필요없다.
        return this.first + this.second; //this로 객체의이름 kim을 가져올수있다!
    }
   
}
console.log("sum" , kim.sum());