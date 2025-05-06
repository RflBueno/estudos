<template>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            
        };
    },
};
</script>


<style scoped>
    ul {
        list-style-type: none;
        display: flex;
        background-color: #999
    }

    li {
        margin-right: 10px;
    }

    a {
        color: #ddd;
        text-decoration: none;
        transition: .5s;
    }

    a:hover {
        color: teal;
    }
</style>