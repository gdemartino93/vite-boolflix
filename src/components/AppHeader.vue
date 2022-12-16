<script >
export default{
  data(){
    return{
      
    }
  }
}
</script>

<template>
        <div class="col-12 d-flex align-items-center justify-content-between">
            <h1 class="mx-3">BOOLFIX</h1>
            <div class="input-group mx-3 flex-nowrap">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-danger" type="button" id="button-addon2">Button</button>
            </div>
        </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.input-group{
    width: 20%;
}
</style>
