<template>
<label>baseinput
    <input type="text" v-on='inputListeners'/>
</label>
</template>

<script>
export default{
    computed:{
        inputListeners(){
            let vm = this;
            console.log('computing');
            return Object.assign({}, vm.$listeners, {input(e){
                vm.$emit('input', e.target.value);
            }})
        }
    }
}
</script>

<style scoped>

</style>