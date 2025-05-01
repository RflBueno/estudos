<template>
  <div>
    <Header />
    <primeiroComponente />
    <p class="textpai">o dado do app e:</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import primeiroComponente from './components/primeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    primeiroComponente,
    LifeCycle,
    Pessoa,
  }
}
</script>

<style>
  body {
    color: #fff;
    background-color: #333;
  }

  a {
    color: red;
    text-decoration: none;
  }

  .portfolio {
    background-color: black
  }
</style>