<template>
    <div id="app">
        <div class="container">
            <TodoTitle v-bind:title="title" v-bind:subTitle="subTitle"/>
            <AddTodo></AddTodo>
            <TodoList/>
            <TabGroup></TabGroup>
        </div>
    </div>
</template>

<script>
    import TodoList from "./TodoList"
    import AddTodo from "./AddTodo";
    import TabGroup from './TabGroup'
    import TodoTitle from './TodoTitle'

    export default {
        name: 'app',
        data: function(){
          return {
              title: 'Jquery To Do List',
              subTitle: 'Simple Todo List with adding and filter by diff status.'
          }
        },
        mounted: function () {
            this.$store.dispatch("getAllTodoList")
        },
        components: {AddTodo,TodoList,TabGroup,TodoTitle},
    }
</script>

<style>
    @import "../assets/css/style.css";

</style>
