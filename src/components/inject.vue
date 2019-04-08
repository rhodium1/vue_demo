<template>
    <div>
        <h2>{{value}}</h2>
        <button @click="changeFather">改变</button>
    </div>
</template>

<script>
export default{
    props: ['value'],
    inject: ['changeValue'],
    methods:{
        changeFather(){
            this.changeValue('changed');
        }
    }
}
</script>

<style scoped>

</style>