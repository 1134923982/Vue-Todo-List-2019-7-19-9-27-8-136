<template>
    <div class="container">
        <h2>用户信息：</h2>
        <div style="text-align: center">
            <img width="100px" height="100px" src="../assets/img/1.jpg">
            <div>姓名：{{$store.state.name}}</div>
            <div>电话：12580</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'MyProfile',
        data: function(){
            return {
                // name:''
            }
        },
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
