<template>
    <div>
       <div class="titlebar">
          <titlebar :number="number" @switchTab="switchTabs" ></titlebar>
       </div>
       <div class="container">
           <container :banners="banners" v-show="isShowHome"></container>
           <knowledge v-show="isShow"></knowledge>
           <hot v-show="isHot"></hot>
           <lefthome v-show="isLeft"></lefthome>
       </div>
       <div class="bottom" >
            <BottomTabBar @switchTab="switchTabs" ></BottomTabBar>
       </div>
    </div>
</template>

<script>
import titlebar from './titlebar'
import BottomTabBar from './BottomTabBar'
import container from './conatiner'
import knowledge from "./knowledge";
import lefthome from './login/lefthome'
import hot  from './hot/hot'

import { mapState } from 'vuex'
export default {
    data () {
        return {
          isShowHome:true,
          isShow:false,
          isHot:false,
          isLeft:false,
          number:0,
          isShowLeft:false
        }
    },
    methods:{
       switchTabs(number){
           switch(number){
               case 0:
                    this.isShowHome = true;
                    this.isShow = false;
                    this.isHot = false;
                    this.isLeft = false;
                    break;
               case 1:
                    this.isShowHome = false;
                    this.isShow = true;
                    this.isHot = false;
                    this.isLeft = false;
                    break
                case 2:
                     this.isShowHome = false;
                     this.isShow = false;
                      this.isLeft = false;
                     this.isHot = true;
                    break
                case 3:
                    this.isShowHome = false;
                     this.isShow = false;
                     this.isHot = false;
                     this.isLeft = true;
                     break
                    
           }
           this.number = number;
           //this.$toast('number'+number)
       },

    },
    components:{
        /* eslint-disable */
        titlebar,
        container,
        BottomTabBar,
        knowledge,
        lefthome,
        hot
    },
    created(){
        /* eslint-disable */
       //发起一个dispatch请求
       this.$store.dispatch('home/getBanners')
       //this.$store.dispatch('knowledge/getKnowledge')
    },
     computed:{
        //得到数据,进行展示
        ...mapState('home',['banners'])
    }
}
</script>
<style scoped>
</style>
