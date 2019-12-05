<template>
<div>
  <h1>Current Tickets</h1>
  <div v-for="ticket in tickets" v-bind:key="ticket._id">
    <hr>
    <div class="ticket">
      <div class="problem">
        <p>{{ticket.problem}}</p>
        <p><i>-- {{ticket.name}}</i></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'home',
   computed: {
    tickets() {
      return this.$store.state.tickets;
    }
  },
  created() {
    this.$store.dispatch("getTickets");
  }
}
</script>