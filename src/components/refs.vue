<template>
    <div>
        <p v-for='i in 5' :key='i' ref='p'>
            {{i}}
        </p>
        <button @click="say">d</button>
    </div>
</template>

<script>
export default{
    methods:{
        say(){
            console.log(this.$refs.p);
        }
    }
}
</script>

<style scoped>

</style>