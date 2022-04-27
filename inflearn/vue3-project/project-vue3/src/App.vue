<template>
  <div class="name">{{name}}</div>
  <button v-on:click="updateName">click</button>
</template>

<script>

export default {
  setup(){
    let name = "vue3 project"
    const updateName = () => {
    // name= 'updateName';
      console.log(name);
      
    }
    return {
      name,
      updateName,
    }
  }
}
</script>

<style>
.name {
  color: tan;
}
</style>
