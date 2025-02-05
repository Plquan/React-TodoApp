const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Redux', completed: true, priority: 'High' },
        { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
     case 'todoList/addTodo':
     return{
        ...state,
        todoList:[
            ...state.todoList,
            { id: 5, name: 'Learn Football', completed: false, priority: 'Low' }
        ]
     }
     default:
        return state;
    }
}

export default rootReducer

