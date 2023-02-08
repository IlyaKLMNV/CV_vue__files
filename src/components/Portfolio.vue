<template>
	<div class="page">
		<el-carousel type="card" height="700px" style="width: 2100px" :autoplay="false">
			<el-carousel-item v-for="item in flowerPics" :key="item">
				<img :src="item" style="width: 100%; height: 100%;">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>


<script>
	import img1 from "../assets/Portfolio/Card.png"
	import img2 from "../assets/Portfolio/Fairy forest.png"
	import img3 from "../assets/Portfolio/Miami.png"
	import img4 from "../assets/Portfolio/Test-task-charger.png"
	import img5 from "../assets/Portfolio/Test-task-RBand.png"


	export default {
		name: "App",
		components: {},
		data() {
			return {
				img1,
				flowerPics: [img1, img2, img3, img4, img5,]
			};
		},

	};
</script>

<style>

	.el-carousel__item:nth-child(2n) {
		
	}

	.el-carousel__item:nth-child(2n + 1) {
		
	}

	.page scoped{
		
	}
</style>