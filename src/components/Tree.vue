<template>
    <el-tree :data='data' node-key='id' ref="tree">
        <span slot-scope="{node, data}">
            <span v-if="data.type !== 'text'">
                <span>{{data.label}}</span>
                <span>
                    <i class="el-icon-plus" @click="append(data)"></i> <i class="el-icon-delete" @click="remove(node, data)"></i>
                </span>
            </span>
            <span v-else>
                <input type="text"><el-button type="primary" size="mini" @click="()=>{confirm(node, data)}">确定</el-button>
            </span>
        </span>
    </el-tree>
</template>

<script>
let id = 1000;
export default{
    data(){
        return {
            data: [
                {
                    label: '一级',
                    id: 1,
                    children: [
                        {
                            label: '二级',
                            id: 2,
                            children: [
                                {label: '三级'}
                            ]
                        },
                        {
                            id: 3,
                            label: '二级1'
                        },
                        {
                            id: 4,
                            label: '二级2'
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        append(node, data){
            this.$refs.tree.append({type: 'text', id: id++, children: []}, node);
        },
        remove(data){
            this.$refs.tree.remove(data);

        },
        confirm(node, data){
            console.log(node);
            this.remove(data);
            this.$refs.tree.append({label:'new', id: id++, children: []}, node);
            
        }
    }
}
</script>

<style scoped>

</style>