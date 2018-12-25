<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" @click="switchTab(0)">首页</van-tabbar-item>
            <van-tabbar-item icon="qr-invalid" @click="switchTab(1)">知识体系</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data () {
        return {
             active:0,//当前选中的标签
        }
    },
    methods:{
         switchTab(number){
            this.$emit("switchTab",number)
            switch(number){
                case 0:
                  this.active = number
                  break;
                case 1:
                  this.active = number
                  break;
            }

        }
    }
}
</script>
<style scoped>

</style>

