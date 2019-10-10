import { useState, useEffect } from 'react';

function useMedia(querySet, valueSet, defaultValue){
    const matchedQueries = querySet.map(q => window.matchMedia(q));
    const getValue = () => {
        console.log('matched queries are', matchedQueries);
        const index = matchedQueries.findIndex(mq => mq.matches);
        console.log('query match found', index);
        return index ===-1 ? defaultValue : valueSet[index];
    }
    const [value, setValue] = useState(getValue);
    useEffect(() => {
        const handler = () => setValue(getValue);
        matchedQueries.map(mq => mq.addListener(handler));
        return () => matchedQueries.map(mq => mq.removeListener(handler));
    });
    return value;
}

export default useMedia;