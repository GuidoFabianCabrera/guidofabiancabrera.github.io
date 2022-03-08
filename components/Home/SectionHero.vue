<template>
  <section class="hero">
    <div class="hero__container custom_container">
      <img class="hero__image" :src="data.image" />
      <div class="hero__person">
        <h1 class="hero__name">
          {{ data.name }}
        </h1>
        <p class="hero__job">{{ data.job }}</p>
        <p class="hero__state" v-show="!data.working">OPEN TO WORK</p>
      </div>
      <a
        :href="data.cvUrl"
        class="hero__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-btn class="hero__button" color="#2259D2"
          >cv<v-icon class="hero__arrow">mdi-arrow-left</v-icon></v-btn
        ></a
      >
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

.hero {
  .hero__container {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint(lg) {
      flex-direction: row;
      padding-top: 30px;
    }
  }

  .hero__image {
    width: 160px;
    border-radius: 50%;
    border: 5px solid white;
    @include breakpoint(lg) {
      width: 180px;
      margin-top: -100px;
      z-index: 5;
    }
  }

  .hero__person {
    text-align: center;
    @include breakpoint(lg) {
      width: 100%;
      margin-left: 40px;
      text-align: left;
    }
  }

  .hero__name {
    font-size: 32px;
    font-weight: 600;
    color: white;
    @include breakpoint(lg) {
      font-size: 48px;
    }
  }

  .hero__job {
    color: #bdbdbd;
    font-weight: 600;
    @include breakpoint(lg) {
      display: inline-block;
    }
  }

  .hero__state {
    display: inline-block;
    padding: 0 18px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    color: #01421c;
    background-color: #b9f5d0;
  }

  .hero__link {
    text-decoration: none;
  }

  .hero__button {
    width: 240px;
    font-weight: 600;
    letter-spacing: normal;
    border-radius: 6px;
    color: rgb(229, 229, 229);
    @include breakpoint(lg) {
      width: 128px;
    }
  }

  .hero__arrow {
    font-size: 20px;
    transform: rotate(135deg);
  }
}
</style>
