<template>
    <div>
        <el-input v-model="name"></el-input>
        <el-button @click="gotoIndexPage">开始使用</el-button>
    </div>
</template>

<script>
    export default {
        name: 'ItemList',
        data: function () {
            return {
                name: "",
            }
        },
        methods:{
            gotoIndexPage: function () {
                this.$router.push({
                    name: 'index',
                    params: {
                        name:this.name
                    }
                })
            }
        }
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
