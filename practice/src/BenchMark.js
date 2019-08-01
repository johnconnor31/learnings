import React,{ useLayoutEffect } from 'react';
import MouseMove from './mouseMoveWithoutHooks';
const arr= [];
for(let i=0;i<1000;i++){
    arr.push(i);
}
function BenchMark({start}) {
    useLayoutEffect(() => {
        console.log(Date.now()-start);
    });
    return arr.map(key => {
    console.log('mounting');
    return <MouseMove key={key}/>
    });
}

export default BenchMark;