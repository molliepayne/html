/*global axios */
/*global Vue */
var app = new Vue({
    el: '#app',
    data: {
        candidates: [],
        newCanFirstName: "",
        newCanLastName: "",
        currentVotes: [], //checkboxes - adds string of checkbox value as it's check - keeps track of who they want to vote for
        voted: false,
        currentVoted: [], //holds who they voted for to display
    },

    created: function() {
        this.getCandidates();
    },

    methods: {
        saveVotes() {
            //reset the list that is currently being voted for
            this.currentVoted = [];

            //for each candidate that is checked (currentVotes) call the vote route
            for (let i = 0; i < this.currentVotes.length; i++) {
                var url = "http://foothillfarmflowers.com:4200/candidates/" + this.currentVotes[i] + "/vote";
                //console.log("URL " + url);
                axios.put(url)
                    .then(response => {
                        //add to the iist to display of who they voted for
                        this.currentVoted.push(response.data);
                        //boolean to show submitted ballot
                        this.voted = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });

            }
            //reset voting checkboxes
            this.currentVotes = [];

        },

        async addCandidate() {
            //console.log("in add candidate");
            var url = "http://foothillfarmflowers.com:4200/candidates";
            //call post route to add new candidate - get name from inputboxes, votes will be set to 0 automatically
            axios.post(url, {
                    first_name: this.newCanFirstName,
                    last_name: this.newCanLastName,
                    //votes: 0 defaulted in schema - so no need to add it here.
                })
                .then(response => {

                    this.newCanFirstName = "";
                    this.newCanLastName = "";
                    //console.log("Post Response "); 
                    //console.log(response.data);
                    this.candidates.push(response.data);

                })
                .catch(e => {
                    console.log(e);
                });

        },

        async deleteCandidate(candidate) {
            //console.log("in delete candidate");
            var url = "http://foothillfarmflowers.com:4200/candidates/";
            axios.delete(url + candidate._id)
                .then(response => {
                    //console.log("deleted " + candidate.first_name);

                    this.getCandidates();

                })
                .catch(e => {
                    console.log(e);
                });

        },

        async getCandidates() {
            //console.log("get candidates");
            var url = "http://foothillfarmflowers.com:4200/candidates"; // This is the route we set up in index.js
            try {
                let response = await axios.get(url);
                this.candidates = response.data; // Assign array to returned response
                
                //console.log(this.candidates);
                return true;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
});
