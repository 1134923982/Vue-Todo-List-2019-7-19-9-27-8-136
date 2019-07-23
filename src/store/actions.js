import {addTodoItem, getTodoItems, updateItem, deleteItem} from "../api";
const actions = {
    getAllTodoList:function ({commit}) {
        getTodoItems((list)=>{
            commit("getAllTodoList", list);
        })
    },
    addItem:function({commit}, item) {
        addTodoItem(item, (result)=>{
            commit("addItem", result)
        })
    },
    changeItem:function({commit}, item){
        updateItem(item, (result)=>{
            commit("changeItem", result);
        })
    },
    deleteItem:function ({commit}, item) {
        deleteItem(item.id,()=>{
            commit("deleteItem", item.id);
        })
    }
}



export default actions;