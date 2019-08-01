import React from 'react';
import { useState, useRef, memo, useEffect } from 'react';

const Counter = memo((props) => {
    useWhyDidYouUpdate('Counter', props);
    return (
        <div style={props.style}>{props.count}</div>
    );
});
const counterStyle = {
    fontSize:'3rem',
    color:'red'
}
function App(){
    const [count, setCount] = useState(0);
    const [userId, setUserId] = useState(0);
        
    return (
        <>
        <div>
            <img alt='abc' src={`http://i.pravatar.cc/80?img=${userId}`} />
            <button onClick={() => setUserId(userId + 1)}>Switch User</button>
        </div>
        <div>
            <Counter style={counterStyle} count={count} />
            <button onClick={() => setCount(count => count+1)}>Click me</button>
        </div>
        </>
    );
}
function useWhyDidYouUpdate(name, props){
    const prevProps = useRef();
    useEffect(() => {
        const differenceDetails = [];
        if(prevProps.current){
            const keys = Object.keys({...props, ...prevProps.current});
            keys.forEach(key => {
                if(props[key]!==prevProps.current[key]){
                    differenceDetails.push(key);
                }
            });
            if(differenceDetails){
                console.log('difference for ',name, 'is', differenceDetails);
            }
        }
        prevProps.current = props;
        });
}

export default App;