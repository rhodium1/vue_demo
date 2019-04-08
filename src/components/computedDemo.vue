<template>
    <div>
        <h2>{{prop1}}</h2>
        <h2>{{p1}}</h2>
        <button @click="change">点击</button>
    </div>
</template>

<script>
export default{
    data(){
        return {
            prop1: 'apple',
            prop2: 'green'
        }
    },
    computed:{
        p1(){
            console.log('change');
            return this.prop2 + 'good';
        }
    },
    methods:{
        change(){
            this.prop2 = 'lll';
        }
    }
}
</script>

<style scoped>

</style>