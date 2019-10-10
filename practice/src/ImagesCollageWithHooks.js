import React from 'react';
import useMedia from './useMedia';
import data from './static/data';
import 'bulma/css/bulma.css';

function App(){
    const colCount = useMedia(['(min-width: 1500px)','(min-width: 1000px)','(min-width: 600px)'],
    [5,4,3],2);
    console.log('col count is', colCount);
    const heightArr = new Array(colCount).fill(0);
    const itemArr = new Array(colCount).fill().map(() => []);
    data.forEach(item => {
        const shortColInd = heightArr.indexOf(Math.min(...heightArr));
        console.log('short ind is',shortColInd);
        heightArr[shortColInd]+= item.height;
        itemArr[shortColInd].push(item);
    });
    return (
        <div className="columns is-mobile">
            {itemArr.map(item => {
                return (<div className='column'>
                    {item.map(subItem => <img src={subItem.image} alt='abc' />)}
            </div>)
            })}
        </div>
    );
}


export default App;