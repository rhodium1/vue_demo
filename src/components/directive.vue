<template>
    <div v-say>directive
        <hello-world v-say/>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld';
export default{
    directives:{
        say:{
            inserted(el){
                console.log(el);
            }
        }
    },
    components:{
        HelloWorld,
    }

}
</script>

<style scoped>

</style>