<template lang='pug'>
div.page.flex.px-20
  div(class="main-text w-3/5 flex flex-col justify-center pr-20")
    h1.fontTitle.mb-4 Hi! i'm Ilya
    h3.fontSubTitle.mb-4 FRONTEND DEVELOPER
    p.fontText I am beginner frontend developer who wants to create complecate apps and creative websites! I was lead engineer in pipeline construction before my development education, but i certainly believe that IT-technologies is the future. So it is my motivation to meet the IT!
  div(class="main-photo w-2/5 flex justify-center items-center")
    .w-auto.h-auto.p-12.flex.items-center.justify-center
      .rounded-tl-3xl.rounded-br-3xl.overflow-hidden.shadow-xl.shadow-user
        div(class="bg-[url('../assets/About/me.jpg')] w-72 h-96 bg-center bg-cover ")
</template>

<style scoped> 
  @media (max-width: 840px){
    .page {
      padding: 0;
    }
    .main-text {
      width: 100%;
      padding: 0;
      padding: 20px;
    }
    .main-photo {
      display: none;
    }
}
</style>