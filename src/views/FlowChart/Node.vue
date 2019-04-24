<template>
         <div class="node-wrap">
            <div class="node">
                {{name}}
            </div>
            <div class="line"></div>
            <div class="add-node-btn">
                
                <span class="add-icon">
                    +
                </span>
            </div>
        </div>
</template>

<script>
export default{
    props: ['name']

}
</script>

<style>
 .node-wrap{
            display: flex;
            padding:0 20px;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            position: relative;
            background-color: white;
            z-index: 30;
        }
        .node{
            width: 220px;
            min-height: 75px;
            background: rgb(87, 106, 149);
            z-index: 20;
            margin-top: 20px;
        }
        .add-node-btn{
            width: 220px;
            height: 82px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .add-icon{
            width: 30px;
            height: 30px;
            background-color: #3296fa;
            border-radius: 50%;
            line-height: 30px;
            text-align: center;
            z-index: 20;
        }
        .line{
            display: block;
            position: absolute;
            width: 2px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: #cacaca; 
            margin: auto;
            z-index: 10;
        }

</style>