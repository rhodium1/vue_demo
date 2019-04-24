<template>
        <div class="branch-box-wrap">
            <div class="branch-box">
                <div class="col-box"  v-for="(col, index) in conditions" :key='index'>
                    <div class="line"></div>
                        <div class="top-left-cover-line" v-if='index === 0'></div>
                        <div class="top-rignt-cover-line" v-if='index === conditions.length - 1'></div>
                        <node :name='col'/>
                        <FlowChart :children="children[index]"/>
                        <div class="bottom-left-cover-line" v-if="index === 0"></div>
                        <div class="bottom-right-cover-line" v-if="index === conditions.length - 1"></div>
                </div>
            </div>
            <div class="add-node-btn">
                <div class="line"></div>
                    <span class="add-icon">
                            +
                        </span>
            </div>
        </div>
</template>

<script>
import Node from './Node';
export default{

    props: {
        conditions: {
            type: Array
        },
        name: {
            type: [String, Number]
        },
        children: {
            type: Array
        }
    },
    components:{
        FlowChart: () => import('./index.vue'),
        Node,
    }
}
</script>

<style>
        .branch-box{
            display: inline-flex;
            border-top: 2px solid #ccc;
            border-bottom: 2px solid #ccc;
            justify-content: center;
            position: relative;
        }
        .branch-box-wrap{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .col-box{
            display: flex;
            justify-content: center;
            position: relative;
            flex-direction: column;
        }
        .inner-node{
            margin-top: 20px;
        }
        .top-left-cover-line{
            width: 50%;
            background-color: white;
            height: 3px;
            position: absolute;
            top: -2px;
            left: 0;
        }
        .top-rignt-cover-line{
            width: 50%;
            background-color: white;
            height: 3px;
            top: -2px;
            right: 0;
            position: absolute;
        }
        .bottom-left-cover-line{
            width: 50%;
            background-color: white;
            height: 3px;
            position: absolute;
            bottom: -2px;
            left: 0;
        }
        .bottom-right-cover-line{
            width: 50%;
            background-color: white;
            height: 3px;
            position: absolute;
            bottom: -2px;
            right: 0;
        }
</style>