<template>
<label>{{todos}}
    <input type="text" @input='inputHandler'/>
</label>
</template>

<script>
export default{
    props:['todos'],
    computed:{
        
    },
    model:{
        prop:'todos',
        event:"update-todos"
    },
    methods:{
        inputHandler(e){
            this.$emit('update-todos', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>