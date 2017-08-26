<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'
import Itunes from './components/Itunes'
import MyItunes from './components/MyItunes'

export default {
  name: 'app',
  components: {
    Home,
    Itunes,
    MyItunes
  }
}
</script>

<style>
</style>
