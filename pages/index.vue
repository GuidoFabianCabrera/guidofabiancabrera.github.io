<template>
  <div class="app">
    <HomeSectionBanner />
    <HomeSectionHero :data="data.SectionHero" />
    <HomeSectionInformation :data="data.SectionInformation" />
    <HomeSectionLine />
    <HomeSectionAboutMe :data="data.SectionAboutMe" />
    <HomeSectionLine />
    <HomeSectionProjects :data="data.SectionProjects" />
    <HomeSectionTechnologies :data="data.SectionTechnologies" />
    <HomeSectionEducation :data="data.SectionEducation" />
    <HomeSectionFooter :data="data.SectionFooter" />
  </div>
</template>

<script>
import Data from "static/Data.json";
import HomeSectionBanner from "@/components/Home/SectionBanner";
import HomeSectionHero from "@/components/Home/SectionHero";
import HomeSectionInformation from "@/components/Home/SectionInformation";
import HomeSectionLine from "@/components/Home/SectionLine";
import HomeSectionAboutMe from "@/components/Home/SectionAboutMe";
import HomeSectionProjects from "@/components/Home/SectionProjects";
import HomeSectionTechnologies from "@/components/Home/SectionTechnologies";
import HomeSectionEducation from "@/components/Home/SectionEducation";
import HomeSectionFooter from "@/components/Home/SectionFooter";

export default {
  components: {
    Data,
    HomeSectionBanner,
    HomeSectionHero,
    HomeSectionInformation,
    HomeSectionLine,
    HomeSectionAboutMe,
    HomeSectionProjects,
    HomeSectionTechnologies,
    HomeSectionEducation,
    HomeSectionFooter
  },
  data() {
    return {
      data: Data
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils";
.app {
  background-color: #141b2a;
  color: #e5e5e5;
}
</style>
