<template>
    <div>
       <div class="titlebar">
          <titlebar :number="number" ></titlebar>
       </div>
       <div class="container">
           <container :banners="banners" v-show="isShowHome"></container>
           <knowledge v-show="isShow"></knowledge>
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

import { mapState } from 'vuex'
export default {
    data () {
        return {
          isShowHome:true,
          isShow:false,
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
                    break;
               case 1:
                    this.isShowHome = false;
                     this.isShow = true;
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
        lefthome
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
