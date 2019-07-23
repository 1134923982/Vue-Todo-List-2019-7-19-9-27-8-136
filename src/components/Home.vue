<template>
    <el-container style="min-height: 1000px">
        <el-header>
            <el-button type="primary" @click="open" style="float: left;margin: 10px">返回</el-button>
            <!--            <el-button style="float: left;margin: 10px">返回</el-button>-->
            <span class="el-alert--info" style="margin-top: 3px;float: right">用户名：{{name}}</span>
        </el-header>
        <el-container>
            <el-aside width="200px" height>
                <el-tag type="success">
                    <router-link :to="{name:'todoLists'}">todoList</router-link>
                </el-tag>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>

</template>

<script>
    import TodoLists from './TodoLists'

    export default {
        name: 'Home',
        components: {TodoLists},
        data: function () {
            return {}
        },
        methods: {
            open() {
                this.$confirm('确定返回欢迎页面？, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push({name:'main'})
                }).catch(() => {
                });
            }
        },
        computed: {
            name: function () {
                return this.$route.params.name
            }
        }
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>
