import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);//use一下
const store = new Vuex.Store({  //创建store
    state:{  //数据
        count: 0,
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
    }
});

export default store;