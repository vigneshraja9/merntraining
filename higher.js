// function order(fn,times){
//  let result=fn*times
// return result
// }
// function High( order,a,b){
//     return order(a,b)

// }
// x=High(order,1 ,2)
// console.log(x)


// function fn(){
//     console.log("hello");
// }
//  function repeat(fn,n){
// for(n=0;n<5;n++){
//        fn()
// }
// }
// repeat(fn,5)
function order1(fn, n) {
    for (fn = 0; fn <= n; fn++) {
        console.log("sagar")
    }
    return fn
}
var nam = (a, b) => {
    return order1(a, b)
}
let gt = nam(1, 2)
console.log(gt)