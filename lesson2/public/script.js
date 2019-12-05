var app = new Vue({
  el: '#app',
  data: {
    addedName: '',
    addedProblem: '',
    tickets: {},
     politics:[],
  },
  created() {
    this.getTickets();
  },
  methods: {
    async getTickets() {
      try {
        let response = await axios.get("http://www.foothillfarmflowers.com:4200/api/tickets");
        this.tickets = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addTicket() {
      try {
        let response = await axios.post("http://www.foothillfarmflowers.com:4200/api/tickets", {
          name: this.addedName,
          problem: this.addedProblem
        });
        this.addedName = "";
        this.addedProblem = "";
        this.getTickets();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
     async getpolitics() {
      // `this` points to the vm instance
      console.log("politics");
      var url = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod"
      try {
        let response = await axios.get(url);
        this.politics = response.data;
        console.log(this.politics);
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
    async deleteTicket(ticket) {
      try {
        let response = axios.delete("http://www.foothillfarmflowers.com:4200/api/tickets/" + ticket.id);
        this.getTickets();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
});