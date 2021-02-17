<template>
    <form>
      <div class="form-group">
        <label>Nome</label>
        <input
          type="text"          
          name="nome"
        />
      </div>

      <div class="form-group">
        <label>E-mail</label>
        <input
          type="text"          
          name="email"
        />
      </div>

      <div class="form-group">
        <label>Telefone</label>
        <input
          type="text"          
          name="telefone"
        />
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">
          Adicionar
        </button>
      </div>
    </form>
</template>

<script>

export default {
  name: 'Form',
  data() {
    return {
    }
  }
}
</script>

<style>
</style>