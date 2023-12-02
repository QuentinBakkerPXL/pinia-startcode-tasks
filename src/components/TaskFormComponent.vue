<script>
export default {
  data() {
    return {
      description: "",
      label: "",
      priority: "",
    }
  },

  methods: {
    addTask() {
      //ingevulde data in object steken
      const newTask = {
        description: this.description,
        label: this.label,
        priority: this.priority
      }

      //object doorgeven aan parent
      this.$emit('addTask', newTask);

      //velden opnieuw leegmaken
      this.description = "";
      this.label = "";
      this.priority = "";
    },
  }
}
</script>

<template>
  <div class="container">
    <h2>Voeg een taak toe aan de lijst</h2>
    <form v-on:submit.prevent="addTask()">
      <div class="form__field">
        <label>Omschrijving</label>
        <input type="text" v-model="description">
      </div>
      <div class="form__field">
        <label>Label</label>
        <input type="text" v-model="label">
      </div>
      <div class="form__field">
        <label>Prioriteit</label>
        <input type="text" v-model="priority">
      </div>
      <button class="button button-primary" type="submit">Voeg taak toe</button>
    </form>
  </div>
</template>

<style scoped>
.form__field {
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
}

.form__field input {
  width: 25%;
}
</style>