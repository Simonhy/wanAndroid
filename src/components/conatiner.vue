<template>
    <div>
        <!-- :autoplay="3000"  -->
        <van-swipe :autoplay="3000"  :show-indicators="false">
             <van-swipe-item v-for="(image, index) in banners" :key="index" class="itemImage">
                <span> {{image.title}}</span>
                <img  :src="image.imagePath"/>
            </van-swipe-item>
        </van-swipe>
        <div class="list">
            <list></list>
        </div>
    </div>
</template>
<script>
import list from "./list";
export default {
    methods: {
    
    },
    data() {
        return {
           
        }
    },
    props:[
        'banners'
    ],
    components:{
        list
    }

}
</script>
<style scoped>

.itemImage img{
    width: 100%;
}
.itemImage an-swipe-item{
    position:relative;
}
.itemImage span{
    width: 100%;
    position:absolute;
    z-index:4;
    padding: 10px;
    bottom:0px;
    font-size: 14px;
    color: white;
    background: rgb(201, 199, 199,0.6);
}
</style>


