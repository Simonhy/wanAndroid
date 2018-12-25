<template>
    <div>
        <van-nav-bar :title="!number?'玩Android':'知识体系'" class="title set_color">
            <van-icon name="bars" slot="left" class="set_color" @click="left_plane"/>
            <van-icon name="search" slot="right"  class="set_color" />
           
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    props:['number'],
    methods:{
        //显示左侧面板
        left_plane(){
            //路由跳转
        //    this.$router.push({
        //        path:'/lefthome'
        //    })
        }
    }
}
</script>
<style scoped>
.title{
    background: dodgerblue;
}
.set_color{
    color: wheat;
}
</style>


