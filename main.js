'use strict';

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// a.forEach(function(current, index){
//     this[index]+=1;
// }, a)
// console.log(a)

const a = [1, 2, 3, 4];

//map function
Array.prototype.map2 = function (callBack){
    let newArr = [];
    this.forEach(function(current, index){
        this[index] = callBack(current);
    }, newArr)
    return newArr
}

console.log(a.map2(function(x){return x+=1}))

//filter function
Array.prototype.filter2 = function(cb){
    let newArr=[];
    this.forEach(function(current){
        if(cb(current)){
            newArr.push(current)
        }
    }, newArr)
    return newArr
}

console.log(a.filter2(function(x){return (x%2==0)}))

//console.log(map(a, function(x){return x+=1}))



// console.log(a.filter(function(curr, index, a){
//     return (curr % 2 == 0)
// }))
