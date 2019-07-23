<template>
    <div>
        <h2>{{title}}</h2>
        <p><em>{{subTitle}}}</em></p>
    </div>
</template>

<script>

    export default {
        name: 'TodoTitle',
        props: ['title', 'subTitle']
    }
</script>

<style>
    /*@import "assets/css/style.css";*/

</style>
