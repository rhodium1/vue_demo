<template>
<div>
    <h1>
        <slot name='header' v-bind:user='user'>default header</slot>
    </h1>
    <p>
        <slot></slot>
    </p>
    <h2>
        <slot name="footer"></slot>
    </h2>
</div>
</template>

<script>
export default{
    data(){
        return {
            user:{
                firstName: 'apple',
                lastName:'ok'
            }
        }
    }

}
</script>

<style scoped>

</style>