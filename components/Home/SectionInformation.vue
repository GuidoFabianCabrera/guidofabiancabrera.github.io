<template>
  <section class="information">
    <div class="information__container custom_container">
      <div
        class="information__item"
        v-for="(item, index) in data.items"
        :key="index"
      >
        <div class="information__title">{{ item.title }}</div>
        <div v-if="item.description" class="information__description">
          {{ item.description }}
        </div>
        <div class="information__logos_container" v-if="item.logos">
          <img
            class="information__logo"
            :src="item"
            v-for="(item, index) in item.logos"
            :key="index"
          />
        </div>
        <form v-if="item.form && !showText" @submit.prevent="submitForm">
          <input
            class="information__form"
            type="text"
            :placeholder="item.form"
            v-model="message"
          />
          <input type="submit" hidden />
        </form>
        <p class="information__form_text" v-if="item.form && showText">
          {{ message }} 🎉
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    submitForm(e) {
      console.log(e);
      this.showText = true;
    }
  },
  data() {
    return {
      showText: false,
      message: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.information {
  .information__container {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    @include breakpoint(lg) {
      flex-direction: row;
      justify-content: center;
      column-gap: 30px;
    }
  }

  .information__item {
    padding: 20px;
    border-radius: 12px;
    background-color: rgba(110, 125, 157, 0.25);

    @include breakpoint(sm) {
      width: 100%;
      max-width: 80%;
      margin: 0 auto;
    }
    @include breakpoint(lg) {
      width: 250px;
      margin: 0;
    }
  }

  .information__item:hover {
    background-color: rgb(31, 37, 51);
    transition: all 0.3s ease-in-out 0s;
  }

  .information__title {
    color: #a7a7a7;
    font-weight: 600;
  }

  .information__description {
    font-weight: 600;
  }

  .information__logos_container {
    margin-top: 7px;
    display: flex;
    column-gap: 15px;
  }

  .information__logo {
    height: 18px;
    object-fit: cover;
  }

  .information__form {
    width: 100%;
    border: 1px solid #737272;
    border-radius: 6px;
    padding: 4px 16px;
    margin-top: 5px;
    color: #e5e5e5;
    font-size: 16px;
    outline: none;
  }

  .information__form:hover {
    border-color: #cbd5e0;
  }

  .information__form:focus {
    border-color: rgb(49, 130, 206);
    box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
    z-index: 1;
  }

  .information__form::placeholder {
    color: #929fb0;
    font-weight: 600;
  }

  .information__form_text {
    margin: 7px 0 0;
    font-weight: 600;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
