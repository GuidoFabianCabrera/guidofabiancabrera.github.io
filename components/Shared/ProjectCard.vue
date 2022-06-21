<template>
  <div class="project_card">
    <div class="project_card__title">{{ data.title }}</div>
    <small class="project_card__date">{{ data.date }}</small>
    <div class="project_card__description">{{ data.description }}</div>

    <div class="project_card__list">
      <div
        class="project_card__item"
        v-for="(item, index) in data.technology"
        :key="index"
        :style="{ background: item.color }"
      >
        <div class="project_card__item_card">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="projects_card__button_container">
      <a
        v-show="data.repository"
        class="project_card__link"
        v-bind:href="data.repository"
        target="_blank"
      >
        <v-btn class="project_card__button" color="#2259D2"
          >Repositorio
          <v-icon class="project_card__button_icon">mdi-github</v-icon></v-btn
        >
      </a>
      <a
        v-show="data.project"
        class="project_card__link"
        v-bind:href="data.project"
        target="_blank"
      >
        <v-btn class="project_card__button--project" color="#e5e5e5" outlined
          >Proyecto
          <v-icon class="project_card__button_icon--rotate"
            >mdi-arrow-left</v-icon
          ></v-btn
        ></a
      >
    </div>
  </div>
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

.project_card {
  padding: 20px;
  border-radius: 6px;
  border: 2px solid #293240;
  background-color: #19212e;
  display: flex;
  flex-direction: column;
  text-align: left;

  .project_card__title {
    font-size: 20.8px;
    font-weight: 600;
  }

  .project_card__date {
    color: #a7a7a7;
  }

  .project_card__description {
    line-height: 1.6;
    font-weight: 600;
  }

  .project_card__list {
    margin-top: 30px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 14px;
    row-gap: 6px;

    @include breakpoint(md) {
      margin-bottom: 30px;
    }
  }

  .project_card__item {
    border-radius: 7px;
  }

  .project_card__item_card {
    background-color: #19212e;
    padding: 6px;
    border: 1px solid #293240;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    transition: 0.15s ease-in-out;
  }

  .project_card__item_card:hover {
    background-color: transparent;
  }

  .projects_card__button_container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 10px;
    @include breakpoint(md) {
      margin-top: auto;
    }
    @include breakpoint(lg) {
      flex-direction: row;
      align-self: flex-end;
    }
  }

  .project_card__link {
    text-decoration: none;
  }

  .project_card__button {
    width: 100%;
    font-size: 16px;
    text-transform: unset;
    font-weight: 600;
    letter-spacing: normal;
    border-radius: 6px;
  }

  .project_card__button--project {
    @extend .project_card__button;
    border-color: #293240;
  }

  .project_card__button_icon {
    margin-left: 12px;
    font-size: 20px;
  }

  .project_card__button_icon--rotate {
    @extend .project_card__button_icon;
    transform: rotate(135deg);
  }
}
</style>
