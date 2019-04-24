<template>
    <el-container>
         <el-aside>
             <div class="logo-box">
                 <span>CRM</span>
             </div>
             <el-menu :router="true">
                <el-submenu v-for="(route, index) in routes" :key='"submenu" + index' index='1'>
                    <template slot="title">
                        {{route.meta.title}}
                    </template>
                    <el-menu-item v-for="(ch) in route.children" :key='ch.meta.title' :index="ch.path">
                        {{ch.meta.title}}
                    </el-menu-item>
                </el-submenu>
             </el-menu>
             
        </el-aside>
        <el-container>
            <el-header>
                
            </el-header>
           
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default{
    computed:{
        routes(){
            return this.$router.options.routes;
        }
    }
}
</script>

<style scoped>

</style>