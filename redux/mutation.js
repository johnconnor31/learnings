const todo = (state,action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return {id:action.id,text:action.text,completed:false};
    case 'TOGGLE_TODO':
      if(state.id === action.id)
        state.completed = !state.completed;
      return state;
    case 'default':
        return state;
  }
}
const todos= (state=[],action)=>{
  console.log('inside todo');
  switch(action.type){
    case 'ADD_TODO':
      return [...state,todo(state,action)];
    case 'TOGGLE_TODO':
      return state.map((t)=>todo(t,action)); 
    default:
      return state;
  }
}
const visibilityFilter =(state='SHOW_ALL',action)=>{
  console.log('inside visibilityFilter'+action.type);
  switch(state.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
const combineReducers = (reducers)=>{
  return (state={},action)=>{ 
  return Object.keys(reducers).reduce(
    (nextState,key) => {
      nextState[key] = reducers[key](state[key],action);
      return nextState;
  },
  {}
  );
  }
}

const myComp = combineReducers({todos,visibilityFilter});
 
const {createStore} = Redux;
const store = createStore(myComp);
class TodoApp extends React.Component{
  render(){
    return(
      <div>
        <input ref={node=>{this.input = node}} />
        <button onClick={()=>{store.dispatch({type:'ADD_TODO',text:this.input.value,id:todoId++});
                          this.input.value='';}}>add new</button>
        <div>
          {this.props.todos.map(p=><div key={p.id}>{p.text}</div>)}
        </div>  
      </div>
      );
    }
  }
let todoId=0;
const render = ()=> ReactDOM.render(<TodoApp todos={store.getState().todos}
 />,document.getElementById('root'));
render();
store.subscribe(render);
console.log(store.getState());





