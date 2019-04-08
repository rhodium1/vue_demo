<template>
<div>
    <input type="text" @input="$emit('input', $event.target.value)">
</div>
</template>

<script>
export default{
    props: ['value'],
    data(){
        return {
            ownValue: ""
        }
    },
    methods:{
        inputhandler(e){
            this.$emit('value-change', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>