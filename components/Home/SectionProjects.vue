<template>
  <section class="projects">
    <div class="projects__container custom_container">
      <h4 class="projects__title">Proyectos</h4>
      <div class="projects__logo">
        <Lottie style="width: 60px; height: 60px;" :options="lottieOptions" />
      </div>
      <div class="projects__list">
        <SharedProjectCard
          v-for="(item, index) in data.items"
          :key="index"
          :data="item"
        />
      </div>
      <a
        :href="data.seeMoreUrl"
        class="projects__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-btn class="projects__button" color="#2259D2" large
          >Ver más<v-icon class="projects__button_arrow"
            >mdi-arrow-left</v-icon
          ></v-btn
        ></a
      >
    </div>
  </section>
</template>

<script>
import SharedProjectCard from "@/components/Shared/ProjectCard";
import Lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/static/ReactAnimation.json";

export default {
  props: {
    data: Object
  },
  components: {
    SharedProjectCard,
    Lottie
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
        controls: true
      }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.projects {
  .projects__container {
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
  }

  .projects__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }

  .projects__logo {
    margin-bottom: 40px;
  }

  .projects__list {
    display: grid;
    row-gap: 40px;
    column-gap: 40px;

    @include breakpoint(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include breakpoint(lg) {
      width: 85%;
      margin: 0 auto;
    }
  }

  .projects__link {
    text-decoration: none;
  }

  .projects__button {
    margin-top: 40px;
    text-align: center;
    font-size: 16px;
    text-transform: unset;
    font-weight: 600;
    letter-spacing: normal;
    border-radius: 6px;
  }

  .projects__button_arrow {
    margin-left: 6px;
    font-size: 20px;
    transform: rotate(135deg);
  }
}
</style>
