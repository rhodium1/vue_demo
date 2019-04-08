<template>
    <div>
        <button @click="toggleShow">toggle</button>
        <transition name="fade">
            <h1 v-if='show'>hello</h1>        
        </transition>
    </div>
</template>

<script>
export default{
    data(){
        return {
            show: true
        };
    },
    methods:{
        toggleShow(){
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active{
    transition: all linear 2s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}

</style>