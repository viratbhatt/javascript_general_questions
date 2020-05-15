var n,sum;
n=5;

function facter(n)
{
    if(n === 0)
    {
        return 1;
    }
    return n*facter(n-1);
    
}
console.log(facter(n));