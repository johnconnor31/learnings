const {createStore} = Redux;
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

const store = createStore(counter);
const Arith = (props) => {
  return(
  <div>
  <div>{props.value}</div>
  <div onClick= {props.incr}>+</div>
  <div onClick= {props.decr}>-</div>
  </div>);
}
const render = ()=>{
ReactDOM.render(<Arith value={store.getState()} incr={()=>store.dispatch({type:'INCREMENT'})} decr={()=>store.dispatch({type:'DECREMENT'})} />,
           document.getElementById('root'));
}
store.subscribe(render);
render();