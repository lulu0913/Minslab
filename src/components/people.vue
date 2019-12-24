<template>
<div class="big">
 <el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="(o, index)" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://static.runoob.com/images/mix/img_avatar.png" class="image">
      <div style="padding: 14px;">
        <h3>姓名：XXX &nbsp;&nbsp;&nbsp;&nbsp;身份：XXX</h3>
      <p>TEL:13******99</p> 
      <p>Email :example@name.com</p>
      </div>
    </el-card>
  </el-col>
 </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<style scoped>

.big{
  margin-top: 30px;
  margin-left: 60px;
  height: 100%;
  width: 1300px;
}
.card
{
  width:400px;
  float:left;
  margin-left: 50px;
}
.word{
  width: 300px;
  float: left;
  margin-left: 50px;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>
