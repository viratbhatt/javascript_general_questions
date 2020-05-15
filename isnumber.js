var v, i,j;
a="abc1_ef";
b=a.split("");
c=[
    '1', '2', '3', '4',
    '5', '6', '7', '8',
    '9', '0'
  ]
function check(k)
{
    if(b.length == 0)
    {
        return false;
    }
    for(j=0;j<b.length;j++)
    {
        if(k == c[j])
        {
            return true; 
        }
    }
    return false;
}
for(i=0; i<b.length; i++)
{
    if(check(b[i]) == true)
    {
        console.log("Yes, the string has a number");
    }
}