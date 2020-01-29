let solve2 = (function() {
    let count = 0;
    
    return function add(number) {
        count += number;
        add.toString = function() {
            return count;
        }
        return add;
    }
})();

console.log(solve2(1)(6)(-3).toString());
