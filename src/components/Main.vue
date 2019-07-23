<template>
    <div>
        <el-input v-model="name" placeholder="请输入您的名字"></el-input>
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
                this.$store.commit('updateName',this.name)
                this.$router.push({
                    name: 'index',
                    params: {
                        name:this.name
                    }
                })
            }
        },
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
