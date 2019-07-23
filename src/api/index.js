import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3001";

const getTodoItems = (callback) =>{
    axios.get('/todos').then(function (response) {
        callback(response.data);
    })
}

const addTodoItem = (item,callback) => {
    axios.post('/todos', item).then(function (response) {
        callback(response.data)
    })
}

const updateItem = (item, callback) => {
    axios.put('/todos/'+item.id, item).then(function (response) {
        callback(response.data)
    })
}

export {getTodoItems,addTodoItem,updateItem};