import React, { Suspense } from 'react';
import useMedia from './hooks/useMedia';
import api from './api/suspenseFakeApi';
import data from './static/data';
import 'bulma/css/bulma.css';

const user = api();
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
        <div>
            <div>
            <Suspense fallback={<div>Loading...</div>}>
                <UserProfile />
            </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                <UserDetails />
            </Suspense>
            </div>
        <div className="columns is-mobile">
            {itemArr.map(item => {
                return (<div className='column'>
                    {item.map(subItem => <img src={subItem.image} alt='abc' />)}
            </div>)
            })}
        </div>
        </div>
    );
}

function UserProfile() {
    const userData = user.userName.read();
    return (<div>
        {userData.name}
    </div>);
}

function  UserDetails() {
    const userDetails = user.userDetails.read();
    return (
        <div>
                    {userDetails.details.map(detail => <div key={detail.name}>{detail.name} --- {detail.status}</div>)}
                </div>
    );
}

export default App;