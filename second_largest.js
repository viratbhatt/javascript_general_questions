var a, j;
a=[4,7,1,4,9];
for(var i=0; i<a.length;i++)
{
    for(var j=0; j<a.length; j++)
    {
        if(a[i]<a[j])
        {
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log(a[a.length-1],a[a.length-2])