<template>
    <div class="root">
        <div class="search_title">
            <div @click="backgo" class="back"><van-icon name="arrow-left" slot="left" /></div>
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                class="content"
            >
                <div slot="action" @click="onSearch" >搜索</div>
            </van-search>
        </div>
        <div class="search_content"  v-show="!load&&first" >
             <van-list 
                :finished="finished"
                finished-text="没有更多了"
                :offset="300"
                >
                <van-cell
                    v-for="item in list"
                    :key="item.id"
                >
                    <a :href="item.link">
                        <div class="item_title">
                        <span class="item_title1">
                            <van-icon name="manager-o" slot="left"/>
                            {{item.author}}</span>
                        <span class="item_title2">{{item.niceDate}}</span>
                    </div>
                    <p class="item_content">{{item.title}}</p>
                    </a>
                    <div class="item_title">
                        <p class="item_chapter">{{item.chapterName}}</p>
                        <van-icon name="like-o" slot="right"/>  
                    </div>
                </van-cell>
            </van-list>
        </div>
        <div v-show="load" class="loadSpinner">
            <van-loading type="spinner" color="white" class="load_" />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            value:'',
            totalPage: 0,
            pageNumber: 0,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            listAll:[],
            load :false,
            first :false,
            href:''
        }
    },
    methods:{
         /* eslint-disable */ 
        backgo(){
            //要让页面数据清空
            this.first = false
            this.$router.back()
        },
        onSearch(){
           
            let keyword = this.value
             if(keyword===''){
                 this.$toast('搜索的内容不能为空!')
                 return
             }
             this.first = true
             this.load = true
            //发送dispatch分发
              if(this.pageNumber){
                   let page = this.pageNumber
                    this.$store.dispatch('search/getSearch',{
                         page,
                         keyword
                    })
                }else{
                    let page = 0
                    this.$store.dispatch('search/getSearch',{
                      page,
                      keyword
                   })
                }
             
        }
    },
     computed:{
      ...mapState('search',['search']),
     list(){
          // 加载状态结束
        this.load = false
        this.loading = false;
        if(this.pageNumber ==  this.search.pageCount){
             this.finished = true;
        }else{
            this.finished = false;
        }

        for(let x in this.search.datas){
           // console.log("每一条数据::"+this.listData.datas[x])
            this.listAll.push(this.search.datas[x]);
        }
        this.pageNumber=this.search.curPage
        this.totalPage = this.search.pageCount;
        // console.log(this.listAll+"0000000000000000")
         return this.listAll
     },
  },
  created(){
     let key =  this.$route.query.keyword
     this.value = key
     if(this.value !=""){
         this.onSearch()
     }
  }
}
</script>
<style scoped>
.search_title{
    display: flex;
    flex-wrap: nowrap;
    
    align-items: center;
    background: #f2f2f2;
}
.content{
     caret-color:red;
     background: #1e90ff;
     font-size: 16px;
}
.back{
    margin-left: 10px;
    padding: 5px;
}

.search{
    background: dodgerblue;
    margin-left: 35px;
}
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

.loadSpinner{
    text-align: center;
}
.load_{
    margin: 60% auto;
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .5);
}

</style>


