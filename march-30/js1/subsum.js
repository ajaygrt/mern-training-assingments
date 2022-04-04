let a =[8,7,2,5,3,1];
target = 12;
check(target,a);
function check (target, a)
{
    for(let i=0;i<a.length;i++)
    {
        for(let j=i+1;j<a.length;j++)
        {
            if(a[i]+a[j]==target)
            {
                console.log("pair found",a[i],a[j]);
                var result = a[j]&a[i];
                console.log(result);
            }
        }
    }
    return false;

}

