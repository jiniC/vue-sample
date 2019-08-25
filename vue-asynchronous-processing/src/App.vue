<template>
  <div>
    <button @click="loginUser">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="itme in items">{{ itme }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from './utils/handler.js';

export default {
  data() {
    return {
      itmes: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (response.data.id === 1) {
            console.log('사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {
                console.log(this);
                this.items = response.data;
              });
          }
        })
        .catch(error => console.log(error));
    },
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        // console.log(10);
        if (response.data.id === 1) {
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch(error) {
        handleException(error);
        console.log(error);
      }
    }
  },
}
</script>

<style>
</style>