<template>
  <div class="content">
    
    <div ref="indicator" class="indicator">
      <div class="lighter"></div>
      <div class="lighter"></div>
      <div class="lighter"></div>
      <div class="lighter"></div>
    </div>

    <nav class="fontSubTitle navigation-bar">
      <router-link to="/"> About </router-link>
      <router-link to="/stack"> Stack </router-link>
      <router-link to="/portfolio"> Portfolio </router-link>
      <router-link to="/contacts"> Contacts </router-link>
    </nav>

    <router-view v-slot="{ Component }">
      <transition 
        :enter-active-class="canAppeareFromLeft ? fadeInLeft : fadeInRight"
        :leave-active-class="canFadeToLeft ? fadeOutLeft : fadeOutRight"
        
        >
        <component :is="Component" />
      </transition>
    </router-view>



    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    
  </div>



</template>

<script>


export default {
  data() {
    return {
      canAppeareFromLeft: false,
      canFadeToLeft: false,
      fadeInRight: 'animate__animated animate__fadeInRight',
      fadeInLeft: 'animate__animated animate__fadeInLeft',
      fadeOutRight: 'animate__animated animate__fadeOutRight',
      fadeOutLeft: 'animate__animated animate__fadeOutLeft',
    }
  },
  watch:{
    $route(newRoute, route) {
      let indicatorId = newRoute.meta.id - 1;
      console.log(this.$refs.indicator.childNodes.length);
      for (let i=0; i < this.$refs.indicator.childNodes.length; i++) {
        this.$refs.indicator.childNodes[i].classList.remove('--active');
      }
      this.$refs.indicator.childNodes[indicatorId].classList.add('--active');
      if (newRoute.meta.id > route.meta.id) {
        this.canAppeareFromLeft = false;
        this.canFadeToLeft = true;
      }
      else {
        this.canAppeareFromLeft = true;
        this.canFadeToLeft = false;
      }
    }
  },
  methods: {
    
  }
}


</script>

<style>
  body {
    -ms-overflow-style: none !important; /* for Internet Explorer, Edge */
    scrollbar-width: none !important; /* for Firefox */
  }

  body::-webkit-scrollbar {
    display: none !important; /* for Chrome, Safari, and Opera */
  }

  a:hover {
    text-decoration: underline;
  }

  a.router-link-active {
    color: var(--colorСontrasting);
  }

  .content {
    /* padding: 30px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100vw; */
    min-height: 100vh;
    /* background: var(--colorBackgroundBack); */
    overflow-x: hidden;
    -ms-overflow-style: none !important; /* for Internet Explorer, Edge */
    scrollbar-width: none !important; /* for Firefox */
  }
  
  .content::-webkit-scrollbar {
    display: none !important; /* for Chrome, Safari, and Opera */
  }

  .indicator {
    position: fixed;
    display: flex;
    justify-content: space-between;

    top: 40px;
    right: 60px;
    width: 100px;
    height: 40px;
    z-index: 1;
  }

  .lighter {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--colorShadowBG);
    margin-bottom: 10px;
  }

  .--active {
    background: #FEA609;
  }

  .navigation-bar {
    position: absolute;
    top: 50px;
    width: 500px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    color: white;
  }

  .page {
    position: absolute;
    margin: 50px;
    background: var(--colorBackgroundMain);

  }

  .fontTitle {
    font-family: var(--fontTitle);
    color: var(--colorTextWhite);
    font-size: 3rem;
    line-height: 120%;
  }

  .fontSubTitle {
    font-family: var(--fontSubTitle);
    color: var(--colorTextWhite);
    font-size: 1.5rem;
    line-height: 120%;
  }
  .fontText {
    font-family: var(--fontText);
    color: var(--colorTextGray);
    font-size: 1.3rem;
    line-height: 120%;
    letter-spacing: 1px;
  }

  .animate__animated.animate__fadeInRight {
    /* --animate-duration: 4s; */
    --animate-opacity: 1;

  }


  /* .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  } */


  .bg {
  animation:slide 10s ease-in-out infinite alternate;
  background-image: linear-gradient(-20deg, #FEA609 50%, #000 50%);
  bottom:0;
  left:-100%;
  opacity:.5;
  position:fixed;
  right:-100%;
  top:0;
  z-index:-1;
  }

  .bg2 {
  animation-direction:alternate-reverse;
  animation-duration:10s;
  }

  .bg3 {
  animation-duration:10s;
  }

@keyframes slide {
  0% {
    transform:translateX(-20%);
  }
  100% {
    transform:translateX(20%);
  }
}
</style>
