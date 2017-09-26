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
const myComp = Redux.combineReducers({todos,visibilityFilter});
const {createStore} = Redux;
const store = createStore(myComp);
console.log(store.getState());
store.dispatch({id:0,type:'ADD_TODO',text:'neha'});
console.log(store.getState());
store.dispatch({id:1,type:'ADD_TODO',text:'vikas'});
console.log(store.getState());
store.dispatch({id:0,type:'TOGGLE_TODO'});
console.log(store.getState());
store.dispatch({type:'SET_VISIBILITY_FILTER',filter:'SHOW_COMPLETED'});
console.log(store.getState());
setTimeout(1000,console.log(store.getState()));


