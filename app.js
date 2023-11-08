const app = Vue.createApp({
  data() {
    return {
      title: 'Login Form',
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.username,this.password)
    },
  }
});

app.mount('body');
