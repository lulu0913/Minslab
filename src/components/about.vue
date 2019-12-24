<template>
<div class="big">
  <div class='lnav-home'>
    <a><div class="list-element">知识图谱</div></a>
    <a><div class="list-element">推荐系统</div></a>
    <a><div class="list-element">自然语言处理</div></a>
    <a><div class="list-element">定位系统</div></a>
    <!--Todo-->
  
  </div>
  <div class="txt">
      <h3>小组简介</h3>
                              
          <p>我们小组做的是……方面的工作，目的是……
             <br>所做工作由……意义。
          </p>
 
      <h3>小组成员</h3>
                               
        <ul>
        <li>
          XXX
          </li>
          <li>
          XXX
         </li>
         <li>
          XXX
          </li>
          </ul>

      <h3>研究成果</h3>
   
        <ul>
        <li>
            （论文） 基于……（XXX 2018年12月19日）
           </li>
             <li>
                 （专利） 关于……（XXX 2018年12月25日）
            </li>
          </ul>


     
                          
  
  </div>
</div>
</template>

<script>
export default {
  name: 'people',
  methods: {
    changeShowMenu() {
      this.showMenu = !this.showMenu;
    }, 
    redirect(page) {
      this.$router.push(page);
      this.showMenu = false;
    }
  },
  data: () => {
    return {
      showMenu: false
    }
  }
}
</script>

<style scoped>
.lnav-home {

  left: 0rem;
  height: 100%;
  width: 150px;
  z-index: 1000;
  background-color: rgb(100, 210, 253);
  float: left;
}
.lnav-home .list-element{
  color: aliceblue;
  padding: 15px 10px;
  width: 130px;
  text-align: center;
  overflow: hidden;
  font-size: 1rem;
  background-color: rgb(64, 182, 230);

}
.big{
  margin-top: 30px;
  margin-left: 60px;
  height: 100%;
  width: 1300px;
}
.txt
{
  width:800px;
  float:left;
  margin-left: 50px;
}
</style>
