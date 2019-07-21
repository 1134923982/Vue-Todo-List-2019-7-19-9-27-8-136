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
                    <span @dblclick="editItem(item,index)">
                        <span v-if="!item.editable">{{item.content}}</span>
                        <input v-model="item.content" @blur="save(item,index)"
                               @keyup.enter="save(item,index)" style="height: 16px"
                               v-bind:style="{width:item.content.length*8+'px'}" v-else/>
                    </span>
                </li>
            </ol>
            <div>
                <div id="filters">
                    <span id="all"><a @click="filterList('all')">All</a></span>
                    <span id="active"><a @click="filterList('active')">Active</a></span>
                    <span><a @click="filterList('complete')">Complete</a></span>
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
                itemList: [],
                allItemList: [],
                condition: "all",
                editable: false
            }
        },
        methods: {
            add: function () {
                if (this.item.content) {
                    this.item.status = false;
                    this.item.editable = false;
                    this.allItemList.push(this.item);
                    if (this.condition === "active" || this.condition === "all") {
                        this.itemList.push(this.item);
                    }
                    this.item = {};
                }
            },
            changeItemStatus: function (item, index) {
                this.itemList.splice(index, 1, item)
            },
            editItem: function (item, index) {
                item.editable = true;
                this.itemList.splice(index, 1, item);
            },
            save: function (item, index) {
                item.editable = false;
                this.itemList.splice(index, 1, item);
            },
            filterList: function (condition) {
                this.condition = condition;
                if (this.condition === "active") {
                    this.itemList.splice(0, this.itemList.length);
                    this.itemList = this.allItemList.filter(item => item.status === false)
                }
                if (this.condition === "complete") {
                    this.itemList.splice(0, this.itemList.length);
                    this.itemList = this.allItemList.filter(item => item.status === true);

                }
                if (this.condition === "all") {
                    this.itemList = [];
                    this.itemList = JSON.parse(JSON.stringify(this.allItemList))
                }
            }
        }
    }
</script>

<style>
    @import "assets/css/style.css";

</style>
