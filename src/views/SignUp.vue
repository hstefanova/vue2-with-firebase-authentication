<template>
    <div class="sign-up">
        <h3>Let's create a new account !</h3>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="password" placeholder="Password" v-model="password"><br>
        <button @click="signUp">Sign Up</button><br>
        <span>Or go back to <router-link to="/login">login</router-link></span>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "signUp",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert('Error!' + err.message)
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .signUp { margin-top: 40px;}
    input { margin: 10px 0; width: 20%; padding: 15px; }
    button { padding: 15px; margin: 20px 0; width: 10%;  cursor: pointer; border: none; background: green; color: #fff; text-transform: uppercase; }
    p { margin-top: 40px; font-size: 13px; }
    p a { text-decoration: none; cursor: pointer; }
    span { font-size: 13px; }
</style>


