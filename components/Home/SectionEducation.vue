<template>
  <section class="education">
    <div class="education__container custom_container">
      <h4 class="education__title">Mis estudios</h4>
      <div class="education__list">
        <div
          class="education__content"
          v-for="(item, index) in data.items"
          :key="index"
        >
          <div class="education__item">
            <img class="education__image" :src="item.image" />
            <small class="education__date">{{ item.date }}</small>
            <div class="education__learning">{{ item.learning }}</div>
          </div>
          <div class="education__separator_container">
            <div class="education__separator"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { data: Object }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.education {
  background-color: #19212e;
  border: 1px solid #293240;

  .education__container {
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
  }

  .education__title {
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 600;
  }

  .education__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;

    @include breakpoint(lg) {
      flex-direction: row;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  .education__content {
    @include breakpoint(lg) {
      width: 100%;
      display: flex;
      align-items: center;
    }
  }

  .education__content:last-child {
    @include breakpoint(lg) {
      width: auto;
    }
  }

  .education__item {
    min-width: 288px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #293240;
    border-radius: 6px;
    background-color: #1e2735;
  }

  .education__image {
    width: 157px;
    height: 37px;
    object-fit: cover;
  }

  .education__date {
    font-weight: 500;
    margin-top: 30px;
  }

  .education__learning {
    font-weight: 600;
  }

  .education__separator_container {
    @include breakpoint(lg) {
      width: 100%;
      padding: 0 15px;
    }
  }

  .education__content:last-child .education__separator_container {
    @include breakpoint(lg) {
      display: none;
    }
  }

  .education__separator {
    @include breakpoint(lg) {
      width: 100%;
      min-width: 0px;
      max-width: 200px;
      height: 1px;
      margin: 0px auto;
      background-color: white;
      opacity: 0.6;
    }
  }
}
</style>
