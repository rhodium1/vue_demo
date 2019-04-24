<template>
    <el-container>
        <el-aside>
            <el-menu @open='handleOpen' index='0'>
                <el-submenu index='1'>
                    <template slot='title'>
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-submenu index='2'>
                        <template slot="title">
                            <span>组一</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item>
                                选项一
                            </el-menu-item>
                            <el-menu-item>
                                选项二
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index='3'>
                        <template slot="title">
                            <span>组二</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item>
                                选项一
                            </el-menu-item>
                            <el-menu-item>
                                选项二
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-submenu>

            </el-menu>
        </el-aside>
        <el-header>
            Header
        </el-header>
        <el-main>
            <el-button :loading="loading" type="primary" @click="send">下载中</el-button>
            <el-radio-group v-model="radioValue">
                <el-radio label="选项1">选项1</el-radio>
                <el-radio label="选项2">选项2</el-radio>
                <el-button-group>
                    <el-button circle icon='el-icon-plus' type="info"></el-button>
                    <el-button circle icon='el-icon-plus' type="danger"></el-button>
                </el-button-group>
            </el-radio-group>
            
        </el-main>
        <el-footer>
            footer
        </el-footer>
    </el-container>
</template>

<script>
import { setTimeout } from 'timers';
export default{
    data(){
        return {
            loading: true,
            radioValue: ''
        };
    },
    mounted() {
      setTimeout(()=>{
          this.loading = false;
      }, 5000)  
    },
    methods:{
        send(){
            this.loading = true;
            setTimeout(()=> {
                this.loading = false;
            }, 3000);
        },
        handleOpen(index, indexPath){
            console.log(index, indexPath);
        }
    }
}
</script>

<style scoped>

</style>