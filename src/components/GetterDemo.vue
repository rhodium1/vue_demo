<template>
    <ul>
        <li v-for='todo in todos' :key="todo.title">{{todo.title}}</li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        todos(){
            return this.$store.getters.unDoneTodos;
        }
    }
}
</script>

<style scoped>

</style>