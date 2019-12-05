import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
  },
  mutations: {
      setTickets(state, tickets) {
      state.tickets = tickets;
    },
  },
  actions: {
    async addTicket(context, data) {
      try {
        await axios.post("/api/tickets", data);
      } catch (error) {
        console.log(error);
      }
    },
     async getTickets(context) {
      try {
        let response = await axios.get("/api/tickets");
        context.commit('setTickets', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
