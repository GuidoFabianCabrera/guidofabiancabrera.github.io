<template>
  <section class="line">
    <div class="line__content"></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.line {
  padding-top: 5px;
  padding-bottom: 5px;
  .line__content {
    width: 95%;
    height: 1px;
    background-color: #293240;
    margin: 0 auto;

    @include breakpoint(md) {
      width: 90%;
    }
  }
}
</style>
