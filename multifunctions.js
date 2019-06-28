addSubtract = (x) => {
    var i = 1;
    var count = x;
    inner = (y) => {
        i++;
        count+=(i%2?(-1):1)*y;
        console.log(count);
        return inner;
    } 
    return inner;
}

addSubtract(1)(2)(3)(4)(5);