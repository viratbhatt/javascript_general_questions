var i,j,a;
a=[4,3,1,9];

function qsort(arr){
    if (arr.length < 2)
    {
        return arr
    } 
    const [p, ...rest] = arr
    const low  = rest.filter(n => n <= p)
    const high = rest.filter(n => n > p)

    return [...qsort(low), p, ...qsort(high)]
}
console.log(qsort(a).join(', '))