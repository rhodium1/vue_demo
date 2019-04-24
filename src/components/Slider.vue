<template>
  <div class="block">
    <el-slider
      v-model="value9"
      range
      :max="100">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value9: [0, 0]
      }
    },
    methods:{
      comValue(){
        
      }
    }
  }
</script>