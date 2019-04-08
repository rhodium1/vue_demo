<template>
    <div>
        <h1>hello {{user}}</h1>
        <button @click="goToPageA">跳转</button>
    </div>
</template>

<script>
export default{

    props:['user'],
    methods:{
        goToPageA(){
            this.$router.push({
                path: '/pageA',
                query:{
                    id:123
                }
            }, function(){
                console.log('complete');
            }, function(){
                console.log('abord');
            })
        }
    }

}
</script>

<style scoped>

</style>