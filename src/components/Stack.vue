<template lang='pug'>
div.page.h-full.w-auto.pt-24
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
			.flex.items-center.justify-center.overflow-hidden.w-36.h-36
				div(class="bg-[url('../assets/Stack/vueJS.svg')] w-36 h-36 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 Vue.js
			p.fontText I am currently learning this framework. This is a logical continuation of my training as a front-end developer. I can build a simple application. I can use router-view, props, $emit, ref, various v-directives.
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
				.flex.items-center.justify-center.overflow-hidden.w-36.h-36
					div(class="bg-[url('../assets/Stack/js.svg')] w-36 h-36 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 JS
			p.fontText I think that I am quite familiar with this programming language. I can customize the user experience on the site. I use classes, promises, asynchronous programming
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
				.flex.items-center.justify-center.overflow-hidden.w-36.h-36.bg-white
					div(class="bg-[url('../assets/Stack/git.svg')] w-32 h-32 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 git
			p.fontText I have experience in creating new branches, I can upload my code to git.hub
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
				.flex.items-center.justify-center.overflow-hidden.w-32.h-32
					div(class="bg-[url('../assets/Stack/figma.svg')] w-32 h-32 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 figma
			p.fontText I coding websites by templates from this program. I implement the pixel-perfect development
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
				.flex.items-center.justify-center.overflow-hidden.w-32.h-32
					div(class="bg-[url('../assets/Stack/vite.svg')] w-32 h-32 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 vite
			p.fontText I build all my projects by this build tool. I can customize the assembly, connect various plugins
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
				.flex.items-center.justify-center.overflow-hidden.w-32.h-32
					div(class="bg-[url('../assets/Stack/pug.svg')] w-32 h-32 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 pug
			p.fontText I use it all the time in my projects. Well familiar with the syntax
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
				.flex.items-center.justify-center.overflow-hidden.w-32.h-32
					div(class="bg-[url('../assets/Stack/sass.svg')] w-32 h-32 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 sass
			p.fontText Sass+pug that's that i love!
	.block
		div(class="w-1/5 flex justify-center items-center mr-10")
				.flex.items-center.justify-center.overflow-hidden.w-32.h-32
					div(class="bg-[url('../assets/Stack/tailwind.svg')] w-32 h-32 bg-center bg-contain bg-no-repeat")
		div(class="w-4/5 flex flex-col justify-center")
			h3.fontSubTitle.mb-2 tailwind
			p.fontText Use in complex with vue+pug+tailwind
	</template>

<script>
	export default {

	}
</script>

<style>

	.block{
		display: flex !important;
		padding: 0 30px 40px;
		background: var(--colorBackgroundMain);
		-ms-overflow-style: none !important; /* for Internet Explorer, Edge */
    scrollbar-width: none !important; /* for Firefox */
	}
</style>