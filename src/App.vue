<template>

  <div class="index-wrap">
    <!-- 页面都在这个标签里展示 -->
    <router-view></router-view>
  </div>


</template>

<script>
import slideShow from './components/HelloWorld'
import navbar from './components/nav'
import about from './components/about'
import people from './components/people'
import honor from './components/honor'
import source from './components/source'
import learning from './components/learning'
import getintouch from './components/getintouch'
import home from './components/home'



export default {
  components: {
    slideShow,
    navbar,
    about,
    people,
    honor,
    source,
    learning,
    getintouch,
    home,

  }
}
</script>

<style scoped>


</style>
