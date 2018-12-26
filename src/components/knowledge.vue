<template>
    <div class="k_content">
         <van-list
            :offset="600">
                <van-cell
                    v-for="(item,p) in list"
                    :key="p"
                    @click.native="jumpdetail(item.name,list)"
                    >
                    <div>
                        <p class="item_title">{{item.name}}</p>
                        <div class="icon_item"> <van-icon name="arrow" slot="right"  class="set_color" /></div>
                         <van-list>
                             <p class="k_p"
                                 v-for="(item1,index) in item.children"
                                 :key="index">  
                                <span>{{item1.name}}&nbsp;&nbsp;&nbsp;</span> 
                            </p>
                            
                         </van-list>
                         
                    </div>   
                </van-cell>
         </van-list>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            listAll:[]
        };
    },
    methods: {
        /* eslint-disable */
        jumpdetail(value,list){
            //console.log(list)
            this.$router.push({
                path:'/detail',
                query:{
                    name:value,
                    list:list
                }
            })
        }
    },
     computed:{
        ...mapState('knowledge',['knowledges']),
        list(){
            /* eslint-disable */
            for(let x in this.knowledges){
                this.listAll.push(this.knowledges[x]);
            }
            // 加载状态结束
           // console.log(this.knowledges+"0000000000000000")
            return this.listAll
        },
    },
    created(){
        this.$store.dispatch('knowledge/getKnowledge')
    }
}
</script>
<style scoped>
.set_color{
    align-items: flex-end;
    color: black;
}
.icon_item{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.k_p{
    display: inline-block;
}
.item_title{
    font-size: 18px;
}
.k_content{
    margin-bottom: 60px;
}
</style>


