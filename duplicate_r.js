var i, j, k;
a=["a","a","b","cb"]; 
b=[];


function check(k,b)
{
    if(b.length == 0)
    {
        return false;
    }
    for(j=0;j<b.length;j++)
    {
        if(k == b[j])
        {
            return true; 
        }
    }
    return false;
}
for(i=0;i<a.length;i++)
{ 
    k=a[i]
    if(check(k,b) == false)
    {
        b.push(a[i])
        //console.log(b.length)
    }

}
console.log(b);