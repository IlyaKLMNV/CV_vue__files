<template>
	<div class="page p-10">
		<div class="fontSubTitle text-center mb-10">Click on image to inspect</div>
		<el-carousel type="card" height="500px" style="width: 1500px" :autoplay="true" arrow="always" interval="5000">
			<el-carousel-item>
				<a href="https://ilyaklmnv.github.io/Card" target="_blank">
					<img src="../assets/Portfolio/Card.png" style="width: 100%; height: 100%;">
				</a>
			</el-carousel-item>
			<el-carousel-item>
				<a href="https://ilyaklmnv.github.io/Fairy-Forest-Parallax-effect-" target="_blank">
					<img src="../assets/Portfolio/Fairy forest.png" style="width: 100%; height: 100%;">
				</a>
			</el-carousel-item>
			<el-carousel-item>
				<a href="https://ilyaklmnv.github.io/Parallax-photo-gallery" target="_blank">
					<img src="../assets/Portfolio/Miami.png" style="width: 100%; height: 100%;">
				</a>
			</el-carousel-item>
			<el-carousel-item>
				<a href="https://www.npmjs.com/package/vue-carousel" target="_blank">
					<img src="../assets/Portfolio/Test-task-charger.png" style="width: 100%; height: 100%;">
				</a>
			</el-carousel-item>
			<el-carousel-item>
				<a href="https://ilyaklmnv.github.io/Test-task-charger" target="_blank">
					<img src="../assets/Portfolio/Test-task-RBand.png" style="width: 100%; height: 100%;">
				</a>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>


<script>
	export default {
		name: "App",
		components: {},
		data() {
			return {
			}
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