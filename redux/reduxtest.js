// import {createStore} from 'redux';
const counter = (state=0,action)=>{
  console.log(action);
  switch(action.type){
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state=0;
  let listeners=[];
  const getState = ()=> state;
  const dispatch = (action)=>{
    console.log(action);
    console.log(reducer);
    state = reducer(state,action);
    listeners.map(l=>l());
  }
  const subscribe = (listener) => {
    listeners.push(listener);
  } 
  const unsubscribe  = (listener) =>{
    listeners = listeners.filter((l) => l!=listener );
  }
  return {dispatch,subscribe,unsubscribe,getState};
}
const render = ()=>{
    document.body.innerText = store.getState();
}
const store = createStore(counter);
console.log(store);
store.subscribe(render);

render();

document.addEventListener('click',()=>{
  store.dispatch({type:'INCREMENT'});
});
