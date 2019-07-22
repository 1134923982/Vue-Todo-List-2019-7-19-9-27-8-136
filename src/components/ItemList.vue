<template>
    <div id="app">
        <div class="container">
            <ListHeader></ListHeader>
            <List/>
            <ListButton/>
        </div>
    </div>
</template>

<script>
    import ListHeader from "./ListHeader";
    import List from "./List";
    import ListButton from './ListButton'

    export default {
        name: 'ItemList',
        components: {ListHeader,List,ListButton},
    }
</script>

