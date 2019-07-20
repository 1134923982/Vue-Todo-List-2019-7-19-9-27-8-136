<template>
  <div id="app">
    <div class="container">
      <div>
        <h2>Jquery To Do List</h2>
        <p><em>Simple Todo List with adding and filter by diff status.</em></p>
      </div>
      <div>
        <input class="input-text" type="text" name="ListItem">
        <div id="button">Add</div>
      </div>
      <br>
      <ol></ol>
      <div>
        <div id="filters">
          <span><a>All</a></span>
          <span><a>Active</a></span>
          <span><a>Complete</a></span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  @import "assets/css/style.css";

</style>
