
<template>
    <div id="flow-chart" :style="style">
        
    </div>
</template>

<script>
import echarts from 'echarts';
export default{
    computed: {
        style(){
            return {
                height: this.getHeight(this.node) * 150 + 'px',
            }
        }
    },
    data(){
        return {
            data: [],   //节点数据
            links: [], //边的数据
        }
    },
    mounted(){
        this.renderChart();
    },
    props:{
        node: {
            type: Object,
            required: true,
        }
    },
    methods:{
        getHeight(node){
            //获取节点的高度
            if(node){
                if(node.children){
                    let left = this.getHeight(node.children[0]), right = this.getHeight(node.children[1]);
                    return left > right ? left  + 1: right + 1;
                }
                return 1;
            }
            return 0;
        },
        renderChart(){
            let node = this.node; 
            if(node){
                this.traverse(node, 400, 0);
                const chart = echarts.init(document.getElementById('flow-chart')), 
                option = {
                    series: [
                        {
                            type: 'graph',
                            edgeSymbol: ['none', 'arrow'],
                            data: this.data,
                            links: this.links,
                        }
                    ]
                };
                chart.setOption(option);
            }

        },
        traverse(node, x, y){
            //遍历节点，生成边和节点对象
            this.data.push(this.createdNode(node, x, y));
            if(node.children){
                const len = node.children.length;
                node.children.forEach((item, index) => {
                    if(len === 1){
                        this.links.push(this.createEdge(item.value, node.value));
                        this.traverse(item, x, y + 60);
                    }else{
                        let offset = -30;  //相邻节点的偏移量
                        if(index){
                            offset = -offset;
                        }
                        this.links.push(this.createEdge(item.value, node.value, index + 1));
                        this.traverse(item, x + offset, y + 60)
                    }
                });
            }
        },
        createdNode(node, x, y){
            //节点的工厂函数, 参数为node, 以及父节点的坐标
            return {
                name: node.value,
                value: node.value,
                x,
                y,
                symbol: node.type === 'condition' ? 'diamond' : 'roundRect',
                symbolSize: [100, 50],
                label: {
                    show: true,
                    position: 'inside',
                }
            }
        },
        /**
         * @description: 生成边对象
         * @param {string} target 目标节点名 
         * @param {string} source 源节点名 
         * @param {number} labelType 标签类型，0：不显示标签，1，标签名为yes, 2. 标签名为no 
         * @return: 边对象
         */
        createEdge(target, source, labelType){
            const edge = {
               target, source,
            }
            if(labelType){
                edge.value = labelType === 1 ? "yes" : 'no';
                edge.label = {
                    show: true,
                    formatter: '{c}'
                }
            }
            return edge;
        }
    }
}

</script>

<style>
#flow-chart{
    width: 800px;
}

</style>