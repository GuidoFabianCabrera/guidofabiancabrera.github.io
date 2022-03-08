<template>
  <footer class="footer">
    <div class="footer__container custom_container">
      <div class="footer__title">Me podes encontrar en</div>
      <div class="footer__list">
        <a
          class="footer__link"
          v-bind:href="item.url"
          target="_blank"
          v-for="(item, index) in data.items"
          :key="index"
        >
          <v-btn class="footer__button" color="#E5E5E5" outlined width="130px"
            ><img class="footer__button_icon" v-bind:src="item.icon" />
            {{ item.name }}</v-btn
          >
        </a>
      </div>
      <p class="footer__learn">¡Muchas gracias por leer!</p>
      <div class="footer__click" v-show="hidenAnim">
        <Lottie
          class="footer__animation"
          style="width:300px;height:240px"
          :options="lottieOptions"
          v-on:animCreated="handleAnimation"
        />
      </div>
      <v-btn
        class="footer__button"
        color="#2259D2"
        style="color:lightgray"
        small
        :disabled="disableButtonAnim"
        v-on:click="play"
        >Click 🎉</v-btn
      >
    </div>
  </footer>
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/static/FooterAnimation.json";

export default {
  props: { data: Object },
  components: {
    Lottie
  },
  data() {
    return {
      hidenAnim: false,
      disableButtonAnim: false,
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
        autoplay: false,
        loop: false
      }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    play: function() {
      this.hidenAnim = true;
      this.disableButtonAnim = true;
      this.anim.play();
      setTimeout(() => {
        this.hidenAnim = false;
        this.disableButtonAnim = false;

        this.anim.stop();
      }, 1400);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.footer {
  .footer__container {
    padding-top: 60px;
    padding-bottom: 30px;
    text-align: center;
  }

  .footer__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    text-align: center;

    @include breakpoint(sm) {
      margin-bottom: 40px;
    }
  }

  .footer__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    @include breakpoint(sm) {
      column-gap: 20px;
      flex-direction: row;
      justify-content: center;
    }
  }

  .footer__link {
    text-decoration: none;
  }

  .footer__button {
    text-transform: unset;
    letter-spacing: normal;
    font-weight: 600;
    border-color: #293240;
    background-color: #1e2735;
  }

  .footer__button_icon {
    width: 20px;
    margin-right: 5px;
  }

  .footer__learn {
    margin-top: 70px;
    margin-bottom: 10px;
    color: lightgray;
    font-size: 14px;
    font-weight: 600;
  }

  .footer__click {
    position: relative;
  }

  .footer__animation {
    position: absolute;
    bottom: -12px;
    left: 0;
    right: 0;
  }
}
</style>
