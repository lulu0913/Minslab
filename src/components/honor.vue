<template>
<div class="big">
  <div class='lnav-home'>
    <a><div class="list-element">著作</div></a>
    <a><div class="list-element">论文</div></a>
    <a><div class="list-element">专利</div></a>
    
    <!--Todo-->
  
  </div>
  <div class="txt">
      <h3>著作</h3>
                              
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
<hr>
      <h3>论文</h3>
                               
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
<hr>
      <h3>专利</h3>
   
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

     
                          
  
  </div>
</div>
</template>

<script>
export default {
  name: 'honor',
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
  height: 480px;
  width: 150px;
  z-index: 1000;
  background-color: rgb(64, 182, 230);
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
