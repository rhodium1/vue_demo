<template>
    <div>
        <base-input v-model="todos"/>
        <h2>{{todos}}</h2>
    </div>
</template>

<script>
import BaseInput from './base-input';
export default{
    data:function(){
            return {
            todos: ""
        };
    },
//   model:{
//         prop:'todos',
//         event:"update-todos"
//     },
    components:{
        BaseInput,
    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>