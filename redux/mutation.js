const todo = (state=[],action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return [...state,{id:action.id,text:action.text,completed:false}];
    default:
      return state;
  }
}

const testAddTodo = ()=>{
  var beforeState = [];
  var afterState = [{id:0,text:'new todo',completed:false}]
  Object.freeze(beforeState);
  expect(todo(beforeState,{id:0,text:'new todo',type:'ADD_TODO'})).toEqual(afterState);
}

testAddTodo();