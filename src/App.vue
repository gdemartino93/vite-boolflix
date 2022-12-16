<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default{
  name : "App",
  components : { AppHeader , AppMain}
}
</script>

<template>
  
<AppHeader />
<AppMain />

</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;

</style>
