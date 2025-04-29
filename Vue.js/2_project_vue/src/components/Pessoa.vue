<template>
    <div>
        <h2> Esta é a descrição da pessoa: {{ nome }} </h2>
        <Info />
        <Form />
    </div>
</template>

<script>
    import Info from './Info.vue'
    import Form from './Form.vue'
    export default {
        name: "Pessoa",
        components: {
            Info,
            Form
        },
        // props: {
        //     nome: {
        //         type: String,
        //         required: true
        //     },
        //     idade: {
        //         type: Number,
        //         required: true
        //     }
        // },
        data() {
            return {
                nome: "Rafael"
            }
        }
    }

</script>