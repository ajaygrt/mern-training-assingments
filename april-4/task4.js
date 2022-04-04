total =0;
let a = [1,2,3,4,5];
product=1;
let length = a.length;
sumofarray(a,total,product);
function sumofarray (a,total,product)
{   
    
    for(let i=0;i<a.length;i++)
    {
        total+=a[i];
        product = product * a[i];
    }
   console.log(total,product);
}