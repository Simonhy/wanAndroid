<template>
    <div>
        <div class="detail_title">
            <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="back">
                <van-icon name="search" slot="right" class="sett" @click="jumpSearch()"/>
                <van-icon name="ellipsis" slot="right" class="sett"/>
            </van-nav-bar>
            <div>
                <van-tabs  @click="switchTab">
                    <van-tab v-for="(item,index) in list" :title="item.name" 
                    :key="index"
                    ellipsis 
                     >
                       <div class="item_content">
                            <van-list
                                v-model="loading_d"
                                :finished="finished_d"
                                finished-text="没有更多了"
                                @load="onLoad(item.id)"
                                >
                                    <van-cell
                                        v-for="(item1,index) in listContent"
                                        :key="index"
                                    >
                                    <a :href="item1.link">
                                        <div class="item_title" >
                                                <span class="item_title1">
                                                    <van-icon name="manager-o" slot="left"/>
                                                    {{item1.author}}</span>
                                                    <span class="item_title2">{{item1.niceDate}}</span>
                                        </div>
                                        <p class="item_content">{{item1.title}}</p>
                                    </a>
                                    <div class="item_title">
                                          <p class="item_chapter"></p>
                                        <van-icon name="like-o" slot="right"/>  
                                    </div>
                                    </van-cell>
                            </van-list>
                       </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    created(){
        let name = this.$route.query.name
        this.title = name
       let listA = this.$route.query.list
       for(let i =0;i<listA.length;i++){
           if(listA[i].name==name){
               this.list = listA[i].children
           }
       }
    },
    data() {
        return {
            title:'',
            list:[],
            listAll1:[],
            totalPage_d: 0,
            pageNumber_d: 0,
            loading_d: false,//控制上拉加载的加载动画
            finished_d: false,//控制在页面往下移动到底部时是否调用接口获取数据
            click:false
        }
    },
    methods:{
        jumpSearch(){
            this.$router.push({
                path:'/search',
                query:{
                    keyword:''
                 }
            })
        },
        back(){
             this.listAll1=[]
             this.pageNumber_d = 0
            this.$router.back()
        },
        onLoad(id){
            if(this.pageNumber_d){
                this.$store.dispatch('detail/getListDetail',{
                    page:this.pageNumber_d,
                    number:id
                })
            }else{
                this.$store.dispatch('detail/getListDetail',{
                    page:0,
                    number:id
                })
            }
        },
        switchTab(index){
              /* eslint-disable */
            //console.log("33333333333-->"+index,this.list[index].id)
             let ids = this.list[index].id
            this.$store.dispatch('detail/getListDetail',{
                page:0,
                number:ids
            })
            this.pageNumber_d = 0
            this.listAll1=[]  
           
        }
    },
    computed:{
        ...mapState('detail',[
            'listData'
        ]),
        listContent(){
            /* eslint-disable */
            //this.loading_d = false;
            //console.log('被点击了一次',this.listAll1)
            if(this.pageNumber_d ==  this.listData.pageCount){
                this.finished_d = true;
            }else{
                this.finishedd_d = false;
            }

            for(let x in this.listData.datas){
            // console.log("每一条数据::"+this.listData.datas[x])
                this.listAll1.push(this.listData.datas[x]);
            }
            this.pageNumber=this.listData.curPage
            this.totalPage = this.listData.pageCount;
             //console.log("数据::"+this.click)
            return this.listData.datas
           
        },
    }
}
</script>
<style scoped>
.sett{
    margin-right: 20px;
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
    
}
.item_content{
    font-size: 18px;
    color: black;
}
</style>


