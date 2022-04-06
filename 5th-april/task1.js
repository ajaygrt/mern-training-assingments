
function check (num) {
if(isNaN(num))
{
	console.log("false");
    return false;
 }
 else
 {
	console.log("true");
    return true;
 }
}
function number (callback){
    let num = "2";
    callback(num);
}

number(check);


