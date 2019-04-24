<template>
    <div>
        <h2>{{title}}</h2>
        <button @click="changeTitle">改变</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default{
    data(){
        return {};
    },
    computed:{
        ...mapState('ModuleA', ['title']),
    },
    methods:{
        ...mapMutations('ModuleA', ['changeTitle'])
    }

}
</script>

<style scoped>

</style>