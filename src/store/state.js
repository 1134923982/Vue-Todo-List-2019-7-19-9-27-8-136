import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        itemList: [],
        condition: 'all',
    },
    mutations: {
        addItem (state,item) {
            state.itemList.push(item);
        },
        changeItem (state,item) {
            const index= state.itemList.map(i=>i.id).indexOf(item.id);
            state.itemList[index]=item;
        },
        updateCondition (state, condition) {
            state.condition = condition;
        }
    },
    // actions: {
    //     changeSum: function ({commit}, num) {
    //         commit("changSum",num);
    //     }
    // }
});

export default store;