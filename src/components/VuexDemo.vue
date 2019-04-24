<template>
    <div>
        <input type="text" v-model="title">
        <button @click="change">改变</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default{
    data(){
        return {
            title: ''
        }
    },
    methods:{
        ...mapMutations('ModuleA',['changeTitle']),
        change(){
            this.changeTitle(this.title);
        }
    }
}
</script>

<style scoped>

</style>