<template>
<div>
  <h1>Create a Ticket</h1>
  <form v-if="creating" @submit.prevent="addTicket">
    <input v-model="addedName" placeholder="Name">
    <p></p>
    <textarea v-model="addedProblem"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for submitting a ticket! We will respond shortly.</p>
    <p><a @click="toggleForm" href="#">Submit another ticket</a></p>
  </div>
</div>
</template>

<script>

export default {
  name: 'create',
  data() {
    return {
      creating: true,
      addedName: '',
      addedProblem: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
   addTicket() {
  this.$store.dispatch("addTicket", {
    name: this.addedName,
    problem: this.addedProblem
  });
  this.addedName = "";
  this.addedProblem = "";
  this.creating = false;
},
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>