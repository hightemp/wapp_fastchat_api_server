<template>
<div class="wrapper">
  <!-- <div class="left-panel"></div> -->
  <div class="content">
    <div class="promt">
      <textarea v-model="promt"></textarea>
      <div>
        <button class="btn btn-light" @click="sendPromtMessage">send message</button>
      </div>
    </div>
    <div class="messages">
      <div class="messages-inner-wrapper">
        <div class="message message-wait" v-if="showWaitMessage">
          🕒 Waiting...
        </div>
        <div class="message message-error" v-if="showErrorMessage">
          {{ errorMessage }}
        </div>
        <template v-for="message in messages">
          <div :class="'message '+'message-'+message.type">{{ message.message }}</div>
        </template>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      promt: "",
      showWaitMessage: false,
      showErrorMessage: false,
      errorMessage: "",
      messages: [
        // { type: "ai", message: "Sure, here's an example JavaScript code for sorting an array of elements in ascending order:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Sort the array in ascending order\narr.sort((a, b) => a - b);\n\nconsole.log(arr); // Output: [1, 2, 3, 4, 5]\n```\nAnd here's an example code for sorting an array of elements in descending order:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Sort the array in descending order\narr.sort((a, b) => b - a);\n\nconsole.log(arr); // Output: [3, 2, 1, 4, 5]\n```\nBoth of the above examples use the `sort()` method of arrays, which takes a comparison function as an argument to determine the order of the sorting. In the first example, we use the comparison function `a - b` to sort the array in ascending order, and in the second example, we use the comparison function `b - a` to sort the array in descending order.\n\nYou can also use the `slice()` method to create a new array with the elements in a specific range and then sort that array separately. Here's an example:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Create a new array with elements from index 1 to end\nconst sortedArr = arr.slice(1).sort((a, b) => a - b);\n\nconsole.log(sortedArr); // Output: [1, 2, 3, 4, 5]\n```" },
        // { type: "user", message: "Write javascript code for sorting" },
        // { type: "ai", message: "Sure, here's an example JavaScript code for sorting an array of elements in ascending order:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Sort the array in ascending order\narr.sort((a, b) => a - b);\n\nconsole.log(arr); // Output: [1, 2, 3, 4, 5]\n```\nAnd here's an example code for sorting an array of elements in descending order:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Sort the array in descending order\narr.sort((a, b) => b - a);\n\nconsole.log(arr); // Output: [3, 2, 1, 4, 5]\n```\nBoth of the above examples use the `sort()` method of arrays, which takes a comparison function as an argument to determine the order of the sorting. In the first example, we use the comparison function `a - b` to sort the array in ascending order, and in the second example, we use the comparison function `b - a` to sort the array in descending order.\n\nYou can also use the `slice()` method to create a new array with the elements in a specific range and then sort that array separately. Here's an example:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Create a new array with elements from index 1 to end\nconst sortedArr = arr.slice(1).sort((a, b) => a - b);\n\nconsole.log(sortedArr); // Output: [1, 2, 3, 4, 5]\n```" },
        // { type: "user", message: "Write javascript code for sorting" },
        // { type: "ai", message: "Sure, here's an example JavaScript code for sorting an array of elements in ascending order:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Sort the array in ascending order\narr.sort((a, b) => a - b);\n\nconsole.log(arr); // Output: [1, 2, 3, 4, 5]\n```\nAnd here's an example code for sorting an array of elements in descending order:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Sort the array in descending order\narr.sort((a, b) => b - a);\n\nconsole.log(arr); // Output: [3, 2, 1, 4, 5]\n```\nBoth of the above examples use the `sort()` method of arrays, which takes a comparison function as an argument to determine the order of the sorting. In the first example, we use the comparison function `a - b` to sort the array in ascending order, and in the second example, we use the comparison function `b - a` to sort the array in descending order.\n\nYou can also use the `slice()` method to create a new array with the elements in a specific range and then sort that array separately. Here's an example:\n```javascript\nconst arr = [4, 2, 5, 1, 3];\n\n// Create a new array with elements from index 1 to end\nconst sortedArr = arr.slice(1).sort((a, b) => a - b);\n\nconsole.log(sortedArr); // Output: [1, 2, 3, 4, 5]\n```" },
        // { type: "user", message: "Write javascript code for sorting" },
      ]
    }
  },
  methods: {
    sendPromtMessage() {
      var promt = this.promt
      this.promt = ""
      this.messages.splice(0, 0, { type: "user", timestamp: (new Date()), message: promt })
      this.showWaitMessage = true
      this.showErrorMessage = false
      axios({
        method: "post",
        url: '/predict', 
        timeout: 1000 * 300,
        data: {
          text: promt
        },
      })
      .then(function (response) {
        console.log(response);
        this.messages.splice(0, 0, { type: "ai", timestamp: (new Date()), message: response.text })
        this.showWaitMessage = false
      })
      .catch(function (error) {
        console.log(error);
        this.showErrorMessage = true
        this.errorMessage = error
      });
    }
  }
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
body, html {
  padding: 0px;
  margin: 0px;
}
.wrapper {
  width: 100%;
}

.content {
  width: 100%;
}
.content .promt {
  height: 200px;
  width: 100%;
}
.content .promt textarea {
  width: calc(100% - 20px);
  height: calc(100% - 30px);
}
.content .messages {
  height: calc(100vh - 220px);
  width: 100%;
  background: #eee;
  overflow-y: scroll;
}
.message {
  margin: 3px;
  padding: 6px;
  border-radius: 5px;
  white-space: pre-line;
}
.message-user {
  background: rgb(174, 243, 174);
}
.message-ai {
  background: rgb(255, 174, 255);
}
.message-wait {
  background: rgb(207, 206, 206);
}
.message-error {
  background: rgb(254, 179, 179);
}
</style>
