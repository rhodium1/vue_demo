<template>
    <button @click="change">点击</button>
</template>

<script>
export default{
    props:['title'],
    methods:{
        change(){
            this.$emit('update:title', 'newTitle');
        }
    }
}
</script>

<style scoped>

</style>