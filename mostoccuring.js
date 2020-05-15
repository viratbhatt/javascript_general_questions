var i,count,t;
j=0;
a="aabbcdefa";
var b=[];

for(i=0;i<a.length;i++)
{   
    count=0;
    for(j=0;j<a.length;j++)
    {
        if(a[i] == a[j])
        {
            count += 1;
        }
    }
    b[i]=count;
}
t= Math.max(...b);
console.log(a[b.indexOf(t)]);