function Multipler(n) {
    return function add(x) {
        result = n * x
        return result
    }
}
d = Multipler(5)(5)
console.log(d)