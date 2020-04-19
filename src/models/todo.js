const todos = [];

/* 
* insert todo to database
* @todo {id, title, completed}
*/
exports.insert = todo =>{
    todos.push({...todo, completed: false});
    return {...todo, completed: false};
} 

/* 
* Update a todo in database
* @id 
*/
exports.updateById = todo =>{
    let foundIndex = todos.findIndex(element => element.id === todo.id);
    if(foundIndex!==-1){
        todos.splice(foundIndex, 1, todo);
    }else{
        return false;
    }
} 


/* 
* Delete a todo using id in database
* @id
*/
exports.deleteById = id =>{
    let foundIndex = todos.findIndex(element => element.id === id);
    if(foundIndex!==-1){
        todos.splice(foundIndex, 1);
    }else{
        return false;
    }
} 

/* 
* List out todos from database
* @param {completed}
* @return {todos} 
*/
exports.findAll = param =>{
    if(param=='' || param == undefined || param==null){
        return todos;
    }else{
        let {completed} = param;
        return todos.filter(t => t.completed==completed); 
    }
} 
exports.todos=todos;