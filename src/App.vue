<template>
    <div id="app">
      hhhh
      <flow-chart :children="nodes"></flow-chart>
    </div>
</template>

<script>
import store from './store';
import router from './router';
import FlowChart from './views/FlowChart';
export default {
    name: 'app',
    store,
    router,
    components: {
        FlowChart,
    },
    data() {
        return {
          nodes: [
            {id: 0,}, 
            {
              id: 2, type: 'condition', children: [
                [{
                  id: 3,
                }, {
                  id:7
                }],
                [
                  {
                  id: 4,
                  type: 'condition',
                  children: [
                    [{id: 5}],
                    [{id: 6}]
                  ],
                  conditions: ['条件2.1', '条件2.2']
                }
                ]
              ],
              conditions: ['条件1', '条件2']
            }
          ]
        }
    },
    computed: {},

}
</script>


<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
