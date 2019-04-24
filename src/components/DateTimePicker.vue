<template>
    <div>
        <el-badge :value="12">
        <el-date-picker 
        v-model='time' 
        type="datetime"
        :picker-options="pickerOption">
        </el-date-picker>
        </el-badge>

    </div>
</template>

<script>
export default{
    data(){
        return {
            time: '',
            pickerOption: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker){
                        picker.$emit('pick', new Date());
                    }
                },{
                    text: '昨天',
                    onClick(picker){
                        picker.$emit('pick', new Date(new Date().valueOf() - 3600 * 1000 * 24));
                    }
                }]
            }
        }
    }
}
</script>

<style scoped>

</style>