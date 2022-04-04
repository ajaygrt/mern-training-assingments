let a = [1,2,3,4,5,6,7,8];
target = 20;
greater(a,target);
function greater(a,target)
{
    for(let i=0;i<a.length;i++)
    {
        for(let j=0;j<a.length;j++)
        {
         
            for(let k=0;k<a.length;k++)
            
            {
        
                if(a[i]+a[j]+a[k]>target)
                {
                    return console.log(a[i],a[j],a[k]);
                }

            }
        }   
    }
}