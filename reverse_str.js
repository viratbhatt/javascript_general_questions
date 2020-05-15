a="quick brown fox"
var i;
b=a.split(" ");
var text="";
for(i=1; i<=b.length; i++)
{
    text +=" "+b[b.length-i];
}
console.log(text)