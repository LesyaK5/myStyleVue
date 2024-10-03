<template>
  <div class="project">
    <header-component></header-component>
    <div class="app center">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.project {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app {
  flex-grow: 1;

  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}

.title {
  color: teal;
  margin-bottom: 12px;
}
</style>