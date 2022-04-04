var str="hello how are you"
var size=3
console.log(str.match(new RegExp('.{1,' + size + '}', 'g')))