{"filter":false,"title":"app.js","tooltip":"/node-api-server-tutorial/poki/public/app.js","undoManager":{"mark":6,"position":6,"stack":[[{"start":{"row":16,"column":24},"end":{"row":16,"column":34},"action":"remove","lines":["yourserver"],"id":2},{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":["w"]},{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["w"]},{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"insert","lines":["w"]},{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["."]},{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["f"]},{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":["o"]},{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":["o"]},{"start":{"row":16,"column":31},"end":{"row":16,"column":32},"action":"insert","lines":["t"]},{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["h"]},{"start":{"row":16,"column":33},"end":{"row":16,"column":34},"action":"insert","lines":["i"]}],[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"insert","lines":["l"],"id":3}],[{"start":{"row":16,"column":28},"end":{"row":16,"column":35},"action":"remove","lines":["foothil"],"id":4},{"start":{"row":16,"column":28},"end":{"row":16,"column":47},"action":"insert","lines":["foothillfarmflowers"]}],[{"start":{"row":10,"column":20},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":23},"action":"insert","lines":["this.getpolitics();"],"id":7}],[{"start":{"row":13,"column":12},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":4},"end":{"row":27,"column":6},"action":"insert","lines":[" async getpolitics() {","      // `this` points to the vm instance","      console.log(\"politics\");","      var url = \"https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod\"","      try {","        let response = await axios.get(url);","        this.politics = response.data;","        console.log(this.politics);","        return true;","      }","      catch (error) {","        console.log(error);","      }","    },"],"id":9}]]},"ace":{"folds":[],"scrolltop":347.5,"scrollleft":0,"selection":{"start":{"row":11,"column":23},"end":{"row":11,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1571842379382,"hash":"05d03d837499cda3fb634c905cd9937c3c9386e5"}