<template>
  <div>
    <h1> Ola Vue </h1>
    <p>Meu nome e {{ nome }} e meu cargo atual e {{ cargo }} </p>
    
  </div>
</template>

<script>
export default {
  name: "primeiroComponente",
  data() {
    return {
      nome: "Rafael",
      cargo: "Assistente de T.I"
    }
  }
}
</script>