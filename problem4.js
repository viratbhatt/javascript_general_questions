var i, j, a,b;
a="ababa";
b="";
j=a.length-1;
for(i=j;i>=0;i--)
{
    b += (a[i]);
}
if(a==b)
{
    console.log("It is a palindrome");
}
else{
    console.log("It is Not a Palindrome");
}
