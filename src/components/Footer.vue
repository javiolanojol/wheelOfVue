<template>
  <footer>
    <section>
      <article></article>
    </section>
    <section>
      <button @click="actionKill">Matar</button>
    </section>
  </footer>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  name: "Footer",
  computed:{
    ...mapState(['listado'])

  },
  methods:{
    ...mapActions(['actionKill'])

  }
}
</script>

<style scoped>

</style>