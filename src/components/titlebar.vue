<template>
    <div>
        <van-nav-bar :title="(number==0)?'玩Android':(number==1)?'知识体系':(number==2)?'Hot':'Login'" class="title set_color">
            <van-icon name="bars" slot="left" class="set_color" @click="left_plane(3)"/>
            <van-icon name="fire-o" slot="right"  class="set_color hot" @click="switchTab(2)"/>
            <van-icon name="search" slot="right"  class="set_color" @click="searchPage()"/>
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
        left_plane(number){
           this.$emit('switchTab',number)
        },
        switchTab(number){
            this.$emit('switchTab',number)
        },
        searchPage(){
            //跳转到搜索页面
            this.$router.push({
               path:'/search'
            })
        }
    }
}
</script>
<style scoped>
.title{
    background: dodgerblue;
}
.hot{
    margin-right: 20px;
}
.set_color{
    color: white;
}
</style>


