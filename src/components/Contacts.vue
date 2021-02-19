<template>
    <div class="contacts">
        <Item v-for="(item, index) in contatos" :key="index" :item="item" />
        <div v-if="$apollo.queries.contatos.loading">
          carregando
        </div>
        <div v-if="errorMessage">
          {{ errorMessage }}
        </div>
    </div>
</template>

<script>

import Item from './Item'
import gql from 'graphql-tag'

const getContacts = gql`
   query {
    contatos {
        id
        nome
        email
        telefone
    }
}
`

export default {
  name: 'Contacts',
  components: { Item },
  apollo: {
    contatos: {
      query: getContacts,
      error(error){
        this.errorMessage = "Servidor indisponível 😠"
      }
    }
  },
  data() {
    return {
      errorMessage: ''
    }
  },
}
</script>

<style>
</style>