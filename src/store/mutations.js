const mutations = {
    addItem(state, item) {
        state.itemList.push(item);
    },
    changeItem(state, item) {
        const index = state.itemList.map(i => i.id).indexOf(item.id);
        state.itemList[index] = item;
    },
    updateCondition(state, condition) {
        state.condition = condition;
    },
    getAllTodoList(state, todoList) {
        state.itemList.length=0
        state.itemList.push(...todoList)
    },
    updateName(state, name){
        state.name = name;
    },
    deleteItem(state, id){
        state.itemList = state.itemList.filter(i=>i.id!=id);
    }
};
export default mutations;