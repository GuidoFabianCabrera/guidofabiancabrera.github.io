<template>
  <section class="banner">
    <video
      class="banner__video"
      src="images/banner.webm"
      autoplay
      loop
      muted
      width="100%"
    ></video>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";

.banner {
  background-color: rgb(33, 35, 46);

  .banner__video {
    width: 100vw;
    height: 15vh;
    display: block;
    object-fit: cover;

    @include breakpoint(md) {
      width: 80%;
      height: unset;
      margin: 0 auto;
    }
  }
}
</style>
