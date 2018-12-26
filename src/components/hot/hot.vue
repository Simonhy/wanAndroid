<template>
    <div class="root">
        <div class="hot_key">
            <p class="key_title">大家都在搜</p>
            <div class="key_content" >
                <span v-for="item in keys" :key="item.id" class="span_">
                    <van-tag round plain  class="tag" :type="type" @click.native="jump(item.name)">{{item.name}} </van-tag>
                </span>
            </div>
        </div>
        <div class="comon_net">
            <p class="key_title">常用网站</p>
            <div class="common_content">
                 <span v-for="item in commons" :key="item.id" class="span_">
                    <van-tag round plain  class="tag" :type="type">
                        <a :href="item.link" >{{item.name}}</a>    
                    </van-tag>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    created(){
        this.$store.dispatch('hot/getHotKeys')
        this.$store.dispatch('hot/getCommonHot')
    },
    computed:{
        ...mapState('hot',['keys','commons']),
        type(){
            let arr = ['danger','primary','success','']
            let index = Math.floor((Math.random()*arr.length))
            return arr[index]
        }
    },
    data () {
        return {
           href:''
        }
    },
    methods:{
        /* eslint-disable */
        jump(value){
            this.$router.push({
               path:'/search',
               query:{
                   keyword:value
               }
            })
        }
    }
    
}
</script>
<style scoped>
.root{
    margin-bottom: 60px;
}
.key_title{
    padding: 10px;
    background: white;
    font-size: 18px;
    color: black;
}
.key_content,.common_content{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}
.tag{
    font-size: 16px;
    padding: 8px;
    display: inline-block; 
}
.span_{
    padding: 10px;
}

</style>


