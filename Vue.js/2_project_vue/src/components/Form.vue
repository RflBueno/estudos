<template>
    <div>
        <h2>Meu formulario</h2>
        <form action="">
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
        }
    }
</script>