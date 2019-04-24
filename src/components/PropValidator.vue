<template>
    <ul>
        <li v-for='todo in todos' :key='todo.title'>{{todo.title}}</li>
    </ul>
</template>

<script>
export default{
    props:{
        todos: {
            type: Array,
            default: function(){
                return [{title:'default'}]
            }
        }
    }
}
</script>

<style scoped>

</style>