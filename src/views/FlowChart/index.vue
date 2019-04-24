<template>
    <div>
        <div v-for="child in children" :key="child.id">
            <node v-if="child.type !== 'condition'" :name='child.id'/>
            <branch v-else :conditions="child.conditions"  :children="child.children"/>
        </div>
    </div>
</template>

<script>
import Node from './Node';
import Branch from './Branch';
export default{
    props: {
        children: Array,
    },
    components: {
        Node,
        Branch
    }
}
</script>

<style scoped>

</style>