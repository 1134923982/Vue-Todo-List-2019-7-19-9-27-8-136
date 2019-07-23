<template>
    <div>
        <ol>
            <li v-for="(item,index) in itemList" :key="index" :class="{checked:item.status}">
<!--                <input v-model="item.status" type="checkbox"/>-->
                <Item v-bind:item="item"/>
            </li>
        </ol>
    </div>
</template>

<script>
    import Item from './Item'
    export default {
        name: 'ItemList',
        components: {Item},
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
            },
            // changeStatus: function (item) {this.$store.commit('changeItem',{item:item});
            //     // this.$nextTick(()=>{
            //     //     this.$store.commit('changeItem',{item:item});
            //     // })
            // }
        },
        computed: {
            itemList: function () {
                if (this.$store.state.condition==='active'){
                    return this.$store.state.itemList.filter(item=>item.status===false)
                } else if(this.$store.state.condition==='complete'){
                    return this.$store.state.itemList.filter(item=>item.status===true)
                }
                return this.$store.state.itemList;
            }
        }
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
