let arr=[2,1,3,5,4]
arr.sort()
function MissNum(N){
    if(!arr.includes(N+1))
    return N;
}
console.log(arr.find(MissNum)+1)