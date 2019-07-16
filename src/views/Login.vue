<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"/><br>
        <input type="password" v-model="password" placeholder="Password"/><br>
        <button @click="login">Connection</button>
        <p>You don't have an account? You can <router-link to="/sign-up">create one!</router-link> </p>
    </div>
</template>

<script>
    import firebase from 'firebase';
    
    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert("Oops!" + err.message)
                    }
                );
            }
           
        }
    }
</script>

<style scoped>
    .login { margin-top: 40px;}
    input { margin: 10px 0; width: 20%; padding: 15px; }
    button { padding: 15px; margin-top: 20px; min-width: 100px;  cursor: pointer; border: none; background: green; color: #fff; text-transform: uppercase; }
    button a { text-decoration: none;color: inherit}
    p { margin-top: 40px; font-size: 13px; }
    p a { cursor: pointer; }
</style>


