<template>
  <div class="item">
    <h5 class="item-header">
      <a href="name" class="item-title"> {{ item.nome }} </a>
      <button type="button" class="close">
        <span>&times;</span>
      </button>
    </h5>
    <div class="item-body">
      <p class="item-text">{{ item.email }}</p>
      <p class="item-text">{{ item.telefone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true
    }
  }  
};
</script>

<style>
</style>