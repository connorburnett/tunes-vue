<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <itunes class="Itunes"></itunes>
    <MyItunes class="MyItunes"></MyItunes>
  </div>
</template>

<script>
  import Itunes from './Itunes'
  import MyItunes from './MyItunes'

  export default {
    name: 'home',
    data() {
      return {
        genre: '',

      }
    },
    components: {
      Itunes,
      MyItunes
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }

</script>


<style>
  .Itunes {
    background: cadetblue;
    min-height: 500px;
    min-width: 45%;
  }

  .MyItunes {
    min-height: 500px;
    min-width: 50%;
    background: coral;
  }
</style>