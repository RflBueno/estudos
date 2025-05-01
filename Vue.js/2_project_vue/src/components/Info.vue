<template>
    <div>
        <p v-if="estaTrabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias</p>
            <ul>
                <li>Vue.js</li>
                <li>JavaScript</li>
                <li>Python</li> 
            </ul>
            <div>
                <button @click="showEmail">{{ textoBtn }}</button>
            </div>
            <p v-show="mostrarEmail">Mande uma mensagem para: {{ email }}</p>
            <p class="portfolio"> Para acessar meu portfolio <a v-bind:href="meuLink" target="_blank">basta clicar aqui</a></p>
            <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue';
    export default {
        name: 'Info',
        components: {
            Picture,
        },
        data() {
            return {
                estaTrabalhando: false,
                mostrarEmail: false,
                email: 'devBueno@hotmail.com',
                meuLink: 'https://google.com',
                textoBtn: 'Mostrar email',
            }
        },
        methods: {
            showEmail() {
                // console.log('emailzao da massa');
                this.mostrarEmail = !this.mostrarEmail;
                if (this.mostrarEmail) {
                    this.textoBtn = 'Esconder e-mail';
                } else {
                    this.textoBtn = 'Mostrar e-mail';
                }
            }
        },
    }
</script>

<style>
    .textpai{
        background-color: #000;
        color: red;
    }
</style>
