<template>
    <h1>meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
    name: "LifeCycle",
    data() {
        return {
            nome: "Rafael",
            cargo: "Assistente de T.I" 
        }
    },

    created() {
        // console.log("O componente foi criado!")
        setTimeout(() => {
            this.nome = "Raquel Martins"
            this.cargo = "Desenvolvedor Front-End"
        }, 1000)
        // this.nome = "Rafael Bueno"
        // this.cargo = "Desenvolvedor Front-End"
        // this.lifeCycle()
    },
    mounted() {
        console.log("O componente foi montado!")
        // this.lifeCycle()
    },
    beforeDestroy() {
        console.log("O componente vai ser destruído!")
    },
    methods: {
        // console.log("O componente foi atualizado!")
        // setTimeout(() => {
        //     this.nome = "Raquel Martins"
        //     this.cargo = "Desenvolvedor Front-End"
        // }, 1000)
        lifeCycle() {
            console.log("exec o ciclo de vida!")
            setTimeout(() => {
                this.nome = "Raquel Martins"
                this.cargo = "Desenvolvedor Front-End"
            }, 1000)
        }
    },
}
</script>