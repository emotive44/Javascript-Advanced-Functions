function solution() {
    let a = '';
    
    return{
        append: (x) => a += x,
        removeStart: (x) => a = a.slice(x),
        removeEnd: (x) => a = a.slice(0, -x),
        print: () => console.log(a)
    }
}

let first = solution();
first.append('123')
first.append('45')
first.removeStart(2)
first.removeEnd(1)
first.print();
