<script >
export default{
props :["item"]
}
</script>

<template>
    <div class="item">
      <span class="title">{{ item.title }}</span>
      <span class="title-original">{{ item.original_title }}</span>
      <span class="leng">{{ item.original_language }}</span>
      <span class="vote"> {{ item.vote_average }} </span>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.item{
    width: 200px;
    height: 300px;
    border: 1px solid black;
    background: bisque;
    display: flex;
    flex-direction: column;
}

</style>
