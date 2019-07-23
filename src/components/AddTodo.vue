<template>
        <div>
<!--            <TodoTitle v-bind:title="'Jquery To Do List'" v-bind:subTitle="subTitle"/>-->
            <div>
                <input class="input-text" v-model="item.content" type="text" name="ListItem">
                <div id="button" @click="add">Add</div>
            </div>
            <br>
        </div>
</template>

<script>
    export default {
        name: 'ListHeader',
        // components: [TodoTitle},
        data: function () {
            return {
                item: {},
                title: 'Jquery To Do List',
                subTitle: 'Simple Todo List with adding and filter by diff status.'
            }
        },
        methods: {
            add: function () {
                if (this.item.content) {
                    // this.$store.commit('addItem',{id:this.$store.state.itemList.length+1,content:this.item.content,status:false,editable:false});
                    this.$store.dispatch('addItem',{content:this.item.content,status:false})
                    this.item = {};
                }
            }
        }
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
