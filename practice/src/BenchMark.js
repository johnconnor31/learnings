import React,{ useLayoutEffect, useEffect, useState } from 'react';
import MouseMove from './mouseMoveWithoutHooks';
const arr= new Array(100);
arr.fill(0);
console.log('array is', arr);
function BenchMark({start}) {
    const [currentStart, setStart] = useState(start);
    useLayoutEffect(() => {
        console.log(Date.now()-currentStart);
    });
    return arr.map((key,i) => {
    console.log('mounting');
    return <MouseMove key={i} i={i} start={currentStart} updateStart = {(start) => setStart(start)}/>
    });
}

export default BenchMark;