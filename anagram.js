var a, b,i;
a="amy";
b="may";
var sum=0, summ=0;
if(a.length==b.length)
{
    for(i=0;i<a.length;i++)
    {
        sum+=a.charCodeAt(i);
        summ+=b.charCodeAt(i);
    }
    if(sum==summ)
    {
        console.log("It is anagram");
    }
}
else{
    console.log("It is not an anagram");
}