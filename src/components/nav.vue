<template>
	<div id="NavSlide">
        <p v-for="(item,$index) in arr" @click="toggle($index)" :key="(item,$index)"><router-link :to= "{path:item}"  :class="{active:$index==active}">{{item}}</router-link></p>
	</div>
</template>
<script>
export default {
    name:'navbar',
	data:function(){
		return {
			active:0,
            arr:[
                "首页",
                "研究方向",
                "人员组成",
                "学术成果",
                "资源系统",
                "课程教学",
                "联系我们"
            ]
		}
	},
	methods:{
    	toggle:function(index){
            this.active=index;
        }
    }
}
</script>

<style>

#NavSlide {
	position: fixed;
	z-index: 10000;
	top: 0;
	left: 0;
	display: flex;
	width: 100%;
	height: 50px;
    padding: 0 50px;
    background-color: #ffffff;
	box-shadow: 0 1px 0 rgba(0, 0, 0, .06);
}
#NavSlide p {
	height: 50px;
	line-height: 50px;
	padding: 0 15px;
    text-align: center;
	box-sizing: border-box;
	border-bottom: 2px solid #ffffff;
	transition: border-bottom-color .2s ease;
}
#NavSlide p:hover {
	/* border-bottom-color: #c90000; */
	border-bottom-color: #0065b3;
}
#NavSlide p a {
	color: #3f3844;
	font-size: 16px;
	letter-spacing: .5px;
	text-decoration: none;
	outline: none;
	transition: color .2s ease;
}
#NavSlide p:hover a {
	/* color: #c90000; */
	color: #0065b3;
}
</style>
