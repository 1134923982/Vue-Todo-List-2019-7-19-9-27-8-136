<template>
    <div>
        <el-checkbox v-model="item.status" @change="save(item)"></el-checkbox>
        <span @dblclick="editItem">
            <span v-if="!editable">{{item.content}}</span>
            <input v-model="item.content" @blur="save(item)"
                               @keyup.enter="save(item)" v-else/>
            <i class="el-icon-delete" style="float: right" @click="deleteItem(item)"></i>
        </span>
    </div>
</template>

<script>

    export default {
        name: 'Item',
        props: {item:Object},
        data: function () {
            return {
                editable: false
            }
        },
        methods: {
            editItem: function () {
                this.editable = true;
            },
            save: function (item) {
                this.$store.dispatch('changeItem',item);
                this.editable = false;
            },
            deleteItem(item){
                this.$store.dispatch('deleteItem',item);
            }
        }
    }
</script>

