<template>
    <div>
        <h2>Meu formulario</h2>
        <form action="" @submit="enviarForm($event)">
        <div>
            <InputText />
        </div>
        <div>
            <InputText />
        </div>
        <div>
            <Submit />
        </div>
    </form>
    </div>
   
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

    export default {
        name: 'Form',

        components: {
            InputText,
            Submit,
        },
        methods: {
            enviarForm(e) {
                e.preventDefault()
                alert('Formulario enviado!')
            }
        }
    }
</script>