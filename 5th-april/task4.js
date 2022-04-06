 
 function lengthchecker (arr1)
 {
     if (arr1.length == 2)
     {
         console.log("true");
     }
     else 
     {
        console.log("false");
     }

 }

 function sender (callback)
 {
    arr1 = [1,2];
    callback(arr1);
 }
 sender(lengthchecker);