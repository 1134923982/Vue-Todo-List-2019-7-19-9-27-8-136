<template>
    <div>
        <div id="filters">
            <span id="all"><a @click="filterList('all')">All</a></span>
            <span id="active"><a @click="filterList('active')">Active</a></span>
            <span><a @click="filterList('complete')">Complete</a></span>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ItemList',
        data: function () {
            return {}
        },
        methods: {
            filterList: function (condition) {
                this.$store.commit('updateCondition', condition);
            }
        }
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
