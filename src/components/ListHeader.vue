<template>
        <div>
            <div>
                <h2>Jquery To Do List</h2>
                <p><em>Simple Todo List with adding and filter by diff status.</em></p>
            </div>
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
        data: function () {
            return {
                item: {},
            }
        },
        methods: {
            add: function () {
                if (this.item.content) {
                    this.$store.commit('addItem',{id:this.$store.state.itemList.length+1,content:this.item.content,status:false,editable:false});
                    this.item = {};
                }
            }
        }
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
