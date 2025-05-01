<template>
    <img :src="avatar" :alt="alt"/>
</template>


<script>
export default {
    name: 'Picture',
    data() {
        return {
            avatar: '/img/avatar.png',
            alt: 'avatar usuario',
        }
    },
}

</script>