<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default{
  name : "App",
  components : { AppHeader , AppMain}
}
</script>

<template>
<header>
  <div class="col-12 d-flex align-items-center justify-content-between">
    <AppHeader />
  </div>
  
</header>
<main>
  <AppMain />
</main>



</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;

</style>
