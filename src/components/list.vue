<template>
    <div>
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh" > -->
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                :offset="600"
                >
                <van-cell
                    v-for="(item,index) in list"
                    :key="index"
                >
                    <a :href="item.link">
                        <div class="item_title" >
                        <span class="item_title1">
                            <van-icon name="manager-o" slot="left"/>
                            {{item.author}}</span>
                        <span class="item_title2">{{item.niceDate}}</span>
                    </div>
                    <p class="item_content">{{item.title}}</p>
                    </a>
                    <div class="item_title" @click="jumpDetail(item.chapterName,list)">
                        <p class="item_chapter">{{item.chapterName}}</p>
                        <van-icon name="like-o" slot="right"/>  
                    </div>
                </van-cell>
            </van-list>
        <!-- </van-pull-refresh> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            totalPage: 0,
            pageNumber: 0,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false,//控制下拉刷新的加载动画
            listAll:[],
            refresh:false,
            href:''
        };
  },

  methods: {
    onLoad() {
        /* eslint-disable */
        console.log('执行onload事件------'+this.pageNumber)
        if(this.pageNumber){
            this.$store.dispatch('home/getListArtils',this.pageNumber)
        }else{
            this.$store.dispatch('home/getListArtils',0)
        }
       
    },
    // onRefresh(){
    //     this.$toast('刷新成功');
    //     //this.pageNumber=undefined;
    //     this.onLoad();
    //     this.refresh = true
    //     this.isLoading = false;
    // }
    jumpDetail(value,list){
        let lists = []
        for(let i=0;i<list.length;i++){
            lists.push({
                name:list[i].chapterName,
                children:[
                    {
                        name:list[i].chapterName,
                        id:list[i].chapterId
                    }
                ]
            })
        }
        this.$router.push({
            path:'/detail',
            query:{
                name:value,
                list:lists
            }
        })
    }
  },
  computed:{
      ...mapState('home',['listData']),
     list(){
          // 加载状态结束
        this.loading = false;
          /* eslint-disable */
            //this.loading_d = false;
           // console.log('被点击了一次')
        if(this.pageNumber ==  this.listData.pageCount){
             this.finished = true;
        }else{
            if(this.refresh){
                this.listAll =[]
               
                this.finished = true;
                this.refresh = false;
            }else{
                this.finished = false;
            }
           
        }

        for(let x in this.listData.datas){
           // console.log("每一条数据::"+this.listData.datas[x])
            this.listAll.push(this.listData.datas[x]);
        }
        this.pageNumber=this.listData.curPage
        this.totalPage = this.listData.pageCount;
        // console.log(this.listAll+"0000000000000000")
         return this.listAll
     },
  }
}
</script>
<style scoped>
.item_title{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.item_title1{
    color: black;
    font-size: 14px;
}
.item_title2{
    margin-top: 10px;
    color: #666;
    font-size: 14px;
}
.item_chapter{
    margin-top: 10px;
    color: dodgerblue;
}
.item_content{
    font-size: 18px;
    color: black;
}
</style>

