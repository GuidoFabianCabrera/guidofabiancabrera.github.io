<template>
  <section class="technologies">
    <div class="technologies__container custom_container">
      <h4 class="technologies__title">Tecnologías que utilizo</h4>

      <div class="technologies__list">
        <div
          class="technologies__item"
          v-for="(item, index) in data.logos"
          :key="index"
        >
          <v-icon class="technologies__icon">{{ item }}</v-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { data: Object },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.technologies {
  .technologies__container {
    padding-top: 20px;
    padding-bottom: 80px;
    text-align: center;
  }

  .technologies__title {
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 600;
  }

  .technologies__list {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 30px;
  }

  // .technologies__item {
  // }

  .technologies__icon {
    font-size: 60px;
  }
}
</style>
