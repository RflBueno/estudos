<template>
  <div>
    <primeiroComponente />
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import primeiroComponente from './components/primeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'

export default {
  name: 'App',
  components: {
    primeiroComponente,
    LifeCycle,
    Pessoa,
  }
}
</script>