<template>
    <h1>
        {{title}}
    </h1>
</template>

<script>
export default{
    data(){
        return {
            shouldLeave: false,
        }
    },
    computed:{
        title(){
            return this.$route.meta.title;
        }
    },
    beforeRouteLeave(to, from, next){
        const canLeave = confirm("是否离开");
        if(canLeave){
            next();
        }else{
            location.hash = '#/crm-manager';
        }
        
    }
}
</script>

<style scoped>

</style>