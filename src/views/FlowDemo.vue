<template>
    <div id="flow"></div>
    
</template>

<script>
import echarts from 'echarts';
export default{
    mounted(){
        const chart = echarts.init(document.getElementById('flow'));
        chart.setOption({
            series: [
                {
                    type: 'graph',
                    edgeSymbol: ['none', 'arrow'],
                    data: [
                        {
                            name: '1',
                            x: 300,
                            y: 0,
                            symbolSize: 20,
                            label: {
                                show: true,
                                position: 'inside',
                            }
                        },
                        {
                            name: '2',
                            x: 300,
                            symbolSize: 20,
                            y: 100,
                            label: {
                                show: true,
                                position: 'inside',
                            }
                        },
                        {
                            name: '3',
                            x: 300,
                            y: 200,
                            symbolSize: 20,
                            label: {
                                show: true,
                                position: 'inside',
                            }
                        },
                    ],
                    links: [
                        {
                            target: '2',
                            source: '1'
                        },
                        {
                            target: '3',
                            source: '2'
                        },
                        {
                            target: '1',
                            source: '3'
                        },
                    ]
                },

            ]
        })
    }
}
</script>

<style>
#flow{
    width: 600px;
    height: 600px;
}
</style>