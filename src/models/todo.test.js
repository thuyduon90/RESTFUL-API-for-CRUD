const { insert, updateById, deleteById, findAll, todos } = require('./todo');

describe('Test todo model', () => {
    it('Should create a todo',()=>{
        const inserted = insert({id:1, title: 'First Todo'});
        expect.assertions(2);
        expect(inserted).toEqual({id:1, title: 'First Todo', completed: false});
        expect(todos.length).toEqual(1);
    });
    it('Should update and return the updated one',()=>{
        const updated = updateById({id:1, title: '1st Todo'});
        expect.assertions(2);
        expect(todos[0].title).toEqual('1st Todo');
        const updated2 = updateById({id:4, title: '1st Todo'});
        expect(updated2).toEqual(false);
    });
    it('Should delete a todo',()=>{
        insert({id:2, title: 'Second Todo'});
        deleteById(1);
        expect.assertions(2);
        expect(todos.length).toEqual(1);
        const deleteById1 = deleteById(4);
        expect(deleteById1).toEqual(false);
    });
    it('Should return todo list',()=>{
        
        const todoList = findAll();
        console.log(todoList);
        expect.assertions(2);
        expect(todoList.length).toEqual(1);
        const todoList2 = findAll(true);
        expect(todoList2.length).toEqual(0);
    });
})

