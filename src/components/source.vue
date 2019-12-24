<template>
 <div class="big">
    <div class="left-nav">
      <a href="javascript:void(0)" rel="external nofollow" @click="goAnchor('#anchor-'+index)" v-for="index in elem" :key="index" class="list"> 
        <div class="list-element">{{index}}</div>
      </a>
    </div>
    <div class="detail">
      <div :id="'anchor-'+index" class="txt" v-for="index in elem" :key="index">{{index}}</div>
    </div>
 </div>
</template>

<script>
export default{
data(){
return {
  active:0,
                elem:[
                    "数据集",
                    "项目一",
                    "项目二",
                    "项目三",
                    "项目四",
                    "项目五",
                    "项目六",
                    "项目七"
                ]
}
},
methods: {
  goAnchor(selector) {
     var anchor = this.$el.querySelector(selector)
     document.documentElement.scrollTop = anchor.offsetTop
  }
 }
}
</script>

<style>
.big{ 
  position: relative;
  top: 30px;
  left: 5%; 
  display: flex;
  width: 90%;
  min-width: 1200px;
  }
.left-nav {
  position: relative;
  left:0;
  height: 100%;
  width: 17%;
  /* z-index: 1000; */
  background-color: rgb(100, 210, 253);

}
.detail {
  position: relative;
  left: 0;
  top: 0;
  width: 83%;
}

.list{
  color: rgb(4, 137, 253);
  padding: 15px 10px;
  /* width: 100%; */
  text-align: center;
  overflow: hidden;
  /* font-size: 1rem; */
  font-weight: bold;
  position: relative;
}

.txt
{
  width:800px;
  margin-left: 50px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
</style>
