<template>
    <div>
        <ol>
            <li v-for="(item,index) in itemList" :key="index" :class="{checked:item.status}">
                <input v-model="item.status" type="checkbox"/>
                <span @dblclick="editItem(item,index)">
                        <span v-if="!item.editable">{{item.content}}</span>
                        <input v-model="item.content" @blur="save(item,index)"
                               @keyup.enter="save(item,index)" v-else/>
                </span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'ItemList',
        components: {},
        data: function () {
            return {
                condition: "all",
            }
        },
        methods: {
            editItem: function (item) {
                item.editable = true;
                this.$store.commit('changeItem',{item:item});
            },
            save: function (item) {
                item.editable = false;
                this.$store.commit('changeItem',{item:item});
            }
        },
        computed: {
            itemList: function () {
                if(this.$store.state.condition==='all'){
                    return this.$store.state.itemList;
                }else if (this.$store.state.condition==='active'){
                    return this.$store.state.itemList.filter(item=>item.status===false)
                } else {
                    return this.$store.state.itemList.filter(item=>item.status===true)
                }
            }
        }
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
