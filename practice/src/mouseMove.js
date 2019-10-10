import React from 'react';
import { useState, useEffect, useCallback } from 'react';

function MouseMove(props) {
    const [position, setPosition] = useState(() => {
        console.log('initiating state');
        return {x: 0, y: 0}
    });
    const handlePosChange = useCallback(({clientX,clientY}) => {
        console.log('position has changed', clientX, clientY );
            setPosition({x:clientX,y: clientY});
            if(props.i===0){
                props.updateStart(Date.now());
            }
        },
        [setPosition, props]
    );
    const handleClick = useCallback(e => window.alert('hello, you are at', e),[]);
    
    useEventListener('mousemove', handlePosChange);
    useEventListener('mouseup', handleClick);
    return (
        <div> 
            current Position is {position.x},{position.y}
        </div>
    ) 
}

function useEventListener(eventName, eventHandler, element = window) {
    useEffect(() => {
        if(!(element && element.addEventListener)){
            return;
        }
        element.addEventListener(eventName, eventHandler);
        return () => {
            element.removeEventListener(eventName, eventHandler);
        };
    },[element, eventName, eventHandler]);
}

export default MouseMove;