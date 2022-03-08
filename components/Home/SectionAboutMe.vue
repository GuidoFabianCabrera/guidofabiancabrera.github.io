<template>
  <section class="about_me">
    <div class="about_me__container custom_container">
      <h4 class="about_me__tag">Sobre mí</h4>
      <p class="about_me__text" v-html="data.text"></p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.about_me {
  .about_me__container {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    text-align: center;

    @include breakpoint(lg) {
      flex-direction: row;
      justify-content: space-around;
      text-align: left;
    }
  }

  .about_me__tag {
    font-size: 24px;
    font-weight: 600;
  }

  .about_me__text {
    font-size: 16px;
    font-weight: 500;

    @include breakpoint(lg) {
      width: 50%;
    }
  }

  .about_me__text > span {
    color: #7ac1e4;
  }
}
</style>
