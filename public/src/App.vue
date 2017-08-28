<template>
  <div id="app">
    <MyItunes></MyItunes>
    <Itunes></Itunes>
  </div>
</template>

<script>
  import Itunes from './components/Itunes'
  import MyItunes from './components/MyItunes'

  export default {
    name: 'app',
    components: {
      Itunes,
      MyItunes
    }
  }

</script>

<style>

</style>