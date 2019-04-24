import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);//use一下
const ModuleA = {
    namespaced: true,
    state:{
        title:'moduleA',
    },
    mutations:{
        changeTitle(state, v){
            state.title = v;
        }
    }
}
const store = new Vuex.Store({  //创建store
    state:{  //数据
        count: 0,
        todos:[
            {done: true, title: "go to school"},
            {done: false, title: "go to mall"},
            {done: false, title: "go to home"},
        ]
    },
    mutations:{//同步改变数据的方法
        increment(state, num){
            state.count = state.count + num;
        }
    },
    actions:{//异步改变数据的方法
        actionA({commit}){
            return new Promise((res) => {   //返回一个promise能在action完成后返回一个promise
                setTimeout(() => {
                    commit('increment', 10);
                    res(20);
                }, 5000);
            })
        },
        async actionB({dispatch, commit}){
            const num = await dispatch('actionA');
            setTimeout(() => {
                commit('increment', num);
            }, 5000);
        }
    },
    getters:{
        unDoneTodos(state){
            return state.todos.filter((item) => !item.done);
        }
    },
    modules:{
        ModuleA,
    }
});

export default store;