<template>
  <div id="app">
    <section class="hero is-warning is-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered	">
           WRIDEX
          </h1>
          <h2 class="subtitle has-text-centered	">
            We build this for you
          </h2>
        </div>
      </div>
    </section>
    <home/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
export default {
  el: '#app',
  components: {
    Home
  }
}
</script>