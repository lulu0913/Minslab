<template>
    <div class="bottom-body">
        <el-carousel :interval="3000" arrow="always" height = "400px">
            <el-carousel-item v-for="(item,index) in slides" :key="(item,index)" style="text-align: center;">
                <img v-if="1" :src="slides[index].src" style=" height: 100%">
            </el-carousel-item>
        </el-carousel>
        <!-- <div class="home-bottom" v-for="item in list" :key="item">
              <div class="home_title">
                  <img class="home_pic" :src="item.src" alt="">
              </div>
              <div class="home_content">
                 <p>{{item.content}}</p>
              </div>
         </div> -->
         <div class="home-bottom">
             <!-- 实验室简介部分 -->
             <div class="home-abstract">
                 <div class="home-abstract-top">
                     <h2>实验室介绍</h2>
                     <font></font>
                 </div>
                 <div class="home-abstract-bottom">
                     <div class="abstract-bottom-left">
                         <!-- 一些内容 -->
                     </div>
                     <div class="abstract-bottom-right">
                         <!-- 一些内容 -->
                     </div>
                 </div>
             </div>
             <!-- 时事新闻和重大成果展示部分并排放 -->
             <div class="home-show">
             </div>
             <!-- 联系我们，一般是网页的页脚 -->
             <div class="home-contact">
             </div>
          </div>
     </div>

</template>

<script>


export default {
     data () {
         return {
             // list : [
             //     {content : '简要介绍:欢迎来到minslab，本实验室的研究方向有：知识图谱、推荐系统、自然语言处理……',
             //     src: require('../assets/简要介绍.jpg')},
             //     {content :'9102年，X月X日，XX同学发表了论文',
             //     src: require('../assets/实时新闻.jpg')},
             //     {content : '2015 NEU Outstanding Graduate Student Award (Topmost student award in NEU) (Sheng Li)',
             //     src: require('../assets/重大成果.jpg')},
             //     {content : 'emai:name@example.com     tel:XXXXXXXXX',
             //     src: require('../assets/联系我们.jpg')}
             // ],
             slides: [
                {
                src: require('../assets/1.jpg'),
                title: 'xxx1',
                },
                {
                src: require('../assets/2.jpg'),
                title: 'xxx2',
                },
                {
                src: require('../assets/4.jpg'),
                title: 'xxx3',
                },
                {
                src: require('../assets/2.jpg'),
                title: 'xxx4',
                },
                {
                src: require('../assets/4.jpg'),
                title: 'xxx5',
                }
             ]
         }
     }

}
</script>

<style>
.el-carousel {
    width: 75%;
    margin: 0 auto 30px;
}
.el-carousel__item {
  background-color: #d3dce6;
}
.bottom-body {
    margin-top: 60px;
}
.home-bottom {
    width: 85%;
    margin: 0 auto;
    border: 1px solid #000;
}
.home-abstract {
    padding: 20px 0 30px;
}
.home-abstract-top h2 {
    margin: 0 auto 10px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    color: #0065b3;
}
.home-abstract-top font {
    display: block;
    margin: 10px auto 0;
    width: 50px;
    height: 5px;
    background: #b7b7b7;
}
/* .home_title,.home_pic{
    widows: 180px;
    float: left;
    height:180px;
    margin-left: 40px;
}
.home_content{
    float: left;
    width: 980px;
    height: 240px;
    margin-left: 20px;
} */
</style>
