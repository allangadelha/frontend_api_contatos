<template>
    <div class="contacts">
        <Item v-for="(item, index) in contacts" :key="index" :item="item" />
    </div>
</template>

<script>


import data from '../data'
import Item from './Item'


export default {
  name: 'Contacts',
  components: { Item },  
  data() {
    console.log('aaa', data)
    return {
      contacts: data
    }
  }
}
</script>

<style>
</style>