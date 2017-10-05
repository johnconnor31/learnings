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
  console.log('inside todo',action);
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
  // console.log('inside visibilityFilter'+action.filter);
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
// const combineReducers = (reducers)=>{
//   return (state={},action)=>{ 
//   return Object.keys(reducers).reduce(
//     (nextState,key) => {
//       nextState[key] = reducers[key](state[key],action);
//       return nextState;
//   },
//   {}
//   );
//   }
// }
const Filter = ({onFilterClick,filter,children})=>{
  return(<a href='#' onClick={()=>{onFilterClick(filter);
                                  console.log('onFilterClick');}}>
          {children}
          </a>);
}
const filterTodos = (todos,filter) => {
   switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t=>t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t=> !t.completed);
    default:
      return todos;
   }
}
const myComp = Redux.combineReducers({todos,visibilityFilter});
 
const {createStore} = Redux;
const store = createStore(myComp);
const AddTodo = ({addTodo}) => {
  let input;
  return(
    <div>
      <input ref={node=>{input = node}} />
      <button onClick={()=>{addTodo(input.value);
                            // console.log('added');
                            input.value='';}}>add new</button>
    </div>
    );
}

const TodoList = ({filteredTodos,onTodoClick}) => {
  return(
        <div>
          {filteredTodos.map(p=><li key={p.id} 
                                    style={{textDecoration:p.completed?'line-through':'none'}} 
                                    onClick={()=>onTodoClick(p.id)}>
                                      {p.text}
                                    </li>)}
        </div>
    );
}

const Footer = ({onFilterClick}) => {
  return(
    <div>
        show:{" "}<Filter filter='SHOW_ALL' onFilterClick={onFilterClick}> all, </Filter>
        <Filter filter='SHOW_COMPLETED' onFilterClick={onFilterClick}> completed, </Filter>
        <Filter filter='SHOW_ACTIVE' onFilterClick={onFilterClick}> active </Filter>
    </div>
  );
}

class TodoApp extends React.Component{
  render(){
    const {todos,visibilityFilter} = this.props;
    
    // console.log(store.getState());
    return(
      <div>
        <AddTodo addTodo={(text)=>{store.dispatch({type:'ADD_TODO',text,id:todoId++})}} />

        <TodoList filteredTodos={filterTodos(todos,visibilityFilter)} onTodoClick={(id)=>{store.dispatch({type:'TOGGLE_TODO',id})}} />  

        <Footer onFilterClick={(filter)=>store.dispatch({type:'SET_VISIBILITY_FILTER',filter})} />      

      </div>
      );
    }
  }
let todoId=0;
const render = ()=> ReactDOM.render(<TodoApp {...store.getState()}
 />,document.getElementById('root'));
render();
store.subscribe(render);
console.log(store.getState());





