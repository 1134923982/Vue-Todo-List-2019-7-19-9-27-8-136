<template>
    <div id="app">
        <div class="container">
            <div>
                <h2>Jquery To Do List</h2>
                <p><em>Simple Todo List with adding and filter by diff status.</em></p>
            </div>
            <div>
                <input class="input-text" v-model="item.content" type="text" name="ListItem">
                <div id="button" @click="add">Add</div>
            </div>
            <br>
            <ol>
                <li v-for="(item,index) in itemList" :key="index" :class="{checked:item.status}">
                    <input v-model="item.status" type="checkbox" @change="changeItemStatus(item,index)"/>
                    <span>{{item.content}}</span>
                </li>
            </ol>
            <div>
                <div id="filters">
                    <span><a>All</a></span>
                    <span><a>Active</a></span>
                    <span><a>Complete</a></span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data: function () {
            return {
                item: {},
                itemList: []
            }
        },
        methods: {
            add: function () {
                if (this.item.content) {
                    this.item.status = false;
                    this.itemList.push(this.item);
                    this.item = {};
                }
            },
            changeItemStatus:function (item,index) {
                this.itemList.splice(index,1,item)
            },

        }
    }
</script>

<style>
    @import "assets/css/style.css";

</style>
